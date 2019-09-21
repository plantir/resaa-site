<style lang="scss" scoped>
section {
  @include media(sm) {
    border-radius: 36px;
    background: #fff;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    overflow: hidden;
  }
}
.item {
  &:first-child {
    padding-left: 24px;
  }
  &:nth-child(2) {
    padding: 0 12px;
  }
  &:nth-child(3) {
    padding-right: 24px;

    @include media(sm) {
      .v-card {
        padding-bottom: 40px !important;
      }
    }
  }
  @include media(sm) {
    padding: 0 !important;
  }
  .v-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 50px !important;
    @include media(sm) {
      border-radius: 0px !important;
      box-shadow: none;
      padding: 40px 20px 0 !important;
    }
  }
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 100px;
  }
}
.item-title {
  margin: 40px 0 !important;
  font-weight: 500;
}
.description {
  font-size: 14px;
  width: 320px;
  max-width: 100%;
  text-align: center;
  color: var(--grey-color);
}
</style>
<template>
  <section>
    <v-layout row wrap>
      <v-flex class="item" lg4>
        <v-card>
          <div class="icon">
            <img src="~/assets/img/doctor@2x.png" alt />
          </div>
          <div class="r-display-2 item-title">متخصصین ممتاز</div>
          <div
            class="description"
          >بهترین و زبده ترین پزشکان و روانشناسان ایران، رسا را برای ارائه خدمات تلفنی به مخاطبین خود برگزیده اند.</div>
        </v-card>
      </v-flex>
      <v-flex class="item" lg4>
        <v-card>
          <div class="icon">
            <img src="~/assets/img/privacy@2x.png" alt />
          </div>
          <div class="r-display-2 item-title">تماس ناشناس</div>
          <div
            class="description"
          >کلیه تماس ها به صورت ناشناس با پزشک برقرار می شود و مکالمات شما و پزشک کاملا محرمانه بوده و در سامانه رسا ضبط نمی گردد.</div>
        </v-card>
      </v-flex>
      <v-flex class="item" lg4>
        <v-card>
          <div class="icon">
            <img src="~/assets/img/saveTime@2x.png" alt />
          </div>
          <div class="r-display-2 item-title">تماس بدون معطلی</div>
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