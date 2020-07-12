<style lang="scss">
section#header {
  position: absolute;
  // overflow: hidden;
  width: 100%;
  z-index: 2;
  .header-container {
    display: flex;
    padding: 0 36px;
    @include media(sm) {
      justify-content: space-between;
      flex-direction: row-reverse;
      padding: 0px;
    }
  }
  .logo {
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 64px;
    flex: 0 0 90px;
    @include media(md) {
      flex: 0 0 60px;
      margin-left: 14px;
    }
    a {
      display: flex;
      align-items: center;
    }
    img {
      max-width: 100%;
    }
  }
  .navicon {
    display: none;
    @include media(sm) {
      display: inline-flex;
      width: 40px;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      svg {
        width: auto;

        height: auto;
      }
    }
  }
  .nav-bar {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1;
    @include media(sm) {
      display: none;
    }
    li {
      margin: 0 16px;
    }
    a {
      color: #fff;
      padding: 16px 0;
      font-weight: medium;
      transition: color 0.2s ease-in;
      text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
      &:hover,
      &.active {
        color: $primary-color;
      }
    }
  }
  .left-nav {
    display: flex;
    align-items: center;
    color: #fff;
    @include media(sm) {
      display: none;
    }
    .support {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      margin-left: 24px;
    }
  }
  .v-menu {
    .v-menu__content {
      contain: inherit;
      overflow: inherit;
      &::before {
        content: "";
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #fff;
        position: absolute;
        top: -7px;
        right: 12px;
      }
    }
    .v-list {
      a {
        color: #999 !important;
        text-shadow: none;
        &:hover {
          color: $primary-color !important;
        }
      }
    }
  }
}
.register-dropdown {
  .v-list__tile {
    font-size: 1rem;
    height: 32px;
  }
}
// .drop-down {
//   cursor: default;
//   ~ div {
//     display: none;
//     position: absolute;
//     flex-direction: column;
//     min-width: 180px;
//     background: #fff;
//     padding: 8px 16px;
//     box-shadow: 0 0 21px -7px #bbb;
//     a {
//       text-decoration: none;
//       color: #333 !important;
//       cursor: pointer;
//     }
//     &:hover {
//       display: flex;
//     }
//   }
//   &:hover {
//     ~ div {
//       display: flex;
//     }
//   }
// }
// @media only screen and (max-width: 768px) {
//   section#header {
//     .show-mobile {
//       display: block;
//     }
//     aside {
//       height: 100vh !important;
//     }
//     aside.v-navigation-drawer.v-navigation-drawer--absolute.v-navigation-drawer--open.v-navigation-drawer--temporary.theme--dark {
//       height: 100vh !important;
//       position: fixed;
//       left: unset;
//       right: 0;
//       .nav-bar {
//         flex-direction: column;
//         justify-content: space-around;
//         display: flex;
//         height: max-content;
//         li.nav-item {
//           width: 100%;
//           height: 60px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin: 0;
//         }
//       }
//     }
//     .v-overlay {
//       position: fixed;
//       height: 100vh;
//     }
//     .nav-bar-mobile {
//       display: flex;
//       margin-left: 15px;
//     }
//   }
// }
</style>

<template>
  <section id="header">
    <v-container fluid>
      <div class="header-container">
        <div class="navicon" @click="toggleMenu">
          <Nav v-if="!showMenu" />
          <Close v-else />
        </div>
        <div class="logo">
          <nuxt-link to="/">
            <img src="~assets/img/logo.png" alt />
          </nuxt-link>
        </div>
        <ul class="nav-bar">
          <li class="nav-item">
            <router-link to="/" class="navigation-bar-item">سامانه رسا</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'doctors' }" class="navigation-bar-item">لیست پزشکان</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/doctors/psychology" class="navigation-bar-item">روانشناسی</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link
              to="/categories/medical-consultation-for-coronavirus/1141"
              class="navigation-bar-item"
            >مشاوره کرونا</router-link>
          </li>-->
          <li class="nav-item">
            <!-- <router-link
              to="/categories/medical-consultation-for-coronavirus/1141"
              class="navigation-bar-item"
            >مشاوره کرونا</router-link>-->
            <v-menu open-on-hover bottom attach left nudge-bottom="50px" nudge-right="10px">
              <template v-slot:activator="{ on }">
                <a v-on="on">کرونا</a>
              </template>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title>
                    <nuxt-link to="/corona-test" class="navigation-bar-item">تست کرونا در منزل</nuxt-link>
                  </v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>
                    <nuxt-link
                      to="/categories/medical-consultation-for-coronavirus/1141"
                      class="navigation-bar-item"
                    >مشاوره رایگان کرونا</nuxt-link>
                  </v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>
                    <nuxt-link
                      to="/categories/free-speciality-consultant/1148"
                      class="navigation-bar-item"
                    >تخصص من رایگان</nuxt-link>
                  </v-list-tile-title>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-title>
                    <nuxt-link
                      to="/categories/quarantine-free-psychotherapy/1143"
                      class="navigation-bar-item"
                    >مشاوره روانشناسی قرنطینه</nuxt-link>
                  </v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <!-- <div>
              <a class="drop-down">
                کرونا
                <i class="fa fa-caret-down"></i>
              </a>
              <div>
                <nuxt-link
                  @click.native="closeNav"
                  to="/categories/medical-consultation-for-coronavirus/1141"
                  class="navigation-bar-item"
                >مشاوره رایگان کرونا</nuxt-link>
                <nuxt-link
                  @click.native="closeNav"
                  to="/categories/free-speciality-consultant/1148"
                  class="navigation-bar-item"
                >تخصص من رایگان</nuxt-link>
                <nuxt-link
                  @click.native="closeNav"
                  to="/categories/quarantine-free-psychotherapy/1143"
                  class="navigation-bar-item"
                >مشاوره روانشناسی قرنطینه</nuxt-link>
              </div>
            </div>-->
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'faq' }" class="navigation-bar-item">سوالات متداول</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/doctors/landing" class="navigation-bar-item">ثبت نام پزشکان</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="navigation-bar-item">درباره رسا</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact-us' }" class="navigation-bar-item">تماس با ما</router-link>
          </li>-->
        </ul>
        <div class="left-nav">
          <div class="support">
            <span>شماره پشتیبانی</span>
            <span>۰۲۱-۷۴۴۷۱۳۰۰</span>
          </div>
          <div>
            <v-btn
              :to="{ name: user ? 'patient-profile' : 'patient-login' }"
              color="white"
              outline
              round
            >حساب کاربری</v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import Nav from "@/assets/svg/nav.svg?inline";
import Close from "@/assets/svg/close.svg?inline";
export default {
  components: {
    Nav,
    Close
  },
  data() {
    return {
      isPatient: true
    };
  },
  mounted() {
    this.$store.commit("patient/initialize_user");
  },
  methods: {
    toggleMenu() {
      this.$store.commit("showMenu");
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
    showMenu() {
      return this.$store.state.showMenu;
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
