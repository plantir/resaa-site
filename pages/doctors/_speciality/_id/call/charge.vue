<style lang="scss" scoped>
h2 {
  font-weight: normal;
  color: #7e7e7e;
  font-size: 14px;
  text-align: center;
  margin-bottom: 40px;
  @include media(sm) {
    margin-bottom: 16px;
  }
}
.payment-wrapper {
  text-align: center;
  .payment-btn {
    min-width: 160px;
    min-height: 46px;
    font-size: 16px;
    background: linear-gradient(to left, #0ec7e6, #28db9a);
    font-weight: 500;
    .v-icon {
      font-size: 24px;
    }
  }
}

.charge-items {
  display: flex;
  justify-content: center;
  margin: 50px -30px;
}
.swiper-container {
  margin: 0 -30px;
}
.swiper-wrapper {
  padding: 30px 0 70px;
}
.swiper-slide {
  height: 310px;
  width: 200px;
}

.charge-item-wrapper {
  padding: 0 16px;
  transition: all 0.3s ease-in-out;
  @include media(sm) {
    padding: 16px;
    display: flex;
    justify-content: center;
  }
  cursor: pointer;
  .charge-item {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 35px;
    height: 300px;
    width: 200px;
    @include media(sm) {
      height: 310px;
      width: 230px;
    }
    .item-header {
      position: relative;
      span {
        position: absolute;
        color: #fff;
        font-weight: normal;
        top: 30px;
        right: 0;
        left: 0;
        display: flex;
        bottom: 0;
        margin: auto;
        justify-content: center;
        align-items: flex-start;
        font-size: 24px;
      }
    }
    .item-content {
      margin-top: -20px;
      padding: 0 16px 10px;
      font-size: 14px;
      color: #848484;
      font-weight: 500;
      height: 128px;
      @include media(sm) {
        text-align: center;
      }
      p {
        margin: 20px 0;
        font-weight: normal;
        @include media(sm) {
          text-align: center;
        }
      }
    }
    .item-footer {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      .price {
        font-size: 16px;
        font-weight: 500;
        color: #848484;
      }
      .select-holder {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 2px solid #ccc;
        @include media(sm) {
          width: 20px;
          height: 20px;
          .v-icon {
            font-size: 18px;
          }
        }
        .v-icon {
          color: #fff;
        }
      }
    }
  }
  &.selected {
    transform: scale(1.1);
    @include media(sm) {
      // transform: scale(1);
    }
    .item-footer {
      .price {
        color: #27db9b;
      }
      .select-holder {
        border-color: #27db9b;
        background: #27db9b;
      }
    }
  }
}
.continue {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include media(sm) {
    flex-direction: column;
  }
  .text {
    font-size: 16px;
    color: #969696;
    font-weight: 500;
    @include media(sm) {
      text-align: center;
      margin-bottom: 8px;
    }
    .custom-color {
      color: #27db9b;
    }
  }
}
</style>

<template>
  <section>
    <div class="card">
      <no-ssr v-if="ajaxLoading">
        <v-loading mode="relative">
          <h3>در حال انتقال به بانک ...</h3>
        </v-loading>
      </no-ssr>
      <h1>افزایش اعتبار</h1>
      <h2>برای برقراری تماس لطفا حساب خود را به میزان دقایق مکالمه شارژ کنید:</h2>
      <div class="charge-items hide-md">
        <div
          class="charge-item-wrapper"
          @click="selected = item.denomination.id"
          :class="{ selected: item.denomination.id == selected }"
          v-for="(item,i) in charg_items"
          :key="item.chargePackage.packageId"
        >
          <div class="charge-item">
            <div class="item-header">
              <div class="header-bg">
                <ChargeSvg :color="colors[i % 4]" />
              </div>
              <span>{{ item.chargePackage.durationInMinute | persianDigit }} دقیقه</span>
            </div>
            <div class="item-content">
              <h4>{{ item.chargePackage.packageTitle }}</h4>
              <p>{{ item.chargePackage.description }}</p>
            </div>
            <div class="item-footer">
              <div
                class="price"
              >{{ item.denomination.payableAmount | currency | persianDigit }} تومان</div>
              <div class="select-holder">
                <v-icon v-if="item.denomination.id == selected">check</v-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hide-lg-and-up"
        ref="mySwiper"
        v-swiper:mySwiperdesktop="swiperOptionDoctors"
        @slideChange="onChange"
        dir="rtl"
      >
        <div class="swiper-wrapper">
          <div
            class="charge-item-wrapper swiper-slide"
            @click="selected = item.denomination.id"
            :class="{ selected: item.denomination.id == selected }"
            v-for="(item,i) in charg_items"
            :key="item.chargePackage.packageId"
          >
            <div class="charge-item">
              <div class="item-header">
                <div class="header-bg">
                  <ChargeSvg :color="colors[i % 4]" />
                </div>
                <span>{{ item.chargePackage.durationInMinute | persianDigit }} دقیقه</span>
              </div>
              <div class="item-content">
                <h4>{{ item.chargePackage.packageTitle }}</h4>
                <p>{{ item.chargePackage.description }}</p>
              </div>
              <div class="item-footer">
                <div
                  class="price"
                >{{ item.denomination.payableAmount | currency | persianDigit }} تومان</div>
                <div class="select-holder">
                  <v-icon v-if="item.denomination.id == selected">check</v-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>

      <div class="payment-wrapper">
        <v-btn id="journeygobank" @click="onSubmit" class="payment-btn" depressed dark round>
          <v-icon class="ml-3">fa-credit-card</v-icon>
          <span>پرداخت</span>
        </v-btn>
        <!-- <v-alert style="width:400px" type="warning" outline :value="true">
          <span>
            با توجه به مشکل به وجود آمده در درگاه بانکی لطفاً جهت شارژ از ussd
            استفاده نمایید
          </span>
          <span dir="ltr">
            *500*25#
          </span>
        </v-alert>-->
        <vue-recaptcha
          ref="invisibleRecaptcha"
          @verify="onVerify"
          size="invisible"
          :sitekey="sitekey"
        ></vue-recaptcha>
      </div>
      <div class="continue">
        <div class="text">
          <span>اعتبار فعلی حساب شما</span>
          <span class="custom-color">{{ credit | currency | persianDigit }} تومان</span>
          <span>است . شما میتوانید</span>
          <span class="custom-color">{{ duration | persianDigit }} دقیقه</span>
          <span>
            با {{ doctor.title }} {{ doctor.firstName }}
            {{ doctor.lastName }} صحبت کنید
          </span>
        </div>
        <v-btn v-if="isFree" color="#27db9b" to="booking" round outline>تماس اول رایگان</v-btn>
        <v-btn
          v-else-if="duration >= 1"
          color="#27db9b"
          to="booking"
          round
          outline
        >ادامه با اعتبار فعلی</v-btn>
      </div>
    </div>

    <div class="card notify">
      <div>
        <img src="~assets/img/lamp@2x.png" />
        <div>
          <p>
            هزینه مشاوره به اندازه دقایق مکالمه شما از حساب رسا کسر می شود. باقی
            مانده اعتبار شما در تماس های بعدی قابل استفاده است. رسا در صورت عدم
            رضایت شما از خدمات ارائه شده، هزینه تماس را به طور کامل به شما بر
            می‌گرداند.
          </p>
          <p>
            در صورت عدم برقراری تماس و قطعی تماس در لحظات ابتدایی مکالمه هزینه
            ای از حساب شما کسر نمی گردد.
          </p>
          <p>
            شما می توانید از شارژ حساب کاربری خود در رسا برای گفتگو با هر یک از
            پزشکان و مشاوران رسا که بخواهید، استفاده کنید.
          </p>
          <p>
            رسا دارای گواهی اعتماد الکترونیکی e-namad است و پرداخت شما از طریق
            درگاه امن بانکی انجام می شود.
          </p>
          <p>پشتیبانی رسا در کلیه مراحل استفاده از سامانه در کنار شماست.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ChargeSvg from "@/components/charge-svg";
import doctors from "@/components/doctor_detail/doctors";
export default {
  components: { ChargeSvg },
  async asyncData({
    app,
    store,
    error,
    params,
    $axios,
    isClient,
    redirect,
    route
  }) {
    let doctor;
    let charg_items;
    try {
      let { result } = await $axios.$get(`/Doctors/${params.id}/profile`);
      doctor = result.doctor;
      if (doctor.pricePerMinute == 0) {
        redirect(`${route.path.replace("charge", "booking")}`);
      }
    } catch (err) {
      return error({ statusCode: 404, message: "doctor not found" });
    }
    try {
      let result = await $axios.$get(
        `/Doctors/${doctor.id}/TimeBasedChargePackages`
      );
      charg_items = result;
    } catch (err) {
      return error({ statusCode: 404, message: "doctor not found" });
    }

    return {
      charg_items,
      colors: [
        ["#FDBD10", "#7F5F08"],
        ["#EF4871", "#782439"],
        ["#0EC7E6", "#076473"],
        ["#28DB9A", "#146E4D"]
      ],
      items: [
        {
          id: 2,
          duration: 16,
          title: "آشنایی با مشاور",
          description:
            "با این فرصت کوتاه خیالتان از کیفیت مشاوره تلفنی راحت می شود",
          color: ["#FDBD10", "#7F5F08"],
          price: 20000
        },
        {
          id: 4,
          duration: 32,
          title: "مناسب برای پیگیری روند مشاوره",
          description: "ممکن است برای اولین جلسه مشاوره کافی نباشد",
          color: ["#EF4871", "#782439"],
          price: 40000
        },
        {
          id: 8,
          duration: 48,
          title: "یک جلسه مشاوره استاندارد",
          description:
            "پیشنهاد ما برای اینکه شما و مشاور فرصت کافی برای رسیدگی به دغدغه ها داشته باشید",
          color: ["#0EC7E6", "#076473"],
          price: 60000
        },
        {
          id: 9,
          duration: 62,
          title: "جلسه مشاوره مفصل و کامل",
          description:
            "جزییات خیلی مهم است هر چه فرصت بیشتری داشته باشید بهتر می توانید از مشاور کمک بگیرید",
          color: ["#28DB9A", "#146E4D"],
          price: 80000
        }
      ],
      swiperOptionDoctors: {
        // spaceBetween: 10,
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        initialSlide: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        grabCursor: true
      },
      user: {},
      duration: 0,
      credit: 0,
      ajaxLoading: false,
      selected: 7,
      recaptchaResponse: null,
      doctor
    };
  },
  methods: {},
  async mounted() {
    try {
      let { result } = await this.$axios.$get(
        `/Accounts/${this.user_id}/Profile`
      );
      this.user = result.profile;
      let { credit } = this.user.subscriberCards.find(
        item => item.state == "Active"
      );
      this.credit = credit;
    } catch (error) {}
    try {
      let { result } = await this.$axios.$get(
        `/Doctors/${this.$route.params.id}/CommunicationQuote`
      );
      this.duration = result.quote.duration;
    } catch (error) {}
  },
  methods: {
    yourCallBackFunction() {
      // Your logic
    },
    onVerify: function(response) {
      this.ajaxLoading = true;
      this.recaptchaResponse = response;
      this.chargeRequest();
    },
    resetRecaptcha() {
      this.$refs.invisibleRecaptcha.reset(); // Direct call reset method
    },
    onSubmit() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onChange(item) {
      let ids = [6, 3, 4, 5];
      this.selected = ids[this.$refs.mySwiper.swiper.activeIndex];
    },
    async chargeRequest() {
      this.ajaxLoading = true;
      try {
        let res = await this.$axios.get(`/Accounts/${this.user_id}/Profile`);
        let loginOrigin = localStorage.getItem("referrer");
        let data = {
          denominationId: this.selected,
          callbackUrl:
            process.env.SITE_URL +
            this.$route.fullPath.replace("charge", "booking"),
          recaptchaResponse: this.recaptchaResponse,
          phoneNumber: res.data.result.profile.phoneNumber,
          loginOrigin
        };
        let response = await this.$axios.post("/Charge", data);
        let {
          address,
          submissionParameters: { token }
        } = response.data.result.electronicPaymentVoucher.gateway;
        this.goPayment(address, token);
        this.chargeStep = "receipt";
      } catch (error) {
        this.$toast.error().showSimple("خطایی رخ داده است");
        this.resetRecaptcha();
      }
      this.ajaxLoading = false;
    },
    goPayment(action, token) {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = action;
      const input = document.createElement("input");
      input.value = token;
      input.name = "token";
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    }
  },
  computed: {
    sitekey() {
      return this.$store.state.sitekey;
    },

    user_id() {
      return this.$store.state.patient.user_id;
    },
    isFree() {
      return this.doctor.categories.some(item => item.id == 1144);
    }
  }
};
</script>
