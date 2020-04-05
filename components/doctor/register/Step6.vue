<template>
  <div class="step-container">
    <div class="step-welcome-text">« به خانواده رِسا خوش‌آمدید »</div>
    <div class="text-xs-center mb-3">
      <v-icon size="48" color="green">la-check-circle</v-icon>
    </div>
    <div class="step-register-complete-text">
      ثبت‌نام اولیه شما با موفقیت انجام شد.
      <br />
      <!-- <span class="highlight">
        اطلاعات کاربری
      </span>-->
      همکاران ما در اولین فرصت با شما تماس خواهند گرفت
    </div>

    <div class="step-warning-container">
      <div class="step-warning-text">توجه!</div>
      <div class="step-warning-description">
        <span>
          همکار گرامی, پس از عضویت در رسا مراجعین شما و پشتیبانی رسا تنها از طریق شماره تماس
          <strong>02174471000</strong> با شما تماس خواهند گرفت.
        </span>
        <br />
        <span>خواهشمند است همین الان این شماره را در گوشی خود ذخیره نمایید تا متوجه تماس پشتیبانی رسا و مراجعین خود بشوید.</span>
      </div>
      <div class="step-warning-phone-numbers">
        <div class="phone-number">۰۲۱-۷۴۴۷۱۰۰۰</div>
      </div>
      <!-- <div class="step-warning-qr-image">
        <img src="./qr.png" alt="qr image" />
      </div>-->
    </div>

    <div class="step-actions">
      <v-btn outline round color="primary" href="tel:02174471200">ارتباط با پشتیبانی پزشکان</v-btn>
      <!-- <router-link to="/login-doctor" class="login-button"></router-link> -->
      <!-- <div class="download-button">دریافت اپلیکیشن</div>  -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctor: {}
    };
  },
  created() {
    this.doctor = { ...this.$store.state.doctor.info };
    this.$store.commit("doctor/clear_doctor_info");
  }
};
</script>

<style lang="scss" scoped>
.highlight {
  color: $bright-sky-blue;
}

.step-welcome-text {
  color: $dark-blue-grey;
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.step-register-complete-text {
  margin-bottom: 30px;
}

.step-warning-container {
  padding: 20px;
  border: solid 2.5px #f5f5f5;
  text-align: center;
  margin-bottom: 30px;
}

.step-warning-text {
  color: #d0225e;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.step-warning-description {
  line-height: 1.9;
}

.step-warning-phone-numbers {
  flex-wrap: wrap;
  margin-top: 10px;
  display: flex;
  justify-content: center;

  .phone-number {
    color: #0095e2;
    margin: 0 10px;
  }
}

.step-warning-qr-image {
  margin-top: 20px;
  img {
    width: 150px;
  }
}

.step-actions {
  display: flex;
  justify-content: center !important;
}

.login-button {
  text-decoration: none;
  cursor: pointer;
  margin: 0 20px;
  width: 173px;
  height: 37px;
  line-height: 33px;
  text-align: center;
  border-radius: 18.5px;
  background-color: white;
  color: $bright-sky-blue;
  border: solid 2px $bright-sky-blue;
}

.download-button {
  cursor: pointer;
  width: 173px;
  height: 37px;
  line-height: 37px;
  color: $bronze;
  text-align: center;
  border-radius: 18.5px;
  background-color: $light-gold;
}
</style>
