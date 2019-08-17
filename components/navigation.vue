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
.theme--dark.v-navigation-drawer {
  background: linear-gradient(to bottom, $primary-color, $secondary-color);
}
.logo {
  position: relative;
  height: 80px;
  svg {
    width: 140px;
    height: 140px;
    position: absolute;
    left: 0;
    top: -23px;
    path {
      fill: #fff;
    }
  }
}
.nav-bar {
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  height: max-content;
  margin: 0;
  padding: 0;
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
</style>

<template>
  <v-navigation-drawer v-model="showMenu" app dark right>
    <div class="logo">
      <resaaElement />
    </div>
    <ul class="nav-bar">
      <li class="nav-item">
        <div v-if="user">
          <a class="drop-down">
            خوش اومدی {{user.firstName}}
            <i class="fa fa-caret-down"></i>
          </a>
          <div v-if="isPatient">
            <router-link :to="{name:'patient-profile'}">پروفایل</router-link>
            <a @click="logout">خروج</a>
          </div>
          <div v-else>
            <router-link :to="{name:'patient-profile'}">پروفایل</router-link>
            <a @click="logout">خروج</a>
          </div>
        </div>
        <div v-else>
          <v-menu left :offset-y="true" bottom>
            <template v-slot:activator="{ on }">
              <a>
                <span>حساب کاربری</span>
                <i class="fa fa-caret-down"></i>
              </a>
            </template>
            <v-list class="register-dropdown">
              <v-list-tile>
                <v-list-tile-title>
                  <nuxt-link
                    :to="{name:isPatient?'patient-login':'doctors-login'}"
                  >ورود به حساب کاربری</nuxt-link>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-title>
                  <nuxt-link
                    :to="{name:isPatient?'patient-register':'doctors-register'}"
                  >عضویت در رسا</nuxt-link>
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{name:'doctors'}"
          class="navigation-bar-item"
        >لیست پزشکان</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{name:'privacy'}"
          class="navigation-bar-item"
        >قوانین</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{name:'faq'}"
          class="navigation-bar-item"
        >سوالات متداول</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{name:'about'}"
          class="navigation-bar-item"
        >درباره رسا</router-link>
      </li>
      <li class="nav-item">
        <router-link
          @click.native="closeNav"
          :to="{name:'contact-us'}"
          class="navigation-bar-item"
        >تماس با ما</router-link>
      </li>
    </ul>
  </v-navigation-drawer>
</template>
<script>
import resaaElement from "@/assets/svg/element.svg?inline";
export default {
  components: {
    resaaElement
  },
  data() {
    return {
      isPatient: true
    };
  },
  methods: {
    closeNav() {
      this.showMenu = false;
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
    }
  }
};
</script>
