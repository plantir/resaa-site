
<style lang="scss" scoped>
.swiper-slide {
  height: 350px;
  width: 680px;
  @include media(sm) {
    height: auto;
  }
}

.swiper-container {
  height: 430px;
  @include media(sm) {
    height: auto;
  }
}

.doctor-comment-card {
  height: 290px;
  background-color: #f9f9f9;
  box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 25px 60px;
  margin-bottom: 100px;
  position: relative;
  @include media(sm) {
    height: auto;
    padding: 25px 30px 60px;
  }
}

.quote-sign {
  text-align: center;
  font-size: 1.7rem;
  color: $light-gold;
  margin-bottom: 20px;
}

.doctor-comment-name {
  font-size: 1.6rem;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  text-align: center;
  color: #777590;
}

.doctor-comment-text {
  direction: rtl;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #777590;
  margin-bottom: 30px;
  height: 100px;
  @include media(sm) {
    height: auto;
    text-align: justify;
  }
}

.doctor-comment-special {
  font-size: 1.2rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #9492a9;
  display: block;
  cursor: pointer;
  &:hover {
    color: $secondary-color;
  }
}

.doctor-comment-avatar {
  background-color: #cbcbcb;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  position: absolute;
  bottom: -45px;
  overflow: hidden;
  left: calc(50% - 45px);

  img {
    width: 100%;
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
</style>
<template>
  <div v-swiper:mySwiper="swiperOption" dir="rtl">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(comment, index) in comments" :key="index">
        <div class="doctor-comment-card">
          <div class="quote-sign">
            <i class="fa fa-quote-right" aria-hidden="true"></i>
          </div>
          <div class="doctor-comment-text">{{comment.quote}}</div>
          <div class="doctor-comment-name">{{ comment.name}}</div>
          <router-link
            class="doctor-comment-special"
            target="_blank"
            :to="{name:'doctors-id',params:{id:comment.doctor.subscriberNumber}}"
          >مشاور : {{comment.doctor.name}}</router-link>
          <div class="doctor-comment-avatar">
            <img :src="comment.avatar" />
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>
<script>
import comments from "./user_comments.js";
export default {
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        initialSlide: 2,
        loop: true,

        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        grabCursor: true
      },
      comments: comments
    };
  }
};
</script>