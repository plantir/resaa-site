<style lang="scss" scoped>
.custom-container {
  max-width: 1200px;
  margin: 0 auto;
}
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
    top: 153px;
    right: 120px;
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 80px;
      font-size: 20px;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
  }
  span {
    position: absolute;
    top: 230px;
    right: 130px;
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 130px;
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
  padding-right: 16px;
  @include media(sm) {
    padding-right: 0px;
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
  font-weight: normal;
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
  margin: 10px 0;
  padding: 30px 60px;
  background: #fff;
  @include media(sm) {
    padding: 30px 16px;
  }
}
.comments-wrapper {
  background: #fff;
  padding: 30px 0;
  h3 {
    text-align: center;
    color: #999999;
    font-weight: 500;
    margin-bottom: 40px;
    font-size: 21px;
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
      <div class="custom-container">
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
          <div
            class="item"
            v-for="doctor in sorted_doctors.slice(0,3)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
          <Guide />
          <div
            class="item"
            v-for="doctor in sorted_doctors.slice(3,6)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
        </div>
      </div>
    </v-container>
    <v-container class="comments-wrapper" fluid>
      <h3>
        نظر همراهان رسا در
        <br class="hide-md-and-up" />مورد مشاوره تلفنی روانشناسی
      </h3>
      <Comments />
    </v-container>
    <v-container>
      <div class="custom-container">
        <Description />
      </div>
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
import _ from "lodash";
export default {
  layout: "speciality",
  components: { Wave, Doctor, Guide, Comments, Description },
  data() {
    let available = doctors.filter(item => item.currentlyAvailable);
    let notavailable = doctors.filter(item => !item.currentlyAvailable);
    let sorted_doctors = _.sampleSize(available, 6);
    if (sorted_doctors.length < 6) {
      sorted_doctors.push(
        ..._.sampleSize(notavailable, 6 - sorted_doctors.length)
      );
    }
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
      sorted_doctors: sorted_doctors
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