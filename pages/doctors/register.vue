<template>
  <v-container>
    <section id="register-doctor">
      <no-ssr>
        <div class="register-doctor-container">
          <div class="section-title">ثبت‌نام پزشک</div>
          <step-indicator :numberOfSteps="4" :currentStep="currentStep" />
          <div>
            <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
            <step1 @goNextStep="goNextStep" v-model="doctor" v-if="currentStep === 1" />
            <step2
              @goNextStep="goNextStep"
              @goPrevStep="goPrevStep"
              v-model="doctor"
              v-else-if="currentStep === 2"
            />
            <!-- <step3 v-model="doctor" v-else-if="currentStep === 3" /> -->
            <step4
              @goNextStep="goNextStep"
              @goPrevStep="goPrevStep"
              v-model="doctor"
              v-else-if="currentStep === 3"
            />
            <!-- <step5 v-model="doctor" v-else-if="currentStep === 5" /> -->
            <step6 v-model="doctor" v-else-if="currentStep === 4" />
            <div class="recaptcha" v-if="currentStep == 3">
              <vue-recaptcha
                ref="invisibleRecaptcha"
                @verify="onVerify"
                size="invisible"
                :sitekey="sitekey"
              ></vue-recaptcha>
            </div>
            <!-- </form> -->
            <!-- <div class="step-actions">
          <div>
            <div
              v-if="currentStep !== 1 && currentStep !== 4"
              class="step-prev-button"
              @click="goPrevStep"
            >
              <i class="fa fa-angle-right"></i>
              <div class="text">قبلی</div>
            </div>
          </div>
          <div>
            <div
              class="step-next-button"
              :disabled="form_disabled"
              v-show="currentStep !== 4"
              @click="goNextStep"
            >
              <div
                v-if="currentStep < 3 "
                class="text"
              >بعدی</div>
              <div
                v-else
                class="text"
              > تایید و ثبت نهایی </div>
              <i class="fa fa-angle-left"></i>
            </div>
            <vue-recaptcha
              v-if="currentStep == 3"
              ref="invisibleRecaptcha"
              @verify="onVerify"
              size="invisible"
              :sitekey="sitekey"
            >
            </vue-recaptcha>
          </div>
            </div>-->
          </div>
        </div>
      </no-ssr>
    </section>
  </v-container>
</template>

<script>
import StepIndicator from "~/components/doctor/register/StepIndicator";
import Step1 from "~/components/doctor/register/Step1";
import Step2 from "~/components/doctor/register/Step2";
import Step3 from "~/components/doctor/register/Step3";
import Step4 from "~/components/doctor/register/Step4";
import Step5 from "~/components/doctor/register/Step5";
import Step6 from "~/components/doctor/register/Step6";
// import VueRecaptcha from "vue-recaptcha";
export default {
  head() {
    return {
      title: "چرا باید پزشکان عضو سامانه رسا شوند؟",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "با استفاده از رسا تماس های غیر ضروری خود از سمت بیماران را حذف کنید و مکالمات غیر مربوط به روند درمانی را کاهش رایگان ثبت‌نام کنید و با دسترسی به پزشکان معرفی‌شده در وب‌سایت رسا، تماس مستقیم با بهترین پزشکان متخصص را با صرفه‌جویی در وقت و هزینه خود، تجربه پزشکان گرامی، شما می‌توانید با مطالعه خدماتی که رسا به پزشکان می‌دهد، عضو رسا شده و به راحتی تماس‌های دریافتی خود را مدیریت کنید"
        },
        {
          hid: "canonical",
          property: "canonical",
          content: `${process.env.SITE_URL}${this.$route.path}`
        }
      ]
    };
  },
  components: {
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    StepIndicator
    // VueRecaptcha
  },
  data() {
    return {
      currentStep: 1,
      ajaxLoading: false,
      form_errors: {},
      form_disabled: true
    };
  },
  beforeCreate() {
    this.$store.commit("doctor/initialize_doctor_info");
  },
  created() {
    this.currentStep = +this.$route.query.step || 1;
    if (this.$route.query.subscriptionPlan) {
      this.$store.commit(
        "doctor_subscriptionPlan",
        this.$route.query.subscriptionPlan
      );
    }
  },
  methods: {
    onVerify: function(response) {
      this.doctor.recaptchaResponse = response;
      this.finish_register();
    },
    resetRecaptcha() {
      this.$refs.invisibleRecaptcha.reset(); // Direct call reset method
    },
    onRegister() {
      this.$refs.invisibleRecaptcha.execute();
    },
    async goNextStep() {
      if (this.currentStep == 3) {
        this.ajaxLoading = true;
        return this.$refs.invisibleRecaptcha.execute();
      }
      this.currentStep = this.currentStep + 1;
      this.$router.push({
        name: this.$router.name,
        query: {
          subscriptionPlan: this.$route.query.subscriptionPlan,
          step: this.currentStep
        }
      });
      this.$store.commit("doctor/save_doctor_info");
    },
    goPrevStep() {
      this.currentStep = this.currentStep - 1;
      this.$router.push({
        name: this.$router.name,
        query: {
          subscriptionPlan: this.$route.query.subscriptionPlan,
          step: this.currentStep
        }
      });
    },
    finish_register() {
      this.$axios
        .post("/api/Doctors/Registration", this.doctor)
        .then(Response => {
          if (Response.body.status == "OK") {
            this.currentStep = this.currentStep + 1;
            this.$router.push({
              name: this.$router.name,
              query: {
                subscriptionPlan: this.$route.query.subscriptionPlan,
                step: this.currentStep
              }
            });
            this.$store.commit("save_doctor_info");
          }
        })
        .catch(() => {
          this.resetRecaptcha();
        })
        .then(() => {
          this.ajaxLoading = false;
        });
    }
  },
  computed: {
    doctor() {
      return this.$store.state.doctor.info;
    },
    sitekey() {
      return this.$store.state.sitekey;
    }
  }
};
</script>

