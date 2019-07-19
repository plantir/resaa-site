<style lang="scss">
#speciality {
  .v-content {
    background: #1c1f24;
  }
  .container {
    @media only screen and (min-width: 1264px) {
      max-width: 1480px;
    }
  }
}
</style>

<template>
  <v-app dir="rtl" id="speciality">
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
import appHeader from "~/components/header.vue";
import appFooter from "~/components/footer.vue";
export default {
  components: {
    appHeader,
    appFooter
  }
};
</script>
