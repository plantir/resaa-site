<style lang="scss" scoped>
.wrapper {
  background: #fff;
  border-radius: 16px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  display: flex;
  @include media(md-and-up) {
    padding: 20px 30px;
  }
}
.logo-wrapper {
  margin: 20px 0 20px;
  display: flex;
  justify-content: center;
  @include media(md-and-up) {
    margin: 20px 0 50px;
  }
  img {
    max-width: calc(50% - 10px);
    width: 120px;
    + img {
      margin-right: 20px;
      @include media(md-and-up) {
        margin-right: 40px;
      }
    }
  }
}
p {
  text-align: center;
  + p {
    margin-top: 10px;
  }
}
</style>
<template>
  <section id="Cooperation">
    <div class="wrapper">
      <p>همکاری سامانه رسا و آزمایشگاه میلاد</p>
      <div class="logo-wrapper">
        <img v-lazy="'/img/corona-test/resaa-logo.png'" alt />
        <img v-lazy="'/img/corona-test/milad-logo.png'" alt />
      </div>
      <p>آزمایشگاه میلاد با همکاری سامانه رسا در شرایط سخت همه گیری اقدام به نمونه گیری و انجام تست کرونا در منزل در تمامی نقاط تهران می کند. آزمایشگاه میلاد با بیش از ١٢ سال سابقه فعالیت و استفاده از تجهیزات پیشرفته و روش های نوین آزمایشگاهی و بهره گیری از نیروهای متخصص با برقراری سیستم مدیریت یکپارچه IMS توانایی پذیرش و جوابدهی آزمایشات را در حداقل زمان دارا می باشد، همچنین به منظور دقت و صحت ، بیشتر نتایج آزمایشات به صورت دوره ای تحت نظارت مرکز کنترل کیفیت LAB QUALITY FINAND مورد ارزیابی قرار می گیرد.</p>
      <p>متخصصین آزمایشگاه میلاد می توانند همه روزه در سراسر تهران نسبت به اخذ تست های کرونا با رعایت تمامی پروتکل های بهداشتی اقدام نمایند.</p>
      <p>شما می توانید پس از دریافت نتیجه ی تست با مشاوره پزشکی رایگان کرونا سامانه رسا بدون خروج از منزل برای درمان خود از پزشکان راهکار دریافت کنید.</p>
    </div>
  </section>
</template>
<script>
export default {};
</script>