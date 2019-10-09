<style lang="scss" scoped>
section#home {
  width: 100%;
  height: 100%;
  .logo {
    position: absolute;
    right: 30px;
    top: 30px;
    // width: 80px;
    z-index: 9;
    svg {
      width: 90px;
      height: 50px;
    }
  }
  .custom-btn {
    // box-shadow: 0 5px 7.5px 0 rgba(255, 206, 70, 0.3);
    color: #545456;
    // background-color: #febe10;
    // border: none !important;
  }
  .nav-icon {
    position: absolute;
    cursor: pointer;
    right: 30px;
    top: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    .icon-wrapper {
      background: #fff;
      width: 53px;
      height: 53px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    border: 7px solid rgba(#fff, 0.4);
    &.active {
      border-color: #3bf2bd;
    }
    img {
      max-width: 100%;
    }
  }
  .nav-main {
    $transition--length: 0.1;
    $transition--easing: ease-in-out; //cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 99;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
    opacity: 0;
    transition: all $transition--length + s $transition--easing;

    &.active {
      visibility: visible;
      opacity: 1;
    }

    &__content {
      position: fixed;
      height: 100vh;
      top: 50%;
      transform: translate(0%, -50%);
      width: 100%;
      text-align: center;
      font-weight: 200;
      cursor: pointer;
    }

    &__list {
      cursor: default;
      direction: rtl;
      padding: 0;
      list-style: none;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      @include respond-to(md) {
        flex-direction: column;
      }
    }

    &__list-item {
      font-size: 1.8rem;
      direction: rtl;
      position: relative;
      margin: 0 20px;
      color: #00aae2;
      cursor: pointer;
      font-weight: 500;
      line-height: 30px;
      transition-delay: $transition--length + s;
      opacity: 0;
      transform: translate(0%, 50%);
      transition: opacity 0.2s ease, transform 0.3s ease, color 0.2s;
      @include respond-to(md) {
        margin: 20px 0;
      }
      &.active {
        transform: translate(0%, 0%);
        opacity: 1;

        @for $i from 0 through 5 {
          &:nth-child(#{$i}) {
            transition-delay: $transition--length * $i / 10 + 0.05 + s;
          }
        }
      }

      &:hover {
        color: #24bda9;
        text-decoration: none;

        &::before {
          background-color: #24bda9;
          width: 100%;
        }
      }

      &::before {
        content: "";
        width: 20px;
        height: 1px;
        background-color: #00aae2;
        position: absolute;
        top: 100%;
        transform: translate(0%, 0%);
        transition: all 0.3s ease;
        z-index: -1;
      }
    }
  }

  .line {
    position: absolute;
    width: 50%;
    height: 500px;
    left: 25%;
    top: calc(55% - 270px);
    background-image: url("~static/img/line.png");
    background-repeat: no-repeat;
    background-size: 100%;
    z-index: 2;
    @include respond-to(lg) {
      display: none;
    }
  }
  .phone-icon {
    @include respond-to(lg) {
      display: none;
    }
    position: absolute;
    width: 90px;
    height: 90px;
    left: 0;
    right: 0;
    padding: -13px;
    top: calc(55% - 310px);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 100%;
    padding: 16px;
    z-index: 9;
    animation: pulse-dot 2.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
    svg {
      width: 36px;
      height: 36px;
      path {
        fill: $secondary-color;
      }
    }
    &:before {
      content: "";
      position: absolute;
      left: -45px;
      top: -45px;
      z-index: -1;
      margin: auto;
      display: block;
      width: 180px;
      height: 180px;
      border-radius: 100%;
      background-color: #fff;
      animation: pulse-ring 2.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    }
  }
  .content {
    display: flex;
    min-height: 100%;
    @include respond-to(lg) {
      flex-direction: column;
    }
  }

  .image {
    height: 200px;
    img {
      max-height: 100%;
    }
  }
  .title {
    color: #fff;
    font-weight: bold;
    font-size: 29px;
    margin-bottom: 8px;
    text-align: center;
    h2 {
      color: #fff;
      font-weight: 600;
      font-size: 1.375rem;
    }
  }
  .subtitle {
    font-size: 17px;
    color: #fff;
    text-align: center;
  }
  .button-wrapper {
    margin-top: 32px;
    display: flex;
    @include respond-to(sm) {
      flex-direction: column;
    }
    a {
      width: 173px;
      border-width: 2px;
    }
    .custom-btn {
      background: #fff;
      height: 36px;
      margin: 6px 8px;
      position: relative;
      overflow: hidden;
      border-radius: 28px;
      display: inline-flex;
      justify-content: flex-start;
      align-items: center;
      padding-right: 30px;
      transition: all 0.4s;
      box-shadow: 0 1px 16px -9px #000;
      svg {
        width: 58px;
        height: 48px;
        position: absolute;
        left: 5px;
        top: -9px;
        transition: all 0.4s;
        path {
          fill: #fbc02d;
        }
      }
      &:hover {
        background: #fbc02d;
        svg path {
          fill: #fff;
        }
      }
    }
  }
  .doctor,
  .patient {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    @include respond-to(lg) {
      padding: 80px 0;
    }
    > div {
      z-index: 2;
    }
    &:before {
      content: "";
      top: calc(50% - 200px);
      position: absolute;
      width: 414px;
      height: 285px;
      background-image: url("~static/img/patient-pattern.png");
      background-size: 100%;
    }
  }
  .doctor {
    background-color: #e2e2e2;
    &:before {
      background-image: url("~static/img/pattern.png");
      opacity: 1;
    }
    .title {
      background-image: linear-gradient(10deg, #33e4ea, #00b2ed),
        linear-gradient(to bottom, #ffffff, #ffffff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .subtitle {
      color: #888;
    }
  }
  .patient {
    background-image: linear-gradient(240deg, #42f3a1, #11d0f8);
  }
  .fast-charge {
    position: absolute;
    width: 200px;
    height: 40px;
    left: 0;
    right: 0;
    padding: -13px;
    bottom: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 16px;
    z-index: 9;
    border: 2px solid #fff;
    background-image: linear-gradient(261deg, #3defa9, #16d3ef);
    color: #fff;
    @include respond-to(lg) {
      display: none;
    }
  }
  @keyframes pulse-ring {
    0% {
      transform: scale(0.33);
    }
    80%,
    100% {
      opacity: 0;
    }
  }
  @keyframes pulse-dot {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.8);
    }
  }
}
.dialog-notification {
  padding: 1rem;
}
</style>
<template>
  <section id="home">
    <div class="logo">
      <!-- <img src="~static/img/logo-resaa-blue.png" alt="سامانه رسا" /> -->
      <logo alt="سامانه رسا" />
    </div>
    <!-- <div class="nav-icon" :class="{'active':menuActive}">
      <div @click="activateMenu" class="icon-wrapper">
        <img alt="منو سامانه رسا" v-if="menuActive" src="~static/img/nav-close-icon.png" />
        <img alt="منو سامانه رسا" v-else src="~static/img/nav-icon.png" />
      </div>
    </div>-->
    <div class="nav-main" :class="{ 'active' : menuActive }">
      <div class="nav-main__content" :class="{ 'active' : menuActive }">
        <ul class="nav-main__list" :class="{ 'active' : menuActive }">
          <router-link
            v-for="(item, index) in this.itemsList"
            :to="item.to"
            :key="index"
            class="nav-main__list-item"
            :class="{ 'active' : menuActive }"
          >{{ item.name }}</router-link>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="phone-icon">
        <phone />
        <!-- <img src="~assets/svg/phone.svg" alt="تماس تلفنی مستقیم با پزشک" /> -->
      </div>
      <div class="line"></div>
      <section class="patient">
        <div class="image">
          <router-link :to="{name:'patient-landing'}">
            <img src="~static/img/patient-edited.png" alt="معرفی خدمات رسا برای بیماران" />
          </router-link>
        </div>
        <div class="title">
          <router-link :to="{name:'patient-landing'}">
            <h2>ارتباط تلفنی و مستقیم با پزشک</h2>
          </router-link>
        </div>
        <div class="subtitle">
          <p>بیماران عزیز، با سامانه رِسا از هر جایی با پزشک خود مشورت کنید</p>
        </div>
        <div class="button-wrapper">
          <!-- <nuxt-link class="custom-btn" :to="{name:'patient-landing'}">
            <element-svg />
          </nuxt-link>-->
          <resaaButton :to="{name:'patient-landing'}">بیشتر بدانید</resaaButton>
          <!-- <router-link  :to="{name:'patient-landing'}">بیشتر بدانید</router-link> -->
          <!-- <router-link>شارژ حساب</router-link> -->
          <v-btn color="white" :to="{name:'charge'}" outline round>شارژ حساب</v-btn>
        </div>
      </section>
      <section class="doctor">
        <div class="image">
          <router-link to="doctors/landing">
            <img src="~static/img/doctor-edited.png" alt="معرفی خدمات رسا برای پزشکان" />
          </router-link>
        </div>
        <div class="title">
          <router-link to="doctors/landing">
            <h2>معرفی خدمات به پزشکان رِسا</h2>
          </router-link>
        </div>
        <div class="subtitle">
          <p>پزشکان گرامی، براحتی تماس های دریافتی خود را مدیریت کنید</p>
        </div>
        <div class="button-wrapper">
          <v-btn color="primary" outline round to="doctors/landing">بیشتر بدانید</v-btn>
        </div>
      </section>
    </div>
    <!-- <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
      <v-card class="dialog-notification">
        با سلام و عرض ادب
        متاسفانه به خاطر مشکلات مرکز مخابراتی امروز خطوط سامانه رسا دچار مشکلاتی می باشد. ضمن پوزش از مشکلات به وجود آمده خواهشمند است با شکیبایی خود ما را در حل این مشکل یاری نمایید. متخصصین رسا در حال تعامل مداوم با مخابرات برای حل مشکل پیش آمده می باشند.
        در صورت وجود مورد خیلی ضروری می توانید از طریق آی دی تلگرام @gsleaves آن را با ما در میان بگذارید.
        با تشکر و احترام، سامانه رسا
        <v-btn dark color="info" @click="dialog=false">متوجه شدم</v-btn>
      </v-card>
    </v-dialog>-->
  </section>
</template>
<script>
import phone from "~/assets/svg/phone.svg?inline";
import logo from "~/assets/svg/logo.svg?inline";
import resaaButton from "~/components/resaa-button.vue";
export default {
  name: "home",
  layout: "landing",
  components: {
    phone,
    logo,
    resaaButton
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json"
        }
      ],
      title: "سامانه رسا | بزرگترین بستر ارتباط تلفنی پزشک و بیمار",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "سامانه رسا (رسانه سلامت ایرانیان) اولین و بزرگترین بستر ارتباط و مشاوره تلفنی بیمار و پزشک در ایران. با رسا می تونی در کوتاه ترین زمان ممکن با پزشک در تماس باشی."
        },
        {
          hid: "canonical",
          property: "canonical",
          content: `${process.env.SITE_URL}${this.$route.path}`
        }
      ]
    };
  },
  asyncData() {
    return {
      dialog: true,
      menuActive: false,
      itemsList: [
        {
          name: "برای بیماران",
          to: { name: "patient-landing" }
        },
        {
          name: "برای پزشکان",
          to: { name: "doctors-landing" }
        },
        {
          name: "درباره رِسا",
          to: { name: "about" }
        },
        {
          name: "تماس با ما",
          to: { name: "contact-us" }
        },
        {
          name: "خرید شارژ",
          to: { name: "charge" }
        }
      ],
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Resaa Inc.",
        url: "https://resaa.net",
        logo: "https://resaa.net/_nuxt/img/5a30ad1.png",
        slogan: "first and biggest telemedicine platform in Iran",
        telephone: "+982174471111",
        email: "info@resaa.net",
        SameAs: [
          "https://t.me/pezeshkeresaa",
          "https://instagram.com/resaanet/",
          "https://twitter.com/resaanet"
        ],
        description:
          "Resaa, Inc. is the first and biggest telemedicine platform based in Tehran, Iran, which uses telephone network to connect the patients to their doctors. Resaa has a list of 460 doctors (by 2019) that the patients can choose from, call and discuss their health problems to get medical advice. It was founded in 2015 by Seyed Alireza Mirzargar and Seyed Soroush Hosseinalipour."
      }
    };
  },
  async mounted() {
    try {
      let doctors = await this.$axios.get(
        process.env.SITE_URL + "/doctors.json"
      );
      console.log(doctors);
    } catch (error) {}
  },
  methods: {
    activateMenu: function() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>
