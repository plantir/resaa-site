<style lang="scss" scoped>
.comments-section-container {
  padding: 70px 0;
  background-color: white;
  height: 700px;
}

.section-title {
  background-image: linear-gradient(10deg, #33e4ea, #00b2ed);
  font-weight: 500;
  text-align: center;
  font-size: 1.75rem;
  -webkit-background-clip: text;
  margin-bottom: 15px;
  -webkit-text-fill-color: transparent;
}

.section-description {
  color: #777590;
  text-align: center;
  font-style: normal;
  font-size: 1.675rem;
  font-weight: 300;
  margin-bottom: 50px;
}
</style>

<template>
  <div class="comments-section-container">
    <div class="section-title">مزایای استفاده از رِسا</div>
    <div class="section-description">پزشکان در مورد رسا چه میگویند؟</div>
    <resaa-swiper />
  </div>
</template>

<script>
import ResaaSwiper from "./ResaaSwiper";
export default {
  name: "comments",
  components: {
    ResaaSwiper
  }
};
</script>

