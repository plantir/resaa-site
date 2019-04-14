
<style lang="scss" scoped>
.register-overlay {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  background-color: #000000;
  z-index: 1;
}

.register-container {
  display: flex;
  justify-content: center;
  vertical-align: center;
}

/*-------------------------------Step1:Register-------------------------------*/

.register-message {
  position: fixed;
  z-index: 2;
  width: 400px;
  height: 170px;
  background-color: white;
  direction: rtl;
  border-radius: 10px;
  top: 30%;
  padding: 15px 30px;
}

#entered-registration-phone-number {
  display: inline;
  color: $tealish;
}

.register-message-text {
  color: #44436c;
  line-height: 25px;
}

.register-code-input {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 600px;
  background-color: #f5f5f5;
  border-radius: 2.5rem;
  font-size: 1.2rem;
  text-align: right;
  direction: rtl;
  margin: 10px 0;

  input {
    padding-right: 15px;
    border: none;
    background: none;
    max-width: 400px;
    float: right;

    &::placeholder {
      color: #9aa0b7;
      font-size: 1.2rem;
    }
  }
}

.register-code-send {
  background-color: #2fc8dd;
  cursor: pointer;
  width: 100px;
  height: 35px;
  border-radius: 18.5px;
  text-align: center;
  line-height: 37.5px;
  color: white;
  border: none;
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.register-code-resend {
  cursor: pointer;

  a {
    color: #2fc8dd;
    text-decoration: none;
    float: right;
  }
}

/*-------------------------------Step2:captcha-------------------------------*/

.register-captcha {
  display: block;
  position: fixed;
  z-index: 2;
  width: 400px;
  height: 170px;
  background-color: white;
  direction: rtl;
  border-radius: 10px;
  top: 30%;
  padding: 15px 30px;
}

.register-captcha-message {
  color: #44436c;
}

.g-recaptcha {
  height: 100px;
}

.register-captcha-element {
  border: 1px solid #888888;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px 0;
  height: 100px;
  text-align: center;
}

/*-------------------------------Step3:Success-------------------------------*/

.register-success {
  display: flex;
  position: fixed;
  z-index: 2;
  width: 400px;
  height: 170px;
  background-color: white;
  direction: rtl;
  border-radius: 10px;
  top: 30%;
  padding: 15px 30px 20px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #44436c;

  i {
    color: $tealish;
  }
}

.register-success-enter-button {
  display: block;
  background-color: $tealish;
  cursor: pointer;
  width: 200px;
  border-radius: 18.5px;
  text-align: center;
  line-height: 35px;
  color: white;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
}

/*-------------------------------Step4:Fail----------------------------------*/

.register-fail {
  display: flex;
  position: fixed;
  z-index: 2;
  width: 400px;
  height: 170px;
  background-color: white;
  direction: rtl;
  border-radius: 10px;
  top: 30%;
  padding: 15px 30px 20px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #44436c;

  i {
    color: #d0225e;
  }
}

.register-fail-message {
}

.register-fail-retry-button {
  background-color: white;
  border: 2px solid #2fc8dd;
  color: #2fc8dd;
  cursor: pointer;
  width: 200px;
  border-radius: 18.5px;
  text-align: center;
  line-height: 30px;
}

@media only screen and (max-width: 500px) {
  .register-message,
  .register-captcha {
    width: 80%;
    height: auto;
    padding: 10px 15px;
  }

  .register-success,
  .register-fail {
    width: 80%;
    height: auto;
  }

  .register-success-message,
  .register-fail-message {
    margin: 10px 0;
  }
}

@media only screen and (max-width: 400px) {
  .register-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .register-code-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  #register-code {
    height: 35px;
    width: 100%;
    padding: 0;
    text-align: center;

    &::placeholder {
      text-align: center;
    }
  }

  .register-code-send {
    width: 100%;
  }

  .register-success-enter-button,
  .register-fail-retry-button {
    width: 100%;
  }
}
</style>

<template>
  <div class="register-container">
    <div class="register-message" v-if="$parent.currentStep === 1">
      <div class="register-message-text">
        کد تایید به شماره همراه
        <div id="entered-registration-phone-number">{{ $parent.user.phoneNumber }}</div>پیامک شد.
        <br>کد را در کادر زیر وارد نمایید:
      </div>
      <div class="register-code-input">
        <input id="register-code" v-model="activationKey" placeholder="کد تأیید">
        <button :disabled="!activationKey" class="register-code-send" @click="verifySMSCode">ثبت کد</button>
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
    </div>
    <div class="register-captcha" v-if="$parent.currentStep === 2">
      <div class="register-captcha-message">روی کادر پایین کلیک کنید</div>
      <div
        @click="acceptCaptcha"
        class="g-recaptcha"
        data-sitekey="6Ldum2AUAAAAALQrnrey6kthZixJIfe1wQboLGwI"
      ></div>
    </div>
    <div class="register-success" v-if="$parent.currentStep === 3">
      <i class="fa fa-check-circle fa-4x"></i>
      <div class="register-success-message">تبریک! ثبت نام با موفقیت انجام شد</div>
      <router-link to="/patient-profile" class="register-success-enter-button">ورود به حساب کاربری</router-link>
    </div>
    <div class="register-fail" v-if="$parent.currentStep === 4">
      <i class="fa fa-times-circle fa-4x"></i>
      <div class="register-fail-message">کد وارد شده صحیح نیست.</div>
      <div class="register-fail-retry-button" @click="failRetryCode">تلاش مجدد</div>
    </div>
    <div class="register-overlay" @click="closeRegisterModal"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      captchaResponse: false,
      activationKey: "",
      SMSCodeVerified: false,
      resendSMSCode_timeout: 0
    };
  },
  created() {
    this.resendSMSCode_timeout = 120;
    let timeout = setInterval(() => {
      this.resendSMSCode_timeout -= 1;
      if (this.resendSMSCode_timeout <= 0) {
        clearInterval(timeout);
        this.resendSMSCode_timeout = 0;
      }
    }, 1000);
  },
  methods: {
    closeRegisterModal: function() {
      this.$parent.closeRegisterModal();
      this.$parent.currentStep = 0;
    },

    verifySMSCode() {
      this.$axios
        .patch(`Patients/Registration/${this.registrationToken}`, {
          activationKey: this.activationKey
        })
        .then(response => {
          if (response.data.status === "OK") {
            this.$parent.currentStep = 3;
          } else {
            this.$parent.currentStep = 4;
          }
        });
    },
    resendSMSCode: function() {
      this.$axios
        .post(
          `Patients/Registration/${this.registrationToken}/ResendActivationKey`
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
        });
    },
    failRetryCode: function() {
      this.$parent.currentStep = 1;
    }
  },
  computed: {
    registrationToken() {
      return this.$store.state.registrationToken;
    }
  }
};
</script>
