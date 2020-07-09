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
  h4 {
    max-width: 500px;
    text-align: center;
    font-weight: 400;
    margin-top: 16px;
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
  + .form-group {
    margin-top: 16px;
  }
  > label {
    flex: 0 0 100%;
    color: #4a4a4a;
    padding: 12px 0;
    @include media(md-and-up) {
      flex: 0 0 25%;
      padding: 12px;
    }
    &.required:after {
      content: "*";
      margin-right: 4px;
      color: #e91e63;
    }
  }
  ::v-deep {
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
.reserve-btn {
  text-align: center;
  margin-top: 20px;
  .v-btn {
    width: 180px;
    background: linear-gradient(to right, #28db9a, #0ec7e5);
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
  }
}
</style>
<template>
  <section id="FormBox">
    <div class="wrapper">
      <h2>فرم رزرو تست کرونا در منزل</h2>
      <h4>برای انجام تست کرونا در منزل لازم است فرم زیر را پر کنید تا پشتیبانی رسا بلافاصله برای هماهنگی بیشتر با شما تماس بگیرد.</h4>
      <div class="form-wrapper">
        <div class="form-group">
          <label for>انتخاب نوع تست</label>
          <v-select
            :items="testItems"
            hide-details
            v-model="form.type"
            single-line
            outline
            placeholder="لطفا نوع تستی مورد نظر خود را انتخاب نمایید"
          ></v-select>
        </div>
        <div class="form-group">
          <label for>نام و نام خانوادگی</label>
          <v-text-field
            name="name"
            hide-details
            single-line
            outline
            placeholder="لطفا نام و نام خانوادگی خود را وارد نمایید"
            id="id"
          ></v-text-field>
        </div>
        <div class="form-group">
          <label for>شماره تلفن همراه</label>
          <v-text-field
            name="name"
            hide-details
            single-line
            outline
            placeholder="لطفا شماره تلفن همراه خود را وارد نمایید"
            id="id"
          ></v-text-field>
        </div>
        <div class="form-group">
          <label for>نشانی</label>
          <v-textarea
            name="name"
            hide-details
            single-line
            outline
            placeholder="لطفا نشانی کامل محل سکونت خود را وارد نمایید"
            id="id"
          ></v-textarea>
        </div>
        <div class="reserve-btn">
          <v-btn color="success" round>رزرو تست کرونا</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      testItems: [
        {
          text: "تست PCR",
          value: 1
        },
        {
          text: "تست آنتی بادی",
          value: 2
        },
        {
          text: "هر دو",
          value: 3
        }
      ]
    };
  }
};
</script>