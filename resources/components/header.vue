<style lang="scss">
section#header {
  position: absolute;
  width: 100%;
  z-index: 2;
  .logo {
    max-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 64px;
    flex: 0 0 90px;
    img {
      max-width: 100%;
    }
  }
  .nav-bar {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
    li {
      margin: 0 16px;
    }
    a {
      color: #fff;
      padding: 16px 0;
      font-weight: 300;
      transition: color 0.2s ease-in;
      &:hover,
      &.active {
        color: $primary-color;
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
</style>

<template>
  <section id="header">
    <v-container>
      <v-layout row>
        <div class="logo">
          <img src="~assets/img/logo.png" alt>
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
                        :to="{name:isPatient?'patient-landing':'doctors-register'}"
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
      </v-layout>
    </v-container>
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
    user() {
      return this.$store.state.patient.user;
    }
  }
};
</script>
