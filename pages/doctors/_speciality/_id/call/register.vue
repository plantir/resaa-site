<style lang="scss">
#step-register {
  .register-container {
    max-width: 480px;
    margin: 0 auto;
    text-align: center;
  }
  .register-form {
    padding: 40px 0 10px;
    @include media(sm) {
      padding: 30px 60px;
    }
  }
  .form-wrapper {
    display: flex;
    @include media(sm) {
      flex-direction: column;
    }
    label:not(.v-label) {
      margin-top: 12px;
      margin-left: 16px;
      text-align: center;
      color: #7e7e7e;
      font-weight: 500;
      @include media(sm) {
        margin: 0 0 16px 0;
        font-size: 18px;
      }
    }
    .v-text-field {
      .v-input__slot {
        min-height: 46px;
      }
      .v-label {
        top: 12px;
      }
      input {
        margin-top: 8px;
      }
    }
  }
  .register-btn {
    min-width: 160px;
    min-height: 46px;
    font-size: 16px;
    background: linear-gradient(to left, #0ec7e6, #28db9a);
    font-weight: 500;
  }
  .input-detail {
    text-align: center;
    margin-top: 12px;
  }
  .error-message {
    min-width: 200px;
    max-width: 350px;
    padding: 6px;
    border: none;
    color: red;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    margin: 0 auto 15px;
    transition: box-shadow 0.5s;
  }
}
</style>

