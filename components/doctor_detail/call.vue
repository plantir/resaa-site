<style lang="scss" scoped>
.call-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 30px !important;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
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
  color: var(--grey-color);
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
  a {
    color: #fff;
  }
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
        <div class="section-title">
          <span v-if="doctor.currentlyAvailable">همین حالا با پزشک تماس بگیرید</span>
          <span v-else>از پزشک بخواهید با شما تماس بگیرد</span>
        </div>
        <div class="description">
          <span
            v-if="doctor.currentlyAvailable"
          >پزشک در حال حاضر در دسترس می باشد. تماس شما بلافاصله با موبایل پزشک برقرار می شود تا بتوانید در کوتاه ترین زمان پاسخ سوالات خود را بگیرید.</span>
          <span
            v-else
          >در حال حاضر پزشک در دسترس نیست. با ثبت درخواست تماس، پزشک در اولین ساعت پاسخگویی خود با شما تماس میگیرد. می توانید با بررسی زمان های پاسخگویی پزشک از اولین زمان پاسخگویی پزشک مطلع شوید.</span>
        </div>
      </div>
      <div>
        <div class>
          <span class="price-title mb-0">هزینه هر دقیقه گفتگو با پزشک :</span>
          <span class="price">{{costPerMinute | currency | persianDigit}} تومان</span>
        </div>
        <div class>
          <div class="call-doctor">
            <nuxt-link
              :to="`${doctor.subscriberNumber}/call/register`"
              v-if="doctor.currentlyAvailable"
            >شروع مکالمه با پزشک</nuxt-link>
            <nuxt-link :to="`${doctor.subscriberNumber}/call/register`" v-else>ثبت درخواست تماس</nuxt-link>
            <phone />
          </div>
        </div>
      </div>
    </v-card>
  </section>
</template>

<script>
import phone from "~/assets/svg/phone.svg?inline";
export default {
  props: {
    doctor: {}
  },
  components: {
    phone
  },
  data() {
    return {
      costPerMinute: null
    };
  },
  async mounted() {
    let price = await this.$axios.$get(
      `Rubika/Doctors/${this.$route.params.id}/communicationquote`
    );
    this.costPerMinute = price.result.quote.costPerMinute;
  }
};
</script>