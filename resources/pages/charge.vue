<template>
  <v-container>
    <div class="charge-container">
      <no-ssr v-if="ajaxLoading">
        <v-loading mode="relative"></v-loading>
      </no-ssr>
      <div v-else>
        <div v-if="chargeStep === 'input'" class="charge-input">
          <div class="charge-title">خرید شارژ</div>
          <div class="charge-description">افزایش اعتبار برای مکالمه با پزشک</div>
          <div class="user-code">
            <i class="fa fa-user"></i>
            <input
              v-model="subscriberNumber"
              placeholder="پنج رقم آخر شماره کاربری / شماره موبایل"
              required
            >
          </div>
          <div class="charge-amount" @click="toggleChargeMenu">
            <i class="fa fa-credit-card-alt"></i>
            <div
              id="activeChargeItem"
            >کارت اعتباری {{ this.selectedChargeItem.amount | currency | persianDigit }} تومانی</div>
            <i v-if="isMenuOpen" class="fa fa-sort-up"></i>
            <i v-else class="fa fa-sort-down"></i>
          </div>
          <div v-if="isMenuOpen" class="charge-menu" id="dropdown">
            <div
              v-for="item in chargeMenuItems"
              @click="selectChargeItem(item)"
              :key="item.id"
            >کارت اعتباری {{ item.amount | currency | persianDigit }} تومانی</div>
          </div>
          <button :disabled="!subscriberNumber" @click="onSubmit" class="charge-button">خرید شارژ</button>
          <vue-recaptcha
            ref="invisibleRecaptcha"
            @verify="onVerify"
            size="invisible"
            :sitekey="sitekey"
          ></vue-recaptcha>
          <div class="error-message" v-if="error">{{error}}</div>
          <div class="charge-followup-description">
            در صورت بروز هرگونه مشکل در هنگام تراکنش شماره‌ی تلفن، کد پیگیری و شماره‌ی رِسای خود را
            <br>به شماره‌ی ۱۰۰۰۹۰۹۹۰۹۹۰۹۹ ارسال کنید، کارشناسان ما با شما تماس خواهند گرفت.
            <br>یا با شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل فرمایید.
          </div>
        </div>
        <!-- step 1 -->
        <div v-if="chargeStep === 'receipt'" class="charge-receipt">
          <div class="charge-receipt-title">خرید شارژ</div>
          <div class="charge-receipt-description">افزایش اعتبار برای مکالمه با پزشک</div>
          <div class="charge-receipt-status">
            <div class="charge-receipt-status-text">پیش فاکتور</div>
            <div class="charge-receipt-status-container">
              <div class="charge-receipt-amount-container">
                مبلغ شارژ:
                <div
                  class="charge-receipt-amount"
                >{{ pre_factor.chargeDenomination.payableAmount | currency | persianDigit }} تومان</div>
              </div>
              <div class="charge-receipt-resaacode-container">
                کد رِسا:
                <div
                  class="charge-receipt-resaacode"
                >{{ pre_factor.subscriberNumber | persianDigit }}</div>
              </div>
              <div class="charge-receipt-phoneNum-container">
                شماره تلفن:
                <div
                  class="charge-receipt-phoneNum"
                >{{ pre_factor.obfuscatedPhoneNumber | persianDigit }}</div>
              </div>
              <!-- <div class="charge-receipt-customer-ID-container">
              شناسه خریدار:
              <div class="charge-receipt-customer-ID">
                {{pre_factor.gateway.submissionParameters.token}}
              </div>
              </div>-->
              <div class="charge-receipt-date-container">
                تاریخ خرید:
                <div class="charge-receipt-date">{{pre_factor.issuedAt | persianDate}}</div>
              </div>
              <div class="charge-receipt-serial-container">
                شماره پیش‌فاکتور:
                <div class="charge-receipt-serial">{{pre_factor.paymentRequestId}}</div>
              </div>
            </div>
          </div>
          <div @click="goToPaymentPage" class="charge-receipt-button">تأیید و پرداخت</div>
        </div>
        <!-- step 2 -->
        <div v-if="chargeStep === 'payment'">
          <div style="direction: ltr;text-align: center;">Bank payment portal, probably...!</div>
          <div @click="goToFinalPage" style="font-weight: bold;border: 1px solid black">Next</div>
        </div>
        <div v-if="chargeStep === 'success'" class="charge-success">
          <div class="charge-success-container">
            <i class="fa fa-check-circle"></i>
            <div class="charge-success-message">
              خرید شارژ
              <div
                class="charge-success-amount"
              >{{ charge.amount | currency | persianDigit }} تومانی</div>با موفقیت انجام شد.
            </div>
            <div class="charge-success-info">
              <div class="charge-success-tracking-code-container">
                کد پیگیری:
                <div class="charge-success-tracking-code">{{charge.trackingNumber}}</div>
              </div>
              <div class="charge-success-credit-container">
                اعتبار فعلی شما:
                <div class="charge-success-credit">{{ userCredit | currency | persianDigit }} تومان</div>
              </div>
              <p>در صورت وجود هر گونه مشکل و یا سوال میتوانید با پشتیبانی رسا به شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل نمایید.</p>
            </div>
            <router-link :to="{name:'patient-landing'}" class="charge-success-return-button">بازگشت</router-link>
          </div>
        </div>
        <!-- step 3 -->
        <div v-if="chargeStep === 'fail'" class="charge-failure">
          <div class="charge-failure-container">
            <i class="fa fa-times-circle"></i>
            <div class="charge-failure-message">فرایند پرداخت با خطا روبرو شد.</div>
            <div class="charge-failure-info">
              <div class="charge-failure-tracking-code-container">
                کد پیگیری:
                <div class="charge-failure-tracking-code">{{charge.trackingNumber}}</div>
                <div
                  class="charge-failure-description"
                >در صورتی که هزینه ای از حساب بانکی شما کسر شده باشد، طی ۲۴ ساعت آینده بازگردانده می‌شود. لطفاً در صورت تکرار این مشکل با پشتیبانی رسا به شماره ۰۲۱۷۴۴۷۱۳۰۰ تماس حاصل نمایید.</div>
              </div>
            </div>
            <div @click="goToInputPage" class="charge-failure-return-button">بازگشت</div>
          </div>
        </div>
      </div>

      <!-- step 4 -->
    </div>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "افزایش اعتبار حساب برای تماس با پزشک",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "برای خرید شارژ جهت مکالمه با پزشک شماره موبایل و مبلغ کارت اعتباری مورد نیاز خود را وارد کنید و اعتبار حساب خود را افزایش دهید"
        }
      ]
    };
  },
  data() {
    return {
      ajaxLoading: true,
      error: null,
      selectedChargeItem: {},
      chargeMenuItems: [],
      isMenuOpen: false,
      chargeStep: "input",
      subscriberNumber: null,
      recaptchaResponse: null,
      userCredit: 0,
      charge: {},
      pre_factor: {},
      bankReceiptSuccessResponse: true,
      mobile_regex: /^[0][9][0-3|9][0-9]{8,8}$/g,
      subscribe_regex: /^[0-9]{5,5}$/g
    };
  },
  beforeCreate() {
    // if (this.$route.query.request_id) {
    //   this.$axios
    //     .get(`/api//Charge/${this.$route.query.request_id}/Receipt`)
    //     .then(response => {
    //       if (response.data.status === "OK") {
    //         this.chargeStep = "success";
    //       } else {
    //         this.chargeStep = "fail";
    //       }
    //     })
    //     .catch(() => {
    //       this.chargeStep = "fail";
    //     });
    // }
    // if (this.$route.query.chargeRequestId) {
    //   this.ajaxLoading = true;
    //   this.$axios
    //     .get(`/api/Charge/${this.$route.query.chargeRequestId}/Receipt`)
    //     .then(res => {
    //       console.log(res);
    //       if (res.body.result.chargeReceipt.status === "Successful") {
    //         this.chargeStep = "success";
    //       } else {
    //         this.chargeStep = "fail";
    //       }
    //       this.ajaxLoading = false;
    //     });
    // }
  },
  created() {
    this.$axios.get("/api/Charge/Denominations").then(response => {
      this.chargeMenuItems = response.data.result.denominations;
      this.ajaxLoading = false;
      if (
        this.$route.query.chargeId &&
        this.$route.query.chargeId <= this.chargeMenuItems.length
      ) {
        for (let item of this.chargeMenuItems) {
          if (item.id == this.$route.query.chargeId) {
            this.selectedChargeItem = item;
          }
        }
      } else {
        this.selectedChargeItem = this.chargeMenuItems[0];
      }
    });
    if (this.$route.query.chargeRequestId) {
      this.ajaxLoading = true;
      this.$axios
        .get(`/api/Charge/${this.$route.query.chargeRequestId}/Receipt`)
        .then(res => {
          console.log(res);
          if (res.body.result.chargeReceipt.status === "Successful") {
            this.chargeStep = "success";
            this.charge.amount =
              res.body.result.chargeReceipt.chargeDenomination.amount;
            this.charge.trackingNumber =
              res.body.result.chargeReceipt.trackingNumber;
            this.userCredit = res.body.result.chargeReceipt.currentBalance;
          } else {
            this.chargeStep = "fail";
            this.charge.trackingNumber =
              res.body.result.chargeReceipt.trackingNumber;
          }
          this.ajaxLoading = false;
        })
        .catch(() => {
          this.chargeStep = "fail";
          this.ajaxLoading = false;
        });
    }
    if (this.$route.query.mobile) {
      this.subscriberNumber = this.$route.query.mobile;
    }
  },

  methods: {
    onVerify: function(response) {
      this.ajaxLoading = true;
      this.recaptchaResponse = response;
      this.goToPrereceipt();
    },
    resetRecaptcha() {
      this.$refs.invisibleRecaptcha.reset(); // Direct call reset method
    },
    onSubmit() {
      this.$refs.invisibleRecaptcha.execute();
    },

    toggleChargeMenu: function() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    selectChargeItem: function(item) {
      this.selectedChargeItem = item;
      this.isMenuOpen = false;
    },

    goToPrereceipt() {
      let data = {
        denominationId: this.selectedChargeItem.id,
        callbackUrl: process.env.BANK_RETURN_URL,
        recaptchaResponse: this.recaptchaResponse
      };
      let mobile = this.mobile_regex.exec(this.subscriberNumber);
      let subscriberNumber = this.subscribe_regex.exec(this.subscriberNumber);
      if (mobile) {
        data.phoneNumber = mobile[0];
      } else if (subscriberNumber) {
        data.subscriberNumber = subscriberNumber[0];
      }
      this.$axios
        .post("Charge", data)
        .then(response => {
          this.pre_factor = response.data.result.electronicPaymentVoucher;
          this.chargeStep = "receipt";
        })
        .catch(() => {
          this.error = "کاربری با این شماره یافت نشد";
        })
        .finally(() => {
          this.ajaxLoading = false;
          this.resetRecaptcha();
        });
    },

    goToPaymentPage: function() {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = this.pre_factor.gateway.address;
      const input = document.createElement("input");
      input.value = this.pre_factor.gateway.submissionParameters.token;
      input.name = "token";
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
    },

    goToFinalPage: function() {
      if (this.bankReceiptSuccessResponse === true) {
        this.chargeStep = "success";
        this.userCredit = this.userCredit + this.selectedChargeItem.amount;
      } else if (this.bankReceiptSuccessResponse === false) {
        this.chargeStep = "fail";
      }
    },

    goToInputPage: function() {
      this.chargeStep = "input";
      this.$router.replace({ name: "Charge" });
    }
  },
  computed: {
    sitekey() {
      return this.$store.state.sitekey;
    }
  }
};
</script>

