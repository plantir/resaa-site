<template>
  <section>
    <div>{{coronaTest}}</div>
    <div>{{result}}</div>
  </section>
</template>

<script>
export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
    $storage,
    $axios
  }) {
    let coronaTest = $storage.getUniversal("cronaTest");
    let result = { test: "test" };
    try {
      result = await $axios.$post(
        process.env.EXTRA_API_URL + "/corona-test/callback",
        {
          request_id: coronaTest.id,
          chargeRequestId: query.chargeRequestId
        }
      );
    } catch (error) {
      console.log(error);
    }

    return {
      coronaTest,
      result
    };
  },

  mounted() {
    // this.$axios
    //   .get(`/Charge/${this.$route.query.chargeRequestId}/Receipt`)
    //   .then(res => {})
    //   .catch(() => {});
  }
};
</script>