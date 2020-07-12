<style lang="scss" scoped>
section {
  height: auto;
  @include media(md-and-up) {
    min-height: calc(100vh - 160px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  border-radius: 16px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  display: flex;
  width: 600px;
  max-width: 100%;
  color: #000;
  background: #fff;
  height: auto;
  margin-bottom: 40px;
  @include media(md-and-up) {
    padding: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-top: 10px;
  }
  p {
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
    line-height: 32px;
  }
  @include media(md-and-up) {
    padding: 20px 30px;
  }
}
.price-wrapper {
  width: 100%;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 42px;
    padding: 8px 0;
    border-bottom: 2px dashed #aaa;
    font-size: 16px;
    font-weight: 500;
    &:last-child {
      border-bottom: none;
    }
    span:first-child {
      &:after {
        content: ":";
      }
    }
    span:last-child {
      max-width: 200px;
      text-align: left;
    }
  }
}
</style>
<template>
  <section>
    <div class="wrapper" v-if="result">
      <div v-if="result.status == 'paid'">
        <v-icon color="green" size="150">la-check-circle</v-icon>
        <span class="title green--text">پرداخت موفق بود و درخواست شما ثبت شد</span>
        <p>نهایتا طی 2 ساعت آینده جهت هماهنگی برای نمونه گیری از طرف پشتیبانی رسا با شما تماس گرفته خواهد شد. جهت پیگیری سفارش خود در هر مرحله ای می توانید با ذکر شماره موبایل خود به پشتیبانی از وضعیت سفارش آگاه شوید</p>

        <div class="price-wrapper">
          <div class="item">
            <span>کد پیگیری</span>
            <span>{{result.trackingNumber | persianDigit}}</span>
          </div>
          <div class="item">
            <span>نام و نام خانوادگی</span>
            <span>{{result.name}}</span>
          </div>
          <div class="item">
            <span>کد ملی</span>
            <span>{{result.nationalCode | persianDigit}}</span>
          </div>
          <div class="item">
            <span>شماره تلفن همراه</span>
            <span>{{result.mobile | persianDigit}}</span>
          </div>
          <div class="item">
            <span>آدرس</span>
            <span>{{result.address}}</span>
          </div>
          <div class="item">
            <span>تست انتخاب شده</span>
            <span>{{result.charge_id | convertToTest}}</span>
          </div>
          <div class="item">
            <span>هزینه پرداخت شده</span>
            <span>{{result.amount | currency | persianDigit}} تومان</span>
          </div>
        </div>
        <span>
          <v-btn href="tel:02174471200" color="primary" round outline block>تماس با پشتیبانی رسا</v-btn>
        </span>
      </div>
      <div v-else>
        <v-icon color="red" size="150">la-times-circle</v-icon>
        <span class="title red--text">فرایند پرداخت با خطا روبرو شد.</span>
        <div class="price-wrapper">
          <div class="item">
            <span>کد پیگیری</span>
            <span>{{result.trackingNumber | persianDigit}}</span>
          </div>
          <div class="item">
            <span>نام و نام خانوادگی</span>
            <span>{{result.name}}</span>
          </div>
          <div class="item">
            <span>کد ملی</span>
            <span>{{result.nationalCode | persianDigit}}</span>
          </div>
          <div class="item">
            <span>شماره تلفن همراه</span>
            <span>{{result.mobile | persianDigit}}</span>
          </div>
          <div class="item">
            <span>آدرس</span>
            <span>{{result.address}}</span>
          </div>
          <div class="item">
            <span>تست انتخاب شده</span>
            <span>{{result.charge_id | convertToTest}}</span>
          </div>
          <div class="item">
            <span>هزینه پرداخت شده</span>
            <span>{{result.amount | currency | persianDigit}} تومان</span>
          </div>
        </div>
        <p>
          در صورتی که هزینه ای از حساب بانکی شما کسر شده باشد، طی ۲۴
          ساعت آینده بازگردانده می‌شود. لطفاً در صورت تکرار این مشکل با
          پشتیبانی رسا به شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل نمایید.
        </p>
        <span>
          <v-btn href="tel:02174471200" color="primary" round outline block>تماس با پشتیبانی رسا</v-btn>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "corona-test",
  data() {
    return {
      result: null
    };
  },
  filters: {
    convertToTest(value) {
      if (value == 36) {
        return "تست آنتی بادی";
      }
      if (value == 37) {
        return "تست PCR";
      }
      if (value == 38) {
        return "تست آنتی بادی و تست PCR";
      }
      return value;
    }
  },
  async mounted() {
    if (!this.$route.query.chargeRequestId) {
      this.$router.push("/corona-test");
    }
    let loader = this.$loader.show("#app");
    let coronaTest = this.$storage.getUniversal("cronaTest");
    try {
      this.result = await this.$axios.$post(
        process.env.EXTRA_API_URL + "/corona-test/callback",
        {
          request_id: coronaTest.id,
          chargeRequestId: this.$route.query.chargeRequestId
        }
      );
      // result.status = "paid";
    } catch (error) {}
    loader.hide();
  }
};
</script>