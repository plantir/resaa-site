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
      width: calc(100% - 160px);
      height: 2px;
      background: #71787f;
      position: absolute;
      left: 0;
      bottom: 4px;
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
}
.tell-wrapper {
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  @include respond-to(lg) {
    justify-content: flex-start;
    .footer-email {
      margin-right: 16px;
    }
  }
  span {
    display: inline-block;
    direction: ltr;
    margin-right: 16px;
  }
  i {
    color: #2ee5c4;
  }
}
.link-wrapper {
  display: flex;
  > div {
    padding: 0 3rem;
    @include respond-to(md) {
      padding: 0 2rem;
    }
    @include respond-to(sm) {
      padding: 0 1rem;
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
  @include respond-to(sm) {
    flex-direction: column;
    align-items: center;
  }
  .footer-logo {
    width: 40%;
    flex: 0 0 40%;
    margin-top: 60px;
    @include respond-to(sm) {
      margin-top: 16px;
    }
    img {
      max-width: 100%;
    }
  }
  > div {
    line-height: 3.5rem;
  }
  .social {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    height: 80px;
    align-items: center;
    @include respond-to(lg) {
      margin-top: 16px;
    }
    span {
      color: #fff;
      font-size: 1.475rem;
    }
    ul {
      display: inline-flex;
      margin: 0 32px 0 0;
      padding: 0;
      width: 40%;
      justify-content: space-between;
      list-style-type: none;
      a {
        color: #babcbd;
        font-size: 2rem;
        &:hover {
          color: #2ee5c4;
        }
      }
    }
  }
}
.e-namad {
  display: flex;
  margin-top: 80px;
  height: 80px;
  align-items: center;
  @include respond-to(lg) {
    margin-top: 16px;
    justify-content: center;
  }
  img {
    max-height: 100%;
    cursor: pointer;
  }
}
.copy-right {
  background-color: #3b4752;
  color: #a5abb6;
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
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
      top: -6px;
      &::before,
      &::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background-color: #2ee5c4;
        display: block;
        position: absolute;
        top: 2px;
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
    <div :class="[{'patient': isPatient}, 'footer']">
      <v-container>
        <v-layout row wrap>
          <v-flex md5 sm12>
            <div class="about-wrapper">
              <div class="footer-logo">
                <img src="./logo.png">
              </div>
              <div>
                <div class="footer-info-text">
                  <strong>رِسا</strong>
                  اولین سامانه ارتباط پزشک با بیمار در کشور است و بیماران عزیز براحتی و بدون نیاز به حضور در مطب پزشک می توانند با پزشک خوب از هر جایی در ارتباط باشند. پزشکان گرامی نیز می توانند تماس های بیماران خود را در سامانه رِسا مدیریت کنند.
                </div>
                <div class="social">
                  <span>به ما بپیوندید :</span>
                  <ul>
                    <li>
                      <a target="_blank" href="https://t.me/pezeshkepasokhgoo">
                        <i class="fa fa-telegram"></i>
                      </a>
                    </li>
                    <li>
                      <a>
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://instagram.com/resaanet/">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/resaanet">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </v-flex>
          <v-flex md4 sm12>
            <div class="link-wrapper">
              <div>
                <h5 class="title">کاربری</h5>
                <ul>
                  <li>
                    <router-link v-if="isPatient" :to="{name:'LoginPatient'}">حساب کاربری</router-link>
                    <router-link v-else :to="{name:'LoginDoctor'}">حساب کاربری</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'doctors'}">لیست پزشکان</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'LandingPatient'}">رسای بیماران</router-link>
                  </li>
                  <li>
                    <router-link
                      :to="{name:'LandingPatient',hash:'#download'}"
                    >دریافت برنامه بیماران</router-link>
                  </li>
                </ul>
              </div>
              <div>
                <h5 class="title">درباره رسا</h5>
                <ul>
                  <li>
                    <router-link :to="{name:'privacy'}">حریم خصوصی</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'faq'}">سوالات متداول</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'about'}">درباره رسا</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'contact-us'}">تماس با ما</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </v-flex>
          <v-flex md3 sm12>
            <h5 class="title with-line">با ما تماس بگیرید</h5>
            <div class="footer-address">
              <!-- <i class="fa fa-map-marker" aria-hidden="true"></i> -->
              {{contactInfo.address}}
            </div>
            <div class="tell-wrapper">
              <div class="footer-tel">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>{{contactInfo.phoneNumber}}</span>
              </div>
              <div class="footer-email">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>{{contactInfo.email}}</span>
              </div>
            </div>
            <div class="e-namad">
              <img
                onclick="window.open('https://trustseal.enamad.ir/Verify.aspx?id=36840&p=fuixhwmbaqgwodshdrfs', 'Popup','toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')"
                src="./e-namad.png"
                alt
              >
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
        <p>کلیه حقوق مادی و معنوی این سایت به شرکت برگ‌های سبز و نقره‌ای تعلق دارد &copy; ۱۳۹۷</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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

