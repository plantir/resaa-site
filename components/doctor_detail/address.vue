<style lang="scss" scoped>
.v-card {
  padding: 50px 70px !important;
  .resaa-element {
    width: 480px;
    height: 320px;
    position: absolute;
    left: -3px;
    top: 0px;
    opacity: 0.1;
    fill: $secondary-color;
  }
}
.title {
  margin-bottom: 40px !important;
}
.address-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  font-size: 16px;
  .address {
    padding-right: 32px;
    position: relative;
    min-height: 24px;
    align-items: center;
    display: flex;
    flex: 1;
    svg {
      position: absolute;
      display: inline-block;
      right: 0;
      top: 0;
      path {
        fill: $primary-color;
      }
    }
  }
  .phone {
    padding-right: 32px;
    position: relative;
    align-items: center;
    display: flex;
    height: 24px;
    margin-left: 16px;
    .phone-number {
      direction: ltr;
      margin-right: 5px;
    }
    svg {
      position: absolute;
      display: inline-block;
      right: 0;
      top: 0;
      path {
        fill: $primary-color;
      }
    }
  }
  + .address-item {
    margin-top: 8px;
  }
}
.social-media {
  display: flex;
  width: 50%;
  align-items: center;
  @include media(md) {
    flex-direction: column;
    width: 100%;
    > div {
      width: 100%;
    }
  }
  .fa {
    margin-right: 2px;
  }
  > div {
    display: flex;
    align-items: center;
  }
  > div + div {
    margin-right: 25px;
    @include media(md) {
      margin-right: 0;
      margin-top: 8px;
    }
  }
}
</style>
<template>
  <section>
    <v-card>
      <resaaElement class="resaa-element" />
      <div class="title">اطلاعات مطب پزشک</div>
      <div class="address-item" v-for="(workplace,index) in doctor.workplaces" :key="index">
        <div class="address">
          <location />
          {{workplace.street}}
        </div>
        <div class="phone">
          <phone />
          <span>مطب :</span>
          <span class="phone-number">{{workplace.phoneNumber | persianDigit}}</span>
        </div>
        <div>{{workplace.description}}</div>
      </div>
      <div class="social-media">
        <div>
          <img src="~assets/img/Web-Icon.png" class="doctor-link-web-color" />
          <a href="#" class="doctor-link-web">www.doctor-domain.com</a>
        </div>
        <div>
          <img src="~assets/img/Instagram.png" class="doctor-link-instagram-color" />
          <a href="#" class="doctor-link-instagram">dr-test</a>
        </div>
        <div>
          <img src="~assets/img/Telegram.png" class="doctor-link-telegram-color" />
          <a href="#" class="doctor-link-telegram">@dr-test</a>
        </div>
      </div>
    </v-card>
  </section>
</template> 
<script>
import resaaElement from "~/assets/svg/element.svg?inline";
import location from "~/assets/svg/location.svg?inline";
import phone from "~/assets/svg/phone_fill.svg?inline";

export default {
  props: { doctor: {} },
  components: { resaaElement, location, phone }
};
</script>