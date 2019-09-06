<style lang="scss" >
#doctor-info {
  h1 {
    font-size: 28px;
    font-weight: 400;
    color: var(--grey-color);
    display: inline-flex;
  }
  strong {
    font-weight: inherit;
  }
  ul {
    margin: 0;
    padding: 0;
  }

  .v-card {
    overflow: hidden;
    z-index: 1;
    .resaa-element {
      width: 480px;
      height: 320px;
      position: absolute;
      left: -3px;
      top: 0px;
      opacity: 0.08;
      fill: $secondary-color;
      z-index: -1;
    }
  }
  .image-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .image {
      border-radius: 100%;
      width: 180px;
      height: 180px;
      border: 1px solid #d4d4d4;
      padding: 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .status {
        position: absolute;
        top: 4px;
        right: 25px;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 100%;
      }
    }
    .doctor-id {
      background: linear-gradient(to right, #28db9a 0%, #0ec7e5 100%);
      width: 180px;
      color: #fff;
      font-size: 18px;
      margin-top: 16px;
      border-radius: 21px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      padding: 8px 8px 8px 16px;
    }
  }
  .name-wrapper {
    padding-right: 16px;
    > div {
      white-space: nowrap;
    }
    .availability {
      margin-right: 8px;
      color: $secondary-color;
      &.deactive {
        color: #e8aa00;
      }
    }
    .specialty {
      font-size: 18px;
      color: #9f9f9f;
      font-weight: 400;
    }
    .specialty-area-container {
      margin-top: 80px;
      li {
        font-size: 14px;
        color: var(--grey-color);
        display: flex;
        align-items: center;
        &:before {
          content: "";
          position: relative;
          margin-left: 10px;
          width: 4px;
          height: 4px;
          display: inline-block;
          border-radius: 100%;
          background-color: $secondary-color;
        }
      }
    }
  }
  .fields-activity-wrapper {
    margin-top: 130px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 0 0 50%;
        width: 50%;
        color: var(--grey-color);
        font-size: 14px;
        display: flex;
        align-items: center;
        &:before {
          content: "";
          position: relative;
          margin-left: 10px;
          width: 4px;
          height: 4px;
          display: inline-block;
          border-radius: 100%;
          background-color: $secondary-color;
        }
      }
    }
  }
  .response-wrapper {
    margin-top: 130px;
    color: var(--grey-color);
    font-size: 14px;
    .response-time {
      margin-bottom: 12px;
      font-size: 18px;
    }
    .seperator {
      margin: 0 8px;
    }
  }
}
.custom-dialog {
  border-radius: 36px;
}
</style>
<template>
  <section id="doctor-info">
    <v-card>
      <resaaElement class="resaa-element" />
      <v-layout row wrap>
        <v-flex xs12 md2>
          <div class="image-wrapper">
            <div class="image">
              <div class="status">
                <component :is="doctor.currentlyAvailable?'Available':'NotAvailable'"></component>
              </div>
              <img
                v-if="doctor.imagePath"
                :src="'https://webapi.resaa.net/'+doctor.imagePath"
                :alt="`تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`"
              />
              <img
                v-else
                src="/img/doc-placeholder.png"
                :alt="`تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`"
              />
            </div>
            <div class="doctor-id">
              <img src="~assets/img/doctorFingerPrint.png" alt />
              کد رِسا:
              <div class="doctor-resaa-code">{{ doctor.subscriberNumber | persianDigit }}</div>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md4>
          <div class="name-wrapper">
            <div>
              <h1>{{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}</h1>
              <span
                class="availability"
                :class="doctor.currentlyAvailable?'active':'deactive'"
              >({{doctor.currentlyAvailable?'در دسترس':'در دسترس نمی باشد'}})</span>
            </div>
            <p v-if="doctor.specialty" class="specialty">
              تخصص:
              <strong>{{doctor.specialty.title}}</strong>
            </p>
            <ul class="specialty-area-container">
              <li
                class="specialty-area"
              >کد نظام پزشکی: {{doctor.medicalCouncilNumber || '-' | persianDigit}}</li>
              <li v-for="tag in doctor.tags" :key="tag.id" class="specialty-area">{{tag.title}}</li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 md3>
          <div class="fields-activity-wrapper">
            <div class="title">زمینه های فعالیت :</div>
            <ul>
              <li v-for="(field, index) in doctor.fields" :key="index">{{field}}</li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 md3>
          <div class="response-wrapper">
            <div class="title">زمان های پاسخگویی</div>
            <div class="response-time">
              <span>امروز:</span>
              <span>۱۲:۰۰ - ۹:۰۰</span>
              <span class="seperator">/</span>
              <span>۲۰:۰۰ - ۱۶:۰۰</span>
            </div>
            <div>
              <a @click="dialog = true" class="secondary--text">
                مشاهده کل هفته
                <v-icon color="secondary" size="20px">fa-angle-down</v-icon>
              </a>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-card>
    <v-dialog content-class="custom-dialog" max-width="1360" v-model="dialog">
      <no-ssr>
        <timeTable @close="dialog = false"></timeTable>
      </no-ssr>
    </v-dialog>
  </section>
</template>
<script>
import Available from "~/assets/svg/Available.svg?inline";
import NotAvailable from "~/assets/svg/NotAvailable.svg?inline";
import resaaElement from "~/assets/svg/element.svg?inline";
export default {
  props: { doctor: {} },
  components: { Available, NotAvailable, resaaElement },
  data() {
    return {
      dialog: false
    };
  },
  mounted() {
    this.doctor.tags = [
      { id: 1, title: "دارای فلوشیپ تخصصی روانشناسی بالینی" },
      { id: 2, title: "دارای بورد تخصصی روانشناسی" },
      { id: 3, title: "عضو هیئت علمی دانشگاه علوم پزشکی بقیه الله" }
    ];
    this.doctor.fields = [
      "روانشناسی خانواده",
      "استرس",
      "اضطراب",
      "روانشناسی کودک",
      "روانشناسی بالینی",
      "طرح واره درمانی"
    ];
  }
};
</script>