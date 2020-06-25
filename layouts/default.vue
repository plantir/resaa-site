<style lang="scss" >
.v-overlay {
  z-index: 999;
}
</style>
<template>
  <v-app>
    <app-navigation></app-navigation>
    <header>
      <app-header></app-header>
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
import appNavigation from "~/components/navigation.vue";
import appHeader from "~/components/header/header";
import appFooter from "~/components/footer/footer";
export default {
  head() {
    return {
      htmlAttrs: {
        lang: "fa-IR",
        dir: "rtl"
      }
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
