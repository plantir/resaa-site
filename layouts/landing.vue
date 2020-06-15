
<style lang="scss">
.landing {
  height: 100vh;
}
</style>

<template>
  <v-app>
    <main>
      <section class="landing">
        <nuxt dir="rtl" />
      </section>
    </main>
  </v-app>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: "fa-IR",
        dir: "rtl"
      }
    };
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
