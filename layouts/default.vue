<template>
  <v-app>
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
import appHeader from "~/components/header/header";
import appFooter from "~/components/footer/footer";
export default {
  components: {
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
