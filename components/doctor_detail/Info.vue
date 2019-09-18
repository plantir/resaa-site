<style lang="scss" >
#doctor-info {
  h1 {
    // font-size: 21px;
    // font-weight: 400;
    display: inline-flex;
    color: var(--grey-color);
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
      width: 300px;
      height: 200px;
      position: absolute;
      left: -3px;
      top: 0px;
      opacity: 0.08;
      fill: $secondary-color;
      z-index: -1;
      @include media(sm) {
        display: none;
      }
    }
  }
  .image-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    @include media(sm) {
      align-items: center;
    }
    .image {
      border-radius: 100%;
      width: 150px;
      height: 150px;
      border: 1px solid #d4d4d4;
      padding: 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .status {
        position: absolute;
        top: 4px;
        right: 12px;
      }
      img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 100%;
      }
    }
    .doctor-id {
      background: linear-gradient(to right, #28db9a 0%, #0ec7e5 100%);
      width: 150px;
      color: #fff;
      margin-top: 16px;
      border-radius: 21px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 40px;
      padding: 6px 6px 6px 16px;
      @include media(sm) {
        margin-bottom: 20px;
      }
      img {
        max-height: 100%;
      }
    }
  }
  .name-wrapper {
    padding-right: 16px;
    @include media(sm) {
      padding-right: 0;
      text-align: center;
    }
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
      // font-size: 18px;
      color: #9f9f9f;
      margin-top: 4px;
      // font-weight: 400;
    }
    .specialty-area-container {
      margin-top: 80px;
      @include media(sm) {
        margin-top: 30px;
      }
      li {
        color: var(--grey-color);
        display: flex;
        align-items: center;
        span {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
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
    @include media(sm) {
      margin-top: 30px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 0 0 50%;
        width: 50%;
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
  .response-wrapper {
    margin-top: 130px;
    color: var(--grey-color);
    @include media(sm) {
      margin-top: 30px;
    }
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
                <component :is="virtual_doctor.currentlyAvailable?'Available':'NotAvailable'"></component>
              </div>
              <img
                v-if="virtual_doctor.imagePath"
                :src="'https://webapi.resaa.net/'+virtual_doctor.imagePath"
                :alt="`تصویر ${virtual_doctor.title} ${virtual_doctor.firstName} ${virtual_doctor.lastName}`"
              />
              <img
                v-else
                src="/img/doc-placeholder.png"
                :alt="`تصویر ${virtual_doctor.title} ${virtual_doctor.firstName} ${virtual_doctor.lastName}`"
              />
            </div>
            <div v-scroll-to="{ el: '#call-section', offset: -50 }" class="doctor-id r-display-2">
              <img src="~assets/img/doctorFingerPrint.png" alt />
              کد رِسا:
              <div class="doctor-resaa-code">{{ virtual_doctor.subscriberNumber | persianDigit }}</div>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md3>
          <div class="name-wrapper">
            <div>
              <h1
                class="r-display-1 r-display-normal"
              >{{virtual_doctor.title}} {{virtual_doctor.firstName}} {{virtual_doctor.lastName}}</h1>
              <span
                class="availability hide-md"
                :class="virtual_doctor.currentlyAvailable?'active':'deactive'"
              >({{virtual_doctor.currentlyAvailable?'در دسترس':'در دسترس نمی باشد'}})</span>
            </div>
            <p v-if="virtual_doctor.specialty" class="specialty r-display-2">
              تخصص:
              <strong>{{virtual_doctor.specialty.title}}</strong>
            </p>
            <span
              class="availability hide-md-and-up"
              :class="virtual_doctor.currentlyAvailable?'active':'deactive'"
            >({{virtual_doctor.currentlyAvailable?'در دسترس':'در دسترس نمی باشد'}})</span>
            <ul class="specialty-area-container">
              <li
                class="specialty-area"
              >کد نظام پزشکی: {{virtual_doctor.medicalCouncilNumber || '-' | persianDigit}}</li>
              <li v-for="tag in virtual_doctor.custom_tags" :key="tag.id" class="specialty-area">
                <span>{{tag.title}}</span>
              </li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 md4>
          <div class="fields-activity-wrapper">
            <div class="title">زمینه های فعالیت :</div>
            <ul>
              <li v-for="(field, index) in virtual_doctor.fields" :key="index">
                <span>{{field}}</span>
              </li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 md3>
          <div class="response-wrapper">
            <div class="title">زمان های پاسخگویی</div>
            <div class="response-time r-display-3" v-if="day_of_week && times">
              <span>امروز:</span>
              <template v-for="(item,index) in times[day_of_week]">
                <span :key="index">
                  <span>{{item.start | persianDigit}} - {{item.end | persianDigit}}</span>
                  <span v-if="index != times[day_of_week].length-1" class="seperator">/</span>
                </span>
              </template>
              <!-- <span>۲۰:۰۰ - ۱۶:۰۰</span> -->
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
        <timeTable v-model="times" @close="dialog = false"></timeTable>
      </no-ssr>
    </v-dialog>
  </section>
</template>
<script>
import Available from "~/assets/svg/Available.svg?inline";
import NotAvailable from "~/assets/svg/NotAvailable.svg?inline";
import resaaElement from "~/assets/svg/element.svg?inline";
import doctors from "./doctors.js";
export default {
  props: { doctor: {} },
  components: { Available, NotAvailable, resaaElement },
  data() {
    return {
      dialog: false,
      virtual_doctor: this.doctor,
      times: null,
      day_of_week: null
    };
  },
  mounted() {
    let days = ["su", "mo", "tu", "we", "th", "fr", "sa"];
    this.day_of_week = days[new Date().getDay()];
    let virtual_doctor = doctors.find(
      item => item.subscriberNumber == this.$route.params.id
    );
    this.virtual_doctor = Object.assign(virtual_doctor, this.doctor);
  }
};
</script>