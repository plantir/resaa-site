<style lang="scss" scoped>
section {
  height: auto;
  @include media(md-and-up) {
    min-height: calc(100vh - 160px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  border-radius: 16px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  display: flex;
  width: 600px;
  max-width: 100%;
  color: #000;
  background: #fff;
  height: auto;
  margin-bottom: 40px;
  @include media(md-and-up) {
    padding: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-top: 10px;
  }
  p {
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
    line-height: 32px;
  }
  @include media(md-and-up) {
    padding: 20px 30px;
  }
}
.price-wrapper {
  width: 100%;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 42px;
    padding: 8px 0;
    border-bottom: 2px dashed #aaa;
    font-size: 16px;
    font-weight: 500;
    &:last-child {
      border-bottom: none;
    }
    span:first-child {
      &:after {
        content: ":";
      }
    }
    span:last-child {
      max-width: 200px;
      text-align: left;
    }
  }
}
</style>
<template>
  <section>
    <div class="wrapper" v-if="receipt">
      <div v-if="receipt.transaction.status == 'paid'">
        <v-icon color="green" size="150">la-check-circle</v-icon>
        <span class="title green--text"
          >پرداخت موفق بود و درخواست شما ثبت شد</span
        >
        <p>
          کاربر گرامی درخواست در کمتر از ۲ ساعت (در بازه ی ۱۰ الی ۲۱) بررسی شده
          و جهت مراجعه و نمونه گیری با شما تماس گرفته می شود. جهت پیگیری سفارش
          خود کافیست از بالای صفحه تست کرونا پیگیری تست را انتخاب کرده و در صفحه
          جدید شماره موبایل و کد ملی خود را وارد نمایید.
        </p>
        <p class="red--text">
          دقت کنید که مبلغ پرداختی به نمونه گیر باید دقیقا مطابق جدول زیر باشد،
          در صورتی که نمونه گیر مبلغی متفاوت با عدد ذکر شده درخواست کرد بلافاصله
          با پشتیبانی به شماره 02174471300 تماس بگیرید.
        </p>
        <div class="price-wrapper">
          <div class="item">
            <span>کد پیگیری</span>
            <span>{{ receipt.transaction.tracking_code | persianDigit }}</span>
          </div>
          <div class="item">
            <span>نام و نام خانوادگی</span>
            <span>{{ receipt.user_fullname }}</span>
          </div>
          <div class="item">
            <span>کد ملی</span>
            <span>{{ receipt.user_nationalcode | persianDigit }}</span>
          </div>
          <div class="item">
            <span>شماره تلفن همراه</span>
            <span>{{ receipt.user_mobile | persianDigit }}</span>
          </div>
          <div class="item">
            <span>شهر</span>
            <span>{{ receipt.city.name }}</span>
          </div>
          <div class="item">
            <span>تست انتخاب شده</span>
            <span>{{ receipt.selected_test.name }}</span>
          </div>
          <div class="item">
            <span>هزینه کامل تست</span>
            <span
              >{{ receipt.total_amount | currency | persianDigit }} تومان</span
            >
          </div>
          <div class="item pink--text">
            <span>پرداخت آنلاین جهت تست</span>
            <span
              >{{ receipt.prepay_amount | currency | persianDigit }} تومان</span
            >
          </div>
          <div class="item info--text" v-if="receipt.role_discount_amount">
            <span>تخفیف بر روی تعداد</span>
            <span
              >{{
                receipt.role_discount_amount | currency | persianDigit
              }}
              تومان</span
            >
          </div>
          <div class="item info--text" v-if="receipt.discount && receipt.discount.amount">
            <span>کد تخفیف</span>
            <span
              >{{
                receipt.discount.amount | currency | persianDigit
              }}
              تومان</span
            >
          </div>
          <div class="item success--text">
            <span>مبلغ قابل پرداخت در محل</span>
            <span
              >{{
                receipt.payable_amount | currency | persianDigit
              }}
              تومان</span
            >
          </div>

          <div class="item">
            <span>تاریخ پرداخت</span>
            <span>{{ date | persianDigit }}</span>
          </div>
        </div>
        <span>
          <v-btn href="tel:02174471300" color="primary" round outline block
            >تماس با پشتیبانی رسا</v-btn
          >
        </span>
      </div>
      <div v-else>
        <v-icon color="red" size="150">la-times-circle</v-icon>
        <span class="title red--text">فرایند پرداخت با خطا روبرو شد.</span>
        <div class="price-wrapper">
          <div class="item">
            <span>کد پیگیری</span>
            <span>{{ receipt.transaction.tracking_code | persianDigit }}</span>
          </div>
          <div class="item">
            <span>نام و نام خانوادگی</span>
            <span>{{ receipt.user_fullname }}</span>
          </div>
          <div class="item">
            <span>کد ملی</span>
            <span>{{ receipt.user_nationalcode | persianDigit }}</span>
          </div>
          <div class="item">
            <span>شماره تلفن همراه</span>
            <span>{{ receipt.user_mobile | persianDigit }}</span>
          </div>
          <div class="item">
            <span>شهر</span>
            <span>{{ receipt.city.name }}</span>
          </div>
          <div class="item">
            <span>تست انتخاب شده</span>
            <span>{{ receipt.selected_test.name }}</span>
          </div>
          <div class="item">
            <span>هزینه کامل تست</span>
            <span
              >{{ receipt.total_amount | currency | persianDigit }} تومان</span
            >
          </div>
          <div class="item pink--text">
            <span>پرداخت آنلاین جهت تست</span>
            <span
              >{{ receipt.prepay_amount | currency | persianDigit }} تومان</span
            >
          </div>
          <div class="item info--text" v-if="receipt.role_discount_amount">
            <span>تخفیف بر روی تعداد</span>
            <span
              >{{
                receipt.role_discount_amount | currency | persianDigit
              }}
              تومان</span
            >
          </div>
          <div class="item info--text" v-if="receipt.discount && receipt.discount.amount">
            <span>کد تخفیف</span>
            <span
              >{{
                receipt.discount.amount | currency | persianDigit
              }}
              تومان</span
            >
          </div>
          <div class="item success--text">
            <span>مبلغ قابل پرداخت در محل</span>
            <span
              >{{
                receipt.payable_amount | currency | persianDigit
              }}
              تومان</span
            >
          </div>

          <div class="item">
            <span>تاریخ پرداخت</span>
            <span>{{ date | persianDigit }}</span>
          </div>
        </div>
        <p>
          در صورتی که هزینه ای از حساب بانکی شما کسر شده باشد، طی ۲۴ ساعت آینده
          بازگردانده می‌شود. لطفاً در صورت تکرار این مشکل با پشتیبانی رسا به
          شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل نمایید.
        </p>
        <span>
          <v-btn href="tel:02174471300" color="primary" round outline
            >تماس با پشتیبانی رسا</v-btn
          >
          <v-btn to="/corona-test" color="secondary" round outline
            >تلاش مجدد</v-btn
          >
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import moment from "moment-jalaali";
export default {
  layout: "corona-test",
  computed: {
    date() {
      return moment().format("jYYYY/jMM/jDD");
    },
  },
  data() {
    return {
      receipt: null,
    };
  },
  async mounted() {
    if (!this.$route.query.chargeRequestId) {
      this.$router.push("/corona-test");
    }
    let loader = this.$loader.show("#app");
    this.$storage.removeUniversal("cronaTest");
    try {
      this.receipt = await this.$axios.$post(
        process.env.EXTRA_API_URL + "/corona-orders/callback",
        {
          chargeRequestId: this.$route.query.chargeRequestId,
        }
      );
      if (this.receipt.transaction.status == "paid") {
        this.$gtm.push({
          event: "coronaPayment",
          amount: this.receipt.prepay_amount,
          testType: this.receipt.selected_test.name,
        });
      }
    } catch (error) {
      this.$toast.warning().showSimple("عدم ارتباط با سرور");
    }

    loader.hide();
  },
};
</script>
