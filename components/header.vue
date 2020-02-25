<style lang="scss">
section#header {
  position: absolute;
  overflow: hidden;
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
}
.register-dropdown {
  .v-list__tile {
    font-size: 1rem;
    height: 32px;
  }
}

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
          <li class="nav-item">
            <router-link
              to="/categories/medical-consultation-for-coronavirus/1141"
              class="navigation-bar-item"
            >مشاوره پزشکی کرونا</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link :to="{name:'privacy'}" class="navigation-bar-item">قوانین</router-link>
          </li>-->
          <li class="nav-item">
            <router-link :to="{ name: 'faq' }" class="navigation-bar-item">سوالات متداول</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="navigation-bar-item">درباره رسا</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact-us' }" class="navigation-bar-item">تماس با ما</router-link>
          </li>
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
    }
  }
};
</script>