<template>
  <section id="step-register">
    <div class="card register-form">
      <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
      <div class="register-container">
        <div v-if="step == 1">
          <h1>برای تماس با پزشک لازم است شماره موبایل خود را وارد کنید.</h1>
          <div class="form-wrapper">
            <label>شماره موبایل :</label>
            <v-text-field
              outline
              single-line
              v-model="user.phoneNumber"
              name="phoneNumber"
              label="۰۹۱۲۱۲۳۴۵۶۷"
              v-validate="'required|mobile'"
              :error-messages="errors.collect('phoneNumber')"
              data-vv-as="شماره موبایل"
              @input="onInputChange"
              @keyup.enter="onRegister"
            ></v-text-field>
            <vue-recaptcha
              ref="invisibleRecaptcha"
              @verify="onVerify"
              size="invisible"
              :sitekey="sitekey"
            ></vue-recaptcha>
          </div>
          <v-btn @click="onRegister" class="register-btn" depressed dark round>
            <span>ادامه</span>
          </v-btn>
        </div>
        <div v-else>
          <div v-if="new_user">
            <h1>
              یک پیامک حاوی کد تایید برای شماره {{ user.phoneNumber }} ارسال شد.
              <div class="caption">لطفا کد ارسال شده را وارد نمایید</div>
            </h1>

            <div class="form-wrapper">
              <label>کد تایید :</label>
              <v-text-field
                outline
                single-line
                v-model="user.activationKey"
                name="activation"
                label="کد تایید"
                @keyup.enter="verifySMSCode"
              ></v-text-field>
            </div>
            <v-btn @click="verifySMSCode" class="register-btn" depressed dark round>
              <span>ارسال</span>
            </v-btn>
            <div class="input-detail">
              <div v-if="resendSMSCode_timeout == 0">
                <a @click="resendSMSCode">ارسال مجدد کد</a>
              </div>
              <div v-else class="register-code-resend">
                <a>
                  کد برای شما ارسال شد لطفا منتظر بمانید
                  {{ resendSMSCode_timeout }}
                  ثانیه
                </a>
              </div>
              <div v-if="errorMessage" class="error-message">
                <span>{{ errorMessage }}</span>
              </div>
            </div>
          </div>
          <div v-else>
            <h1>
              این شماره
              <span class="green--text">
                {{
                user.phoneNumber | persianDigit
                }}
              </span>
              در سیستم وجود دارد
              <div class="caption">
                در صورتیکه رمز عبور خود را ندارید عدد ۱ را به ۱۰۰۰۷۴۴۷۱۱۱۱
                پیامک کنید
              </div>
            </h1>

            <div class="form-wrapper">
              <label>رمز ورود :</label>
              <v-text-field
                outline
                single-line
                v-model="user.password"
                name="activation"
                label="رمز ورود"
                @keyup.enter="login"
              ></v-text-field>
            </div>
            <v-btn @click="login" class="register-btn" depressed dark round>
              <span>ورود</span>
            </v-btn>
            <div v-if="errorMessage" class="error-message">
              <span>{{ errorMessage }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card notify">
      <div>
        <img src="~assets/img/lamp@2x.png" alt />
        شماره موبایل شما نزد رسا امانت است و برای برقراری ارتباط با پزشک استفاده
        می شود. پزشک شماره تماس شما را نخواهد دید و هویت شما کاملا محرمانه می
        ماند.
      </div>
    </div>
  </section>
</template>

<script>
import jwtDecode from "jwt-decode";
export default {
  data() {
    return {
      ajaxLoading: false,
      errorMessage: null,
      step: 1,
      new_user: false,
      user: {
        phoneNumber: null
      },
      resendSMSCode_timeout: 0,
      mobile_regex: /^[0][9][0-3|9][0-9]{8,8}$/g
    };
  },
  watch: {
    $route(to, from) {
      if (from.name == "manage-uid-edit" && to.name == "manage-uid") {
        this.get_product();
      }
    }
  },
  beforeCreate() {
    if (process.client && localStorage.getItem("auth")) {
      this.$router.push("charge");
    }
  },
  methods: {
    onVerify: function(response) {
      this.ajaxLoading = true;
      this.user.recaptchaResponse = response;
      this.register();
    },
    resetRecaptcha() {
      this.$refs.invisibleRecaptcha.reset(); // Direct call reset method
    },
    onInputChange() {
      this.user.phoneNumber = this.user.phoneNumber.replace(/[۰-۹]/g, w => {
        return ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"].indexOf(w);
      });
    },
    async onRegister() {
      let valid = await this.$validator.validate();
      valid && this.register();
    },
    checkNumber() {
      this.error = null;
      let is_mobile = this.mobile_regex.exec(this.user.phoneNumber);
      if (is_mobile) {
        return;
      }
      this.error = "فرمت شماره موبایل اشتباه است";
    },
    async register() {
      try {
        this.user.loginOrigin = localStorage.getItem("referrer");
        let res = await this.$axios.post("/Patients/Registration", this.user);
        // this.user.registrationToken = res.data.result.registrationToken.value;
        this.new_user = true;
        this.step = 2;
      } catch (error) {
        if (error.response.data.code == 409) {
          this.new_user = false;
          this.step = 2;
        } else {
        }
      }
      this.ajaxLoading = false;
      this.resetRecaptcha();
    },
    async verifySMSCode() {
      try {
        let response = await this.$axios.patch(
          `/Patients/Registration/${this.user.registrationToken}`,
          {
            activationKey: this.user.activationKey
          }
        );
        if (response.data.status === "OK") {
          this.$toast.success().showSimple("ثبت نام با موفقیت انجام شد");
          this.$store.commit("patient/login", {
            access_token: response.data.result.token
          });
          this.$store.commit("patient/initialize_user");
          this.$router.push("charge");
        } else {
          this.errorMessage = "کد وارد شده صحیح نمی باشد";
        }
      } catch (error) {}
    },
    async resendSMSCode() {
      try {
        let response = await this.$axios.post(
          `/Patients/Registration/${this.user.registrationToken}/ResendActivationKey`
        );
        if (response.data.status === "OK") {
          this.resendSMSCode_timeout = 120;
          let timeout = setInterval(() => {
            this.resendSMSCode_timeout -= 1;
            if (this.resendSMSCode_timeout <= 0) {
              clearInterval(timeout);
              this.resendSMSCode_timeout = 0;
            }
          }, 1000);
        }
      } catch (error) {
        this.errorMessage = "خطایی رخ داده است لطفا بعدا امتحان کنید";
      }
    },
    async login() {
      this.ajaxLoading = true;
      let data = `username=${this.user.phoneNumber}&password=${this.user.password}&grant_type=password`;
      try {
        let res = await this.$axios.post("/oauth2/token", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        });
        let decoded_token = jwtDecode(res.data.access_token);
        let id =
          decoded_token[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
          ];
        try {
          let Response = await this.$axios.get(`/Accounts/${id}/Profile`, {
            headers: {
              Authorization: `Bearer ${res.data.access_token}`
            }
          });
          res.data.firstName = Response.data.result.profile.firstName;
          this.ajaxLoading = false;
          this.$store.commit("patient/login", res.data);
          this.$store.commit("patient/initialize_user");
          let return_url = this.$route.query.return_url;
          this.$router.push("charge");
        } catch (error) {}
      } catch (error) {
        this.$toast.error().showSimple("نام کاربری یا رمز عبور اشتباه است");
        this.erroMessage = "نام کاربری یا رمز عبور اشتباه است";
      }
      this.ajaxLoading = false;
    }
  },
  computed: {
    sitekey() {
      return this.$store.state.sitekey;
    }
  }
};
</script>
