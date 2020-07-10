<style lang="scss" scoped>
.navigation-bar {
  background-color: #f8fdfd !important;
  box-shadow: none !important;
  &.scrolled {
    // background-color: #fff !important;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2) !important;
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
          <img alt="سامانه رسا" src="./logo.png" />
        </nuxt-link>
        <div class="navigation-bar-items">
          <ul class="nav">
            <li class="nav-item" v-for="(item, index) in items" :key="index">
              <a v-scroll-to="item.to" class="navigation-bar-item">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navigation-bar-left">
        <div>
          <v-btn href="tel:02174471300" color="secondary" outline round>تماس با پشتیبانی</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["items"],
  mounted() {
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
          path: { name: "index" }
        },
        {
          name: "لیست پزشکان",
          path: { name: "doctors" }
        },
        {
          name: "مشاوره روانشناسی",
          path: "/doctors/psychology"
        },
        {
          name: "سوالات متداول",
          path: { name: "faq" }
        },
        {
          name: "ثبت نام پزشکان",
          path: "/doctors/landing"
        }
      ]
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
    }
  }
};
</script>
