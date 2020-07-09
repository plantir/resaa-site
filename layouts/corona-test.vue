<style lang="scss" scoped>
main {
  padding: 0 20px;
  margin-top: 90px;
  @include media(md-and-up) {
    padding: 0 100px;
    margin-top: 150px;
  }
}
.application {
  background: #f8fdfd;
}
</style>
<template>
  <v-app>
    <app-navigation :items="itemsList"></app-navigation>
    <header>
      <app-header :items="itemsList"></app-header>
    </header>
    <main>
      <nuxt dir="rtl" keep-alive :key="$route.fullPath" />
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </v-app>
</template>

<script>
import appNavigation from "@/components/Layouts/CoronaTest/Header/Navigation.vue";
import appHeader from "@/components/Layouts/CoronaTest/Header/Header.vue";
import appFooter from "@/components/Layouts/CoronaTest/Footer/Footer";
export default {
  head() {
    return {
      htmlAttrs: {
        lang: "fa-IR",
        dir: "rtl"
      }
    };
  },
  data() {
    return {
      itemsList: [
        {
          name: "تست ویروس کرونا در منزل",
          path: { name: "index" }
        },
        {
          name: "علائم شایع کرونا",
          path: { name: "doctors" }
        },
        {
          name: "تست آنتی بادی",
          path: "/doctors/psychology"
        },
        {
          name: "تست PCR",
          path: { name: "faq" }
        },
        {
          name: "رزرو تست کرونا",
          path: { name: "about" }
        }
      ]
    };
  },
  components: {
    appNavigation,
    appHeader,
    appFooter
  }

  // data() {
  //   return {
  //     clipped: false,
  //     drawer: false,
  //     fixed: false,
  //     items: [
  //       {
  //         icon: "apps",
  //         title: "Welcome",
  //         to: "/"
  //       },
  //       {
  //         icon: "bubble_chart",
  //         title: "Inspire",
  //         to: "/inspire"
  //       }
  //     ],
  //     miniVariant: false,
  //     right: true,
  //     rightDrawer: false,
  //     title: "Vuetify.js"
  //   };
  // }
};
</script>
