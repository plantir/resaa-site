<style lang="scss" scoped>
section#home {
  width: 100%;
  height: 100%;
  .logo {
    position: absolute;
    left: 30px;
    top: 30px;
    width: 80px;
    z-index: 9;
    img {
      max-width: 100%;
    }
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
    img {
      max-width: 100%;
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
    span {
      color: #fff;
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
      text-decoration: none;
      width: 173px;
      height: 37px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 18px;
      + a {
        margin-right: 16px;
        @include respond-to(sm) {
          margin-right: 0;
          margin-top: 16px;
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
    .button-wrapper a {
      border-radius: 18.5px;
      border: 2px solid transparent;
      background-image: linear-gradient(#e2e2e2, #e2e2e2),
        linear-gradient(20deg, #33e4ea, #00b2ed);
      background-origin: border-box;
      background-clip: content-box, border-box;
      color: #00aae2;
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
</style>
<template>
  <section id="home">
    <div class="logo">
      <img src="~static/img/logo-resaa-blue.png">
    </div>
    <div class="nav-icon" :class="{'active':menuActive}">
      <div @click="activateMenu" class="icon-wrapper">
        <img v-if="menuActive" src="~static/img/nav-close-icon.png">
        <img v-else src="~static/img/nav-icon.png">
      </div>
    </div>
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
        <img src="~static/img/phone.svg">
      </div>
      <div class="line"></div>
      <section class="patient">
        <div class="image">
          <router-link :to="{name:'patient-landing'}">
            <img src="~static/img/patient-edited.png">
          </router-link>
        </div>
        <div class="title">
          <router-link :to="{name:'patient-landing'}">
            <span>ارتباط تلفنی و مستقیم با پزشک</span>
          </router-link>
        </div>
        <div class="subtitle">
          <span>بیماران عزیز، با سامانه رِسا از هر جایی با پزشک خود مشورت کنید</span>
        </div>
        <div class="button-wrapper">
          <router-link :to="{name:'patient-landing'}">بیشتر بدانید</router-link>
          <router-link :to="{name:'charge'}">شارژ حساب</router-link>
        </div>
      </section>
      <section class="doctor">
        <div class="image">
          <router-link to="doctors/landing">
            <img src="~static/img/doctor-edited.png">
          </router-link>
        </div>
        <div class="title">
          <router-link to="doctors/landing">
            <span>معرفی خدمات به پزشکان رِسا</span>
          </router-link>
        </div>
        <div class="subtitle">
          <span>پزشکان گرامی، براحتی تماس های دریافتی خود را مدیریت کنید</span>
        </div>
        <div class="button-wrapper">
          <router-link to="doctors/landing">بیشتر بدانید</router-link>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  name: "home",
  layout: "landing",
  head() {
    return {
      title: "رِسا، رسانه سلامت ایرانیان",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  data: function() {
    return {
      items: ["armin", "arash"],
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
      ]
    };
  },
  created() {
    this.$axios.get("/api/Charge/Denominations").then(res => {});
  },
  methods: {
    activateMenu: function() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>
