<style lang="scss" scoped>
.benefits-section-doctor-curve {
  width: 120%;
  position: relative;
  top: -155px;
  left: 10%;
  height: 80px;
}

@media (max-width: 900px) {
  .benefits-cards {
    flex-direction: column !important;
    align-items: center;
    .card {
      margin-bottom: 50px;
      width: 80%;
    }
  }
}

.benefits-section-container {
  background-color: white;
  padding: 80px 0;
  overflow: hidden;
}

.section-title {
  background-image: linear-gradient(10deg, #33e4ea, #00b2ed);
  font-weight: 500;
  text-align: center;
  font-size: 2.675rem;
  -webkit-background-clip: text;
  margin-bottom: 15px;
  -webkit-text-fill-color: transparent;
}

.section-description {
  color: #777590;
  text-align: center;
  font-style: normal;
  font-size: 1.5rem;
  font-weight: 300;
}

.benefits-cards {
  margin-top: 70px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}

.sep {
  width: 1.5px;
  height: 336.5px;
  background-image: linear-gradient(
    to top,
    #ffffff,
    rgba(233, 232, 241, 0.99) 46%,
    #ffffff
  );
  border: 1.5px solid;
  border-image-source: linear-gradient(
    to top,
    #ffffff,
    rgba(233, 232, 241, 0.99) 46%,
    #ffffff
  );
  border-image-slice: 1;
}

.benefit-list {
  direction: rtl;
  list-style: none;
  padding: 0;

  li {
    line-height: 30px;
    text-align: justify;
  }

  li::before {
    content: "";
    background-color: #4cdbc4;
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    margin-left: 8px;
  }

  li:nth-child(n + 4) {
    &::before {
      color: $bright-sky-blue;
    }
  }
}

.card-title {
  margin: 20px 0;
  color: $dark-blue-grey;
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
}

.card {
  margin: 0 35px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    // width: 200px;
    height: auto;
  }
}

.card-button {
  width: 173px;
  margin-top: 1rem;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 20px 17.5px 0 rgba(0, 0, 0, 0.08);
  @include respond-to(sm) {
    padding: 30px 15px;
  }
}
</style>

<template>
  <div class="benefits-section-container">
    <!-- <img class="benefits-section-doctor-curve" src="./sec-2-bg@2x2.png" /> -->
    <div id="element" class="section-title">مزایای استفاده از رِسا</div>
    <div class="section-description">
      خدمات و مزایای سامانه رِسا برای پزشکان
    </div>
    <div class="benefits-cards">
      <div class="card">
        <img src="./young-doctor.png" />
        <div class="card-body">
          <div class="card-title">اکنون بیماران و تماس های زیادی دارید؟</div>
          <ul class="benefit-list">
            <li>حذف تماس های غیر ضروری</li>
            <li>حذف مکالمات غیر مرتبط با روند درمان</li>
            <li>کاهش قابل ملاحظه تماس های روزانه</li>
            <li>انتقال تماس های خارج از رِسا به رِسا</li>
            <li>اخذ هزینه بابت هر دقیقه مشاوره</li>
            <li>تعیین نرخ هر دقیقه مکالمه توسط شما</li>
          </ul>
          <v-btn
            color="primary"
            :to="{ name: 'doctors-register', query: { subscriptionPlan: 2 } }"
            class="card-button"
            round
            >ثبت نام رایگان</v-btn
          >
        </div>
      </div>
      <div class="card">
        <img src="./old-doctor.png" />
        <div class="card-body">
          <div class="card-title">حاضرید پاسخ سوالات همه را بدهید؟</div>
          <ul class="benefit-list">
            <li>نمایش و معرفی شما در صفحه اول سایت</li>
            <li>معرفی شما به بیماران سراسر کشور</li>
            <li>حذف مکالمات غیر مرتبط با روند درمان</li>
            <li>انتقال تماس های خارج از رِسا به رِسا</li>
            <li>اخذ هزینه بابت هر دقیقه مشاوره</li>
            <li>تعیین نرخ هر دقیقه مکالمه توسط شما</li>
          </ul>
          <v-btn
            color="primary"
            :to="{ name: 'doctors-register', query: { subscriptionPlan: 1 } }"
            class="card-button"
            round
            >ثبت نام رایگان</v-btn
          >
        </div>
      </div>
    </div>
    <div class="doctor-suport mt-4">
      شماره پشتیبانی پزشکان: <span>{{ "021-74471200" | persianDigit }}</span>
    </div>
  </div>
</template>

<script>
import doctorImageMan from "./doctor-2.png";
import doctorImageWoman from "./doctor-1.png";

export default {
  name: "benefits",
  data: function() {
    return {
      doctorImageMan,
      doctorImageWoman
    };
  }
};
</script>
