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
  img {
    max-width: 100%;
  }
}
.text {
  text-align: center;
  h3 {
    color: #212121;
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 400;
  }
  p {
    font-size: 18px;
    color: #4a4a4a;
    max-width: 680px;
  }
}
</style>
<template>
  <section id="AntyBody">
    <div class="wrapper">
      <div class="text">
        <h3>چه کسانی باید تست آنتی بادی بدهند؟</h3>
        <p>این تست که به عنوان تست آزمایش خون ویروس کرونا نیز شناخته می شود متشکل از دو تست است.</p>
        <p>آزمایش COVID 19-IgM: وجود آنتی بادی از کلاس IgM در خون به این معنی است که فرد اخیرا با ویروس در تماس بوده و احتمالا ناقل ویروس می باشد و شاید علائم بیماری در او آشکار شود برای این فرد PCRتوصیه میشود.</p>
        <p>آزمایش COVID 19-IgG: وجود آنتی بادی از کلاس IgG در خون به این معنی است که فرد در گذشته با ویروس در تماس بوده و اگر IgG خون او منفی باشد احتمالا ناقل ویروس نمی باشد و بیمار نیز نیست و شاید تا حدودی نسبت به ویروسی که IgGخون را بالا بردهاست ایمن باشد.</p>
        <p>مثبت بودن همزمان IgMوIgGخون به این معنی است که فرد با ویروس در زمان نه چندان دور در تماس بوده و احتمالا ناقل بیماری می باشد برای این فرد آزمایش PCRتوصیه میشود.</p>
      </div>
      <div class="image">
        <img v-lazy="'/img/corona-test/AntyBody.png'" alt />
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>