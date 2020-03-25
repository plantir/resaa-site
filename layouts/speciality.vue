<style lang="scss">
#speciality {
  .v-content {
    background: var(--bg-color);
  }
  header + main {
    margin-top: 0px;
  }
}
</style>

<template>
  <v-app dir="rtl" id="speciality">
    <app-navigation></app-navigation>
    <v-content>
      <header>
        <app-header></app-header>
      </header>
      <main>
        <nuxt />
      </main>
    </v-content>
    <footer>
      <app-footer></app-footer>
    </footer>
  </v-app>
</template>

<script>
import appNavigation from "~/components/navigation.vue";
import appHeader from "~/components/header.vue";
import appFooter from "~/components/footer/footer";
export default {
  components: {
    appNavigation,
    appHeader,
    appFooter
  },
  mounted() {
    if (this.$route.query.utm_campaign == "corona_amum") {
      this.$store.commit("corona_amum");
    }
  }
};
</script>
