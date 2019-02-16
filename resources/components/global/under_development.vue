<style lang="scss" scoped>
section {
  max-width: 720px;
  margin: 0 auto;
  min-height: 400px;
  position: fixed;
  top: 15%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 9999;
  border: 2px solid #fff;
  img {
    max-width: 100%;
  }
  i.fa {
    position: absolute;
    top: 10px;
    left: 10px;
    background: red;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.back-drop {
  display: block;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.7;
  background-color: #000000;
  z-index: -1;
}
</style>
<template>
  <section>
    <img src="./under_development.gif" alt @click="close">
    <i class="fa fa-close" @click="close"></i>
    <div class="back-drop" @click="close"></div>
  </section>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit("closeModal");
    }
  }
};
</script>
