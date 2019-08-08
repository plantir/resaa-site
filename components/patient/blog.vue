<style lang="scss" scoped>
section {
  display: flex;
  max-width: 1370px;
  margin: 0 auto;
  height: 500px;
  align-items: center;
  > div {
    flex: 0 0 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .left-pane {
    img {
      max-width: 550px;
    }
  }
  .right-pane {
    align-items: flex-start;
    .header {
      img {
        max-width: 320px;
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
