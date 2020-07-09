<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  @include media(md-and-up) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.image {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  @include media(md-and-up) {
    height: auto;
    flex: 0 0 50%;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
.text {
  margin-top: 20px;
  flex: 0 0 50%;
  h1 {
    color: #212020;
    font-size: 30px;
    margin-bottom: 16px;
    @include media(md-and-up) {
      font-size: 38px;
      margin-bottom: 30px;
    }
  }
  p {
    text-align: justify;
    color: #717171;
    font-size: 14px;
    @include media(md-and-up) {
      max-width: 400px;
      font-size: 18px;
      margin-bottom: 40px;
    }
  }
  .button-wrapper {
    .v-btn {
      width: calc(100% - 16px);
      height: 40px;
      @include media(md-and-up) {
        width: 180px;
      }
      &.reserve-btn {
        background: linear-gradient(to right, #28db9a, #0ec7e5);
        box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
      }
    }
  }
}
</style>
<template>
  <section id="FirstFord">
    <div class="wrapper">
      <div class="text">
        <h1>تست ویروس کرونا در منزل</h1>
        <p>اگر ساکن تهران هستید همین امروز می توانید در منزل خود تست کرونا دهید. متخصصین آزمایشگاه میلاد برای تست آنتی بادی یا تست PCR در محل خودتان نمونه می گیرند و نتیجه را ظرف 24 ساعت به صورت آنلاین به شما اعلام می کنند.</p>
        <div class="button-wrapper">
          <v-btn class="reserve-btn" dark round depressed>رزرو تست کرونا</v-btn>
          <v-btn color="primary" outline round>تماس با پشتیبانی</v-btn>
        </div>
      </div>
      <div class="image">
        <img v-lazy="'/img/corona-test/top_img.png'" />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>