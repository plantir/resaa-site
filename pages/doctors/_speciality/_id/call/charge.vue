<style lang="scss" scoped>
</style>

<template>
  <section>
    <v-card class="mt-3">
      <h1>برای تماس با پزشک لازم است شماره موبایل خود را وارد کنید.</h1>
      <v-layout row wrap>
        <v-flex xs2>
          <span>شماره موبایل</span>
        </v-flex>
        <v-flex xs10>
          <v-text-field name="name" outline label="label" id="id"></v-text-field>
        </v-flex>
      </v-layout>
    </v-card>
    <v-card class="mt-3">
      <div>
        شماره موبایل شما نزد رسا امانت است و برای برقراری ارتباط با پزشک استفاده می شود.
        پزشک شماره تماس شما را نخواهد دید و هویت شما کاملا محرمانه می ماند.
      </div>
    </v-card>
  </section>
</template>

<script>
export default {};
</script>