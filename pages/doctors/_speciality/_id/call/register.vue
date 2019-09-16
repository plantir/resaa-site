<style lang="scss" scoped>
h1 {
  text-align: center;
  color: #7e7e7e;
  font-weight: 500;
  margin-bottom: 40px;
}
.register-container {
  max-width: 480px;
  margin: 0 auto;
}
.form-wrapper {
  display: flex;
  label {
    margin-top: 18px;
    margin-left: 16px;
    text-align: center;
    color: #7e7e7e;
    font-weight: 500;
  }
  .v-text-field {
  }
}
</style>

<template>
  <section id="step-register">
    <div class="card">
      <div class="register-container">
        <h1>برای تماس با پزشک لازم است شماره موبایل خود را وارد کنید.</h1>
        <div class="form-wrapper">
          <label>شماره موبایل :</label>
          <v-text-field
            outline
            single-line
            v-model="phone"
            height="36"
            name="name"
            label="۰۹۱۲۱۲۳۴۵۶۷"
            @change="onSubmit"
          ></v-text-field>
          <recaptcha
            data-size="invisible"
            @error="onError"
            @success="onSuccess"
            @expired="onExpired"
          />
        </div>
      </div>
    </div>
    <div class="card">
      <div>
        شماره موبایل شما نزد رسا امانت است و برای برقراری ارتباط با پزشک استفاده می شود.
        پزشک شماره تماس شما را نخواهد دید و هویت شما کاملا محرمانه می ماند.
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      phone: null
    };
  },
  async mounted() {
    // const token = await this.$recaptcha.getResponse();
    // console.log(token);
  },
  methods: {
    onError(error) {
      console.log("Error happened:", error);
    },
    async onSubmit() {
      try {
        const token = await this.$recaptcha.getResponse();
        console.log("ReCaptcha token:", token);
      } catch (error) {
        console.log("Login error:", error);
      }
    },
    onSuccess(token) {
      console.log("Succeeded:", token);
    },
    onExpired() {
      console.log("Expired");
    }
  }
};
</script>