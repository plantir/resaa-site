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
    <div id="15434159979328163">
      <v-loading></v-loading>
      <script
        type="text/JavaScript"
        src="https://www.aparat.com/embed/datup?data[rnddiv]=15434159979328163&data[responsive]=yes"
      ></script>
    </div>
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
