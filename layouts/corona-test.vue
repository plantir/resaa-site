<style lang="scss" scoped>
main {
  padding: 0 20px;
  @include media(md-and-up) {
    padding: 0 100px;
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
          to: { el: "#FirstFord", offset: -200 }
        },
        {
          name: "علائم شایع کرونا",
          to: { el: "#Symptoms", offset: -100 }
        },
        {
          name: "تست آنتی بادی",
          to: { el: "#AntyBody", offset: -100 }
        },
        {
          name: "تست PCR",
          to: { el: "#Pcr", offset: -100 }
        },
        {
          name: "رزرو تست کرونا",
          to: { el: "#PriceBox", offset: -100 }
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
