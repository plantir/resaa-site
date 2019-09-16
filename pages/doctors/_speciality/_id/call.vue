<style lang="scss" scoped>
</style>

<template>
  <v-container grid-list-xs>
    <section>
      {{e6}}
      <v-stepper v-model="e6" alt-labels>
        <v-stepper-header>
          <v-stepper-step step="۱" :complete="e6>1">Ad unit details</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="۲" :complete="e6>2">Ad sizes</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="۳" :complete="e6>3">Ad templates</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="۴">Ad templates</v-stepper-step>
        </v-stepper-header>
        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
          <v-btn flat>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      e6: null
    };
  }
};
</script>