<style lang="scss" scoped>
.charge-container {
  direction: rtl;
}

.charge-input,
.charge-receipt,
.charge-success,
.charge-failure {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
}

/*---------------STATE 1: INPUT---------------*/

.charge-title {
  text-align: center;
  color: $bright-sky-blue;
  font-size: 2.675rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.charge-description {
  margin-bottom: 35px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.9;
  color: $dark-blue-grey;
}

.user-code {
  max-width: 400px;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 1rem;
  text-align: right;
  margin: 0 auto 15px;
  padding: 12px 10px;

  input {
    border: none;
    background: none;
    width: 90%;

    &::placeholder {
      color: #9aa0b7;
      font-size: 1rem;
    }
  }

  i {
    color: #c5c9d5;
    margin-left: 5px;
  }
}

.charge-amount {
  display: flex;
  flex-direction: row;
  max-width: 400px;
  background-color: #f5f5f5;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 500;
  text-align: right;
  margin: 0 auto;
  padding: 12px 10px;
  color: #44436c;
  cursor: pointer;

  i:nth-child(1) {
    color: #c5c9d5;
    margin-left: 5px;
  }

  i:nth-child(2) {
    float: left;
    color: #44436c;
    margin-left: 5px;
  }
}

#activeChargeItem {
  width: 100%;
}

