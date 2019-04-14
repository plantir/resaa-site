<style lang="scss" scoped>
#loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
}
img {
  max-width: 100px;
}
</style>
<template>
  <no-ssr>
    <section id="loader">
      <div class="loader-wrapper">
        <img src="./loader.gif" alt>
      </div>
    </section>
  </no-ssr>
</template>
<script>
export default {
  props: ["mode"],
  mounted() {
    if (this.mode == "relative") {
      this.$el.parentElement.style = "position:relative;min-height:300px";
      // this.$el.parentElement.style = "";
    }
  }
};
</script>
