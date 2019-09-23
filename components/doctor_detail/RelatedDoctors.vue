<style lang="scss" scoped>
section {
  background: #fff;
  padding: 80px 0;
  @include media(sm) {
    padding: 30px 0;
  }
}
.header {
  display: flex;
  max-width: 850px;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: 100px;
  @include media(sm) {
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    justify-content: space-between;
    height: 100px;
    margin-bottom: 40px;
  }
  .header-title {
    font-size: var(--display-1) !important;
    font-weight: 500;
    color: var(--grey-color);
  }
  .guide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include media(sm) {
      flex-direction: column;
      align-items: flex-start;
    }
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: var(--display-3);
      color: #a3a3a3;
      svg {
        margin-left: 12px;
      }
      + div {
        margin-right: 60px;
        @include media(sm) {
          margin-right: 0px;
          margin-top: 12px;
        }
      }
    }
  }
}
.swiper-container {
  max-width: 1200px;
  padding: 0 60px;
  .swiper-slide {
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .image {
      position: relative;
      border: 1px solid #d4d4d4;
      border-radius: 100%;
      width: 150px;
      height: 150px;
      padding: 8px;
      .status {
        position: absolute;
        top: 4px;
        right: 25px;
      }
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    .name {
      color: #34ccd7;
      margin: 8px 0 4px;
      font-size: var(--display-3);
      white-space: nowrap;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
    .speciality {
      color: #bbb;
      font-size: var(--display-4);
      margin-bottom: 8px;
    }
    .code {
      font-size: var(--display-3);
      span {
        color: #b1b1b1;
      }
      span:nth-child(2) {
        color: #43e7a5;
        font-size: 21px;
        font-weight: 500;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    background-image: none;
    svg {
      width: 40px;
      height: 40px;
      path {
        fill: $secondary-color;
      }
    }
  }
  .swiper-button-prev {
    svg {
      transform: rotate(180deg);
    }
  }
}
</style>
<template>
  <section>
    <div class="header">
      <div class="header-title">سایر روانشناسان</div>
      <div class="guide">
        <div>
          <Available />در دسترس
        </div>
        <div>
          <NotAvailable />عدم دسترسی
        </div>
      </div>
    </div>
    <div v-swiper:mySwiperdesktop="swiperOptionDoctors" dir="rtl">
      <div class="swiper-wrapper">
        <nuxt-link
          target="_blank"
          class="swiper-slide"
          v-for="doctor in doctors"
          :key="doctor.subscriberNumber"
          :to="`/doctors/${doctor.subscriberNumber}`"
        >
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
          <div class="name">دکتر {{doctor.firstName}} {{doctor.lastName}}</div>
          <div class="speciality">متخصص {{doctor.specialty.title}}</div>
          <div class="code">
            <span>کد رسا:</span>
            <span>{{doctor.subscriberNumber | persianDigit}}</span>
          </div>
        </nuxt-link>
      </div>
      <div class="swiper-button-prev" slot="button-prev">
        <ChevronLeft />
      </div>
      <div class="swiper-button-next" slot="button-next">
        <ChevronLeft />
      </div>
    </div>
  </section>
</template>
<script>
import Available from "~/assets/svg/Available.svg?inline";
import NotAvailable from "~/assets/svg/NotAvailable.svg?inline";
import ChevronLeft from "~/assets/svg/chevron_left.svg?inline";
import doctors from "./doctors.js";
export default {
  props: {
    doctor: {
      required: true
    }
  },
  components: {
    Available,
    NotAvailable,
    ChevronLeft
  },
  data() {
    return {
      doctors: [],
      swiperOptionDoctors: {
        slidesPerView: 3,
        spaceBetween: 60,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        grabCursor: true
      }
    };
  },
  async mounted() {
    // let res = await this.$axios.$get(
    //   `/Doctors?fields=specialty,title,subscriberNumber,firstName,lastName,imagePath,currentlyAvailable&specialtyId=${this.doctor.specialty.id}&limit=8&offset=0`
    // );
    this.doctors = doctors.filter(
      item => item.subscriberNumber != this.$route.params.id
    );
  }
};
</script>