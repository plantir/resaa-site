
<style lang="scss" scoped>
.telegram-section-patients-container {
  direction: rtl;
  min-height: 200px;
  // background-color: white;
  background-image: url("social-networks.jpg");
  background-color: whitesmoke;
  background-size: contain;
  background-position-x: left;
  background-position-y: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 150px;
  overflow: hidden;
  @include respond-to(xl) {
    padding-right: 50px;
  }
  @include respond-to(lg) {
    padding-right: 10px;
  }
  // @include respond-to(md) {
  //   background-image: url("social-networks-m.jpg");
  // }
}

.telegram-title {
  color: #27d3df;
  font-size: 2.375rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.telegram-description {
  margin-bottom: 30px;
  color: #777590;
  font-size: 1.275rem;
}
.link-wrapper {
  display: flex;
  justify-content: space-between;
  width: 320px;
  a {
    display: inline-flex;
    align-items: center;
    &:hover {
      color: $primary-color;
    }
  }
  svg {
    margin-left: 8px;
    path {
      fill: $primary-color;
    }
  }
}
.link {
  cursor: pointer;
  color: #aaa;
  i {
    color: #27d3df;
  }
}

@include respond-to(md) {
  .telegram-section-patients-container {
    background-image: url("social-networks-m.jpg");
    padding: 0;
    align-items: center;
    padding-left: 90px;
    padding-right: 30px;
    background-size: cover;
    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
  .link-wrapper {
    flex-direction: column;
  }
  .link {
    color: #fff;
    i {
      color: #fff;
      margin-left: 6px;
    }
    + .link {
      margin-top: 4px;
    }
  }

  .telegram-title {
    font-size: 1.475rem !important;
  }

  .telegram-button {
    background-color: white;
    color: #2ba3e5;
  }

  .telegram-description {
    color: white;
    font-size: 1rem;
    text-align: justify;
    padding-left: 12px;
    // b {
    //   font-weight: 600;
    // }
  }
}
</style>

<template>
  <div class="telegram-section-patients-container">
    <div class="content">
      <h2 class="telegram-title">رِسا در شبکه های اجتماعی</h2>
      <p class="telegram-description">
        از طریق کانال
        <b>تلگرام</b>
        و
        <b>اینستاگرام</b>
        با
        <b>رِسا</b>
        در ارتباط باشید
      </p>
      <div class="link-wrapper">
        <a href="https://www.instagram.com/resaanet/" rel="nofllow" target="_blank" class="link">
          <instagram />
          <span>resaa.medical</span>
        </a>
        <a href="https://t.me/pezeshkeresaa" rel="nofllow" target="_blank" class="link">
          <telegram />
          <span>pezeshkeresaa</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import telegram from "~/assets/svg/telegram.svg?inline";
import instagram from "~/assets/svg/instagram.svg?inline";
export default {
  components: { telegram, instagram }
};
</script>
