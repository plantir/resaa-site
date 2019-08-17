<style lang="scss" scoped>
section {
  display: flex;
  max-width: 1370px;
  margin: 0 auto;
  min-height: 500px;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px 25px;
  @include media(sm) {
    flex-direction: column;
    min-height: auto;
  }
  > div {
    flex: 0 0 50%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @include media(sm) {
      width: 100%;
      flex: 0 0 100%;
      max-width: 400px;
    }
  }
  .left-pane {
    img {
      width: 550px;
      max-width: 100%;
    }
  }
  .right-pane {
    align-items: flex-start;
    .header {
      img {
        width: 320px;
        max-width: 100%;
      }
    }
    .blog-title {
      color: $primary-color;
      font-size: 1.875rem;
      font-weight: 400;
      margin-bottom: 6px;
    }
    .subtitle {
      color: #999;
      margin-bottom: 16px;
    }
    .v-btn {
      min-width: 157px;
      height: 30px;
    }
  }
}
</style>
<template>
  <section>
    <div class="right-pane">
      <div class="header">
        <img src="~assets/img/blog-logo.png" alt="بلاگ رسا" />
      </div>
      <div class="blog-title">مجله تخصصی پزشکی رِسا</div>
      <div class="subtitle">مرجعی معتبر برای مطالعه مقالات و دانستنی های پزشکی و سلامتی</div>
      <v-btn
        href="https://blog.resaa.net"
        target="_blank"
        color="yellow darken-2"
        depressed
        round
      >ورود به بلاگ</v-btn>
    </div>
    <div class="left-pane">
      <img src="~assets/img/blog-shelf.png" alt="بلاگ رسا" />
    </div>
  </section>
</template>
<script>
export default {};
</script>
