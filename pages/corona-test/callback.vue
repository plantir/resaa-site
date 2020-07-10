<style lang="scss" scoped>
section {
  height: auto;
  @include media(md-and-up) {
    height: calc(100vh - 240px);
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
</style>
<template>
  <section>
    <div class="wrapper">
      <div v-if="result.status == 'paid'">
        <v-icon color="green" size="150">la-check-circle</v-icon>
        <span class="title green--text">پرداخت موفق</span>
        <p>
          در صورت وجود هر گونه مشکل و یا سوال میتوانید با پشتیبانی رسا به
          شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل نمایید.
        </p>
        <span>
          <v-btn to="/" color="primary" round outline block>بازگشت به صفحه اصلی رسا</v-btn>
        </span>
      </div>
      <div v-else>
        <v-icon color="red" size="150">la-times-circle</v-icon>
        <span class="title red--text">فرایند پرداخت با خطا روبرو شد.</span>
        <p>
          در صورتی که هزینه ای از حساب بانکی شما کسر شده باشد، طی ۲۴
          ساعت آینده بازگردانده می‌شود. لطفاً در صورت تکرار این مشکل با
          پشتیبانی رسا به شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل نمایید.
        </p>
        <span>
          <v-btn to="/corona-test" color="primary" round outline block>بازگشت به صفحه تست کرونا</v-btn>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "corona-test",
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $storage,
    $axios
  }) {
    let coronaTest = $storage.getUniversal("cronaTest");
    let result = { test: "test" };
    try {
      result = await $axios.$post(
        process.env.EXTRA_API_URL + "/corona-test/callback",
        {
          request_id: coronaTest.id,
          chargeRequestId: query.chargeRequestId
        }
      );
      // result.status = "paid";
    } catch (error) {}

    return {
      result
    };
  },

  mounted() {}
};
</script>