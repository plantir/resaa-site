<style lang="scss" scoped>
</style>
<template>
  <section>
    <FirstFord />
    <Symptoms />
    <AntyBody />
    <Pcr />
  </section>
</template>
<script>
import FirstFord from "@/components/Pages/CoronaTest/FirstFord/FirstFord.vue";
import Symptoms from "@/components/Pages/CoronaTest/Symptoms/Symptoms.vue";
import AntyBody from "@/components/Pages/CoronaTest/AntyBody/AntyBody.vue";
import Pcr from "@/components/Pages/CoronaTest/Pcr/Pcr.vue";
export default {
  layout: "corona-test",
  components: {
    FirstFord,
    Symptoms,
    AntyBody,
    Pcr
  }
};
</script>