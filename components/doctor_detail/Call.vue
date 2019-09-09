<style lang="scss" scoped>
.call-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 30px !important;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    @include media(sm) {
      text-align: center;
      height: auto;
    }
    &:first-child {
      flex: 0 0 70%;
      @include media(sm) {
        flex: 0 0 100%;
      }
    }
    &:last-child {
      flex: 0 0 30%;
      align-items: flex-end;
      @include media(sm) {
        flex: 0 0 100%;
        align-items: center;
      }
    }
  }
  @include media(sm) {
    padding: 30px 20px !important;
  }
}
.section-title {
  font-size: var(--display-1);
}

.price-title {
  font-size: var(--display-2);
}
.price {
  color: $secondary-color;
  font-size: 16px;
  @include media(sm) {
    display: block;
    font-size: 18px;
    margin-bottom: 16px;
  }
}
.description {
  color: var(--grey-color);
  font-size: 16px;
  display: flex;
  align-items: center;
  @include media(sm) {
    margin: 30px 0px;
  }
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
  padding: 0 26px;
  font-size: 16px;
  svg {
    margin-right: 26px;
    path {
      fill: #fff;
    }
  }
}
</style>

<template>
  <section>
    <v-card class="call-wrapper">
      <div>
        <div class="section-title">همین حالا با پزشک تماس بگیرید</div>
        <div
          class="description"
        >پزشک در حال حاضر در دسترس می باشد. تماس شما بلافاصله با موبایل پزشک برقرار می شود تا بتوانید در کوتاه ترین زمان پاسخ سوالات خود را بگیرید.</div>
      </div>
      <div>
        <div class>
          <span class="price-title mb-0">هزینه هر دقیقه گفتگو با پزشک :</span>
          <span class="price">{{3000 | currency | persianDigit}} تومان</span>
        </div>
        <div class>
          <a class="call-doctor">
            <span>شروع مکالمه با پزشک</span>
            <phone />
          </a>
        </div>
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