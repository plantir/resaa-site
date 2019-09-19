<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
  h1 {
    position: absolute;
    top: 133px;
    right: 120px;
    font-size: 26px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 70px;
      font-size: 20px;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
  }
  span {
    position: absolute;
    top: 210px;
    right: 130px;
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 120px;
      font-size: 20px;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
  }
}
.breadcrumbs {
  display: flex;
  align-items: center;
  @include media(sm) {
    justify-content: center;
  }
  span {
    color: #707070;
    display: flex;
  }
  .v-icon {
    color: #a9a9a9;
    font-size: 18px;
  }
}
.card-title {
  color: #707070;
  font-weight: 500;
  margin-bottom: 4px;
  @include media(sm) {
    text-align: center;
  }
}
.card-subtitle {
  color: #707070;
  font-weight: 500;
  margin-bottom: 40px;
  @include media(sm) {
    text-align: center;
  }
}
.item + .item {
  margin-top: 16px;
}
.card {
  border-radius: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -2px 5px rgba(0, 0, 0, 0.1);
  margin: 30px 0;
  padding: 30px 60px;
  background: #fff;
  @include media(sm) {
    padding: 30px;
  }
}
.comments-wrapper {
  background: #fff;
  padding: 30px 0;
  h3 {
    text-align: center;
    color: #999999;
    font-weight: normal;
    margin-bottom: 40px;
    font-size: 20px;
  }
}
</style>
<template>
  <section>
    <div class="header">
      <img class="hide-md" src="~assets/img/speciality_bg.png" alt />
      <img class="hide-md-and-up" src="~assets/img/speciality_bg_mobile@2x.png" alt />
      <h1>مشاوره تلفنی با متخصص روانشناسی</h1>
      <transition name="fade" mode="out-in">
        <span :key="text_array[header_text]">{{text_array[header_text]}}</span>
      </transition>
    </div>
    <v-container class="py-0">
      <div class="breadcrumbs">
        <span>سامانه رسا</span>
        <span>
          <v-icon>chevron_left</v-icon>
        </span>
        <span>مشاوره تلفنی با متخصص روانشناس</span>
      </div>
      <div class="card">
        <h2 class="card-title">لیست متخصصین روانشناسی</h2>
        <h3
          class="card-subtitle"
        >می توانید در این بخش لیست مشاوران روانشناسی سامانه رسا را مشاهده کنید و مشاور مورد نظر خود را انتخاب کنید.</h3>
        <div class="item" v-for="doctor in doctors.slice(0,3)" :key="doctor.subscriberNumber">
          <Doctor :doctor="doctor" />
        </div>
        <Guide />
        <div class="item" v-for="doctor in doctors.slice(3,6)" :key="doctor.subscriberNumber">
          <Doctor :doctor="doctor" />
        </div>
      </div>
    </v-container>
    <v-container class="comments-wrapper" fluid>
      <h3>نظر همراهان رسا در مورد مشاوره تلفنی روانشناسی</h3>
      <Comments />
    </v-container>
    <v-container>
      <Description />
    </v-container>
  </section>
</template>
<script>
import Wave from "@/assets/svg/speciality_wave.svg?inline";
import doctors from "@/components/doctor_detail/doctors";
import Doctor from "@/components/specialities/doctor";
import Guide from "@/components/specialities/guide";
import Comments from "@/components/specialities/comments";
import Description from "@/components/specialities/description";

export default {
  components: { Wave, Doctor, Guide, Comments, Description },
  data() {
    return {
      text_array: [
        "از هر کجای ایران!",
        "با بهترین مشاوران!",
        "با کمترین هزینه!",
        "بدون رفت و آمد!",
        "بدون انتظار و نوبت!",
        "بدون نیاز به اینترنت!",
        "هر زمان که بخواهید!",
        "محرمانه و ناشناس!",
        "بدون نیاز به گوشی هوشمند!"
      ],
      header_text: 0,
      doctors
    };
  },
  mounted() {
    setInterval(() => {
      if (this.header_text == this.text_array.length - 1) {
        this.header_text = 0;
      } else {
        this.header_text = this.header_text + 1;
      }
    }, 2000);
  }
};
</script>