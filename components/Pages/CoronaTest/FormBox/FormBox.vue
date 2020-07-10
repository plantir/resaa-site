<style lang="scss" scoped>
.wrapper {
  background: #fff;
  border-radius: 16px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  display: flex;
  @include media(md-and-up) {
    padding: 20px 30px;
  }
  p {
    max-width: 500px;
    text-align: center;
    font-weight: 400;
    margin-top: 16px;
  }
}
.form-wrapper {
  width: 100%;
  @include media(md-and-up) {
    max-width: 580px;
  }
  margin-top: 36px;
}
.form-group {
  display: flex;
  flex-direction: column;
  @include media(md-and-up) {
    flex-direction: row;
  }

  > label {
    flex: 0 0 100%;
    color: #4a4a4a;
    padding: 0 12px 12px 0;
    @include media(md-and-up) {
      flex: 0 0 25%;
      padding: 6px;
    }
    &[required]:after {
      content: "*";
      margin-right: 4px;
      color: #e91e63;
    }
  }
  ::v-deep {
    .v-input--is-dirty.invalid .v-input__slot {
      border-color: #e91e63 !important;
    }
    .v-input {
      font-size: 13px;
      &.v-input--is-focused {
        .v-input__slot {
          @if variable-exists(primary-color) {
            border-color: $primary-color !important;
          } @else {
            border-color: var(--v-primary-base) !important;
          }
        }
      }

      .v-input__slot {
        min-height: 38px;
        border-width: 1px !important;
        border-color: #e2e5ec !important;
        align-items: center;
      }
      .v-input__prepend-inner {
        margin-top: 6px;
      }
      .v-input__append-inner {
        margin-top: 6px;
      }

      .v-label {
        top: 7px;
        font-size: 13px;
      }
      input {
        margin-top: 0;
      }
    }
    .v-input--selection-controls {
      margin-top: 0;
      padding-top: 0;
      .v-label {
        top: 0;
      }
    }
    .v-messages {
      min-height: 18px;
    }
    .v-text-field__suffix {
      background: #f5f5f5;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -12px;
      min-width: 40px;
      border-radius: 4px 0 0 4px;
    }
    .v-text-field--outlined fieldset {
      border-color: #e2e5ec !important;
    }
  }
}
.input-detail {
  text-align: center;
}
.reserve-btn {
  text-align: center;
  margin-top: 20px;
  .v-btn {
    width: 180px;
    background: linear-gradient(to right, #28db9a, #0ec7e5);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
  }
}
</style>
<template>
  <section id="FormBox">
    <div class="wrapper">
      <h3>فرم رزرو تست کرونا در منزل</h3>
      <p>برای انجام تست کرونا در منزل لازم است فرم زیر را پر کنید تا پشتیبانی رسا بلافاصله برای هماهنگی بیشتر با شما تماس بگیرد.</p>
      <div class="form-wrapper">
        <template v-if="!need_verify">
          <div class="form-group">
            <label required>انتخاب نوع تست</label>
            <v-select
              v-model="form.type"
              :items="testItems"
              :error-messages="errors.collect('type')"
              data-vv-as="نوع تست"
              v-validate="'required'"
              name="type"
              single-line
              outline
              placeholder="لطفا نوع تستی مورد نظر خود را انتخاب نمایید"
            ></v-select>
          </div>
          <div class="form-group">
            <label required>نام و نام خانوادگی</label>
            <v-text-field
              v-model="form.name"
              :error-messages="errors.collect('name')"
              data-vv-as="نام و نام خانوادگی"
              name="name"
              v-validate="'required'"
              single-line
              outline
              placeholder="لطفا نام و نام خانوادگی خود را وارد نمایید"
            ></v-text-field>
          </div>
          <div class="form-group">
            <label required>شماره تلفن همراه</label>
            <v-text-field
              v-model="form.mobile"
              :error-messages="errors.collect('mobile')"
              data-vv-as="شماره تلفن همراه"
              name="mobile"
              v-fix-digit
              v-validate="'required|mobile'"
              single-line
              outline
              placeholder="لطفا شماره تلفن همراه خود را وارد نمایید"
            ></v-text-field>
          </div>
          <div class="form-group">
            <label required>نشانی</label>
            <v-textarea
              v-model="form.address"
              :error-messages="errors.collect('address')"
              data-vv-as="نشانی"
              name="address"
              v-validate="'required'"
              single-line
              outline
              no-resize
              placeholder="لطفا نشانی کامل محل سکونت خود را وارد نمایید"
            ></v-textarea>
          </div>
          <div class="reserve-btn">
            <v-btn color="success" round @click="send">رزرو تست کرونا</v-btn>
          </div>
        </template>
        <template v-else>
          <div v-if="new_user">
            <v-alert type="info" :value="true" class="mb-3">
              یک پیامک حاوی کد تایید برای شماره {{ form.mobile }} ارسال شد.
              <div class="caption">لطفا کد ارسال شده را وارد نمایید</div>
            </v-alert>
            <div class="form-group">
              <label required>کد تایید</label>
              <v-text-field
                v-model="activationKey"
                :error-messages="errors.collect('activationKey')"
                data-vv-as="کد تایید"
                name="activationKey"
                v-validate="'required'"
                single-line
                outline
                placeholder="کد تایید را وارد نمایید"
                @keyup.enter="verifySMSCode"
              ></v-text-field>
            </div>
            <div class="reserve-btn">
              <v-btn color="success" round @click="verifySMSCode">ارسال و رزرو تست کرونا</v-btn>
            </div>
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
            </div>
          </div>
          <div v-else>
            <v-alert type="info" :value="true" class="mb-3">
              این شماره موبایل در سیستم رسا موجود میباشد لطفا با وارد کردن رمز عبور به حساب کاربری خود وارد شوید
              <br />در صورتیکه رمز عبور خود را ندارید عدد ۱ را به ۱۰۰۰۷۴۴۷۱۱۱۱
              پیامک کنید
            </v-alert>
            <div class="form-group">
              <label required>رمز عبور</label>
              <v-text-field
                v-model="password"
                :error-messages="errors.collect('password')"
                data-vv-as="رمز عبور"
                name="password"
                v-validate="'required'"
                single-line
                outline
                placeholder="لطفا رمز عبور خود را وارد نمایید"
              ></v-text-field>
            </div>
            <div class="reserve-btn">
              <v-btn color="success" round @click="login">ورود و رزرو تست کرونا</v-btn>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    user_id() {
      return this.$store.state.patient.user_id;
    }
  },
  data() {
    return {
      resendSMSCode_timeout: 0,
      registrationToken: null,
      need_verify: false,
      new_user: false,
      user: {},
      form: {},
      activationKey: null,
      password: null,
      testItems: [
        {
          text: "تست PCR",
          value: { chargeId: 36, doctorId: 6843 }
        },
        {
          text: "تست آنتی بادی",
          value: { chargeId: 37, doctorId: 6843 }
        },
        {
          text: "هر دو",
          value: { chargeId: 38, doctorId: 6843 }
        }
      ]
    };
  },
  async mounted() {},
  methods: {
    async send() {
      let valid = await this.$validator.validateAll();
      if (valid) {
        this.loading = this.$loader.show("#FormBox");
        if (this.user_id) {
          this.chargeRequest();
        } else {
          this.register({ phoneNumber: this.form.mobile });
        }
      }
    },
    async chargeRequest() {
      this.ajaxLoading = true;
      try {
        let { result } = await this.$axios.$get(
          `/Accounts/${this.user_id}/Profile`
        );
        this.user = result.profile;
        let loginOrigin = localStorage.getItem("referrer");
        let data = {
          denominationId: this.form.type.chargeId,
          callbackUrl: process.env.SITE_URL + "/corona-test/callback",
          phoneNumber: this.user.phoneNumber,
          loginOrigin
        };
        // this.$gtm.push({
        //   event: "PaymentAtempted",
        //   amount: this.selected.denomination.amount
        // });
        let response = await this.$axios.post("/Charge", data);
        let {
          address,
          submissionParameters: { token }
        } = response.data.result.electronicPaymentVoucher.gateway;
        let cronaTest = await this.$axios.$post(
          process.env.EXTRA_API_URL + "/corona-test",
          {
            charge_id: this.form.type.chargeId,
            doctor_id: this.form.type.doctorId,
            name: this.form.name,
            mobile: this.form.mobile,
            address: this.form.address,
            paymentRequestId:
              response.data.result.electronicPaymentVoucher.paymentRequestId,
            subscriberNumber:
              response.data.result.electronicPaymentVoucher.subscriberNumber,
            amount:
              response.data.result.electronicPaymentVoucher.chargeDenomination
                .amount,
            phoneNumber: this.user.phoneNumber
          }
        );
        console.log(cronaTest);
        // localStorage.setItem("cronaTest", JSON.stringify(cronaTest));
        this.$storage.setCookie("cronaTest", JSON.stringify(cronaTest));
        this.$storage.setUniversal("cronaTest", JSON.stringify(cronaTest));
        this.goPayment(address, token);
      } catch (error) {
        this.$toast.error().showSimple("خطایی رخ داده است");
      }
      this.loading.hide();
    },
    goPayment(action, token) {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = action;
      const input = document.createElement("input");
      input.value = token;
      input.name = "token";
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    },
    async register(user) {
      try {
        user.loginOrigin = localStorage.getItem("referrer");
        let res = await this.$axios.post("/Patients/Registration", user);
        this.registrationToken = res.data.result.registrationToken.value;
        this.new_user = true;
        this.need_verify = true;
      } catch (error) {
        if (error.response.data.code == 409) {
          this.new_user = false;
          this.need_verify = true;
        } else {
          this.$toast
            .error()
            .showSimple(
              "خطایی رخ داده است لطفا شماره موبایل خود را مجددا بررسی نمایید"
            );
        }
      }
      this.loading.hide();
    },
    async verifySMSCode() {
      try {
        let response = await this.$axios.patch(
          `/Patients/Registration/${this.registrationToken}`,
          {
            activationKey: this.activationKey
          }
        );
        if (response.data.status === "OK") {
          this.$toast.success().showSimple("ثبت نام با موفقیت انجام شد");
          this.$store.commit("patient/login", {
            access_token: response.data.result.token
          });
          this.$store.commit("patient/initialize_user");
          this.chargeRequest();
        } else {
          this.$toast.error().showSimple("کد وارد شده صحیح نمی باشد");
        }
      } catch (error) {}
    },
    async resendSMSCode() {
      try {
        let response = await this.$axios.post(
          `/Patients/Registration/${this.registrationToken}/ResendActivationKey`
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
        this.errorMessage =
          "ار ارسال اس ام اس قبلی شما هنوز ۲ دقیقه نگذشته است";
      }
    },
    async login() {
      let loading = this.$loader.show("#FormBox");
      let data = `username=${this.form.mobile}&password=${this.password}&grant_type=password`;
      try {
        let res = await this.$axios.post("/oauth2/token", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        });
        this.$store.commit("patient/login", res.data);
        this.$store.commit("patient/initialize_user");
        this.chargeRequest();
      } catch (error) {
        this.$toast.error().showSimple("نام کاربری یا رمز عبور اشتباه است");
      }
      loading.hide();
    }
  }
};
</script>