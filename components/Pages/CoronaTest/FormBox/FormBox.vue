<style lang="scss" scoped>
.wrapper {
  background: #fff;
  border-radius: 16px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  display: flex;
  @include media(md-and-up) {
    padding: 20px 30px;
  }
  p {
    text-align: center;
    font-size: 14px !important;
    font-weight: 400;
    margin-top: 16px;
    text-align: center;
    max-width: 600px;
  }
}
.form-wrapper {
  width: 100%;
  @include media(md-and-up) {
    max-width: 580px;
  }
  margin-top: 36px;
}
.form-group {
  display: flex;
  flex-direction: column;
  @include media(md-and-up) {
    flex-direction: row;
  }
  ::v-deep {
    .v-list__tile__title {
      direction: ltr;
    }
    .v-input--is-disabled {
      .v-input__slot {
        border-style: dashed;
      }
    }
  }

  > label {
    flex: 0 0 100%;
    color: #4a4a4a;
    padding: 0 12px 12px 0;
    @include media(md-and-up) {
      flex: 0 0 25%;
      padding: 6px;
    }
    &[required]:after {
      content: "*";
      margin-right: 4px;
      color: #e91e63;
    }
  }
  ::v-deep {
    .v-input--is-dirty.invalid .v-input__slot {
      border-color: #e91e63 !important;
    }
    .v-input {
      font-size: 13px;
      &.v-input--is-focused {
        .v-input__slot {
          @if variable-exists(primary-color) {
            border-color: $primary-color !important;
          } @else {
            border-color: var(--v-primary-base) !important;
          }
        }
      }

      .v-input__slot {
        min-height: 38px;
        border-width: 1px !important;
        border-color: #e2e5ec !important;
        align-items: center;
      }
      .v-input__prepend-inner {
        margin-top: 6px;
      }
      .v-input__append-inner {
        margin-top: 6px;
      }

      .v-label {
        top: 7px;
        font-size: 13px;
      }
      input {
        margin-top: 0;
      }
    }
    .v-input--selection-controls {
      margin-top: 0;
      padding-top: 0;
      .v-label {
        top: 0;
      }
    }
    .v-messages {
      min-height: 18px;
    }
    .v-text-field__suffix {
      background: #f5f5f5;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: -12px;
      min-width: 40px;
      border-radius: 4px 0 0 4px;
    }
    .v-text-field--outlined fieldset {
      border-color: #e2e5ec !important;
    }
  }
}
.input-detail {
  text-align: center;
}
.reserve-btn {
  text-align: center;
  margin-top: 16px;
  .v-btn {
    min-width: 180px;
    background: linear-gradient(to right, #28db9a, #0ec7e5);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
  }
}
.price-wrapper {
  width: 100%;
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
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
  }
}
.checkbox-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > .v-input {
    min-width: 33%;
    @include media(md-and-up) {
      min-width: 25%;
    }
  }
  .error--text {
    width: 100%;
  }
}
</style>
<template>
  <section id="FormBox">
    <div class="wrapper">
      <template v-if="showFactor">
        <h3>پیش فاکتور تست کرونا در منزل</h3>
        <p>
          با فشردن دکمه پرداخت اینترنتی می توانید هزینه تست انتخابی خود را به
          صورت آنلاین پرداخت کنید.
        </p>
      </template>
      <template v-else>
        <h3>فرم رزرو تست کرونا در منزل</h3>
        <p>
          برای انجام تست کرونا در منزل لازم است فرم زیر را پر کنید. پس از پرداخت
          هزینه ی تست، پشتیبانی در کمتر از ۲ ساعت در بازه ی ۹ الی ۲۱ با شما تماس
          خواهد گرفت و برای گرفتن تست با شما هماهنگ خواهد کرد.
        </p>
      </template>
      <div class="form-wrapper">
        <template v-if="receipt">
          <div class="price-wrapper">
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
                >{{ (receipt.total_amount / 1000) | persianDigit }} هزار
                تومان</span
              >
            </div>
            <div class="item pink--text">
              <span>پرداخت آنلاین جهت تست</span>
              <span
                >{{ (receipt.prepay_amount / 1000) | persianDigit }} هزار
                تومان</span
              >
            </div>
            <div class="item info--text">
              <span>تخفیف بر روی تعداد</span>
              <span
                >{{ (receipt.role_discount_amount / 1000) | persianDigit }} هزار
                تومان</span
              >
            </div>
            <div class="item info--text" v-if="receipt.discount">
              <span>کد تخفیف</span>
              <span
                >{{ (receipt.discount.amount / 1000) | persianDigit }} هزار
                تومان</span
              >
            </div>
            <div class="item success--text">
              <span>مبلغ قابل پرداخت در محل</span>
              <span
                >{{ (receipt.payable_amount / 1000) | persianDigit }} هزار
                تومان</span
              >
            </div>

            <div class="item">
              <span>تاریخ پرداخت</span>
              <span>{{ date | persianDigit }}</span>
            </div>
          </div>
          <div class="d-flex justify-center">
            <div class="reserve-btn">
              <v-btn color="success" round @click="goPayment">پرداخت</v-btn>
            </div>
            <v-btn class="mt-4" round flat color="gray" @click="receipt = null">
              <span>بازگشت</span>
              <v-icon class="mr-3">la-arrow-left</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-else-if="!need_verify">
          <div class="form-group">
            <label required> شهر محل سکونت</label>
            <v-select
              @change="onCityChange"
              v-model="form.city"
              :items="cities"
              :error-messages="errors.collect('type')"
              data-vv-as="شهر محل سکونت"
              v-validate="'required'"
              name="type"
              item-text="name"
              item-value="id"
              return-object
              single-line
              outline
              placeholder="لطفا شهر محل سکونت خود را انتخاب نمایید"
            ></v-select>
          </div>
          <div class="form-group">
            <label required> نوع تست</label>
            <v-select
              v-model="form.selected_test"
              :items="testsItems"
              :error-messages="errors.collect('type')"
              data-vv-as="نوع تست"
              v-validate="'required'"
              name="type"
              :disabled="!form.city"
              single-line
              outline
              placeholder="لطفا نوع تستی مورد نظر خود را انتخاب نمایید"
            >
              <template v-slot:item="{ item }">
                <span class="d-inline-block">{{ item.name }}</span>
                <span class="d-inline-block mx-2">|</span>
                <span class="d-inline-block"
                  >{{ item.total_amount | currency | persianDigit }} تومان</span
                >
              </template>
              <template v-slot:selection="{ item }">
                <span class="d-inline-block">{{ item.name }}</span>
                <span class="d-inline-block mx-2">|</span>
                <span class="d-inline-block"
                  >{{ item.total_amount | currency | persianDigit }} تومان</span
                >
              </template>
            </v-select>
          </div>
          <div class="form-group">
            <label required> تعداد</label>
            <v-text-field
              single-line
              outline
              type="number"
              v-model="form.count"
              autocomplete="new-password"
              v-validate="'required'"
              :error-messages="errors.collect('count')"
              data-vv-as="تعداد تست مورد نیاز"
              :disabled="!form.selected_test"
              name="count"
              placeholder="لطفا تعداد تست مورد نیاز خود را وارد نمایید"
              @input="onCountChange"
            ></v-text-field>
          </div>
          <div class="form-group info--text" v-if="form.role_discount_amount">
            <label class="info--text">تخفیف خرید گروهی</label>
            <div class="pt-1" style="height: 50px">
              {{ form.role_discount_amount | currency | persianDigit }} تومان
            </div>
          </div>
          <div class="form-group">
            <label required>نام و نام خانوادگی</label>
            <v-text-field
              v-model="form.user_fullname"
              autocomplete="new-password"
              :error-messages="errors.collect('user_fullname')"
              data-vv-as="نام و نام خانوادگی"
              name="user_fullname"
              v-validate="'required'"
              single-line
              outline
              placeholder="لطفا نام و نام خانوادگی خود را وارد نمایید"
            ></v-text-field>
          </div>
          <div class="form-group">
            <label required>کد ملی</label>
            <v-text-field
              v-model="form.user_nationalcode"
              autocomplete="new-password"
              :error-messages="errors.collect('nationalCode')"
              data-vv-as="کد ملی"
              name="nationalCode"
              v-validate="'required|nationalCode'"
              single-line
              outline
              placeholder="لطفا کد ملی خود را وارد نمایید"
            ></v-text-field>
          </div>
          <div class="form-group">
            <label required>شماره تلفن همراه</label>
            <v-text-field
              v-model="form.user_mobile"
              autocomplete="new-password"
              :error-messages="errors.collect('m')"
              data-vv-as="شماره تلفن همراه"
              name="m"
              v-fix-digit
              hint="کاربر گرامی لطفا شماره موبایلی را وارد کنید که هم اکنون برای وارد کردن کد تایید به آن دسترسی دارید"
              v-validate="'required|mobile'"
              single-line
              outline
              placeholder="لطفا شماره تلفن همراه خود را وارد نمایید"
            ></v-text-field>
          </div>
          <div class="form-group">
            <label required>نشانی</label>
            <v-textarea
              v-model="form.user_address"
              :error-messages="errors.collect('address')"
              autocomplete="new-password"
              data-vv-as="نشانی"
              name="address"
              v-validate="'required'"
              rows="2"
              single-line
              outline
              no-resize
              placeholder="لطفا نشانی کامل محل سکونت خود را وارد نمایید"
            ></v-textarea>
          </div>
          <!-- <div class="form-group">
            <label required>علائم</label>
            <div class="checkbox-wrapper">
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="تب"
                value="تب"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="لرز"
                value="لرز"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="سر درد"
                value="سر درد"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="اسهال"
                value="اسهال"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="استفراغ"
                value="استفراغ"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="گلو درد"
                value="گلو درد"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="سرفه"
                value="سرفه"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="تنگی نفس"
                value="تنگی نفس"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="درد عضلات"
                value="درد عضلات"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="ضعف حس بویایی"
                value="ضعف حس بویایی"
              ></v-checkbox>
              <v-checkbox
                v-validate="'required'"
                name="symptoms"
                hide-details
                v-model="form.symptoms"
                label="ضعف حس چشایی"
                value="ضعف حس چشایی"
              ></v-checkbox>
              <div
                class="error--text caption pr-2"
                v-if="errors.collect('symptoms').length"
              >
                پر کردن علائم الزامی میباشد
              </div>
            </div>
          </div> -->

          <div class="form-group" v-if="form.discount.code">
            <label class="info--text">کد تخفیف</label>
            <v-text-field
              v-model="form.discount.code"
              :disabled="true"
              single-line
              outline
            ></v-text-field>
            <v-btn color="error" @click="form.discount = {}" class="mt-0"
              >لغو</v-btn
            >
          </div>
          <div
            class="form-group success--text"
            style="height: 50px"
            v-if="form.discount.code"
          >
            <label class="success--text">مقدار تخفیف</label>
            <div>
              {{ form.discount.amount | currency | persianDigit }} تومان
            </div>
          </div>
          <div class="form-group" v-else>
            <label class="info--text">کد تخفیف دارید؟</label>
            <v-text-field
              v-model="discount"
              placeholder="کد تخفیف خود را وارد نمایید"
              single-line
              outline
              @keypress.enter="checkDiscount"
            ></v-text-field>
            <v-btn
              color="info"
              @click="checkDiscount"
              class="mt-0"
              :loading="discountChecking"
              >بررسی</v-btn
            >
          </div>
          <div class="reserve-btn">
            <v-btn color="success" round @click="submit"
              >پرداخت و رزرو تست کرونا</v-btn
            >
          </div>
        </template>
        <template v-else>
          <div v-if="new_user">
            <v-alert type="info" :value="true" class="mb-3">
              یک پیامک حاوی کد تایید برای شماره {{ form.mobile }} ارسال شد.
              <div class="caption">لطفا کد ارسال شده را وارد نمایید</div>
            </v-alert>
            <div class="form-group">
              <label required>کد تایید</label>
              <v-text-field
                v-model="activationKey"
                :error-messages="errors.collect('activationKey')"
                data-vv-as="کد تایید"
                name="activationKey"
                v-validate="'required'"
                single-line
                outline
                placeholder="کد تایید را وارد نمایید"
                @keyup.enter="verifySMSCode"
              ></v-text-field>
            </div>
            <div class="reserve-btn">
              <v-btn color="success" round @click="verifySMSCode"
                >ارسال و رزرو تست کرونا</v-btn
              >
            </div>
            <div class="input-detail">
              <div v-if="resendSMSCode_timeout == 0">
                <a @click="resendSMSCode">ارسال مجدد کد</a>
              </div>
              <div v-else class="register-code-resend">
                <a>
                  کد برای شما ارسال شد لطفا منتظر بمانید
                  {{ resendSMSCode_timeout }}
                  ثانیه
                </a>
              </div>
            </div>
          </div>
          <div v-else>
            <v-alert type="info" :value="true" class="mb-3">
              این شماره موبایل در سیستم رسا موجود میباشد لطفا با وارد کردن رمز
              عبور به حساب کاربری خود وارد شوید
              <br />در صورتیکه رمز عبور خود را ندارید عدد ۱ را به ۱۰۰۰۷۴۴۷۱۱۱۱
              پیامک کنید
            </v-alert>
            <div class="form-group">
              <label required>رمز عبور</label>
              <v-text-field
                v-model="password"
                :error-messages="errors.collect('password')"
                data-vv-as="رمز عبور"
                name="password"
                v-validate="'required'"
                single-line
                outline
                placeholder="لطفا رمز عبور خود را وارد نمایید"
              ></v-text-field>
            </div>
            <div class="reserve-btn">
              <v-btn color="success" round @click="login"
                >ورود و رزرو تست کرونا</v-btn
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
import moment from "moment-jalaali";
import _ from "lodash";
export default {
  props: ["cities"],
  computed: {
    user_id() {
      return this.$store.state.patient.user_id;
    },
    date() {
      return moment().format("jYYYY/jMM/jDD");
    },
  },
  data() {
    return {
      showFactor: false,
      discountChecking: false,
      haveDiscount: false,
      discount: null,
      resendSMSCode_timeout: 0,
      registrationToken: null,
      need_verify: false,
      new_user: false,
      user: {},
      testsItems: [],
      receipt: null,
      form: {
        discount: {},
        count: 1,
        city: null,
      },
      activationKey: null,
      password: null,
    };
  },
  async mounted() {
    let cronaTest = this.$storage.getUniversal("cronaTest", true);
    if (cronaTest) {
      this.receipt = cronaTest;
    }
  },
  methods: {
    async submit() {
      let valid = await this.$validator.validateAll();
      if (valid) {
        this.$gtm.push({
          event: "CoronaTestRequest",
        });
        if (this.user_id) {
          this.receiptRequest();
        } else {
          this.register({ phoneNumber: this.form.user_mobile });
        }
      }
    },
    async onCityChange() {
      if (this.form.city) {
        this.$emit("onchangecity", this.form.city.id);
        try {
          let url = `${process.env.EXTRA_API_URL}/corona-cities/${this.form.city.id}/tests`;
          let data = await this.$axios.$get(url);
          this.testsItems = data;
        } catch (error) {
          console.error(error);
          this.$toast.warning().showSimple("عدم ارتباط با سرور");
        }
      }
    },
    async receiptRequest() {
      let loader = this.$loader.show("#FormBox");
      try {
        let data = _.pick(this.form, [
          "user_fullname",
          "user_mobile",
          "user_address",
          "user_nationalcode",
          "selected_test",
          "count",
          "role_discount_amount",
          "discount",
        ]);
        data.test_id = this.form.selected_test.id;
        data.city_id = this.form.city.id;
        let cronaTest = await this.$axios.$post(
          process.env.EXTRA_API_URL + "/corona-orders",
          data
        );
        this.receipt = cronaTest;
        this.$storage.setUniversal("cronaTest", cronaTest, true);
        loader.hide();
      } catch (error) {
        console.error(error);
        this.$toast.error().showSimple("خطایی رخ داده است");
        loader.hide();
      }
    },
    async goPayment() {
      try {
        let url = `${process.env.EXTRA_API_URL}/corona-orders/${this.receipt.id}/paymentRequest`;
        let { address, token } = await this.$axios.$post(url);
        const form = document.createElement("form");
        form.method = "POST";
        form.action = address;
        const input = document.createElement("input");
        input.value = token;
        input.name = "token";
        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
      } catch (error) {
        console.error(error);
        this.$toast.error().showSimple("خطایی رخ داده است");
      }
    },
    onCountChange() {
      if (this.form.selected_test.discount_roles) {
        let matchDiscount = this.form.selected_test.discount_roles
          .filter((item) => +this.form.count >= +item.count)
          .sort((a, b) => {
            return +b.count - +a.count;
          });
        if (matchDiscount && matchDiscount.length) {
          this.form.role_discount_amount =
            +this.form.count * +matchDiscount[0].discount;
        } else {
          this.form.role_discount_amount = 0;
        }
      }
    },
    async checkDiscount() {
      try {
        this.discountChecking = true;
        let url = `${process.env.EXTRA_API_URL}/corona-discounts/check`;
        let res = await this.$axios.$post(url, { code: this.discount });
        console.log(res);
        this.form.discount = res;
        this.$toast.success().showSimple(`کد تخفیف با موفقیت اعمال شد`);
      } catch (error) {
        console.error(error);
        this.$toast.error().showSimple("کد وارد شده معتبر نمیباشد");
      }
      this.discountChecking = false;
    },
    async register(user) {
      let loader = this.$loader.show("#FormBox");
      try {
        user.loginOrigin = localStorage.getItem("referrer");
        let res = await this.$axios.post("/Patients/Registration", user);
        this.registrationToken = res.data.result.registrationToken.value;
        this.new_user = true;
        this.need_verify = true;
      } catch (error) {
        if (error.response.data.code == 409) {
          this.new_user = false;
          this.need_verify = true;
        } else {
          this.$toast
            .error()
            .showSimple(
              "خطایی رخ داده است لطفا شماره موبایل خود را مجددا بررسی نمایید"
            );
        }
      }
      loader.hide();
    },
    async verifySMSCode() {
      let loader = this.$loader.show("#FormBox");
      try {
        let response = await this.$axios.patch(
          `/Patients/Registration/${this.registrationToken}`,
          {
            activationKey: this.activationKey,
          }
        );
        if (response.data.status === "OK") {
          this.$toast.success().showSimple("ثبت نام با موفقیت انجام شد");
          this.$store.commit("patient/login", {
            access_token: response.data.result.token,
          });
          this.$store.commit("patient/initialize_user");
          this.receiptRequest();
        } else {
          this.$toast.error().showSimple("کد وارد شده صحیح نمی باشد");
        }
      } catch (error) {
        this.$toast.error().showSimple("کد وارد شده صحیح نمی باشد");
      }
      loader.hide();
    },
    async resendSMSCode() {
      try {
        let response = await this.$axios.post(
          `/Patients/Registration/${this.registrationToken}/ResendActivationKey`
        );
        if (response.data.status === "OK") {
          this.resendSMSCode_timeout = 120;
          let timeout = setInterval(() => {
            this.resendSMSCode_timeout -= 1;
            if (this.resendSMSCode_timeout <= 0) {
              clearInterval(timeout);
              this.resendSMSCode_timeout = 0;
            }
          }, 1000);
        }
      } catch (error) {
        this.errorMessage =
          "ار ارسال اس ام اس قبلی شما هنوز ۲ دقیقه نگذشته است";
      }
    },
    async login() {
      let loading = this.$loader.show("#FormBox");
      let data = `username=${this.form.mobile}&password=${this.password}&grant_type=password`;
      try {
        let res = await this.$axios.post("/oauth2/token", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        });
        this.$store.commit("patient/login", res.data);
        this.$store.commit("patient/initialize_user");
        this.receiptRequest();
      } catch (error) {
        this.$toast.error().showSimple("نام کاربری یا رمز عبور اشتباه است");
      }
      loading.hide();
    },
  },
};
</script>
