<style lang="scss" scoped>
.call-wrapper {
  display: flex;
  flex-wrap: wrap;
  padding: 40px 70px !important;
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
  font-weight: 500;
}

.price-title {
  font-size: 14px;
  color: var(--grey-color);
  font-weight: 500;
}
.price {
  color: $secondary-color;
  font-size: 14px;
  font-weight: 500;
  @include media(sm) {
    display: block;
    font-size: 18px;
    margin-bottom: 16px;
  }
}
.description {
  color: var(--grey-color);
  font-size: 14px;
  display: flex;
  align-items: center;
  @include media(sm) {
    margin: 30px 0px;
  }
  p {
    margin: 0;
  }
  .show-time-table {
    cursor: pointer;
    margin: 0 3px 0 8px;
    &:hover {
      color: $primary-color;
    }
  }
}
.button-wrapper {
  animation: heartBeat 1.5s linear infinite;
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
  position: relative;
  animation: waves 1.5s linear infinite;
  animation-delay: 1.5s;
  &:before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 26px;
    background: #0194c7;
    transition: 5s ease;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
  }
  a {
    color: #fff;
  }
  svg {
    margin-right: 26px;
    path {
      fill: #fff;
    }
  }
  .phone {
    animation: shake 1.5s infinite;
  }
}
@keyframes waves {
  0% {
    box-shadow: 0 0 0 0 rgba($secondary-color, 1);
  }
  100% {
    box-shadow: 0 0 0 16px rgba($secondary-color, 0);
  }
}
@keyframes shake {
  5%,
  15%,
  25%,
  35% {
    -webkit-transform: translate3d(-3px, 0, 0);
    transform: translate3d(-3px, 0, 0);
  }

  10%,
  20%,
  30%,
  40% {
    -webkit-transform: translate3d(3px, 0, 0);
    transform: translate3d(3px, 0, 0);
  }

  0%,
  45%,
  50%,
  55%,
  60%,
  65%,
  70%,
  80%,
  90%,
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes heartBeat {
  0%,
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  20% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}
</style>

<template>
  <section id="call-section">
    <v-card class="call-wrapper">
      <div>
        <h2 class="section-title">
          <span v-if="doctor.currentlyAvailable">همین حالا با پزشک تماس بگیرید</span>
          <template v-else>
            <span v-if="doctor.providesCallbackService">از پزشک بخواهید با شما تماس بگیرد</span>
            <span v-else>در حال حاضر این متخصص پاسخگو نیست</span>
          </template>
        </h2>
        <div class="description">
          <p
            v-if="doctor.currentlyAvailable"
          >پزشک در حال حاضر در دسترس می باشد. تماس شما بلافاصله با موبایل پزشک برقرار می شود تا بتوانید در کوتاه ترین زمان پاسخ سوالات خود را بگیرید.</p>
          <template v-else>
            <p
              v-if="doctor.providesCallbackService"
            >در حال حاضر پزشک در دسترس نیست. با ثبت درخواست تماس، پزشک در اولین ساعت پاسخگویی خود با شما تماس میگیرد. می توانید با بررسی زمان های پاسخگویی پزشک از اولین زمان پاسخگویی پزشک مطلع شوید.</p>
            <p v-else>
              شما می توانید در زمان پاسخگویی بعدی (
              <span
                class="show-time-table"
                @click="dialog = true"
              >مشاهده ساعت های پاسخگویی</span>) از طریق همین صفحه اقدام کنید و یا با سایر متخصصین مرتبط با این پزشک صحبت کنید.
            </p>
          </template>
        </div>
      </div>
      <div>
        <div class>
          <span class="price-title mb-0">هزینه هر دقیقه گفتگو با پزشک :</span>
          <span class="price">{{doctor.pricePerMinute | currency | persianDigit}} تومان</span>
        </div>
        <div class="button-wrapper">
          <nuxt-link
            v-if="doctor.currentlyAvailable"
            class="call-doctor"
            :to="`${doctor.subscriberNumber}/call/${user?'charge':'register'}`"
          >
            شروع مکالمه با پزشک
            <phone class="phone" />
          </nuxt-link>
          <template v-else>
            <!-- <nuxt-link
              v-if="doctor.providesCallbackService"
              class="call-doctor"
              :to="`${doctor.subscriberNumber}/call/${user?'charge':'register'}`"
            >
              ثبت درخواست تماس
              <phone class="phone" />
            </nuxt-link>-->
            <a
              class="call-doctor"
              v-scroll-to="{ el: '#related-doctors', offset: -80 }"
            >نمایش پزشکان مرتبط</a>
          </template>
        </div>
      </div>
    </v-card>
    <v-dialog content-class="custom-dialog" max-width="1360" v-model="dialog">
      <no-ssr>
        <timeTable v-model="times" @close="dialog = false"></timeTable>
      </no-ssr>
    </v-dialog>
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
      costPerMinute: null,
      dialog: false
    };
  },
  async mounted() {},
  computed: {
    user() {
      return this.$store.state.patient.user;
    }
  }
};
</script>