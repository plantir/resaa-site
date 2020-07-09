<style lang="scss" scoped>
</style>
<template>
  <section>
    <FirstFord />
    <Symptoms />
  </section>
</template>
<script>
import FirstFord from "@/components/Pages/CoronaTest/FirstFord/FirstFord.vue";
import Symptoms from "@/components/Pages/CoronaTest/Symptoms/Symptoms.vue";
export default {
  layout: "corona-test",
  components: {
    FirstFord,
    Symptoms
  }
};
</script>