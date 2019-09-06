<style lang="scss" scoped>
.call-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 60px 70px !important;
}
.mb-75 {
  margin-bottom: 75px !important;
}
.flex-70 {
  flex: 0 0 70%;
}
.flex-30 {
  flex: 0 0 30%;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.price {
  color: $secondary-color;
  font-size: 20px;
  margin-right: 16px;
}
.description {
  color: var(--grey-color);
  font-size: 16px;
  display: flex;
  align-items: center;
}
.call-doctor {
  background: linear-gradient(to right, #28db9a 0%, #0ec7e5 100%);
  box-shadow: 0 3px 3px rgba(#000000, 0.16);
  color: #fff;
  border-radius: 26px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-size: 16px;
  svg {
    margin-right: 8px;
    path {
      fill: #fff;
    }
  }
}
</style>

<template>
  <section>
    <v-card class="call-wrapper">
      <div class="title flex-70 mb-75">همین حالا با پزشک تماس بگیرید</div>
      <div class="flex-30 flex-end mb-75">
        <span class="title mb-0">هزینه هر دقیقه گفتگو با پزشک :</span>
        <span class="price">{{3000 | currency | persianDigit}} تومان</span>
      </div>
      <div
        class="description flex-70"
      >پزشک در حال حاضر در دسترس می باشد. تماس شما بلافاصله با موبایل پزشک برقرار می شود تا بتوانید در کوتاه ترین زمان پاسخ سوالات خود را بگیرید.</div>
      <div class="flex-30 flex-end">
        <a class="call-doctor">
          <span>شروع مکالمه با پزشک</span>
          <phone />
        </a>
      </div>
    </v-card>
  </section>
</template>

<script>
import phone from "~/assets/svg/phone.svg?inline";
export default {
  components: {
    phone
  }
};
</script>