<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
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
  <section id="Pcr">
    <div class="wrapper">
      <div class="image">
        <img v-lazy="'/img/corona-test/Pcr.png'" alt />
      </div>
      <div class="text">
        <h3>چه کسانی باید تست PCR بدهند؟</h3>
        <p>این تست برای کسانی است که میخواهند بدانند همین حالا به ویروس کرونای جدید مبتلا هستند یا خیر.</p>
        <p>برای این آزمایش از مخاط بینی و گلوی شما نمونه برداری می شود و نمونه پس از انتقال به آزمایشگاه برای یافتن RNA ویروس بررسی می شود در صورت مشاهده ی بقایای ژنتیکی ویروس آزمایش مثبت اعلام می شود.</p>
        <p>با این تست نمی توانید بفهمید که آیا قبلا به ویروس کرونا مبتلا شده اید یا خیر لذا برای انجام این تست از روز اول بروز علائم تا نهایتا سومین هفته ی بیماری می توانید اقدام کنید. این تست به شما کمک می کند بدانید مبتلا و از آن مهم تر ناقل کرونا هستید یا نه و با نتیجه ی آن می توانید در مورد قرنطینه یا فاصله گذاری اجتماعی با خانواده و دوستان تصمیم بگیرید.</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>