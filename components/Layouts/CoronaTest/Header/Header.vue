<style lang="scss">
#navigation {
  .navigation-bar {
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 100;
    direction: rtl;
    text-align: right;
    padding: 0 100px;
    // background-color: #ffffff;
    // box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.2);
    height: 70px;
    line-height: 70px;
  }

  .navigation-bar-logo {
    display: inline-flex;
    img {
      height: 40px;
    }
  }

  .menu-icon {
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    $size: 30px;
    height: $size;
    width: $size;
    z-index: 2;
    cursor: pointer;
    direction: ltr;

    &__line {
      height: 2px;
      width: $size;
      display: block;
      background-color: #35d6c1;
      transition: transform 0.2s ease, background-color 0.5s ease;

      &.active {
        transform: translateX(0px) rotate(-45deg);
        background-color: #00aae2;
      }
    }

    &__line-left {
      width: $size / 2;

      &.active {
        transform: translateX(2px) translateY(2px) rotate(45deg);
      }
    }

    &__line-right {
      width: $size / 2;
      align-self: flex-end;

      &.active {
        transform: translateX(-2px) translateY(-3px) rotate(45deg);
      }
    }
  }

  .nav {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-right: 32px;
    .nav-item {
      display: flex;
      align-items: center;
      a {
        background: none;
        color: inherit;

        &:hover {
          color: $bright-sky-blue;
        }
      }
    }
  }
}
</style>

<template>
  <section id="navigation">
    <div class="navigation-bar">
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
              <nuxt-link :to="{ name: 'faq' }" class="navigation-bar-item">{{item.name}}</nuxt-link>
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
  data() {
    return {
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
    }
  }
};
</script>
