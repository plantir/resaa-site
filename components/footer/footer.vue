<style lang="scss" scoped>
.title {
  font-size: 1.675rem;
  color: #fff;
  font-weight: 400;
  margin-bottom: 24px;
  position: relative;
  display: flex;
  align-items: center;
  @include respond-to(lg) {
    margin-bottom: 16px;
  }
  &.with-line {
    &::after {
      content: "";
      width: 50px;
      height: 2px;
      background: #71787f;
      margin-right: 16px;
    }
  }
}
.footer {
  background-image: url("footer_bg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 75%;
  min-height: 600px;
  direction: rtl;
  text-align: justify;
  width: 100%;
  background-color: #333e48;
  color: #babcbd;
  display: flex;
  align-items: center;
  text-align: justify;
  @include respond-to(md) {
    // padding-right: 40px;
  }
  @include respond-to(xl) {
    background-size: 100%;
  }
}
.row {
  > div {
    @include respond-to(lg) {
      margin: 1rem 0;
    }
  }
}
.footer-address {
  line-height: 2.675rem;
  @include respond-to(sm) {
    // padding-left: 40px;
  }
}
.tell-wrapper {
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  flex-direction: column;
  > a {
    margin: 8px 0;
    color: #babcbd;
    display: flex;
    align-items: center;
  }
  p {
    margin: 0;
    padding: 0;
    margin-right: 8px;
    span {
      display: inline-block;
      direction: ltr;
      margin-right: 0;
    }
  }
  svg,
  path {
    fill: #2ee5c4;
  }
}
.link-wrapper {
  display: flex;
  // @include respond-to(md) {
  //   justify-content: space-between;
  //   padding-left: 40px;
  // }
  @include respond-to(md) {
    flex-direction: column;
    align-items: flex-start;
    padding-left: 0;
    // justify-content: ;
    // padding-left: 60px;
  }
  > div {
    @include respond-to(md) {
      padding: 0;
      width: 100%;
    }
    + div {
      @include respond-to(md) {
        margin-top: 48px;
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      height: 40px;
      padding-right: 16px;
      position: relative;
      &:before {
        content: "";
        width: 6px;
        height: 6px;
        background-color: #2ee5c4;
        border-radius: 100%;
        position: absolute;
        right: 0;
      }
    }
    a {
      color: #babcbd;
      &:hover {
        color: #2ee5c4;
      }
    }
  }
}
.about-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  // @include respond-to(md) {
  //   flex-direction: column;
  //   align-items: center;
  // }
  // @include respond-to(md) {
  //   padding-left: 40px;
  // }
  .footer-logo {
    width: 40%;
    flex: 0 0 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    @include respond-to(md) {
      margin-top: 16px;
    }
    img {
      max-width: 100%;
    }
  }
  > div {
    line-height: 2.675rem;
  }
}
.social {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  height: 80px;
  align-items: center;
  width: 50%;
  @include respond-to(lg) {
    margin-top: 16px;
  }
  @include respond-to(md) {
    width: 100%;
  }
  svg {
    width: 20px;
    height: 20px;
  }
  span {
    color: #fff;
    font-size: 1.475rem;
    @include respond-to(md) {
      font-size: 1rem;
    }
  }
  ul {
    display: inline-flex;
    padding: 0;
    margin: 0 32px 0 0;
    width: 40%;
    justify-content: space-between;
    list-style-type: none;
    @include media(xs-only) {
      margin: 0;
      width: 60%;
    }
    a {
      display: flex;
      align-items: center;
      justify-items: center;
      &:hover {
        svg,
        path {
          fill: $secondary-color;
        }
      }
    }
    svg,
    path {
      fill: #babcbd;
    }
  }
}
.e-namad {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 80px;
  @include respond-to(lg) {
    margin-top: 16px;
    justify-content: flex-start;
  }
  @include respond-to(md) {
    height: auto;
    margin-left: 40px;
    border-top: 1px solid #71787f;
    margin-top: 32px;
    padding-top: 32px;
    justify-content: center;
  }
  img {
    max-height: 100%;
    cursor: pointer;
    background: #fff;
    border-radius: 8px;
  }
}
.copy-right {
  background-color: #3b4752;
  color: #a5abb6;
  position: relative;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
    margin: 0;
  }
  .line {
    position: absolute;
    width: 100%;
    top: 0;
    height: 50px;
    &::before,
    &::after {
      content: "";
      height: 1px;
      width: calc(50% - 30px);
      background-color: #2ee5c4;
      position: absolute;
    }
    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #2ee5c4;
      display: block;
      position: absolute;
      left: calc(50% - 5px);
      top: -5px;
      &::before,
      &::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #2ee5c4;
        display: block;
        position: absolute;
        top: 1px;
      }
      &::before {
        left: -14px;
      }
      &::after {
        right: -14px;
      }
    }
  }
}
</style>

