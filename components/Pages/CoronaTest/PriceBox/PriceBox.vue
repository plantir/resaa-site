<style lang="scss" scoped>
#PriceBox {
  height: 100%;
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
          <span>۲۲۰ هزار تومان</span>
        </div>
        <div class="item">
          <span>تست PCR</span>
          <span>۵۵۰ هزار تومان</span>
        </div>
        <div class="item">
          <span>تست آنتی بادی + PCR</span>
          <span>۶۵۰ هزار تومان</span>
        </div>
      </div>
      <p>برای اطلاعات بیشتر و ثبت تلفنی درخواست تست کرونا می توانید با پشتیبانی رسا صحبت کنید</p>
      <v-spacer></v-spacer>
      <v-btn href="tel:02174471300" color="primary" round outline>تماس با پشتیبانی</v-btn>
    </div>
  </section>
</template>
<script>
export default {};
</script>