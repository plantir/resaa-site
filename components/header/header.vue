<style lang="scss">
#navigation {
  .navigation-bar {
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 100;
    direction: rtl;
    text-align: right;
    padding: 0 100px;
    background-color: #ffffff;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
    height: 70px;
    line-height: 70px;
  }

  .isPatient {
    .navigation-bar-item {
      &:hover {
        color: $tealish !important;
      }
    }
  }

  .navigation-bar-logo {
    display: inline-flex;

    img {
      height: 40px;
    }
  }

  .navigation-bar-items {
    line-height: normal;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .navigation-bar-item {
      display: inline-block;
      text-decoration: none;
      // margin-right: 20px;
      padding: 10px 15px;
      cursor: pointer;
      color: inherit;
      background: none;
      &:hover {
        color: $bright-sky-blue;
      }
    }
  }

  .navigation-bar-left {
    display: flex;
  }

  .navigation-bar-right {
    display: flex;
  }

  .button {
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 37px;
    border-radius: 18.5px;
    font-size: 1.175rem;
    cursor: pointer;
    text-decoration: none;
    margin: 0 5px;
  }

  .navigation-bar-download-button {
    @extend .button;
    background-color: $light-gold;
    color: $bronze;
  }

  .navigation-bar-download-button-mini {
    $size: 40px;
    width: $size;
    height: $size;
    border-radius: 50%;
    font-size: 2rem;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: $light-gold;
    color: $bronze;
    cursor: pointer;
  }

  .navigation-bar-button-mini {
    $size: 40px;
    width: $size;
    height: $size;
    border-radius: 50%;
    font-size: 2rem;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #35d6c1;
    border: solid 2px transparent;
    background-image: linear-gradient(white, white),
      linear-gradient(20deg, #11d0f8, #3de0cb);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover {
      text-decoration: none;
    }
  }

  .navigation-bar-button {
    @extend .button;
    color: #35d6c1;
    border: solid 2px transparent;
    background-image: linear-gradient(white, white),
      linear-gradient(20deg, #11d0f8, #3de0cb);
    background-origin: border-box;
    background-clip: content-box, border-box;
  }

  .menu-icon {
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    $size: 30px;
    height: $size;
    width: $size;
    z-index: 2;
    cursor: pointer;
    direction: ltr;

    &__line {
      height: 2px;
      width: $size;
      display: block;
      background-color: #35d6c1;
      transition: transform 0.2s ease, background-color 0.5s ease;

      &.active {
        transform: translateX(0px) rotate(-45deg);
        background-color: #00aae2;
      }
    }

    &__line-left {
      width: $size / 2;

      &.active {
        transform: translateX(2px) translateY(2px) rotate(45deg);
      }
    }

    &__line-right {
      width: $size / 2;
      align-self: flex-end;

      &.active {
        transform: translateX(-2px) translateY(-3px) rotate(45deg);
      }
    }
  }

  .nav-main {
    $transition--length: 0.8;
    $transition--easing: cubic-bezier(0.77, 0, 0.175, 1);
    position: fixed;
    visibility: hidden;
    top: 70px;
    right: 0;
    height: calc(100vh - 70px);
    width: 100vw;
    background-color: white;
    opacity: 0;
    transition: all $transition--length + s $transition--easing;
    overflow: auto;

    &.active {
      visibility: visible;
      opacity: 1;
    }

    &__content {
      // position: fixed;
      // height: 100vh;
      // top: 50%;
      // transform: translate(0%, -50%);
      width: 100%;
      text-align: center;
      font-weight: 200;
      cursor: pointer;
    }

    &__list {
      padding: 0;
      list-style: none;
      height: 100vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    &__list-item {
      font-size: 1.8rem;
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

      &.active {
        transform: translate(0%, 0%);
        opacity: 1;

        @for $i from 0 through 10 {
          &:nth-child(#{$i}) {
            transition-delay: $transition--length * $i / 10 + 0.2 + s;
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

  @media only screen and (max-width: 900px) {
    .navigation-bar {
      padding: 0 20px;
    }
  }

  @media only screen and (min-width: 800px) {
    .nav-main {
      display: none;
    }
  }

  @media only screen and (max-width: 800px) {
    .navigation-bar {
      padding: 0 100px;
    }

    .navigation-bar-items {
      display: none;
    }

    .menu-icon {
      display: flex;
    }

    .navigation-bar-download-button,
    .navigation-bar-button {
      display: none;
    }

    .navigation-bar-download-button-mini,
    .navigation-bar-button-mini {
      display: flex;
    }

    .navigation-bar-left,
    .navigation-bar-right {
      z-index: 2;
    }
  }

  @media only screen and (max-width: 500px) {
    .navigation-bar {
      padding: 0 20px;
    }

    .nav-main__list {
      flex-direction: column;
    }

    .nav-main__list-item {
      margin: 20px 0;
    }
  }
  .nav {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-right: 32px;
    .nav-item {
      display: flex;
      align-items: center;
      a {
        background: none;
        color: inherit;

        &:hover {
          color: $bright-sky-blue;
        }
      }
    }
  }
  .drop-down {
    cursor: default;
    ~ div {
      display: none;
      position: absolute;
      flex-direction: column;
      width: 180px;
      background: #fff;
      padding: 8px 16px;
      box-shadow: 0 0 21px -7px #bbb;
      a {
        text-decoration: none;
        cursor: pointer;
      }
      &:hover {
        display: flex;
      }
    }
    &:hover {
      ~ div {
        display: flex;
      }
    }
  }
}
</style>

<template>
  <section id="navigation">
    <div :class="[{ patient: isPatient }, 'navigation-bar']">
      <div class="menu-icon" @click="activateMenu">
        <span class="menu-icon__line menu-icon__line-left" :class="{ active: menuActive }"></span>
        <span class="menu-icon__line" :class="{ active: menuActive }"></span>
        <span class="menu-icon__line menu-icon__line-right" :class="{ active: menuActive }"></span>
      </div>
      <div class="navigation-bar-right">
        <nuxt-link to="/" class="navigation-bar-logo">
          <img alt="سامانه رسا" v-if="isPatient" src="./logo-teal.png" />
          <img alt="سامانه رسا" v-else src="./logo.png" />
        </nuxt-link>

        <div class="navigation-bar-items">
          <ul class="nav">
            <li class="nav-item">
              <nuxt-link @click.native="closeNav" to="/" class="navigation-bar-item">سامانه رسا</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                @click.native="closeNav"
                :to="{ name: user ? 'patient-profile' : 'patient-login' }"
              >حساب کاربری</nuxt-link>
              <!-- <div v-if="user">
                <a class="drop-down">
                  خوش اومدی {{user.firstName}}
                  <i class="fa fa-caret-down"></i>
                </a>
                <div v-if="isPatient">
                  <nuxt-link :to="{name:'patient-profile'}">پروفایل</nuxt-link>
                  <a @click="logout">خروج</a>
                </div>
                <div v-else>
                  <nuxt-link :to="{name:'patient-profile'}">پروفایل</nuxt-link>
                  <a @click="logout">خروج</a>
                </div>
              </div>
              <div v-else>
                <a class="drop-down navigation-bar-item">
                  حساب کاربری
                  <i class="fa fa-caret-down"></i>
                </a>
                <div v-if="isPatient">
                  <nuxt-link
                    @click.native="closeNav"
                    :to="{name:'patient-login'}"
                  >ورود به حساب کاربری</nuxt-link>
                  <nuxt-link @click.native="closeNav" :to="{name:'patient-register'}">عضویت در رسا</nuxt-link>
                </div>
                <div v-else>
                  <nuxt-link
                    @click.native="closeNav"
                    :to="{name:'doctors-login'}"
                  >ورود به حساب کاربری</nuxt-link>
                  <nuxt-link @click.native="closeNav" :to="{name:'doctors-register'}">عضویت در رسا</nuxt-link>
                </div>
              </div>-->
            </li>
            <li class="nav-item">
              <nuxt-link
                @click.native="closeNav"
                :to="{ name: 'doctors' }"
                class="navigation-bar-item"
              >لیست پزشکان</nuxt-link>
            </li>
            <!-- <li class="nav-item">
              <nuxt-link
                @click.native="closeNav"
                :to="{name:'privacy'}"
                class="navigation-bar-item"
              >قوانین</nuxt-link>
            </li>-->
            <li class="nav-item">
              <router-link
                @click.native="closeNav"
                to="/doctors/psychology"
                class="navigation-bar-item"
              >مشاوره روانشناسی</router-link>
            </li>
            <li class="nav-item" v-if="!is_corona_amum">
              <router-link
                @click.native="closeNav"
                to="/categories/medical-consultation-for-coronavirus/1141"
                class="navigation-bar-item"
              >مشاوره کرونا</router-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                @click.native="closeNav"
                :to="{ name: 'faq' }"
                class="navigation-bar-item"
              >سوالات متداول</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                @click.native="closeNav"
                :to="{ name: 'about' }"
                class="navigation-bar-item"
              >درباره رسا</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                @click.native="closeNav"
                :to="{ name: 'contact-us' }"
                class="navigation-bar-item"
              >تماس با ما</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navigation-bar-left">
        <!-- <nuxt-link
          class="navigation-bar-download-button"
          v-if="!isLanding"
          :to="{name:'patient-landing',hash:'#download'}"
        >دریافت اپلیکیشن</nuxt-link>-->
        <!-- <nuxt-link
          :to="{name:'charge'}"
          v-if="!isLanding"
          class="navigation-bar-button"
        >افزایش اعتبار</nuxt-link>-->
        <div v-if="isLanding !== true">
          <nuxt-link
            :to="{ name: 'charge' }"
            v-if="isPatient === true"
            class="navigation-bar-button"
          >افزایش اعتبار</nuxt-link>
          <nuxt-link
            :to="{ name: 'charge' }"
            v-if="isPatient === true"
            class="navigation-bar-button-mini"
          >
            <i class="fa fa-money"></i>
          </nuxt-link>
        </div>
        <div v-else>
          <nuxt-link
            :to="{ name: 'charge' }"
            v-if="isPatient === true"
            class="navigation-bar-button"
          >افزایش اعتبار</nuxt-link>
          <nuxt-link
            :to="{ name: 'charge' }"
            v-if="isPatient === true"
            class="navigation-bar-button-mini"
          >
            <i class="fa fa-money"></i>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'patient-landing' }"
            v-if="isPatient !== true"
            class="navigation-bar-button"
          >رِسای بیماران</nuxt-link>
          <nuxt-link
            :to="{ name: 'patient-landing' }"
            v-if="isPatient !== true"
            class="navigation-bar-button-mini"
          >
            <i class="fa fa-user"></i>
          </nuxt-link>
        </div>
      </div>
      <div class="nav-main" :class="{ active: menuActive }">
        <div class="nav-main__content" :class="{ active: menuActive }">
          <ul class="nav-main__list" :class="{ active: menuActive }">
            <!-- <li class="nav-main__list-item">
              <div v-if="user">
                <a class="drop-down">خوش اومدی {{user.firstName}}</a>
                <div v-if="isPatient">
                  <nuxt-link :to="{name:'patient-profile'}">پروفایل</nuxt-link>
                  <a @click="logout">خروج</a>
                </div>
                <div v-else>
                  <nuxt-link :to="{name:'patient-profile'}">پروفایل</nuxt-link>
                  <a @click="logout">خروج</a>
                </div>
              </div>
              <div v-else>
                <a class="drop-down"></a>
                <div v-if="isPatient">
                  <nuxt-link :to="{name:'patient-landing'}">عضویت در رسا</nuxt-link>
                </div>
                <div v-else>
                  <nuxt-link :to="{name:'LoginDoctor'}">ورود به حساب کاربری</nuxt-link>
                  <nuxt-link :to="{name:'doctors-register'}">عضویت در رسا</nuxt-link>
                </div>
              </div>
            </li>-->
            <nuxt-link
              @click.native="closeNav"
              v-if="user"
              class="nav-main__list-item"
              :class="{ active: menuActive }"
              :to="{ name: 'patient-profile' }"
            >خوش اومدی {{ user.firstName }}</nuxt-link>
            <nuxt-link
              v-else
              @click.native="closeNav"
              class="nav-main__list-item"
              :class="{ active: menuActive }"
              :to="{ name: 'patient-login' }"
            >ورود به حساب کاربری</nuxt-link>
            <template>
              <nuxt-link
                @click.native="closeNav"
                v-for="(item, index) in this.itemsList"
                :to="item.path"
                :key="index"
                class="nav-main__list-item"
                :class="{ active: menuActive }"
              >{{ item.name }}</nuxt-link>
            </template>
            <a
              v-if="user"
              class="nav-main__list-item"
              :class="{ active: menuActive }"
              @click="logout"
            >خروج</a>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isPatient: true,
      isLanding: true,
      menuActive: false,
      show: false,
      itemsList: []
    };
  },
  created() {
    if (!this.$route.name) {
      return;
    }
    if (this.$route.name.includes("patient")) {
      this.isPatient = true;
    } else {
      this.isPatient = false;
    }
  },
  mounted() {
    let that = this;
    document.onkeyup = function(e) {
      if (e.code === "Escape") {
        that.menuActive = false;
      }
    };
    this.$store.commit("patient/initialize_user");
    this.itemsList = [
      {
        name: "سامانه رسا",
        path: { name: "index" }
      },
      {
        name: "لیست پزشکان",
        path: { name: "doctors" }
      },
      // {
      //   name: "قوانین",
      //   path: { name: "privacy" }
      // },
      {
        name: "مشاوره روانشناسی",
        path: "/doctors/psychology"
      },
      ...(this.is_corona_amum
        ? []
        : [
            {
              name: "مشاوره کرونا",
              path: "/categories/medical-consultation-for-coronavirus/1141"
            }
          ]),
      {
        name: "سوالات متداول",
        path: { name: "faq" }
      },
      {
        name: "درباره رسا",
        path: { name: "about" }
      },
      {
        name: "تماس با ما",
        path: { name: "contact-us" }
      }
    ];
  },

  methods: {
    activateMenu: function() {
      this.menuActive = !this.menuActive;
    },
    closeNav() {
      this.menuActive = false;
    },
    logout() {
      this.$store.commit("patient/logout");
      this.$router.replace({ name: "patient-landing" });
      this.menuActive = false;
    }
  },
  computed: {
    user() {
      return this.$store.state.patient.user;
    },
    is_corona_amum() {
      if (process.server) {
        let referrer = this.$storage.getUniversal("referrer");
        return referrer && referrer.includes("corona_amum");
      }
      return this.$store.state.is_corona_amum;
    }
  }
};
</script>
