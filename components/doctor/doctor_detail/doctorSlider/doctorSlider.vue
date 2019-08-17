
<style lang="scss" scoped>
section {
  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      border-radius: 46px 46px 0 0;
      overflow: hidden;
      img {
        width: 100%;
      }
    }

    .content {
      width: 90%;
      background: #fff;
      box-shadow: 0px 0px 10px #ddd;
      padding: 30px 30px 30px;
      box-sizing: border-box;
      border-radius: 0 0 46px 46px;
      &.darkback {
        background: #353b45;
        box-shadow: none;
      }
      .blog-title {
        font-size: 1.1rem;
        font-weight: 300;
        margin-bottom: 8px;
      }
      .date {
        color: $primary-color;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 12px;
      }
      .summary {
        color: #aaa;
        font-size: 1rem;
        margin-bottom: 16px;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        position: relative;
        bottom: -10px;
        .sky-btn {
          background: $primary-color;
          &:hover {
            background: darken($primary-color, 15);
          }
        }
        > div:first-child {
          display: flex;
          > div {
            display: flex;
            align-items: center;
            + div {
              margin-right: 8px;
            }
          }
          .v-icon {
            color: #aaa;
            font-size: 1.2rem;
            margin-left: 4px;
          }
          span {
            color: #aaa;
            font-size: 0.9rem;
          }
        }
        button {
          width: 30px;
          height: 30px;
          position: relative;
          left: -10px;
        }
      }
    }
  }
  .buttons {
    position: relative;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: -300px !important;
  }
  .swiper-button-next,
  .swiper-container-rtl .swiper-button-prev {
    left: -50px !important;
    right: auto;
    @include media(md) {
      left: 0 !important;
      top: -300px !important;
    }
    @include media(sm) {
      left: 0 !important;
      top: -300px !important;
    }
  }
  .swiper-button-prev,
  .swiper-container-rtl .swiper-button-next {
    right: -50px !important;
    left: auto;
    @include media(md) {
      right: 0 !important;
      top: -300px !important;
    }
    @include media(sm) {
      right: 0 !important;
      top: -300px !important;
    }
  }
}
</style>
<template>
  <section>
    <div v-swiper:mySwiper="swiperOption" dir="rtl">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(comment, index) in articles" :key="index">
          <div class="image">
            <img :src="comment.avatar" alt />
          </div>
          <div class="content" :class="{darkback:dark==true}">
            <div class="blog-title">{{comment.firstName}}</div>
            <div class="date">{{comment.date | persianDigit}}</div>
            <div class="summary">{{comment.quote.slice(0,220)}}{{comment.quote.length>220?'...':''}}</div>
            <div class="footer">
              <div>
                <div>
                  <v-icon>fa-user</v-icon>
                  <span>نویسنده</span>
                </div>
                <div>
                  <v-icon>fa-comment</v-icon>
                  <span>{{205 | persianDigit}}</span>
                </div>
                <div>
                  <v-icon>fa-heart-o</v-icon>
                  <span>{{1400 | persianDigit}}</span>
                </div>
              </div>
              <div>
                <v-btn fab dark small class="sky-btn">
                  <!-- <v-icon>fa-eye</v-icon> -->
                  <eyeIcon class="svg-icon-white" width="18px" />
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
    </div>

    <!-- <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(comment, index) in comments" :key="index">
        <img :src="comment.avatar">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>-->
    <div class="buttons">
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </section>
</template>

<script>
import articles from "./article";
import eyeIcon from "@/assets/svg/eye.svg?inline";
export default {
  name: "doctor-slider",
  components: {
    eyeIcon
  },
  props: ["dark"],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpointsInverse: true,
        breakpoints: {
          1280: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },

          480: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        grabCursor: true
      },
      articles
    };
  }
};
</script>

