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
  z-index: 1000;
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
.v-list {
  flex: 1;
  background: none;
  .nav-main__list-item {
    color: #fff;
    font-size: 1.275rem;
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
  <v-navigation-drawer v-model="showMenu" app dark right temporary>
    <div class="logo">
      <Logo />
      <div>
        <span>سامانه رســـــا</span>
        <span>ارتباط تلفنی پزشک و بیمار</span>
      </div>
    </div>
    <v-list>
      <v-list-tile v-if="user">
        <v-list-tile-content>
          <nuxt-link
            @click.native="closeNav"
            class="nav-main__list-item"
            :to="{ name: 'patient-profile' }"
          >خوش اومدی {{ user.firstName }}</nuxt-link>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-else>
        <v-list-tile-content>
          <nuxt-link
            @click.native="closeNav"
            class="nav-main__list-item"
            :to="{ name: 'patient-login' }"
          >ورود به حساب کاربری</nuxt-link>
        </v-list-tile-content>
      </v-list-tile>
      <template v-for="(item, index) in itemsList">
        <v-list-group :key="index" v-if="item.children" no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(child,i) in item.children" :key="i">
            <v-list-tile-content>
              <nuxt-link
                @click.native="closeNav"
                :to="child.path"
                class="nav-main__list-item"
              >{{ child.name }}</nuxt-link>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="index">
          <v-list-tile-content>
            <nuxt-link
              @click.native="closeNav"
              :to="item.path"
              class="nav-main__list-item"
            >{{ item.name }}</nuxt-link>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
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
    Logo,
  },
  data() {
    return {
      isPatient: true,
      itemsList: [
        {
          name: "سامانه رسا",
          path: { name: "index" },
        },
        {
          name: "لیست پزشکان",
          path: { name: "doctors" },
        },
        // {
        //   name: "قوانین",
        //   path: { name: "privacy" }
        // },
        {
          name: "مشاوره روانشناسی",
          path: "/doctors/psychology",
        },
        {
          name: "کرونا",
          children: [
            {
              name: "تست کرونا در منزل",
              path: "/corona-test",
            },
            {
              name: "مشاوره کرونا",
              path: "/categories/medical-consultation-for-coronavirus/1141",
            },
            {
              name: "تخصص من رایگان",
              path: "/categories/free-speciality-consultant/1148",
            },
            {
              name: "مشاوره روانشناسی قرنطینه",
              path: "/categories/quarantine-free-psychotherapy/1143",
            },
          ],
        },
        {
          name: "سوالات متداول",
          path: { name: "faq" },
        },
        {
          name: "درباره رسا",
          path: { name: "about" },
        },
        {
          name: "تماس با ما",
          path: { name: "contact-us" },
        },
        {
          name: "ثبت نام پزشکان",
          path: "/doctors/landing",
        },
      ],
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
    },
  },
  computed: {
    showMenu: {
      get() {
        return this.$store.state.showMenu;
      },
      set(val) {
        this.$store.commit("changeMenu", val);
      },
    },
    user() {
      return this.$store.state.patient.user;
    },
    is_corona_amum() {
      if (process.server) {
        let referrer = this.$storage.getUniversal("referrer");
        return referrer && referrer.includes("corona_amum");
      }
      return this.$store.state.is_corona_amum;
    },
  },
};
</script>