.fa-sort-up::before {
  position: relative;
  top: 4px;
}

.charge-menu {
  z-index: 9;
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translate(-50%, 0);
  flex-direction: column;
  max-width: 400px;
  font-size: 1rem;
  text-align: right;
  margin: 0 auto 15px;
  padding: 10px 0;
  color: #44436c;
  border-radius: 20px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  border: solid 1px #c5c9d5;
  overflow: hidden;

  div {
    padding: 5px 25px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      background-color: $tealish;
      color: #f5f5f5;
      font-weight: 500;
    }
  }
}

.charge-captcha {
  margin: 15px auto;
  display: flex;
  justify-content: center;
}

.charge-button {
  width: 400px;
  max-width: 100%;
  display: block;
  padding: 10px;
  border: none;
  border-radius: 20px;
  background-color: $bright-sky-blue;
  color: white;
  font-size: 1.175rem;
  font-weight: 600;
  text-align: center;
  margin: 10px auto;
  transition: box-shadow 0.5s;
  &[disabled] {
    opacity: 0.8;
    cursor: not-allowed;
  }
  &:not([disabled]):hover {
    box-shadow: 0 0 7px #8c8c8c;
    cursor: pointer;
  }
}
.error-message {
  width: 400px;
  max-width: 100%;
  display: block;
  padding: 10px;
  border: none;
  border-radius: 20px;
  color: red;
  font-size: 1.175rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto;
  transition: box-shadow 0.5s;
}

