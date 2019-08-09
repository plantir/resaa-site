
<style lang="scss" scoped>
.swiper-slide {
  // height: 350px;
}

.swiper-container {
  // height: 430px;
}
section#peapoleCommnetSlider {
  width: 80%;
  margin: 0 auto;
  @include media(md) {
    width: 100%;
  }
  .next-slider-peapole {
    left: 0px;
    background-size: 20px;
  }
  .prev-slider-peapole {
    right: 0;
    background-size: 20px;
  }
}
.send-commnet {
  background-color: #353b45;
  background-size: cover;
  background-image: url(./img/Logo.png);
  background-repeat: no-repeat;
  background-position: left center;
  display: flex;
  padding: 150px 17%;
  @include media(lg) {
    padding: 200px 17%;
  }
  @include media(sm) {
    // background-position-x: -320px;
    // background-position-y: 93px;
    padding: 50px 10%;
    flex-direction: column;
    align-items: center;
  }
  .data {
    width: 30%;
    @include media(sm) {
      width: 80%;
      margin-bottom: 40px;
    }
    input[type="text"] {
      border-bottom: 1px solid #959595;
      margin-bottom: 40px;
      width: 100%;
      color: #fff;
      &::placeholder {
        color: #ffffff;
        font-size: 13px;
        font-weight: 200;
      }
    }
    .unknow-commnet {
      position: relative;
      top: -5px;
      font-size: 12px;
    }
    input[type="checkbox"] {
      margin-bottom: 40px;
      margin-top: 5px;
      margin-left: 5px;
    }
    input[type="text"].name-lastname {
      margin-bottom: 5px;
    }
  }
  .commnet {
    width: 70%;
    @include media(sm) {
      width: 100%;
    }
    .add-comment {
      width: 80%;
      margin: 20px auto 0 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: linear-gradient(to left, #0ec7e6 40%, #28db9a);
      padding: 5px;
      border-radius: 20px;
      transition: all 1s;
      cursor: pointer;
      &:hover {
        background: linear-gradient(
          to left,
          darken(#0ec7e6, 10) 40%,
          darken(#28db9a, 10)
        );
        transition: all 1s;
      }
      @include media(sm) {
        width: 80%;
        margin: 0 auto;
      }
      img {
        margin-right: 10px;
      }
    }
    textarea {
      border: 1px solid #34ccd7;
      width: 80%;
      color: #0fc8e3;
      height: 100px;
      border-radius: 15px;
      background: #00000040;
      resize: none;
      margin: 0px auto 0 0;
      display: block;
      padding: 15px;
      @include media(sm) {
        width: 80%;
        height: 200px;
        margin: 0 auto;
      }
      &::placeholder {
        color: #0fc8e3;
        font-size: 13px;
      }
    }
    input[type="checkbox"] {
      margin-right: 23%;
      margin-top: 10px;
      @include media(sm) {
        margin-right: 16%;
      }
    }
    .unknow-commnet {
      position: relative;
      font-size: 12px;
      top: -5px;
      color: #fff;
    }
  }
}
.doctor-comment-card {
  display: flex;
  flex-direction: row-reverse;
  width: 85%;
  margin: 0 auto;
  @include media(sm) {
  }
  .profile {
    margin-top: 30px;
    margin-left: 25px;
    color: #a3a3a3;
    text-align: center;
  }
}

.swiper-left-overlay {
  height: 100%;
  top: 0;
  width: 30%;
  background-image: linear-gradient(
    to right,
    #ffffff,
    rgba(255, 255, 255, 0.01) 100%,
    #ffffff
  );
}
.swiper-slide {
  opacity: 1;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #34ccd7;
  background-image: url(img/Element.png);
  background-position: bottom left;
  background-repeat: no-repeat;
  padding: 10px 10px 30px;
  border-radius: 15px;
  height: 300px;
  margin-bottom: 60px;
  position: relative;
  .header {
    width: 100%;
    background: #fff;
    border-radius: 15px;
    margin-bottom: 20px;
    div {
      padding: 10px;
      .name {
        color: #63e1ae;
        font-size: 16px;
      }
    }
    p {
      margin: 0;
      color: #8b8d90;
      font-size: 12px;
    }
  }
  &::after {
    content: "";
    border: 10px solid;
    border-color: transparent transparent transparent #34ccd7;
    display: block;
    top: 45px;
    right: -20px;
    position: absolute;
  }
  i {
    color: #fff;
    font-size: 70px;
    margin-left: 10px;
    margin-top: -15px;
  }
  p.matn {
    color: #fff;
    text-align: justify;
    font-size: 13px;
    margin: 0;
    padding: 0 15px;
  }
}
.hide-mobile {
  display: block;
  @include media(sm) {
    display: none;
  }
}
.swiper-pagination-bullet {
  width: 12px !important;
  height: 4px !important;
  display: inline-block;
  background: #000;
  border-radius: 0 !important;
  opacity: 0.2;
}
.show-mobile {
  display: none;
  @include media(sm) {
    display: block;
  }
  .hideElement {
    display: none;
  }
  .see-more {
    color: #34ccd7;
    font-weight: bold;
    text-align: left;
    @include media(sm) {
      text-align: center;
    }
  }
}
.send-image-icon {
  width: 17px;
  margin-right: 5px;
  path {
    fill: white;
  }
}
</style>
<template>
  <section>
    <section id="peapoleCommnetSlider">
      <div class="hide-mobile" v-swiper:mySwiper="swiperOption" dir="rtl">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(idea, index) in ideas" :key="index">
            <div class="vswiper-padding">
              <div class="doctor-comment-card">
                <div class="text">
                  <div class="header">
                    <div>
                      <p class="name">{{ idea.name }}</p>
                      <p>{{idea.mail}}</p>
                    </div>
                  </div>

                  <p class="matn">{{ idea.matn }}</p>
                </div>
                <div class="profile">
                  <!-- <img src="~assets/img/User-Icon.png" alt> -->
                  <userIcon class="svg-icon-blue-green" style="width:50px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev prev-slider-peapole" slot="button-prev"></div>
        <div class="swiper-button-next next-slider-peapole" slot="button-next"></div>
        <!-- <div class="swiper-pagination swiper-pagination-bullets"></div> -->
      </div>
      <div class="show-mobile">
        <div
          v-for="(idea, index) in ideas"
          :key="index"
          :class="{hideElement:(index>hideElements)}"
        >
          <div class="doctor-comment-card">
            <div class="text">
              <div class="header">
                <div>
                  <p class="name">{{ idea.name }}</p>
                  <p>{{idea.mail}}</p>
                </div>
              </div>

              <p class="matn">{{ idea.matn }}</p>
            </div>
            <div class="profile">
              <userIcon class="svg-icon-blue-green" style="width:47px" />
            </div>
          </div>
        </div>
        <p
          class="see-more"
          v-if="ideas.length>hideElements"
          @click="hideElements+=3"
        >مشاهده بیشتر ...</p>
      </div>
    </section>
    <section>
      <div class="send-commnet">
        <div class="data">
          <input type="text" class="name-lastname" placeholder="نام و نام خانوادگی ..." />
          <br />
          <input type="checkbox" />
          <span style="color:#41d199" class="unknow-commnet">عدم نمایش هویت</span>
          <span style="color:#00bccd" class="unknow-commnet">(کاربر ناشناس)</span>
          <br />
          <input type="text" class="mail" placeholder="آدرس ایمیل ..." />
          <br />
          <input type="text" class="phone" placeholder="شماره همراه (اختیاری)" />
        </div>
        <div class="commnet">
          <textarea name id cols="30" rows="8" placeholder="متن ..."></textarea>
          <input type="checkbox" />
          <span class="unknow-commnet">
            عضویت در
            <span style="color:#41d199">خبرنامه رسا؟</span>
          </span>
          <br />
          <div class="button add-comment">
            ارسال نظر
            <sendImage class="send-image-icon" />
          </div>
        </div>
      </div>
      <svg aria-hidden="true" focusable="false" style="width:0;height:0;position:absolute;">
        <linearGradient id="gradient-horizontal-bluegreen">
          <stop offset="0%" stop-color="#33dda1" />
          <stop offset="100%" stop-color="#1dcbe7" />
        </linearGradient>
        <linearGradient id="gradient-horizontal-purpleblue">
          <stop offset="0%" stop-color="#00bbda" />
          <stop offset="100%" stop-color="#0a7dbe" />
        </linearGradient>
      </svg>
    </section>
  </section>
</template>

<script>
import ideas from "./peapole";
import sendImage from "@/assets/img/send.svg";
import userIcon from "@/assets/img/user.svg";
export default {
  name: "doctor-slider",
  components: {
    sendImage,
    userIcon
  },
  data() {
    return {
      hideElements: 2,
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".next-slider-peapole",
          prevEl: ".prev-slider-peapole"
        },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true
        // },
        breakpoints: {
          1920: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        },
        grabCursor: true
      },
      ideas
    };
  }
};
</script>

