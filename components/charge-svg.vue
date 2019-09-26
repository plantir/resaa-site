<style lang="scss" scoped>
svg {
  width: 100%;
  height: auto;
}
</style>
<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="214.791"
      height="152.425"
      viewBox="0 0 214.791 152.425"
    >
      <defs>
        <linearGradient
          :id="_uid"
          x1="0.942"
          y1="0.105"
          x2="-0.321"
          y2="2.241"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" :stop-color="color[0]" />
          <stop offset="1" :stop-color="color[1]" />
        </linearGradient>
      </defs>
      <g id="Group_51" data-name="Group 51" transform="translate(0 -1)">
        <path
          id="Path_135"
          data-name="Path 135"
          d="M40.148,0H174.643A40.119,40.119,0,0,1,214.79,40.09c0,23.467-.157,65.072,0,65.33,0,0-54.778,19.8-108.475,19.8S0,105.421,0,105.421V40.09A40.119,40.119,0,0,1,40.148,0Z"
          transform="translate(0 1)"
          :fill="`url(#${_uid})`"
        />
        <path
          id="Path_139"
          data-name="Path 139"
          d="M1199.572,400.537s-32.164-9.931-64.169-6.038-44.52,22.211-82.175,23.721-68.446-17.683-68.446-17.683v34.042l214.79,3.78Z"
          transform="translate(-984.781 -308.213)"
          fill="#fff"
          opacity="0.371"
        />
        <path
          id="Path_140"
          data-name="Path 140"
          d="M985,387.61s35.9-5.749,89.42,3.467,124.648,33.4,124.648,33.4v26.912H985Z"
          transform="translate(-985 -297.963)"
          fill="#fff"
          opacity="0.223"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      default: ["#0ec7e6", "#28db9a"]
    }
  }
};
</script>