.charge-followup-description {
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  color: #44436c;
}

/*---------------STATE 2: RECEIPT---------------*/

.charge-receipt-title {
  text-align: center;
  color: $tealish;
  font-size: 2.675rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.charge-receipt-description {
  margin-bottom: 35px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.9;
  color: $dark-blue-grey;
}

.charge-receipt-status {
  width: 450px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  text-align: center;
  border-radius: 10px;
  color: #7e86a6;
  background-color: #f7f7f7;
}

.charge-receipt-status-text {
  font-size: 1.275rem;
  font-weight: 500;
  margin: 10px 5px;
}

.charge-receipt-status-container {
  font-size: 1.175rem;
  border-top: 1.5px dashed rgba(126, 134, 166, 0.5);
  padding: 10px 20px;
  text-align: right;
}

.charge-receipt-amount-container {
  margin-bottom: 5px;
}

.charge-receipt-amount {
  display: inline;
  color: $tealish;
  font-size: 1.375rem;
  font-weight: 500;
}

.charge-receipt-resaacode-container {
  margin-bottom: 5px;
  font-size: 1.175rem;
}

.charge-receipt-resaacode {
  display: inline;
  color: $dark-blue-grey;
  font-weight: 600;
}

.charge-receipt-phoneNum-container {
  margin-bottom: 5px;
  font-size: 1.175rem;
}

.charge-receipt-phoneNum {
  display: inline-block;
  direction: ltr;
  color: $dark-blue-grey;
  font-weight: 600;
}

.charge-receipt-customer-ID-container {
  margin-bottom: 5px;
}

.charge-receipt-customer-ID {
  display: inline;
  color: $dark-blue-grey;
}

.charge-receipt-date-container {
  margin-bottom: 5px;
}

.charge-receipt-date {
  display: inline;
  color: $dark-blue-grey;
}

.charge-receipt-serial-container {
}

.charge-receipt-serial {
  display: inline;
  color: $dark-blue-grey;
}

.charge-receipt-button {
  max-width: 350px;
  padding: 10px;
  margin: 25px auto;
  border: none;
  border-radius: 20px;
  background-color: $tealish;
  color: white;
  font-size: 1.175rem;
  font-weight: 600;
  text-align: center;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 7px #8c8c8c;
    cursor: pointer;
  }
}

