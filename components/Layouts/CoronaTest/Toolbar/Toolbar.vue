<style lang="scss" scoped>
#corona-toolbar {
  bottom: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  width: 100%;
  height: auto;
  background: #056cc4;
  z-index: 999;
  padding: 8px 0;
  @include media(md-and-up) {
    justify-content: center;
    height: 40px;
    top: 0;
    bottom: auto;
  }
  div {
    max-width: 150px;
    margin-right: 50px;
    @include media(md-and-up) {
      margin-right: 0;
      max-width: 100%;
    }
  }
  a {
    color: #ffd155;
    margin-right: 30px;
    @include media(md-and-up) {
      margin-right: 150px;
    }
    // text-shadow: 0 0px 3px rgba(0, 0, 0, 0.16);
    &:after {
      content: "";
      background: #ffd155;
      width: 120%;
      height: 2px;
      border-radius: 100%;
      display: block;
      margin-top: 4px;
      left: 10%;
      position: relative;
    }
  }
  .v-btn {
    border-width: 2px;
  }
  .v-icon {
    position: absolute;
    right: 15px;
    @include media(md-and-up) {
      left: 30px;
      right: auto;
    }
  }
}
</style>
<template>
  <section id="corona-toolbar" v-if="show">
    <div
      v-if="$device.isDesktop"
    >از این پس می توانید با استفاده از سامانه رسا در منزل تست کرونا دهید!</div>
    <div v-else>با استفاده از سامانه رسا در منزل تست کرونا دهید!</div>
    <nuxt-link v-if="$device.isDesktop" to="/corona-test">رزرو تست کرونا</nuxt-link>
    <v-btn v-else to="/corona-test" color="#ffd155" outline round>رزرو تست کرونا</v-btn>
    <v-icon color="white" @click="hide">la-times</v-icon>
  </section>
</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  mounted() {
    if (this.$device.isDesktop) {
      document.querySelector("body").classList.add("has-corona-toolbar");
    }
  },
  methods: {
    hide() {
      this.show = false;
      if (this.$device.isDesktop) {
        document.querySelector("body").classList.remove("has-corona-toolbar");
      }
    }
  }
};
</script>