<template>
  <section>
    <div :class="[{ patient: isPatient }, 'footer']">
      <v-container>
        <v-layout row wrap>
          <v-flex pa-4 lg3 md6 order-lg1 order-md1 sm12>
            <p class="title with-line">
              <strong>درباه رِسا</strong>
            </p>
            <div class="about-wrapper">
              <div>
                <p class="footer-info-text">
                  <strong>رِسا</strong>
                  اولین سامانه ارتباط پزشک با بیمار در کشور است و بیماران عزیز
                  براحتی و بدون نیاز به حضور در مطب پزشک می توانند با پزشک خوب
                  از هر جایی در ارتباط باشند. پزشکان گرامی نیز می توانند تماس
                  های بیماران خود را در سامانه رِسا مدیریت کنند.
                </p>
              </div>
              <div class="footer-logo">
                <img src="./logo.png" alt="سامانه رسا" />
              </div>
            </div>
          </v-flex>
          <v-flex pa-4 lg6 md12 order-lg2 order-md3 sm12>
            <v-layout row wrap>
              <v-flex md6 sm6 xs12>
                <p class="title with-line">
                  <strong>کاربری</strong>
                </p>
                <div class="link-wrapper">
                  <div>
                    <ul>
                      <li>
                        <router-link
                          v-if="isPatient"
                          :to="{ name: 'patient-login' }"
                          >حساب کاربری</router-link
                        >
                        <router-link v-else :to="{ name: 'LoginDoctor' }"
                          >حساب کاربری</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'doctors' }"
                          >لیست پزشکان</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'patient-landing' }"
                          >رسای بیماران</router-link
                        >
                      </li>
                      <li>
                        <router-link
                          :to="{ name: 'patient-landing', hash: '#download' }"
                          >دریافت برنامه بیماران</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </v-flex>
              <v-flex md6 sm6 xs12>
                <p class="title with-line">
                  <strong>دسترسی سریع</strong>
                </p>
                <div class="link-wrapper">
                  <div>
                    <ul>
                      <li>
                        <router-link :to="{ name: 'privacy' }"
                          >حریم خصوصی</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'faq' }"
                          >سوالات متداول</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'about' }"
                          >درباره رسا</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'contact-us' }"
                          >تماس با ما</router-link
                        >
                      </li>
                      <li>
                        <router-link :to="{ name: 'privacy' }"
                          >قوانین</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </v-flex>
              <v-flex md12 xs12>
                <div class="social">
                  <span>به ما بپیوندید :</span>
                  <ul>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        href="https://t.me/pezeshkeresaa"
                      >
                        <telegram />
                        <!-- <img src="~assets/svg/telegram.svg" alt /> -->
                        <!-- <i class="fa fa-telegram"></i> -->
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow">
                        <facebook />
                        <!-- <i class="fa fa-facebook"></i> -->
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        href="https://instagram.com/resaanet/"
                      >
                        <instagram />
                        <!-- <i class="fa fa-instagram"></i> -->
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        href="https://twitter.com/resaanet"
                      >
                        <twitter />
                        <!-- <i class="fa fa-twitter"></i> -->
                      </a>
                    </li>
                  </ul>
                </div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex pa-4 lg3 md6 order-lg3 order-md2 sm12>
            <p class="title with-line">
              <strong>با ما تماس بگیرید</strong>
            </p>
            <div class="footer-address">
              <!-- <i class="fa fa-map-marker" aria-hidden="true"></i> -->
              {{ contactInfo.address }}
            </div>
            <div class="tell-wrapper">
              <a :href="`tel:${contactInfo.support.value}`" class="footer-tel">
                <phone />
                <p>
                  پشتیبانی بیماران :
                  <span>{{ contactInfo.support.text }}</span>
                </p>
              </a>
              <a
                :href="`tel:${contactInfo.doctor_support.value}`"
                class="footer-tel"
              >
                <phone />
                <p>
                  پشتیبانی پزشکان :
                  <span>{{ contactInfo.doctor_support.text }}</span>
                </p>
              </a>

              <a :href="`mailto:${contactInfo.email}`" class="footer-email">
                <!-- <v-icon>email</v-icon> -->
                <envelope />
                <p>{{ contactInfo.email }}</p>
              </a>
            </div>
            <div class="e-namad">
              <!-- <img
                onclick="window.open('https://trustseal.enamad.ir/Verify.aspx?id=36840&p=fuixhwmbaqgwodshdrfs', 'Popup','toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')"
                src="./e-namad.png"
                alt
              >-->
              <img
                src="./e-namad.png"
                alt
                onclick='window.open("https://trustseal.enamad.ir/Verify.aspx?id=127333&amp;p=1p93aagdwcp8JwYd", "Popup","toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30")'
                style="cursor:pointer"
                id="1p93aagdwcp8JwYd"
              />
              <!-- <img src="./samandehi.png" alt> -->
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="footer-bottom">
      <div class="copy-right">
        <div class="line">
          <span class="dot"></span>
        </div>
        <p>
          کلیه حقوق مادی و معنوی این سایت به شرکت برگ‌های سبز و نقره‌ای تعلق
          دارد &copy; ۱۳۹۷
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import telegram from "~/assets/svg/telegram.svg?inline";
import facebook from "~/assets/svg/facebook.svg?inline";
import instagram from "~/assets/svg/instagram.svg?inline";
import twitter from "~/assets/svg/twitter.svg?inline";
import envelope from "~/assets/svg/envelope.svg?inline";
import phone from "~/assets/svg/phone.svg?inline";
export default {
  components: {
    telegram,
    facebook,
    instagram,
    twitter,
    envelope,
    phone
  },
  data() {
    return {
      isPatient: true
    };
  },
  computed: {
    contactInfo() {
      return { ...this.$store.state.contact };
    }
  }
};
</script>
