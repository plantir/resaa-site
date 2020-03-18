<style lang="scss" scoped>
// .nav-bar {
//   display: flex;
//   align-items: center;
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   li {
//     margin: 0 16px;
//   }
//   a {
//     color: #fff;
//     padding: 16px 0;
//     font-weight: 300;
//     transition: color 0.2s ease-in;
//     &:hover,
//     &.active {
//       color: $primary-color;
//     }
//   }
// }
.v-navigation-drawer {
  display: flex;
  flex-direction: column;
}
.theme--dark.v-navigation-drawer {
  background: linear-gradient(to bottom, #26d295, #0dbed9);
}
.logo {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-bottom: 20px;
  > div {
    display: flex;
    flex-direction: column;
    color: #fff;
    span:first-child {
      font-size: 21.5px;
    }
  }
  svg {
    width: 80px;
    height: auto;
    path {
      fill: #fff;
    }
  }
}
.nav-bar {
  flex-direction: column;
  display: flex;
  height: max-content;
  margin: 0;
  padding: 0;
  flex: 1;
  li.nav-item {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0 36px;
    font-size: 1.275rem;
    a {
      color: #fff;
    }
  }
}
.footer {
  display: flex;
  justify-content: space-between;
  color: #fff;
  height: 60px;
  align-items: center;
  font-size: 16px;
  padding: 0 36px;
}
</style>

<template>
  <v-navigation-drawer v-model="showMenu" app dark right temporary absolute>
    <div class="logo">
      <Logo />
      <div>
        <span>سامانه رســـــا</span>
        <span>ارتباط تلفنی پزشک و بیمار</span>
      </div>
    </div>
    <ul class="nav-bar">
      <li class="nav-item">
        <router-link @click.native="closeNav" to="/" class="navigation-bar-item">سامانه رسا</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{ name: user ? 'patient-profile' : 'patient-login' }"
          class="navigation-bar-item"
        >حساب کاربری</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{ name: 'doctors' }"
          class="navigation-bar-item"
        >لیست پزشکان</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{name:'privacy'}"
          class="navigation-bar-item"
        >قوانین</router-link>
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
        <router-link
          @click.native="closeNav"
          :to="{ name: 'faq' }"
          class="navigation-bar-item"
        >سوالات متداول</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{ name: 'about' }"
          class="navigation-bar-item"
        >درباره رسا</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{ name: 'contact-us' }"
          class="navigation-bar-item"
        >تماس با ما</router-link>
      </li>
    </ul>
    <div class="footer">
      <span>شماره پشتیبانی</span>
      <span>۰۲۱-۷۴۴۷۱۳۰۰</span>
    </div>
  </v-navigation-drawer>
</template>
<script>
import resaaElement from "@/assets/svg/element.svg?inline";
import Logo from "@/assets/svg/logo.svg?inline";
export default {
  components: {
    resaaElement,
    Logo
  },
  data() {
    return {
      isPatient: true
    };
  },
  methods: {
    closeNav() {
      this.showMenu = false;
    },
    logout() {
      this.$store.commit("patient/logout");
      this.$router.replace({ name: "patient-landing" });
      this.menuActive = false;
    }
  },
  computed: {
    showMenu: {
      get() {
        return this.$store.state.showMenu;
      },
      set(val) {
        this.$store.commit("changeMenu", val);
      }
    },
    user() {
      return this.$store.state.patient.user;
    },
    is_corona_amum() {
      return this.$store.state.is_corona_amum;
    }
  }
};
</script>
