<style lang="scss" scoped>
#PriceBox {
  // height: 100%;
  position: sticky;
  top: 80px;
}
.wrapper {
  background: #fff;
  border-radius: 16px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  display: flex;
  height: 100%;
  @include media(md-and-up) {
    padding: 20px 30px;
  }
}
p {
  text-align: center;
}
.price-wrapper {
  width: 100%;
  margin: 40px 70px;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    border-bottom: 2px dashed $primary-color;
    font-size: 16px;
    font-weight: 500;
    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
<template>
  <section id="PriceBox">
    <div class="wrapper">
      <h3>هزینه آزمایش ها:</h3>
      <div class="price-wrapper">
        <div class="item">
          <span>تست آنتی بادی</span>
          <span>۱۹۰ هزار تومان</span>
        </div>
        <div class="item">
          <span>تست PCR</span>
          <span>۵۹۰ هزار تومان</span>
        </div>
        <div class="item">
          <span>تست آنتی بادی + PCR</span>
          <span>۷۲۵ هزار تومان</span>
        </div>
      </div>
      <p>هزینه های ایاب و ذهاب به محل شما در مبالغ فوق محاسبه شده است.</p>
      <p
        class="mt-3"
      >شما عزیزان می توانید به جای تکمیل فرم و پرداخت آنلاین با تماس با پشتیبانی و کارت به کارت نیز برای تست کرونا درخواست ثبت کنید.</p>
      <v-btn href="tel:02174471300" color="primary" round outline>تماس با پشتیبانی</v-btn>
    </div>
  </section>
</template>
<script>
export default {};
</script>