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
        <template v-if="showFactor">
          <div class="price-wrapper">
            <div class="item">
              <span>نام و نام خانوادگی</span>
              <span>{{ form.name }}</span>
            </div>
            <div class="item">
              <span>کد ملی</span>
              <span>{{ form.nationalCode | persianDigit }}</span>
            </div>
            <div class="item">
              <span>شماره تلفن همراه</span>
              <span>{{ form.mobile | persianDigit }}</span>
            </div>
            <div class="item">
              <span>شهر</span>
              <span>{{ form.city.name }}</span>
            </div>
            <div class="item">
              <span>تست انتخاب شده</span>
              <span>{{ form.type.name }}</span>
            </div>
            <div class="item">
              <span>پرداخت آنلاین جهت تست</span>
              <span
                >{{ (form.type.prepayment / 1000) | persianDigit }} هزار
                تومان</span
              >
            </div>
            <div class="item">
              <span>مبلغ قابل پرداخت در محل</span>
              <span
                >{{
                  ((form.type.price - form.type.prepayment) / 1000)
                    | persianDigit
                }}
                هزار تومان</span
              >
            </div>
            <div class="item">
              <span>هزینه کامل تست</span>
              <span
                >{{ (form.type.price / 1000) | persianDigit }} هزار تومان</span
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
            <v-btn
              class="mt-4"
              round
              flat
              color="gray"
              @click="showFactor = false"
            >
              <span>بازگشت</span>
              <v-icon class="mr-3">la-arrow-left</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-else-if="!need_verify">
          <div class="form-group">
            <label required> استان محل سکونت</label>
            <v-select
              @change="$emit('onchangecity', form.city.id)"
              v-model="form.city"
              :items="cities"
              :error-messages="errors.collect('type')"
              data-vv-as="استان محل سکونت"
              v-validate="'required'"
              name="type"
              item-text="name"
              item-value="id"
              return-object
              single-line
              outline
              placeholder="لطفا استان محل سکونت خود را انتخاب نمایید"
            ></v-select>
          </div>
          <div class="form-group">
            <label required> نوع تست</label>
            <v-select
              v-model="form.type"
              :items="testsItems"
              :disabled="!form.city"
              :error-messages="errors.collect('type')"
              data-vv-as="نوع تست"
              v-validate="'required'"
              name="type"
              item-text="name"
              return-object
              single-line
              outline
              placeholder="لطفا نوع تستی مورد نظر خود را انتخاب نمایید"
            ></v-select>
          </div>
          <div class="form-group">
            <label required>نام و نام خانوادگی</label>
            <v-text-field
              v-model="form.name"
              autocomplete="new-password"
              :error-messages="errors.collect('nandf')"
              data-vv-as="نام و نام خانوادگی"
              name="nandf"
              v-validate="'required'"
              single-line
              outline
              placeholder="لطفا نام و نام خانوادگی خود را وارد نمایید"
            ></v-text-field>
          </div>
          <div class="form-group">
            <label required>کد ملی</label>
            <v-text-field
              v-model="form.nationalCode"
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
              v-model="form.mobile"
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
              v-model="form.address"
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
          <div class="form-group">
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
export default {
  props: ["cities"],
  computed: {
    user_id() {
      return this.$store.state.patient.user_id;
    },
    date() {
      return moment().format("jYYYY/jMM/jDD");
    },
    testsItems() {
      debugger
      if (!this.form.city) {
        return [];
      }
      let city = this.cities.find((item) => item.id == this.form.city.id);
      return city.testsItems;
    },
  },
  data() {
    return {
      showFactor: false,
      resendSMSCode_timeout: 0,
      registrationToken: null,
      need_verify: false,
      new_user: false,
      user: {},

      form: {
        city: null,
        symptoms: [],
      },
      activationKey: null,
      password: null,
    };
  },
  async mounted() {},
  methods: {
    async submit() {
      let valid = await this.$validator.validateAll();
      if (valid) {
        this.$gtm.push({
          event: "CoronaTestRequest",
        });
        if (this.user_id) {
          this.chargeRequest();
        } else {
          this.register({ phoneNumber: this.form.mobile });
        }
      }
    },
    async chargeRequest() {
      let loader = this.$loader.show("#FormBox");
      try {
        let { result } = await this.$axios.$get(
          `/Accounts/${this.user_id}/Profile`
        );
        this.user = result.profile;
        let loginOrigin = localStorage.getItem("referrer");
        let data = {
          denominationId: +this.form.type.chargeId,
          callbackUrl: process.env.SITE_URL + "/corona-test/callback",
          phoneNumber: this.user.phoneNumber,
          loginOrigin,
        };
        // this.$gtm.push({
        //   event: "PaymentAtempted",
        //   amount: this.selected.denomination.amount
        // });
        let response = await this.$axios.post("/Charge", data);
        let {
          address,
          submissionParameters: { token },
        } = response.data.result.electronicPaymentVoucher.gateway;
        this.address = address;
        this.token = token;
        let cronaTest = await this.$axios.$post(
          process.env.EXTRA_API_URL + "/corona-test",
          {
            city_id: this.form.city.id,
            selected_test: this.form.type,
            doctor_id:this.form.doctorId,
            name: this.form.name,
            mobile: this.form.mobile,
            address: this.form.address,
            nationalCode: this.form.nationalCode,
            symptoms: this.form.symptoms,
            paymentRequestId:
              response.data.result.electronicPaymentVoucher.paymentRequestId,
            subscriberNumber:
              response.data.result.electronicPaymentVoucher.subscriberNumber,
            amount:
              response.data.result.electronicPaymentVoucher.chargeDenomination
                .amount,
            phoneNumber: this.user.phoneNumber,
          }
        );
        console.log(cronaTest);
        // localStorage.setItem("cronaTest", JSON.stringify(cronaTest));
        this.$storage.setCookie("cronaTest", JSON.stringify(cronaTest));
        this.$storage.setUniversal("cronaTest", JSON.stringify(cronaTest));
        // this.goPayment(address, token);
        this.showFactor = true;
        loader.hide();
      } catch (error) {
        this.$toast.error().showSimple("خطایی رخ داده است");
        loader.hide();
      }
    },
    goPayment() {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = this.address;
      const input = document.createElement("input");
      input.value = this.token;
      input.name = "token";
      form.appendChild(input);
      document.body.appendChild(form);
      form.submit();
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
          this.chargeRequest();
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
        this.chargeRequest();
      } catch (error) {
        this.$toast.error().showSimple("نام کاربری یا رمز عبور اشتباه است");
      }
      loading.hide();
    },
  },
};
</script>
