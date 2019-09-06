<style lang="scss" scoped>
.social-wrapper {
  height: 190px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto;
  font-size: 30px;
  .icon-wrapper {
    svg {
      width: 30px;
      height: 30px;
      path {
        fill: #64788b;
      }
    }
    a + a {
      margin-right: 30px;
    }
  }
}
</style>


<template>
  <section>
    <div class="social-wrapper">
      <div>
        <span class="secondary--text">این پزشک</span>
        <span>را به آشنایان معرفی کنید</span>
      </div>
      <div class="icon-wrapper">
        <a
          :href="`https://twitter.com/intent/tweet/?text=${text}&url=${url}`"
          target="_blank"
          rel="noopener"
        >
          <twitter class="twitter-hover-svg" />
        </a>
        <a>
          <instagram class="instagram-hover-svg" />
        </a>
        <a :href="`https://facebook.com/sharer/sharer.php?u=${url}`" target="_blank" rel="noopener">
          <facebook class="facebook-hover-svg" />
        </a>
        <a
          :href="`https://telegram.me/share/url?text=${text}&url=${url}`"
          target="_blank"
          rel="noopener"
        >
          <telegram class="telegram-hover-svg" />
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import telegram from "~/assets/svg/telegram.svg?inline";
import facebook from "~/assets/svg/facebook.svg?inline";
import instagram from "~/assets/svg/instagram.svg?inline";
import twitter from "~/assets/svg/twitter.svg?inline";
export default {
  props: {
    doctor: {}
  },
  components: {
    telegram,
    facebook,
    instagram,
    twitter
  },
  computed: {
    url() {
      return `${process.env.SITE_URL}${this.$route.fullPath}`;
    },
    text() {
      return `مشاوره تلفنی با ${this.doctor.title} ${this.doctor.firstName} ${this.doctor.lastName} متخصص ${this.doctor.specialty.title} را در سامانه رسا  به شما پیشنهاد می کنم.`;
    }
  }
};
</script>