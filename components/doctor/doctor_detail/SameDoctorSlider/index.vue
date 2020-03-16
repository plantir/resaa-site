<style lang="scss" >
section#sameDoctorSlider {
  margin: 30px 0;
  background: #fff;
  padding: 0 200px 60px;
  box-shadow: 0px 0px 10px #ddd;
  .next-slider-same {
    background-image: url(~assets/img/arrow_left.png);
    background-size: initial;
  }
  .prev-slider-same {
    background-image: url(~assets/img/arrow_right.png);
    background-size: initial;
  }
  @include media(md) {
    margin: 30px 0;
    background: #fff;
    padding: 0 10px 30px;
  }
  @include media(sm) {
    margin: 30px 0;
    background: #fff;
    padding: 0 10px 30px;
    .next-slider-same {
      left: 0px !important;
      background-size: 15px;
      background-image: url(~assets/img/arrow_left.png);
    }
    .prev-slider-same {
      background-image: url(~assets/img/arrow_right.png);
      right: 0px !important;
      background-size: 15px;
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
    padding-top: 70px;
    @include media(sm) {
      flex-direction: column;
    }
    .header-title {
      margin-left: 50px;
      color: #a3a3a3;
      font-size: 1.675rem;
      @include media(sm) {
        margin: 0 0 20px;
      }
    }
    .available-icon {
      margin-right: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      @include media(sm) {
        margin: 0;
      }
      div {
        margin: 0 20px;
        color: #a3a3a3;
      }
    }
  }
  i {
    margin-left: 5px;
    color: #fff;
    border-radius: 50%;
    padding: 3px;
  }
  .not-available {
    background: #fdbd10;
  }
  .available {
    background: #43e7a5;
  }
  .image {
    width: 140px;
    margin: 0 auto;
    position: relative;
    @include media(sm) {
      width: 80%;
    }
    img {
      border-radius: 50%;
      max-width: 100%;
      border: 1px solid #ddd;
    }
    i {
      position: absolute;
      top: 0;
      right: 20px;
      @include media(sm) {
        top: 10px;
        right: 0px;
      }
    }
  }
  .name {
    color: #34ccd7;
    font-size: 1.325rem;
    text-align: center;
    margin: 4px 0;
  }
  .speciality {
    text-align: center;
    color: #bbbbbb;
    margin: 4px 0;
  }
  .code {
    color: #b1b1b1;
    text-align: center;
    margin: 4px 0;
    span {
      color: #43e7a5;
    }
  }
}
</style>
<template>
  <section id="sameDoctorSlider">
    <div class="header">
      <div class="header-title">پزشکان با تخصص مرتبط</div>
      <div class="available-icon">
        <div>
          <v-icon small class="available">done</v-icon>در دسترس
        </div>
        <div>
          <v-icon small class="not-available">remove</v-icon>خارج از ساعت پاسخگویی
        </div>
      </div>
    </div>
    <div v-swiper:mySwiperSameDoctor="swiperSameDoctor" dir="rtl">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(comment, index) in 10" :key="index">
          <div class="image">
            <img src="/img/doc-placeholder.png" alt />
            <v-icon small class="available" v-if="index%2==0">done</v-icon>
            <v-icon small class="not-available" v-else>remove</v-icon>
          </div>
          <div class="name">دکتر مهران رضوی</div>
          <div class="speciality">متخصص قلب و عروق</div>
          <div class="code">
            کد رسا:
            <span>{{7002 + index | persianDigit}}</span>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev prev-slider-same" slot="button-prev"></div>
      <div class="swiper-button-next next-slider-same" slot="button-next"></div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      swiperSameDoctor: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination-same-doctor",
          clickable: true
        },
        navigation: {
          nextEl: ".next-slider-same",
          prevEl: ".prev-slider-same"
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
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
  }
};
</script>