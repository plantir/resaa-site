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
  p {
    margin-bottom: 0;
    text-align: center;
    span {
      color: #9492a9;
      font-size: 1.2rem;
    }
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
  margin-bottom: 30px !important;
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
  display: inline-block;
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
  <no-ssr>
    <div v-swiper:mySwiper="swiperOption" dir="rtl">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(comment, index) in comments" :key="index">
          <div class="doctor-comment-card">
            <div class="quote-sign">
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </div>
            <p class="doctor-comment-text" v-html="comment.body"></p>
            <h3 class="doctor-comment-name">{{ comment.author }}</h3>
            <p>
              <span>متخصص :</span>
              <router-link
                class="doctor-comment-special"
                target="_blank"
                :to="
                  `/doctors/${comment.doctor.specialtyEnglishTitle.replace(
                    / /g,
                    '-'
                  )}/${comment.doctor.subscriberNumber}`
                "
              >{{ comment.doctor.fullName }}</router-link>
            </p>
            <div class="doctor-comment-avatar">
              <img :src="'/api/' + comment.authorImagePath" />
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </no-ssr>
</template>
<script>
export default {
  props: {
    comments: {
      default: () => []
    }
  },
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
      }
    };
  }
};
</script>
