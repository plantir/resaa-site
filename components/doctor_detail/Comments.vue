<style lang="scss" >
section#doctor-detail-comments {
  margin-top: 0 !important;
  background: #f6f6f6;
  .section-title {
    font-size: var(--display-2);
    text-align: center;
    margin: 90px 0 130px;
    color: #7f8a99;
    @include media(sm) {
      margin: 50px 0;
    }
  }
  .carousel-wrapper {
    overflow: hidden;
    position: relative;
    z-index: 1;
    .resaa-element {
      width: 710px;
      height: 400px;
      position: absolute;
      right: -160px;
      top: 0px;
      opacity: 0.7;
      fill: #fff;
      transform: rotate(90deg);
      z-index: -1;
      @include media(sm) {
        width: 270px;
        height: 180px;
        position: absolute;
        right: auto;
        left: -7px;
        top: 0px;
        transform: rotate(0deg);
      }
    }
  }
  .swiper-container {
    .swiper-slide {
      padding: 0 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      .profile {
        @include media(sm) {
          display: none;
        }
        margin-left: 20px;
        padding-top: 20px;

        svg {
          width: 50px;
          height: 50px;
          path {
            fill: $secondary-color;
          }
        }
      }
      .comment-card {
        background: #34ccd7;
        border-radius: 22px;
        color: #fff;
        padding: 12px;
        font-size: var(--display-3);
        position: relative;
        svg {
          position: absolute;
          right: -19px;
          top: 40px;
          @include media(sm) {
            display: none;
          }
          path {
            fill: #34ccd7;
          }
        }
        .header {
          background: #fff;
          color: #000;
          border-radius: 12px;
          padding: 16px 26px;
          margin-bottom: 20px;
          span {
            display: flex;
            color: #8b8d90;
            font-size: var(--display-3);
            &.name {
              color: $secondary-color;
              font-size: 20px;
            }
          }
        }
        .text {
          text-align: right;
          padding: 0 20px;
          line-height: 32px;
        }
      }
    }
  }
  .swiper-holder {
    position: relative;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 80px;
    box-sizing: content-box;
    @include media(sm) {
      padding: 0 40px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
      background-image: none;
      svg {
        width: 40px;
        height: 40px;
        path {
          fill: $secondary-color;
        }
      }
    }
    .swiper-button-next {
      svg {
        transform: rotate(180deg);
      }
    }
  }
  .comment-wrapper {
    position: relative;
    z-index: 1;
    padding: 100px 0;
    @include media(sm) {
      padding: 20px;
    }
    .bg {
      position: absolute;
      background-color: #f6f6f6;
      background-size: 70%;
      background-image: url(~assets/img/comment_bg.jpg);
      background-repeat: no-repeat;
      background-position: left center;
      display: flex;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.3;
      top: 0;
      @include media(sm) {
        background-image: url(~assets/img/comment_bg_sm.png);
        background-size: 100%;
        opacity: 0.5;
        background-position: center;
      }
    }
  }
  .send-commnet {
    display: flex;
    justify-content: space-between;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 60px;
    @include media(sm) {
      padding: 0 30px;
      flex-direction: column;
      align-items: center;
    }
    .data {
      width: 30%;
      @include media(sm) {
        width: 100%;
      }

      .unknow-commnet {
        position: relative;
        font-size: var(--display-3);
      }
    }
    .commnet {
      width: 50%;
      @include media(sm) {
        width: 100%;
      }
      .add-comment {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background: linear-gradient(to left, #0ec7e6 40%, #28db9a);
        padding: 5px;
        border-radius: 20px;
        transition: all 1s;
        font-size: var(--display-3);
        cursor: pointer;
        &:hover {
          background: linear-gradient(
            to left,
            darken(#0ec7e6, 10) 40%,
            darken(#28db9a, 10)
          );
          transition: all 1s;
        }
        svg {
          margin-right: 10px;
          path {
            fill: #fff;
          }
        }
      }
    }
    .custom-textarea {
      background: rgba(#fff, 0.5);
      border-radius: 22px;
      .v-input__slot {
        border-radius: 22px;
        overflow: hidden;
        border: 2px solid $primary-color;
      }
    }
  }
}
</style>
<template>
  <section id="doctor-detail-comments">
    <div class="carousel-wrapper">
      <resaaElement class="resaa-element" />
      <div class="section-title">
        <span>نظرات مردمی</span>
        <span class="secondary--text">درباره پزشک</span>
      </div>
      <div class="swiper-holder">
        <div v-swiper:mySwiperdesktop="swiperOptionDoctors" dir="rtl">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(comment, index) in comments" :key="index">
              <div class="profile">
                <User />
              </div>
              <div class="comment-card">
                <DropDownArrow />
                <div class="header">
                  <span class="name">{{ comment.owner_name }}</span>
                  <span>{{comment.owner_email}}</span>
                </div>
                <p class="text">{{ comment.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev" slot="button-prev">
          <ChevronLeft />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <ChevronLeft />
        </div>
      </div>
    </div>
    <div class="comment-wrapper">
      <div class="bg"></div>
      <div class="send-commnet">
        <div class="data">
          <v-text-field hide-details name="name" label="نام و نام خانوادگی ..." id="id"></v-text-field>
          <v-checkbox hide-details v-model="value" value="value">
            <template v-slot:label>
              <div>
                <span style="color:#41d199" class="unknow-commnet">عدم نمایش هویت</span>
                <span style="color:#00bccd" class="unknow-commnet">(کاربر ناشناس)</span>
              </div>
            </template>
          </v-checkbox>
          <br />
          <v-text-field name="name" label="آدرس ایمیل ..." id="id"></v-text-field>
          <!-- <input type="checkbox" /> -->
          <br />
          <v-text-field name="name" label="شماره همراه(اختیاری) ..." id="id"></v-text-field>
          <br />
        </div>
        <div class="commnet">
          <v-textarea
            no-resize
            outline
            class="custom-textarea"
            hide-details
            label="متن ..."
            name="name"
            textarea
          ></v-textarea>
          <v-checkbox class="mb-3" hide-details v-model="value2" value="value">
            <template v-slot:label>
              <div>
                <span>
                  عضویت در
                  <span style="color:#41d199">خبرنامه رسا؟</span>
                </span>
              </div>
            </template>
          </v-checkbox>

          <br />
          <div class="button add-comment">
            ارسال نظر
            <Send class="send-image-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ChevronLeft from "~/assets/svg/chevron_left.svg?inline";
import User from "~/assets/svg/user.svg?inline";
import Send from "~/assets/svg/send.svg?inline";
import DropDownArrow from "~/assets/svg/Polygon.svg?inline";
import resaaElement from "~/assets/svg/element.svg?inline";
export default {
  components: {
    ChevronLeft,
    User,
    Send,
    DropDownArrow,
    resaaElement
  },
  data() {
    return {
      comments: [
        {
          owner_email: "testanahita.gmail.com",
          owner_name: "آناهیتا آهنگری",
          text:
            "علائم و بیماری‌های آلرژی به علت فعال شدن سیستم ایمنی و واکنش آن به مواد عمدتا بی ضرر و بی خطر مانند گرده ها، شوره حیوانات اهلی یا برخی مواد غذایی ایجاد می‌شود..."
        },
        {
          owner_email: "testhadi.gmail.com",
          owner_name: "هادی کیانور",
          text:
            "علائم و بیماری‌های آلرژی به علت فعال شدن سیستم ایمنی و واکنش آن به مواد عمدتا بی ضرر و بی خطر مانند گرده ها، شوره حیوانات اهلی یا برخی مواد غذایی ایجاد می‌شود..."
        },
        {
          owner_email: "testsozan.gmail.com",
          owner_name: "سوزان امیرسالاری",
          text:
            "علائم و بیماری‌های آلرژی به علت فعال شدن سیستم ایمنی و واکنش آن به مواد عمدتا بی ضرر و بی خطر مانند گرده ها، شوره حیوانات اهلی یا برخی مواد غذایی ایجاد می‌شود..."
        },
        {
          owner_email: "testhadi.gmail.com",
          owner_name: "هادی کیانور",
          text:
            "علائم و بیماری‌های آلرژی به علت فعال شدن سیستم ایمنی و واکنش آن به مواد عمدتا بی ضرر و بی خطر مانند گرده ها، شوره حیوانات اهلی یا برخی مواد غذایی ایجاد می‌شود..."
        },
        {
          owner_email: "testsozan.gmail.com",
          owner_name: "سوزان امیرسالاری",
          text:
            "علائم و بیماری‌های آلرژی به علت فعال شدن سیستم ایمنی و واکنش آن به مواد عمدتا بی ضرر و بی خطر مانند گرده ها، شوره حیوانات اهلی یا برخی مواد غذایی ایجاد می‌شود..."
        }
      ],
      swiperOptionDoctors: {
        slidesPerView: 3,
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
        breakpoints: {
          640: {
            slidesPerView: 1
          },
          320: {
            slidesPerView: 1
          }
        },
        grabCursor: true
      },
      value: false,
      value2: false
    };
  }
};
</script>