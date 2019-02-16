<template>
  <section>
    <app-header></app-header>
    <nuxt dir="rtl"/>
    <app-footer></app-footer>
  </section>
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
