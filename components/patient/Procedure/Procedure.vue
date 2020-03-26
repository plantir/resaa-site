
<style lang="scss">
.tooltip {
  font-family: iranSans;
  &.show {
    opacity: 1;
  }
}
.procedure-section-patients-container {
  background-image: linear-gradient(240deg, #2ede8d, #0cc6ec);
  box-shadow: inset 0 0 12.5px 0 rgba(0, 0, 0, 0.15);
  direction: rtl;
  .procedure-title {
    padding-top: 60px;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 1.75rem;
    text-shadow: 0 1px 5px rgba(12, 108, 124, 0.35);
  }

  .procedure-description {
    margin-top: 10px;
    direction: rtl;
    color: white;
    font-weight: normal;
    text-align: center;
    text-shadow: 0 0 3.9px rgba(12, 108, 124, 0.6);
  }

  .item-number {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #3de5be;
    font-size: 2.5rem;
    font-weight: 600;
    text-shadow: none;
    margin-bottom: 10px;
  }

  .item-image {
    width: 200px;
    height: 200px;
  }

  .item-even {
    flex-direction: row-reverse !important;
  }

  .procedure-items-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }

  .item-text {
    max-width: 300px;
    font-size: 1.3rem;
    line-height: 25px;
    color: white;
    text-shadow: 0 0 3.9px rgba(12, 108, 124, 0.6);
  }

  .item-description-title {
    font-size: 1.175rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .item-description {
    font-size: 1rem;
  }
  .item-description-link {
    cursor: pointer;
    color: white;
    border-bottom: 1px dashed;
    padding-bottom: 3px;
    font-weight: 500;
    &:hover {
      color: #eee;
    }
  }

  .procedure-item {
    display: flex;
    flex-direction: row;
    min-width: 650px;
    justify-content: space-between;
    margin-bottom: 80px;
  }

  .procedure-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 60px;
  }

  .procedure-signup-button {
    width: 174px;
    box-shadow: 0 5px 7.5px 0 rgba(255, 206, 70, 0.3);
    color: #545456;
  }

  .procedure-download-button {
    width: 174px;
    border-width: 2px;
  }

  @media only screen and (max-width: 900px) {
    .procedure-item {
      min-width: 500px;
    }
  }

  @media only screen and (max-width: 600px) {
    .procedure-item,
    .item-odd,
    .item-even {
      min-width: unset;
      flex-direction: column !important;
      align-items: center;
    }

    .item-text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media only screen and (max-width: 400px) {
    .procedure-button-container {
      flex-direction: column;
      align-items: center;
      padding-bottom: 50px;

      div {
        margin: 5px 0;
      }
    }

    .procedure-item {
      margin-bottom: 50px;
    }

    .item-text {
      max-width: 250px;
      margin-bottom: 10px;
      text-align: center;
    }

    .item-image {
      width: 140px;
      height: 140px;
    }
  }
}
</style>

<template>
  <div class="procedure-section-patients-container">
    <h2 class="procedure-title">مراحل دریافت مشاوره پزشکی در رسا</h2>
    <p class="procedure-description">چطور با پزشک خود در ارتباط باشم؟</p>
    <div class="procedure-items-container">
      <div class="procedure-item item-odd">
        <div class="item-text">
          <div class="item-number">۱</div>
          <p class="item-description-title">
            <strong>ثبت نام رایگان در رِسا</strong>
          </p>
          <div class="item-description">
            - با شماره گیری ۷۴۴۷۱۱۱۱-۰۲۱ در سامانه یا از طریق همین
            <a
              v-scroll-to="{ el: '#register', offset: -50 ,duration:1500}"
              class="item-description-link"
            >سایت</a>
            و یا
            <a
              v-scroll-to="{ el: '#download', offset: -50,duration:1500 }"
              class="item-description-link"
            >اپلیکیشن رِسا</a>
            می&#160;توانید اقدام به ثبت نام کنید.
          </div>
        </div>
        <img class="item-image" src="./Item1.png" alt="ثبت نام رایگان در رسا" />
      </div>
      <div class="procedure-item item-even">
        <div class="item-text">
          <div class="item-number">۲</div>
          <p class="item-description-title">
            <strong>جستجوی کد رِسای پزشک خود</strong>
          </p>
          <p class="item-description">
            - برای ارتباط با پزشک به کد رِسای آن نیاز است که از طریق همین
            <a
              v-scroll-to="{ el: '#doctors', offset: -50 ,duration:1500}"
              class="item-description-link"
            >سایت</a>
            و یا
            <a
              v-scroll-to="{ el: '#download', offset: -50,duration:1500 }"
              class="item-description-link"
            >اپلیکیشن رِسا</a>
            می&#160;توانید کد و مشخصات پزشک خود را بیابید.
          </p>
        </div>
        <img class="item-image" src="./Item2P.png" alt="جستجوی کد رسای پزشک" />
      </div>
      <div class="procedure-item item-odd">
        <div class="item-text">
          <div class="item-number">۳</div>
          <p class="item-description-title">
            <strong>براحتی گفتگو کنید</strong>
          </p>
          <div class="item-description-list">
            <p class="item-description">- با پزشک خود بصورت مستقیم گفتگو کنید.</p>
            <p class="item-description">
              -
              هزینه تماس
              به صورت دقیقه‌ای محاسبه خواهد شد.
            </p>
            <!-- <div class="item-description">- اولین تماس مهمان رسا هستید.
              <v-tooltip bottom>
                <template #activator="data">
                  <i title class="fa fa-exclamation-circle"></i>
                </template>
                <span>به درخواست خود پزشکان، بعضی از آنها از این قاعده مستثنا می باشند</span>
              </v-tooltip>
            </div>-->
          </div>
        </div>
        <img class="item-image" src="./Item3.png" alt="گفتگوی ممستقیم با پزشک رسا" />
      </div>
    </div>

    <div class="procedure-button-container">
      <!-- <v-btn
        id="procedureRegister"
        class="procedure-signup-button"
        to="/patient/register"
        round
        color="yellow darken-2"
      >ثبت نام رایگان</v-btn>-->
      <resaaButton id="procedureRegister" to="/patient/register">ثبت نام رایگان</resaaButton>
      <v-btn
        class="procedure-download-button"
        v-scroll-to="{ el: '#download', offset: -50 , duration: 1500}"
        color="white"
        outline
        round
      >دریافت اپلیکیشن</v-btn>
    </div>
  </div>
</template>

<script>
import resaaButton from "~/components/resaa-button.vue";
export default {
  components: {
    resaaButton
  }
};
</script>