<style lang="scss">
#register-doctor {
  .register-doctor-container {
    background-color: white;
    padding: 30px;
    border-radius: 10px;

    .step-container {
      text-align: center;
      direction: rtl;
      margin-bottom: 50px;
    }

    .step-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @include respond-to(md) {
        flex-direction: column-reverse;
        justify-content: center;
        div + div {
          margin-bottom: 8px;
        }
      }
    }
    .error {
      color: red;
      padding-right: 32px;
      margin: 8px 0;
      &:before {
        content: "*";
      }
    }
    .step-prev-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 166px;
      padding: 10px;
      height: 46px;
      border-radius: 23.3px;
      color: #c5c9d5;
      border: solid 2px #c5c9d5;

      .fa {
        position: absolute;
        right: 25px;
        font-size: 2rem;
        margin-left: 40px;
      }
    }

    .step-next-button {
      cursor: pointer;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      position: relative;
      width: 185px;
      height: 46px;
      border-radius: 23.3px;
      background-color: $bright-sky-blue;
      &[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }
      .fa {
        position: absolute;
        left: 25px;
        font-size: 2rem;
        margin-right: 40px;
      }
    }

    .section-title {
      text-align: center;
      color: $bright-sky-blue;
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 30px;
    }

    .step-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .step-prev-button {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 185px;
      padding: 10px;
      height: 46px;
      border-radius: 23.3px;
      color: #c5c9d5;
      border: solid 2px #c5c9d5;

      .fa {
        position: absolute;
        right: 25px;
        font-size: 2rem;
        margin-left: 40px;
      }
    }

    .step-next-button {
      cursor: pointer;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      position: relative;
      width: 185px;
      height: 46px;
      border-radius: 23.3px;
      background-color: $bright-sky-blue;

      .fa {
        position: absolute;
        left: 25px;
        font-size: 2rem;
        margin-right: 40px;
      }
    }
    .form-input {
      margin-bottom: 28px;
      position: relative;
      .v-input__control {
        min-height: 38px;
      }
      .v-input__slot {
        box-shadow: none;
        border-radius: 26px;
        background-color: #f5f5f5;
      }
    }
    input.is-invalid,
    select.is-invalid {
      box-shadow: 0 0 8px -1px red;
    }

    .invalid-feedback {
      margin-top: 8px;
      text-align: right;
      margin-right: 12px;
      color: red;
      position: absolute;
      top: 100%;
    }
  }
}
</style>
