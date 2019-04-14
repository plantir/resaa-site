<template>
  <div class="step-container">
    <div class="step-info">مرحله ۲ - جزو کدام دسته از پزشکان هستید؟</div>

    <v-layout row wrap>
      <v-flex md6 sm12 pa-1>
        <input hidden type="radio" id="plan1" value="1" v-model="doctor.subscriptionPlan">
        <label for="plan1">
          <div :class="[{'selected': doctor.subscriptionPlan == 1}, 'doctor-option old']">
            <div class="doctor-option-image">
              <img src="./old-doctor.png">
            </div>
            <div class="doctor-option-body">
              <div class="doctor-option-title">اکنون بیماران و تماس های زیادی دارید؟</div>
              <div class="doctor-option-benefits">
                <ul>
                  <li>حذف تماس های غیر ضروری</li>
                  <li>حذف مکالمات غیر مرتبط با روند درمان</li>
                  <li>کاهش قابل ملاحظه تماس های روزانه</li>
                  <li>انتقال تماس های خارج از رِسا به رِسا</li>
                  <li>اخذ هزینه بابت هر دقیقه مشاوره</li>
                  <li>تعیین نرخ هر دقیقه مکالمه توسط شما</li>
                </ul>
              </div>
              <div v-if="doctor.subscriptionPlan == 1" class="doctor-option-check-mark">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </label>
      </v-flex>
      <v-flex md6 sm12 pa-1>
        <input hidden type="radio" id="plan2" value="2" v-model="doctor.subscriptionPlan">
        <label for="plan2">
          <div :class="[{'selected': doctor.subscriptionPlan == 2}, 'doctor-option']">
            <div class="doctor-option-image">
              <img src="./young-doctor.png">
            </div>
            <div class="doctor-option-body">
              <div class="doctor-option-title">حاضرید پاسخ سوالات همه را بدهید؟</div>
              <div class="doctor-option-benefits">
                <ul>
                  <li>نمایش و معرفی شما در صفحه اول سایت</li>
                  <li>معرفی شما به بیماران سراسر کشور</li>
                  <li>حذف مکالمات غیر مرتبط با روند درمان</li>
                  <li>انتقال تماس های خارج از رِسا به رِسا</li>
                  <li>اخذ هزینه بابت هر دقیقه مشاوره</li>
                  <li>تعیین نرخ هر دقیقه مکالمه توسط شما</li>
                </ul>
              </div>
              <div v-if="doctor.subscriptionPlan == 2" class="doctor-option-check-mark">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </label>
      </v-flex>
    </v-layout>
    <div class="step-actions">
      <div>
        <div
          v-if="currentStep !== 1 && currentStep !== 4"
          class="step-prev-button"
          @click="goPrevStep"
        >
          <i class="fa fa-angle-right"></i>
          <div class="text">قبلی</div>
        </div>
      </div>
      <div>
        <div class="step-next-button" v-show="currentStep !== 4" @click="goNextStep">
          <div v-if="currentStep < 3 " class="text">بعدی</div>
          <div v-else class="text">تایید و ثبت نهایی</div>
          <i class="fa fa-angle-left"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    doctor() {
      return this.$store.state.doctor.info;
    },
    currentStep() {
      return this.$parent.currentStep;
    }
  },
  methods: {
    goPrevStep() {
      this.$emit("goPrevStep");
    },
    goNextStep() {
      this.$emit("goNextStep");
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  [class*=" col-"] {
    float: right;
  }
  @include respond-to(lg) {
    div + div {
      margin-top: 45px;
    }
  }
}
.step-info {
  text-align: center;
  margin-bottom: 70px;
  color: $dark-blue-grey;
  font-weight: 500;
}

.doctor-option {
  position: relative;
  margin-bottom: 80px;

  &.old {
    margin-bottom: 0;
  }
}

.doctor-option-image {
  background-color: white;
  padding: 10px;
  position: absolute;
  left: calc(50% - 78px);
  top: -72px;
  z-index: 2;
}

.doctor-option {
  cursor: pointer;
  direction: rtl;

  &.selected {
    .doctor-option-body {
      border: solid 1.5px rgba(19, 210, 243, 0.6);
    }
  }

  &:hover {
    .doctor-option-body {
      border: solid 1.5px rgba(19, 210, 243, 0.6);
    }
  }
}

.doctor-option-body {
  padding: 80px 30px 30px 30px;
  border: solid 1.5px #e2e4ea;
  border-radius: 15px;
  z-index: 0;
  position: relative;
  @include respond-to(sm) {
    padding: 80px 20px 30px 20px;
  }
}

.doctor-option-check-mark {
  background-color: $bright-sky-blue;
  width: 25px;
  height: 25px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  bottom: -12.5px;
  left: calc(50% - 12.5px);
}

.doctor-option-title {
  height: 50px;
  color: $dark-blue-grey;
  font-weight: 500;
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  text-align: right;

  li {
    color: #7e86a6;
    line-height: 25px;
    text-align: justify;
  }

  li::before {
    content: "";
    background-color: #13d2f3;
    width: 6px;
    height: 6px;
    display: inline-block;
    border-radius: 100%;
    margin-left: 8px;
  }
}
</style>
