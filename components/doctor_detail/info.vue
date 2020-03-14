<style lang="scss">
#doctor-info {
  h1 {
    font-size: 24px;
    font-weight: 500;
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
    padding: 40px 70px !important;
    @include media(sm) {
      padding: 40px 40px !important;
    }
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
      // text-align: center;
    }
    // > div {
    //   white-space: nowrap;
    // }
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
      margin-top: 20px;
      @include media(sm) {
        margin-top: 30px;
      }
      li {
        color: var(--grey-color);
        display: flex;
        align-items: flex-start;
        font-size: 14px;
        &.low-opacity {
          opacity: 0.3;
        }
        p {
          margin-bottom: 0;
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
          flex: 0 0 4px;
          top: 8px;
        }
      }
      .v-icon {
        font-size: 20px;
        opacity: 0.6;
        text-align: center;
        display: inline-flex;
        width: 100%;
      }
    }
  }
  .fields-activity-wrapper {
    margin-top: 50px;
    @include media(sm) {
      margin-top: 30px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        flex: 0 0 100%;
        width: 100%;
        color: var(--grey-color);
        display: flex;
        align-items: center;
        font-size: 14px;
        @include media(sm) {
          width: 100%;
          flex: 0 0 100%;
        }
        p {
          margin-bottom: 0;
          a {
            color: inherit;
            &:hover {
              color: $primary-color;
            }
          }
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
  .response-wrapper {
    margin-top: 20px;
    color: var(--grey-color);
    @include media(sm) {
      margin-top: 30px;
    }
    .response-time {
      margin-bottom: 12px;
      font-size: 14px;
    }
    .seperator {
      margin: 0 8px;
    }
  }
}
.custom-dialog {
  border-radius: 36px;
}
.satisfiedCalls {
  display: flex;
  align-items: center;
  height: 40px;
  svg {
    width: auto;
    height: auto;
    margin-bottom: 4px;
  }
  p {
    margin: 0;
  }
  span {
    font-size: 18px;
    color: #1ad0c1;
    font-weight: 500;
  }
}
</style>
<template>
  <section id="doctor-info">
    <v-card>
      <resaaElement class="resaa-element" />
      <v-layout row wrap>
        <v-flex xs12 md3>
          <div class="image-wrapper">
            <div class="image">
              <div class="status">
                <component :is="doctor.currentlyAvailable ? 'Available' : 'NotAvailable'"></component>
              </div>
              <doctorImage :doctor="doctor" lazy size="2" />
            </div>
            <div class="satisfiedCalls hide-md-and-up">
              <p>
                <span>{{ doctor.satisfiedCalls | callConvert | persianDigit }}</span>
                جلسه رضایت بخش
              </p>
            </div>
            <div v-scroll-to="{ el: '#call-section', offset: -80 }" class="doctor-id r-display-2">
              <img src="~assets/img/doctorFingerPrint.png" alt />
              کد رِسا:
              <div class="doctor-resaa-code">{{ doctor.subscriberNumber | persianDigit }}</div>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md5 pl-3>
          <div class="name-wrapper">
            <div>
              <h1>
                {{ doctor.title }} {{ doctor.firstName }}
                {{ doctor.lastName }}
              </h1>
              <span
                class="availability hide-md"
                :class="doctor.currentlyAvailable ? 'active' : 'deactive'"
              >
                ({{
                doctor.currentlyAvailable
                ? "در دسترس"
                : "خارج از ساعت پاسخگویی"
                }})
              </span>
            </div>
            <p v-if="doctor.specialtyTitle" class="specialty r-display-2">
              <strong v-if="doctor.expertise">{{doctor.expertise}} ،</strong>
              <strong>{{ doctor.specialtyTitle }}</strong>
            </p>
            <span
              class="availability hide-md-and-up"
              :class="doctor.currentlyAvailable ? 'active' : 'deactive'"
            >
              ({{
              doctor.currentlyAvailable
              ? "در دسترس"
              : "خارج از ساعت پاسخگویی"
              }})
            </span>
            <div class="specialty-area-container">
              <h2 class="title">سوابق حرفه ای پزشک :</h2>
              <transition-group name="fade" tag="ul" mode="out-in">
                <!-- <li
                class="specialty-area"
                >کد نظام پزشکی: {{doctor.medicalCouncilNumber || '-' | persianDigit}}</li>-->
                <li class="specialty-area" :key="doctor.medicalCouncilNumber">
                  <p>
                    <strong>کد نظام پزشکی: {{ doctor.medicalCouncilNumber | persianDigit }}</strong>
                  </p>
                </li>
                <li
                  v-for="(tag,i) in toBeShown"
                  :key="tag"
                  :class="{'low-opacity':!show_more&& i ==4}"
                  class="specialty-area"
                >
                  <p>{{ tag }}</p>
                </li>
              </transition-group>
              <v-icon
                v-if="doctor.aboutDoctor.length > 5"
                color="primary"
                @click="show_more = !show_more"
              >la-angle-{{show_more?'up':'down'}}</v-icon>
            </div>
            <div class="response-wrapper hide-md">
              <div class="title">زمان های پاسخگویی</div>
              <div class="response-time" v-if="day_of_week && times && times[day_of_week].length">
                <span>امروز:</span>
                <template v-for="(item, index) in times[day_of_week]">
                  <span :key="index">
                    <span>
                      {{ item.start | persianDigit }} -
                      {{ item.end | persianDigit }}
                    </span>
                    <span v-if="index != times[day_of_week].length - 1" class="seperator">/</span>
                  </span>
                </template>
                <!-- <span>۲۰:۰۰ - ۱۶:۰۰</span> -->
              </div>
              <div v-else>
                <span>امروز در دسترس نیست</span>
              </div>
              <div>
                <a @click="dialog = true" class="secondary--text">
                  مشاهده کل هفته
                  <v-icon color="secondary" size="20px">fa-angle-down</v-icon>
                </a>
              </div>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md4 pr-3>
          <div class="satisfiedCalls hide-md">
            <p>
              <span>{{ doctor.satisfiedCalls | callConvert | persianDigit }}</span>
              جلسه رضایت بخش
            </p>
          </div>
          <div class="fields-activity-wrapper">
            <h2 class="title">زمینه های فعالیت :</h2>
            <ul>
              <li v-for="(category, index) in doctor.categories" :key="index">
                <p>
                  <nuxt-link
                    v-if="category.isPageActive"
                    :to="`/categories/${category.englishTitle?category.englishTitle.replace(/ /g, '-'):'undifiend'}/${category.id}`"
                    target="_blank"
                  >{{ category.title }}</nuxt-link>
                  <span v-else>{{ category.title }}</span>
                </p>
              </li>
            </ul>
          </div>
        </v-flex>
        <v-flex class="hide-md-and-up" xs12 md3>
          <div class="response-wrapper">
            <h2 class="title">زمان های پاسخگویی</h2>
            <div
              class="response-time r-display-3"
              v-if="day_of_week && times && times[day_of_week].length"
            >
              <span>امروز:</span>
              <template v-for="(item, index) in times[day_of_week]">
                <span :key="index">
                  <span>
                    {{ item.start | persianDigit }} -
                    {{ item.end | persianDigit }}
                  </span>
                  <span v-if="index != times[day_of_week].length - 1" class="seperator">/</span>
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
import doctors from "@/components/doctor_detail/doctors.json";
import Available from "~/assets/svg/Available.svg?inline";
import NotAvailable from "~/assets/svg/NotAvailable.svg?inline";
import resaaElement from "~/assets/svg/element.svg?inline";
export default {
  props: { doctor: {} },
  components: { Available, NotAvailable, resaaElement },
  filters: {
    callConvert: val => {
      if (val < 100) {
        return "50+";
      }
      if (val < 200) {
        return "100+";
      }
      if (val < 500) {
        return "200+";
      }
      if (val < 1000) {
        return "500+";
      }
      if (val < 2000) {
        return "1000+";
      }
      if (val < 5000) {
        return "2000+";
      } else {
        return "5000+";
      }
    }
  },
  data() {
    return {
      dialog: false,
      times: null,
      day_of_week: null,
      show_more: false
    };
  },
  mounted() {
    let days = ["su", "mo", "tu", "we", "th", "fr", "sa"];
    this.day_of_week = days[new Date().getDay()];
  },
  computed: {
    toBeShown() {
      if (this.show_more) {
        return this.doctor.aboutDoctor;
      } else {
        return this.doctor.aboutDoctor.slice(0, 5);
      }
    }
  }
};
</script>
