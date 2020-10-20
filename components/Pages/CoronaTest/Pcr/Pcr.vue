<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  @include media(md-and-up) {
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
.image {
  flex: 0 0 30%;
}
.text {
  text-align: center;
  h2 {
    margin-bottom: 20px;
  }
  p {
    color: #4a4a4a;
    max-width: 680px;
  }
}
</style>
<template>
  <section id="Pcr">
    <div class="wrapper">
      <div class="image">
        <v-img :src="'/img/corona-test/pcr.svg'" alt="چه کسانی باید تست PCR بدهند؟" />
      </div>
      <div class="text">
        <h2>چه کسانی باید تست PCR بدهند؟</h2>
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
