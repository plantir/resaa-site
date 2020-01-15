
<style lang="scss" scoped>
.charge-section-patient-container {
  background-color: #f5f5f5;
  padding: 80px 0;
}

.section-title {
  text-align: center;
  direction: rtl;
  background: linear-gradient(240deg, #3de0cb, #0dc9f0),
    linear-gradient(#00bff4, #00bff4);
  font-weight: 500;
  font-size: 2.675rem;
  -webkit-background-clip: text;
  margin-bottom: 15px;
  -webkit-text-fill-color: transparent;
}

.section-description {
  text-align: center;
  direction: rtl;
  font-size: 1.075rem;
  color: #777590;
  margin-bottom: 70px;
}

.section-description-2 {
  text-align: center;
  direction: rtl;
  font-size: 1.225rem;
  color: #777590;
}

.charge-cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
}

.charge-card {
  cursor: pointer;
  text-align: center;
  background-color: white;
  direction: rtl;
  width: 200px;
  height: 220px;
  box-shadow: 0 2.5px 5px 0 rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  border-radius: 10px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: #777590;
  }
}

.charge-card-top-tag {
  position: relative;
  height: 65%;
  width: 100%;
  border-bottom-right-radius: 50% 15%;
  border-bottom-left-radius: 50% 15%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-size: cover;
  background-position: bottom;

  img {
    margin-top: 20px;
  }
}

.tag-1 {
  background-image: url("gran.png"), linear-gradient(60deg, #42f3a1, #11d0f8);
}

.tag-2 {
  background-image: url("gran.png"), linear-gradient(60deg, #22d8ff, #0094c4);
}

.tag-3 {
  background-image: url("gran.png"), linear-gradient(60deg, #8dc0ff, #6c59fa);
}

.tag-4 {
  background-image: url("gran.png"), linear-gradient(60deg, #e41793, #951a9a);
}

.tag-5 {
  background-image: url("gran.png"), linear-gradient(60deg, #ffb853, #ff7531);
}

.charge-card-bottom-tag {
  position: relative;
  width: 100%;
  text-align: right;
  padding: 0 10px;
  margin-bottom: 10px;
}

.charge-card-description {
  font-size: 1rem;
  color: #777590;
}

.charge-card-price-and-buy {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.charge-card-price {
  font-size: 1.5rem;
  font-weight: 500;
  float: right;

  div {
    position: relative;
    right: -4px;
    bottom: 2px;
    font-weight: 400;
    font-size: 1rem;
    display: inline;
  }
}

.price-tag-1 {
  color: #01c3e2;
}

.price-tag-2 {
  color: #02a4d8;
}

.price-tag-3 {
  color: #857bf6;
}

.price-tag-4 {
  color: #e41793;
}

.price-tag-5 {
  color: #fd8846;
}

.charge-card-buy-button {
  width: 65px;
  min-width: 65px;
}

.section-description-3 {
  text-align: center;
  direction: rtl;
  color: #777590;
  line-height: 30px;
}

@media only screen and (max-width: 1100px) {
  .charge-card {
    margin: 0 20px 30px;
  }
}

@media only screen and (max-width: 600px) {
  .charge-section-patient-container {
    padding: 40px 0;
  }

  .charge-cards-container {
    margin-bottom: 0;
  }

  .section-description {
    margin-bottom: 30px;
  }

  .section-description-2,
  .section-description-3 {
    padding: 0 20px;
  }
}
</style>

<template>
  <div class="charge-section-patient-container">
    <h2 class="section-title">خرید شارژ</h2>
    <p class="section-description">افزایش اعتبار برای مکالمه تلفنی با پزشک</p>
    <p class="section-description-2">
      از طریق کد دستوری
      <span class="strong">ussd</span> با شماره
      <span class="strong" style="display: inline-block;direction: ltr;">*500*25#</span> میتوانید بدون نیاز به اینترنت اعتبار خود را افزایش دهید و
      <br />یا جهت افزایش اعتبار می توانید یکی از کارت شارژ های اینترنتی زیر را انتخاب کنید:
    </p>
    <div class="charge-cards-container">
      <div v-for="(item, index) in chargeMenuItems" :key="index">
        <router-link
          :to="{ name: 'charge', query: { chargeId: (item.id) }}"
          class="charge-card"
          :class="`card-${index + 1}`"
        >
          <div class="charge-card-top-tag" :class="`tag-${index + 1}`">
            <img src="./resaa.png" :alt="`کارت اعتباری ${item.amount} تومانی`" />
          </div>
          <div class="charge-card-bottom-tag">
            <div class="charge-card-description">کارت اعتباری</div>
            <div class="charge-card-price-and-buy">
              <div class="charge-card-price" :class="`price-tag-${index + 1}`">
                {{item.amount | currency | persianDigit }}
                <div>تومان</div>
              </div>
              <v-btn
                color="yellow darken-2"
                class="charge-card-buy-button"
                depressed
                round
                small
              >خرید</v-btn>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <p class="section-description-3">
      در صورت بروز هرگونه مشکل در هنگام تراکنش شماره‌ی تلفن، کد پیگیری و شماره‌ی رِسای خود را
      <br />به شماره‌ی
      <b>۱۰۰۰۹۰۹۹۰۹۹۰۹۹</b>
      ارسال کنید، کارشناسان ما با شما تماس خواهند گرفت.
      <br />یا با شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل فرمایید.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chargeMenuItems: []
    };
  },
  mounted() {
    this.$axios.get("/Charge/Denominations").then(response => {
      this.chargeMenuItems = response.data.result.denominations
        .filter(item => {
          return (
            item.amount == 10000 ||
            item.amount == 20000 ||
            item.amount == 30000 ||
            item.amount == 40000 ||
            item.amount == 50000
          );
        })
        .sort((a, b) => a.amount - b.amount);
    });
  }
};
</script>
