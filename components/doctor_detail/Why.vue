<style lang="scss" scoped>
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px !important;
}
.icon {
  img {
    height: 130px;
  }
}
.title {
  margin: 40px 0 !important;
}
.description {
  font-size: 16px;
  width: 320px;
  max-width: 100%;
  text-align: justify;
  color: var(--grey-color);
}
</style>
<template>
  <section>
    <v-layout row wrap>
      <v-flex lg4>
        <v-card class="item">
          <div class="icon">
            <img src="~/assets/img/doctor@2x.png" alt />
          </div>
          <div class="title">متخصصین ممتاز</div>
          <div
            class="description"
          >بهترین و زبده ترین پزشکان و روانشناسان ایران، رسا را برای ارائه خدمات تلفنی به مخاطبین خود برگزیده اند.</div>
        </v-card>
      </v-flex>
      <v-flex lg4 px-4>
        <v-card class="item">
          <div class="icon">
            <img src="~/assets/img/privacy@2x.png" alt />
          </div>
          <div class="title">تماس ناشناس</div>
          <div
            class="description"
          >کلیه تماس ها به صورت ناشناس با پزشک برقرار می شود و مکالمات شما و پزشک کاملا محرمانه بوده و در سامانه رسا ضبط نمی گردد.</div>
        </v-card>
      </v-flex>
      <v-flex lg4>
        <v-card class="item">
          <div class="icon">
            <img src="~/assets/img/saveTime@2x.png" alt />
          </div>
          <div class="title">تماس بدون معطلی</div>
          <div
            class="description"
          >برای تماس با پزشک نیازی به نوبت و انتظار در مطب نیست. با سامانه رسا همین حالا به موبایل پزشک وصل شوید.</div>
        </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {};
</script>