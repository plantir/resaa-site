<style lang="scss" scoped>
::v-deep {
  span.vr-badge {
    letter-spacing: normal !important;
    font-size: 1rem;
    padding: 0;
    @include media(md-and-up) {
      padding: 0.75rem;
    }
  }
}
section {
  height: auto;
  @include media(md-and-up) {
    min-height: calc(100vh - 160px);
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid #eee;
}
.content {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  .form {
    flex: 0 0 100%;
    overflow: hidden;
    @include media(md-and-up) {
      flex: 0 0 33.33333%;
    }
  }
  .table {
    flex: 0 0 100%;
    margin-top: 16px;
    width: 100%;
    overflow: auto;

    @include media(md-and-up) {
      flex: 0 0 calc(66.66666% - 16px);
      margin-right: 16px;
      margin-top: 0;
    }
    ul {
      width: 800px;
      @include media(md-and-up) {
        width: 100%;
      }
      li {
        width: 100%;
        display: flex;
        height: 60px;
        align-items: center;
        border-bottom: 1px solid #eaeaea;
        &.header {
          font-weight: 500;
          border-bottom-color: #aaa;
        }
        span {
          flex: 0 0 25%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
.box {
  background: #fff;
  border-radius: 16px;
  padding: 20px 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
  display: flex;
  height: 100%;
  @include media(md-and-up) {
    padding: 20px 30px;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  width: 100%;
  @include media(md-and-up) {
    // flex-direction: row;
  }

  > label {
    flex: 0 0 100%;
    color: #4a4a4a;
    padding: 0 12px 12px 0;
    // @include media(md-and-up) {
    //   flex: 0 0 25%;
    //   padding: 6px;
    // }
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
.test-mobile-wrapper {
  margin-top: 30px;
  width: 100%;
  .test-item {
    display: flex;
    width: 100%;
    background: #fff;
    flex-direction: column;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
    padding: 10px 8px;
    + .test-item {
      margin-top: 16px;
    }
    > div {
      height: 30px;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
<template>
  <section>
    <v-container grid-list-xs>
      <div class="header">
        <h1 class="title">پیگیری سفارش</h1>
        <v-btn color="grey" outline to="/corona-test" active-class="act">
          <span>بازگشت</span>
          <v-icon class="mr-3">la-arrow-left</v-icon>
        </v-btn>
      </div>
      <div class="content">
        <div class="box form">
          <div class="form-group">
            <label required>کد ملی</label>
            <v-text-field
              v-model="form.nationalCode"
              autocomplete="new-password"
              :error-messages="errors.collect('nationalCode')"
              data-vv-as="کد ملی"
              name="nationalCode"
              v-validate="'required|nationalCode'"
              @keypress.enter="submit"
              v-fix-digit
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
              v-validate="'required|mobile'"
              @keypress.enter="submit"
              v-fix-digit
              single-line
              outline
              placeholder="لطفا شماره تلفن همراه خود را وارد نمایید"
            ></v-text-field>
          </div>
          <div class="reserve-btn">
            <v-btn color="primary" round outline @click="submit">پیگیری</v-btn>
          </div>
        </div>
        <div class="box table" v-if="$device.isDesktop">
          <ul>
            <li class="header">
              <span>نوع تست</span>
              <span>وضعیت</span>
              <span>وضعیت پرداخت</span>
              <span>تاریخ ثبت</span>
            </li>
            <li v-for="(item, index) in items" :key="index">
              <span>{{ item.selected_test.name }}</span>
              <span>
                <vr-badge type="dot" :color="colors[item.status]">{{
                  item.status | translate
                }}</vr-badge>
              </span>
              <span>
                <vr-badge :color="colors[item.payment_status]">{{
                  item.transaction.status | translate
                }}</vr-badge>
              </span>
              <span>{{ item.created_at | persianDate | persianDigit }}</span>
            </li>
          </ul>
        </div>
        <div class="test-mobile-wrapper" v-else>
          <div class="test-item" v-for="(item, index) in items" :key="index">
            <div>
              <span>تاریخ ثبت</span>
              <span>{{ item.created_at | persianDate | persianDigit }}</span>
            </div>
            <div>
              <span>نوع تست</span>
              <span>{{ item.selected_test.name }}</span>
            </div>
            <div>
              <span>وضعیت</span>
              <span>
                <vr-badge type="dot" :color="colors[item.status]">{{
                  item.status | translate
                }}</vr-badge>
              </span>
            </div>
            <div>
              <span>وضعیت پرداخت</span>
              <span>
                <vr-badge type="dot" :color="colors[item.payment_status]">{{
                  item.transaction.status | translate
                }}</vr-badge>
              </span>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {
  layout: "corona-test",
  data() {
    return {
      items: null,
      form: {},
      colors: {
        paid: "green",
        unpaid: "red",
        pending: "indigo",
        cordinated: "pink",
        referred: "orange",
        test_result_posted: "green",
        canceled: "red"
      }
    };
  },
  filters: {
    translate: function(val) {
      let translate = {
        unpaid: "پرداخت نشده",
        paid: "پرداخت شده",
        pending: "بررسی نشده",
        negotiated: "مذاکره شده",
        in_process: "در حال رسیدگی",
        cordinated: "هماهنگ شده",
        referred: "مراجعه شده",
        test_result_posted: "ارسال نتیجه",
        canceled: "لغو شده"
      };
      return translate[val];
    }
  },
  methods: {
    async submit() {
      let valid = await this.$validator.validateAll();
      if (valid) {
        let loader = this.$loader.show(".box");
        try {
          this.items = await this.$axios.$get(
            process.env.EXTRA_API_URL + "/corona-orders/tracking",
            { params: this.form }
          );
        } catch (error) {
          this.$toast.error().showSimple("خطایی رخ داده است");
        }
        loader.hide();
      }
    },

    statusColor() {},
    paymentStatusColor() {}
  }
};
</script>
