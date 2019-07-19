<template>
  <v-container>
    <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
    <div v-if="step == 1" class="login-patient-container">
      <div class="section-title">ثبت نام</div>
      <div class="section-description">جهت دسترسی به خدمات برخط سامانه رِسا، لطفا ثبت نام کنید</div>
      <div class="patient-username">
        <i class="fa fa-user"></i>
        <input
          v-model="user.phoneNumber"
          @input="checkNumber"
          placeholder="شماره موبایل"
          @keyup.enter="onRegister"
        />
      </div>
      <vue-recaptcha
        ref="invisibleRecaptcha"
        @verify="onVerify"
        size="invisible"
        :sitekey="sitekey"
      ></vue-recaptcha>
      <div v-if="error" class="error-message">{{error}}</div>
      <button
        :disabled="error ||  !user.phoneNumber"
        @click="onRegister"
        class="login-button"
      >ثبت نام</button>
      <div v-if="errorMessage" class="error-message">{{errorMessage}}</div>
      <!-- <div class="forgot-password">
        <a>یادآوری کلمه عبور</a>
      </div>-->
      <div class="sign-up">
        حساب کاربری دارید؟
        <router-link :to="{name:'patient-login'}" class="sign-up-link">وارد شوید</router-link>
      </div>
    </div>
    <div v-if="step == 2" class="login-patient-container">
      <div class="section-title">ثبت نام</div>
      <div class="section-description">جهت دسترسی به خدمات برخط سامانه رِسا، لطفا ثبت نام کنید</div>
      <div class="patient-username">
        <input v-model="activationKey" placeholder="کد تایید" @keyup.enter="verifySMSCode" />
      </div>
      <div v-if="resendSMSCode_timeout == 0" class="register-code-resend" @click="resendSMSCode">
        <a>ارسال مجدد کد</a>
      </div>
      <div v-else class="register-code-resend">
        <a>
          کد برای شما ارسال شد لطفا منتظر بمانید
          {{resendSMSCode_timeout}}
          ثانیه
        </a>
      </div>
      <button :disabled="!activationKey" @click="verifySMSCode" class="login-button">ثبت کد</button>
      <div v-if="errorMessage" class="error-message">{{errorMessage}}</div>
      <!-- <div class="forgot-password">
        <a>یادآوری کلمه عبور</a>
      </div>-->
      <div class="sign-up">
        حساب کاربری دارید؟
        <router-link :to="{name:'patient-login'}" class="sign-up-link">وارد شوید</router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "ثبت نام بیمار",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "ثبت نام بیمار"
        },
        {
          hid: "canonical",
          property: "canonical",
          content: `${process.env.SITE_URL}${this.$route.path}`
        }
      ]
    };
  },
  data() {
    return {
      user: {
        phoneNumber: null
      },
      step: 1,
      activationKey: null,
      error: null,
      resendSMSCode_timeout: 0,
      errorMessage: null,
      ajaxLoading: false,
      mobile_regex: /^[0][9][0-3|9][0-9]{8,8}$/g,
      subscribe_regex: /^[0-9]{5,5}$/g
    };
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
    onRegister() {
      this.$refs.invisibleRecaptcha.execute();
    },
    checkNumber() {
      this.error = null;
      let is_mobile = this.mobile_regex.exec(this.user.phoneNumber);
      if (is_mobile) {
        return;
      }
      this.error = "فرمت شماره موبایل اشتباه است";
    },
    register() {
      this.$axios
        .post("/api/Patients/Registration", this.user)
        .then(response => {
          this.$store.commit(
            "patient/register_token",
            response.data.result.registrationToken.value
          );
          this.step = 2;
        })
        .catch(err => {
          if (err.response.data.code == 409) {
            this.errorMessage = "این شماره موبایل در سیستم وجود دارد.";
          }
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
        })
        .then(() => {
          this.ajaxLoading = false;
          this.resetRecaptcha();
        });
    },
    verifySMSCode() {
      this.$axios
        .patch(`/api/Patients/Registration/${this.registrationToken}`, {
          activationKey: this.activationKey
        })
        .then(response => {
          if (response.data.status === "OK") {
            alert("ثبت نام با موفقیت انجام شد");
            this.$router.push({ name: "patient-login" });
          } else {
            this.errorMessage = "کد وارد شده صحیح نمی باشد";
          }
        });
    },
    resendSMSCode: function() {
      this.$axios
        .post(
          `/api/Patients/Registration/${this.registrationToken}/ResendActivationKey`
        )
        .then(response => {
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
        })
        .catch(() => {
          this.errorMessage = "خطایی رخ داده است لطفا بعدا امتحان کنید";
        });
    }
  },
  computed: {
    sitekey() {
      return this.$store.state.sitekey;
    },
    registrationToken() {
      return this.$store.state.patient.registrationToken;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-patient-container {
  background: white url("/img/wave.png") center bottom no-repeat;
  padding: 30px 30px 160px;
  border-radius: 10px;
}

.section-title {
  text-align: center;
  color: $tealish;
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.section-description {
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 30px;
  direction: rtl;
  line-height: 1.9;
}

.patient-username {
  min-width: 200px;
  max-width: 350px;
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 1.2rem;
  text-align: right;
  direction: rtl;
  margin: 0 auto 10px;
  padding: 10px;

  input {
    border: none;
    background: none;
    width: 90%;

    &::placeholder {
      color: #9aa0b7;
      font-size: 1.2rem;
    }
  }

  .fa {
    color: #c5c9d5;
    margin-left: 5px;
  }
}

.patient-password {
  min-width: 200px;
  max-width: 350px;
  background-color: #f5f5f5;
  border-radius: 2rem;
  font-size: 1.2rem;
  text-align: right;
  direction: rtl;
  margin: 0 auto 10px;
  padding: 10px;

  input {
    border: none;
    background: none;
    width: 90%;

    &::placeholder {
      color: #9aa0b7;
      font-size: 1.2rem;
    }
  }

  .fa {
    color: #c5c9d5;
    margin-left: 5px;
  }
}

.charge-captcha {
  margin: 15px auto;
  display: flex;
  justify-content: center;
}

.login-button {
  min-width: 200px;
  max-width: 350px;
  padding: 10px;
  border: none;
  border-radius: 2rem;
  background-color: $tealish;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 15px;
  transition: box-shadow 0.5s;
  display: block;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    box-shadow: 0 0 7px #8c8c8c;
    cursor: pointer;
  }
}
.error-message {
  min-width: 200px;
  max-width: 350px;
  padding: 10px;
  border: none;
  color: red;
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 15px;
  transition: box-shadow 0.5s;
}
.register-code-resend {
  text-align: center;
  margin: 1rem 0;
}
.forgot-password {
  text-align: center;
  margin-bottom: 10px;

  a {
    font-weight: 500;
    color: #0095e2;
    font-size: 1.2rem;
    transition: color 0.5s;

    &:hover,
    &:active,
    &:focus {
      color: $bright-sky-blue;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

.sign-up {
  text-align: center;
  direction: rtl;
  font-size: 1.2rem;
  color: #7e86a6;
}

.sign-up-link {
  font-weight: 500;
  color: #0095e2;
  font-size: 1.2rem;
  transition: color 0.5s;

  &:hover,
  &:active,
  &:focus {
    color: $bright-sky-blue;
    text-decoration: none;
    cursor: pointer;
  }
}

@media only screen and (min-width: 1600px) {
  .login-patient-container {
    background-size: contain;
  }
}
</style>
