<style lang="scss" scoped>
.custom-btn {
  background: #fff;
  height: 36px;
  margin: 6px 8px;
  width: 173px;
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 30px;
  transition: all 0.4s;
  box-shadow: 0 1px 16px -9px #000;
  color: #545456;
  svg {
    width: 58px;
    height: 48px;
    position: absolute;
    left: 5px;
    top: -9px;
    transition: all 0.4s;
    path {
      fill: #fbc02d;
    }
  }
  &:hover {
    background: #fbc02d;
    svg path {
      fill: #fff;
    }
  }
}
.dark {
  .custom-btn {
    background-color: #fbc02d;
    svg {
      path {
        fill: #fff;
      }
    }
    &:hover {
      background: #fff;
      svg path {
        fill: #fbc02d;
      }
    }
  }
}
</style>

<template>
  <div :class="theme">
    <nuxt-link v-if="to" class="custom-btn" :to="to">
      <slot></slot>
      <element-svg />
    </nuxt-link>
    <a v-else class="custom-btn">
      <slot></slot>
      <element-svg />
    </a>
  </div>
</template>
 

<script>
import elementSvg from "~/assets/svg/element.svg?inline";
export default {
  props: {
    to: {
      default: null
    },
    theme: {
      default: "light"
    }
  },
  components: {
    elementSvg
  }
};
</script>

