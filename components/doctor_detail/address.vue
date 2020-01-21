<style lang="scss" scoped>
.v-card {
  padding: 50px 70px !important;
  @include media(sm) {
    padding: 30px 20px !important;
  }
  .resaa-element {
    width: 300px;
    height: 200px;
    position: absolute;
    left: -3px;
    top: 0px;
    opacity: 0.1;
    fill: $secondary-color;
    @include media(sm) {
      display: none;
    }
  }
}
.section-title {
  margin-bottom: 40px !important;
  font-size: 21px;
  font-weight: 500;
  color: var(--grey-color);
  @include media(sm) {
    margin-bottom: 34px !important;
    text-align: center;
  }
}
.address-item {
  display: flex;
  // align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 14px;
  @include media(sm) {
    flex-direction: column;
    align-items: flex-start;
  }
  .workplace-title {
    display: flex;
    width: 100%;
    padding-right: 16px;
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
  }

  .address {
    padding-right: 32px;
    position: relative;
    min-height: 24px;
    align-items: center;
    display: flex;
    flex: 0 0 75%;
    p {
      margin: 0;
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
  .phone {
    padding-right: 32px;
    position: relative;
    align-items: center;
    display: flex;
    height: 24px;
    flex: 0 0 25%;
    @include media(sm) {
      margin-top: 16px;
      flex-direction: column;
      align-items: flex-start;
    }
    .phone-number {
      direction: ltr;
      margin-right: 5px;
      display: inline-block;
      margin-bottom: 0;
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
  .description {
    margin-right: 16px;
    margin-bottom: 0;
    @include media(sm) {
      margin-right: 0px;
    }
  }
  + .address-item {
    margin-top: 28px;
  }
}
.social-media {
  display: flex;
  width: 50%;
  align-items: center;
  margin-top: 28px;
  @include media(sm) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  > div {
    display: flex;
    align-items: center;
    + div {
      margin-right: 25px;
      @include media(sm) {
        margin-right: 0px;
        margin-top: 16px;
      }
    }
    a {
      color: #a7a9ac;
      &:hover {
        color: $primary-color;
      }
    }
    svg {
      margin-left: 12px;
    }
  }
}
</style>
<template>
  <section>
    <v-card>
      <resaaElement class="resaa-element" />
      <h2
        class="section-title"
      >آدرس و تلفن مطب {{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}</h2>
      <div class="address-item" v-for="(workplace,index) in doctor.workplaces" :key="index">
        <div class="workplace-title">{{workplace.title}}</div>
        <div class="address">
          <location />
          <p>{{workplace.street}}</p>
        </div>
        <div class="phone" v-if="workplace.phoneNumber">
          <div>
            <phone />
            <span>مطب :</span>
            <p class="phone-number">{{workplace.phoneNumber | persianDigit}}</p>
          </div>
          <!-- <p class="description">{{workplace.description}}</p> -->
        </div>
      </div>
      <!-- <div class="social-media">
        <div>
          <web class="web-svg" />
          <a href="#" class="doctor-link-web">www.doctor-domain.com</a>
        </div>
        <div>
          <instagram class="instagram-svg" />
          <a href="#" class="doctor-link-instagram">dr-test</a>
        </div>
        <div>
          <telegram class="telegram-svg" />
          <a href="#" class="doctor-link-telegram">@dr-test</a>
        </div>
      </div>-->
    </v-card>
  </section>
</template> 
<script>
import resaaElement from "~/assets/svg/element.svg?inline";
import location from "~/assets/svg/location.svg?inline";
import phone from "~/assets/svg/phone_fill.svg?inline";
import telegram from "~/assets/svg/telegram.svg?inline";
import Instagram from "~/assets/svg/instagram.svg?inline";
import web from "~/assets/svg/web.svg?inline";

export default {
  props: { doctor: {} },
  components: { resaaElement, location, phone, telegram, Instagram, web }
};
</script>