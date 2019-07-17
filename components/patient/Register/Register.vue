
<style lang="scss" scoped>
.register-section-patients-container {
  background-image: linear-gradient(240deg, #2ede8d, #0cc6ec);
  box-shadow: inset 0 0 12.5px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: 100%;
  min-height: 400px;
  padding: 60px;
  text-align: center;
}

.register-title {
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 2.375rem;
  text-shadow: 0 1px 5px rgba(12, 108, 124, 0.35);
}

.register-description {
  margin-top: 10px;
  direction: rtl;
  color: white;
  font-weight: normal;
  text-align: center;
  text-shadow: 0 1px 5px rgba(12, 108, 124, 0.35);
}

.register-description-2 {
  margin: 40px auto 0;
  max-width: 400px;
  line-height: 30px;
  direction: rtl;
  color: white;
  font-weight: normal;
  text-align: center;
  text-shadow: 0 1px 5px rgba(12, 108, 124, 0.35);
}

.register-number-input {
  padding: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 600px;
  background-color: #f5f5f5;
  border-radius: 26px;
  font-size: 1rem;
  text-align: right;
  direction: rtl;
  margin: 20px auto 16px;

  input {
    padding-right: 15px;
    border: none;
    background: none;
    width: 100%;

    &::placeholder {
      color: #9aa0b7;
      font-size: 1rem;
    }
  }
}

.register-btn {
  color: #35d6c1;
}

.register-description-3 {
  margin: 10px auto 0;
  max-width: 500px;
  line-height: 30px;
  direction: rtl;
  color: white;
  font-weight: normal;
  text-align: center;
  text-shadow: 0 1px 5px rgba(12, 108, 124, 0.35);

  b {
    font-weight: 700;
    display: inline-block;
  }
}

@media only screen and (max-width: 500px) {
  .register-description-2,
  .register-description-3 {
    margin-top: 30px;
  }
}

@media only screen and (max-width: 400px) {
  .register-section-patients-container {
    padding: 50px 30px;
  }

  .register-number-input {
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 26px;

    input {
      height: 37.5px;
      text-align: center;
      padding: 0 5px;
    }
  }
}
.error-message {
  font-weight: bold;
  color: #fff;
}
</style>

<template>
  <div class="register-section-patients-container" id="register">
    <div class="register-title">ثبت نام رایگان</div>
    <!-- <div class="register-description">
      اولین تماس را مهمان رِسا باشید
      <v-tooltip bottom>
        <template #activator="data">
          <i title class="fa fa-exclamation-circle"></i>
        </template>
        <span>به درخواست خود پزشکان، بعضی از آنها از این قاعده مستثنا می باشند</span>
      </v-tooltip>
    </div>-->
    <div class="register-description-2">
      شماره موبایل خود را وارد کنید تا علاوه بر دریافت لینک دانلود اپلیکیشن
      شماره کاربری و رمز عبور برای شما پیامک شود.
    </div>
    <div>
      <v-btn
        class="register-btn"
        id="freeRegister"
        round
        color="white"
        :to="{name:'patient-register'}"
      >ثبت نام</v-btn>
    </div>
    <span class="error-message" v-if="errorMessage">{{errorMessage}}</span>
    <span
      style="color:#fff;display:block;direction:rtl"
      v-if="user.phoneNumber && !validate_phone_number"
    >* شماره موبایل وارد شده صحیح نیست. لطفا شماره را با حروف انگلیسی، به صورت ۱۱ رقم به انضمام صفر اول شماره وارد کنید.</span>
    <div class="register-description-3">
      همچنین می توانید با ارسال پیامک به شماره
      <b>۱۰۰۰۷۴۴۷۱۱۱۱</b>
      <br />و یا از طریق برقراری تماس با شماره تلفن
      <b>۰۲۱-۷۴۴۷۱۱۱۱</b>
      در سامانه رِسا ثبت نام کنید.
    </div>
    <register-modal v-if="registerModal" />
  </div>
</template>

<script>
import RegisterModal from "@/components/patient/register-modal/register-modal";
import VueRecaptcha from "vue-recaptcha";
export default {
  components: {
    RegisterModal,
    VueRecaptcha
  },
  data() {
    return {
      mobile_regex: /^[0][9][0-3 | 9][0-9]{8,8}$/g,
      registerModal: false,
      user: { phoneNumber: "", recaptchaResponse: null },
      currentStep: 0,
      errorMessage: null,
      ajaxLoading: false
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
      let check_mobile = this.mobile_regex.exec(this.user.phoneNumber);
      if (!check_mobile) {
        return;
      }
      this.$refs.invisibleRecaptcha.execute();
    },
    register() {
      this.$axios
        .post("/api/Patients/Registration", this.user)
        .then(response => {
          this.$store.commit(
            "patient/register_token",
            response.data.result.registrationToken.value
          );
          this.registerModal = true;
          this.currentStep = 1;
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

    closeRegisterModal: function() {
      this.registerModal = false;
      this.currentStep = 0;
      this.user.phoneNumber = "";
      this.resetRecaptcha();
    }
  },
  computed: {
    sitekey() {
      return this.$store.state.sitekey;
    },
    validate_phone_number() {
      return this.mobile_regex.exec(this.user.phoneNumber);
    }
  }
};
</script>