/*---------------STATE 3: SUCCESS---------------*/

.charge-success {
  text-align: center;
  background: white url("/img/wave.png") center bottom no-repeat;
  min-height: 500px;

  i {
    font-size: 95px;
    color: $tealish;
  }
}

.charge-success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 300px;
}

.charge-success-message {
  color: $dark-blue-grey;
  margin-bottom: 10px;
  font-weight: 500;
}

.charge-success-amount {
  display: inline;
  color: $tealish;
  font-size: 1.175rem;
  font-weight: 500;
  margin: 0 6px;
}

.charge-success-info {
  width: 100%;
  max-width: 300px;
  padding: 20px;
  color: #7e86a6;
  background-color: #f7f7f7;
  border-radius: 10px;
  p {
    margin: 6px 0 0 0;
    text-align: justify;
  }
}

.charge-success-tracking-code-container {
}

.charge-success-tracking-code {
  display: inline;
  color: $dark-blue-grey;
}

.charge-success-credit-container {
}

.charge-success-credit {
  display: inline;
  color: $dark-blue-grey;
  font-size: 1.275rem;
  font-weight: 500;
}

.charge-success-return-button {
  display: block;
  padding: 5px;
  cursor: pointer;
  font-size: 1.175rem;
  text-align: center;
  color: $bright-sky-blue;
  width: 170px;
  border-radius: 18px;
  border: solid 2px $bright-sky-blue;
  background-color: white;
  margin-top: 13px;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
}

/*---------------STATE 4: FAILURE---------------*/
.charge-failure {
  text-align: center;
  background: white url("/img/wave.png") center bottom no-repeat;
  min-height: 500px;

  i {
    font-size: 95px;
    color: #d0225e;
  }
}

.charge-failure-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 300px;
}

.charge-failure-message {
  color: #d0225e;
  margin-bottom: 10px;
  font-weight: 500;
}

.charge-failure-info {
  max-width: 400px;
  width: 100%;
  padding: 10px;
  color: #7e86a6;
  background-color: #f7f7f7;
  border-radius: 10px;
}

.charge-failure-tracking-code-container {
}

.charge-failure-tracking-code {
  display: inline;
  color: $dark-blue-grey;
}

.charge-failure-description {
  color: $dark-blue-grey;
  margin-top: 10px;
  line-height: 25px;
  text-align: justify;
}

.charge-failure-return-button {
  display: block;
  padding: 5px;
  cursor: pointer;
  font-size: 1.175rem;
  text-align: center;
  color: $bright-sky-blue;
  width: 170px;
  border-radius: 18px;
  border: solid 2px $bright-sky-blue;
  background-color: white;
  margin-top: 13px;
}

@media only screen and (max-width: 600px) {
  .charge-followup-description > br {
    display: none;
  }
}

@media only screen and (max-width: 500px) {
  .charge-button {
    margin-bottom: 30px;
  }

  .charge-menu {
    width: 80%;
  }
}

@media only screen and (max-width: 450px) {
  .charge-receipt-amount-container,
  .charge-receipt-resaacode-container,
  .charge-receipt-phoneNum-container,
  .charge-receipt-customer-ID-container,
  .charge-receipt-date-container,
  .charge-receipt-serial-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .charge-receipt {
    padding: 0 10px;
  }
}

@media only screen and (max-width: 400px) {
  .charge-receipt-serial {
    font-size: 1rem;
    margin-top: 5px;
  }

  .charge-success-tracking-code-container,
  .charge-success-credit-container {
    display: flex;
    flex-direction: column;
  }

  .charge-success-info {
    margin-bottom: 10px;
  }
}
</style>
