<style lang="scss" scoped>
.item-wrapper {
  display: flex;
  margin-top: 80px;
  flex-wrap: wrap;
}
.item {
  width: 100px;
  height: 100px;
  margin: 8px;
  display: flex;
  justify-content: center;
  img {
    max-width: 30px;
  }
}
</style>

<template>
  <div class="item-wrapper">
    <div class="item" v-for="item in 43" :key="item">
      <img :src="`/svg/${item}.svg`" :alt="item" :title="item" />
    </div>
  </div>
</template>

<script>
export default {};
</script>


