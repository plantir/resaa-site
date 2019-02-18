<template>
  <div class="intro-section-patients-container">
    <div class="intro-title">ارتباط تلفنی و مستقیم با پزشک</div>
    <div class="intro-description">با سـامانه رِسا از هـر جایی با پـزشـک خـود مـشـورت کنید</div>
    <div class="intro-buttons">
      <a v-scroll-to="{ el: '#register', offset: -50 }" class="button">ثبت نام رایگان</a>
      <a class="button" @click="openVideo">نمایش ویدئو</a>
    </div>
    <div class="intro-patient-image">
      <img src="./PAT.png">
      <div class="side-button left">
        <div v-scroll-to="{ el: '#download', offset: -50 }" class="side-button-text">
          <div class="side-button-sub-title">ارتباط با پزشکان</div>
          <a class="side-button-title">دریافت اپلیکیشن رِسا</a>
        </div>
        <div class="side-button-icon">
          <img src="./mobile.svg">
        </div>
      </div>
      <div class="side-button right">
        <div class="side-button-text">
          <div class="side-button-sub-title">ارتباط با پزشکان</div>
          <div class="side-button-title">تماس با ۷۴۴۷۱۱۱۱ ۰۲۱</div>
        </div>
        <div class="side-button-icon">
          <img src="./phone.svg">
        </div>
      </div>
    </div>
    <div class="next-section-button" v-scroll-to="{ el: '#element', offset: -100 }">
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="bottom-curve">
      <img class="benefits-section-patient-curve" src="./sec-2-bg@2x2.png">
    </div>
    <div class="parallax">
      <div ref="parallax">
        <div data-depth=".3" class="landing-section-patients-wave wave-1">
          <div></div>
        </div>
        <div data-depth="1" class="landing-section-patients-wave wave-2">
          <div></div>
        </div>
      </div>
    </div>
    <PatientVideo v-if="show_video" @closeModal="closeModal"></PatientVideo>
  </div>
</template>

<script>
import patientImage from "./patient.jpg";
import Parallax from "parallax-js";
import PatientVideo from "@/components/patient/video/video";
export default {
  data() {
    return {
      patientImage,
      show_video: false
    };
  },
  components: { PatientVideo },
  mounted() {
    new Parallax(this.$refs.parallax);
  },
  methods: {
    openVideo() {
      this.show_video = true;
    },
    closeModal() {
      this.show_video = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-curve {
  position: absolute;
  bottom: 0px;
  width: 120%;
  left: -10%;
  height: 50px;
  .benefits-section-patient-curve {
    width: 100%;
    height: 100%;
  }
}
.intro-section-patients-container {
  padding-top: 140px;
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 746px;
  background: linear-gradient(240deg, #39ec99, #11d0f8);
  .parallax {
    position: absolute;
    bottom: 20px;
  }
  .landing-section-patients-wave {
    // position: absolute;
    // bottom: -2px;
    img {
      width: 100%;
    }
    &.wave-1 {
      > div {
        background-image: url(./Wave-Big-1.png);
        display: block;
        width: 10000px;
        height: 360px;
        position: relative;
        left: 50%;
        background-repeat: repeat-x;
      }
    }
    &.wave-2 {
      > div {
        background-image: url(./Wave-Big-2.png);
        display: block;
        width: 10000px;
        height: 360px;
        position: relative;
        left: 50%;
        background-repeat: repeat-x;
      }
    }
  }
}

.intro-buttons {
  margin-top: 30px;
  justify-content: center;
  display: flex;
  flex-direction: row-reverse;

  .button {
    cursor: pointer;
    width: 174px;
    height: 37.5px;
    border-radius: 18.5px;
    text-align: center;
    line-height: 37.5px;
    color: white;
    margin: 10px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    border: solid 2px white;
    z-index: 99;
  }
  a {
    color: #fff;
  }
}

.intro-title {
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 3rem;
}

.intro-description {
  direction: rtl;
  color: white;
  font-weight: normal;
  text-align: center;
}

.next-section-button {
  // line-height: 70px;
  // text-align: center;
  // position: absolute;
  // bottom: 50px;
  // left: calc(50% - 25px);
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  .fa {
    z-index: 10;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 5px 7.5px 0 rgba(255, 206, 70, 0.3);
    height: 50px;
    width: 50px;
    color: white;
    background-color: $light-gold;
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.intro-patient-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 70px;
  > img {
    height: 300px;
    z-index: 9;
  }
  .side-button {
    cursor: pointer;
    z-index: 10;
    width: 220px;
    height: 112px;
    box-shadow: 0 7.5px 17.5px 0 rgba(0, 0, 0, 0.12);
    position: absolute;
    bottom: 200px;
    transition: ease-in 0.2s;
    display: flex;
    align-items: center;
    top: 0;
    bottom: 0;
    margin: auto;

    &.left {
      flex-direction: row-reverse;
      right: calc(100% - 50px);
      border-radius: 0 20px 20px 0;

      .side-button-text {
        align-items: flex-start;
        padding-right: 20px;
      }

      .side-button-icon {
        border-radius: 0 20px 20px 0;
      }

      &:hover {
        transform: translateX(170px);
      }
    }

    &.right {
      flex-direction: row;
      border-radius: 20px 0 0 20px;
      left: calc(100% - 50px);

      .side-button-text {
        align-items: flex-end;
        padding-left: 20px;
      }

      .side-button-icon {
        border-radius: 20px 0 0 20px;
      }

      &:hover {
        transform: translateX(-170px);
      }
    }
  }

  .side-button-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    opacity: 1 !important;
    width: 68px;
    height: 100%;

    img {
      width: 25px;
    }
  }

  .side-button-text {
    direction: rtl;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0.8;
    background-color: white;
    height: 100%;
    width: 100%;

    .side-button-sub-title {
      color: #7c79a8;
      font-size: 1.2rem;
    }

    .side-button-title {
      color: #2b295a;
      font-weight: 500;
    }
  }
}
</style>
