<style lang="scss" scoped>
.navigation-bar {
  top: 0;
  background-color: #f8fdfd !important;
  box-shadow: none !important;
  z-index: 98 !important;
  &.scrolled {
    // background-color: #fff !important;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2) !important;
  }
  .nuxt-link-active {
    color: $primary-color !important;
  }
}
</style>

<template>
  <section id="navigation">
    <div class="navigation-bar" :class="{scrolled:scrolled}">
      <div class="menu-icon" @click="toggleMenu">
        <span class="menu-icon__line menu-icon__line-left"></span>
        <span class="menu-icon__line"></span>
        <span class="menu-icon__line menu-icon__line-right"></span>
      </div>
      <div class="navigation-bar-right">
        <nuxt-link to="/" class="navigation-bar-logo">
          <v-img width="75px" alt="سامانه رسا" src="/img/corona-test/logo.png" />
        </nuxt-link>
        <div class="navigation-bar-items">
          <ul class="nav">
            <li class="nav-item" v-for="(item, index) in items" :key="index">
              <a v-scroll-to="item.to" class="navigation-bar-item">{{item.name}}</a>
            </li>
            <li class="nav-item">
              <nuxt-link to="/corona-test/tracking">پیگیری تست</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="navigation-bar-left">
        <div>
          <v-btn href="tel:02174471300" color="primary" outline round>تماس با پشتیبانی</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["items"],
  mounted() {
    this.$store.commit("patient/initialize_user");
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scrolled: false,
      itemsList: [
        {
          name: "سامانه رسا",
          path: { name: "index" },
        },
        {
          name: "لیست پزشکان",
          path: { name: "doctors" },
        },
        {
          name: "مشاوره روانشناسی",
          path: "/doctors/psychology",
        },
        {
          name: "سوالات متداول",
          path: { name: "faq" },
        },
        {
          name: "ثبت نام پزشکان",
          path: "/doctors/landing",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.$store.commit("showMenu");
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
  },
};
</script>
