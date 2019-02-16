
<style lang="scss" scoped>
.contact-us-container {
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  @include respond-to(sm) {
    padding: 8px;
  }
}

.section-title {
  text-align: right;
  color: $tealish;
  font-size: 2.725rem;
  font-weight: 500;
  margin-bottom: 16px;
}

.map {
  width: 100%;
  margin-bottom: 30px;
}

.phone-number-container {
  text-align: right;
  direction: rtl;
}

.phone-number-label {
  color: $dark-blue-grey;
  display: inline-block;
  font-weight: 500;
}

.phone-number-text {
  display: inline-block;
  color: $azure;
  direction: ltr;
}
.address-wrapper {
  > div + div {
    margin-top: 8px;
  }
}
.address-container {
  text-align: right;
  direction: rtl;
}

.address-label {
  color: $dark-blue-grey;
  display: inline-block;
  font-weight: 500;
}

.address-text {
  display: inline-block;
  text-align: justify;
}

.email-container {
  text-align: right;
  direction: rtl;
}

.email-label {
  display: inline-block;
  color: $dark-blue-grey;
  font-weight: 500;
}

.email-text {
  display: inline-block;
  color: $azure;
}

.contact-us-form {
  margin-top: 20px;
}

.contact-us-form-text-area {
  position: relative;

  textarea {
    width: 100%;
    text-align: right;
    background-color: #f5f5f5;
    border: none;
    border-radius: 20px;
    resize: none;
    direction: rtl;
    padding: 15px 20px;
    margin-bottom: 20px;
    &::placeholder {
      color: #b4b3c0;
      opacity: 1;
    }
    &.is-invalid {
      box-shadow: 0 0 8px -1px red;
    }
  }
}

.contact-us-submit-button {
  left: 15px;
  top: 180px;
  cursor: pointer;
  font-weight: 500;
  text-align: center;
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 18.5px;
  line-height: 40px;
  color: white;
  background-color: $tealish;
  border: none;
}

.contact-us-input {
  margin-bottom: 20px;
  border-radius: 20px;
  width: 100%;
  height: 45px;
  line-height: 45px;
  text-align: right;
  border: none;
  background-color: #f5f5f5;
  padding: 15px 20px;

  &::placeholder {
    color: #b4b3c0;
    opacity: 1;
  }
  &.is-invalid {
    box-shadow: 0 0 8px -1px red;
  }
}
.invalid-feedback {
  color: red;
  margin-top: -12px;
  margin-right: 16px;
}
</style>

<template>
  <v-container>
    <div class="contact-us-container">
      <div class="section-title">تماس با ما</div>
      <v-layout row wrap>
        <v-flex md6 sm12 pa-3>
          <div class="address-wrapper">
            <div class="address-container">
              <div class="address-label">آدرس :&nbsp;</div>
              <div class="address-text">{{contactInfo.address}}</div>
            </div>
            <div class="phone-number-container">
              <div class="phone-number-label">تلفن :&nbsp;</div>
              <div class="phone-number-text">{{contactInfo.phoneNumber}}</div>
            </div>
            <div class="email-container">
              <div class="email-label">ایمیل :&nbsp;</div>
              <div class="email-text">{{contactInfo.email}}</div>
            </div>
          </div>

          <div class="contact-us-form">
            <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
            <!-- -->
            <form @submit.prevent="check_validation">
              <div class="form-group">
                <input
                  v-model="form.fullName"
                  v-validate="'required'"
                  name="fullName"
                  class="contact-us-input form-control"
                  :class="{ 'is-invalid': submitted && errors.has('fullName') }"
                  placeholder="نام و نام خانوادگی"
                >
                <div
                  v-if="submitted && errors.has('fullName')"
                  class="invalid-feedback"
                >{{ errors.first('fullName') }}</div>
              </div>
              <div class="form-group">
                <input
                  v-model="form.phoneNumber"
                  v-validate="'required|mobile'"
                  name="phoneNumber"
                  class="contact-us-input form-control"
                  :class="{ 'is-invalid': submitted && errors.has('phoneNumber') }"
                  placeholder="شماره تماس"
                >
                <div
                  v-if="submitted && errors.has('phoneNumber')"
                  class="invalid-feedback"
                >{{ errors.first('phoneNumber') }}</div>
              </div>
              <div class="form-group">
                <input
                  v-model="form.email"
                  v-validate="'required|email'"
                  name="email"
                  class="contact-us-input form-control"
                  :class="{ 'is-invalid': submitted && errors.has('email') }"
                  placeholder="ایمیل"
                >
                <div
                  v-if="submitted && errors.has('email')"
                  class="invalid-feedback"
                >{{ errors.first('email') }}</div>
              </div>
              <div class="contact-us-form-text-area">
                <textarea
                  name="message"
                  v-validate="'required'"
                  v-model="form.message"
                  :class="{ 'is-invalid': submitted && errors.has('message') }"
                  rows="10"
                  placeholder="متن پیام..."
                ></textarea>
                <div
                  v-if="submitted && errors.has('message')"
                  class="invalid-feedback"
                >{{ errors.first('message') }}</div>
                <button class="contact-us-submit-button">ارسال</button>
              </div>
            </form>
          </div>
        </v-flex>
        <v-flex md6 sm12 pa-3>
          <no-ssr>
            <div class="map">
              <GmapMap
                ref="mapRef"
                :center="{lat: 35.717143, lng:51.387869}"
                :zoom="18"
                style="width: 100%; height:551px"
              >
                <GmapMarker ref="mapMarker" :position="{lat: 35.717143, lng:51.387869}"/>
              </GmapMap>
            </div>
          </no-ssr>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      submitted: false,
      ajaxLoading: false
    };
  },
  computed: {
    contactInfo() {
      return { ...this.$store.state.contact };
    }
  },
  created() {
    const dict = {
      custom: {
        message: {
          required: () => "وارد کردن پیغام اجباری است"
        },
        fullName: {
          required: () => "وارد کردن فیلد نام اجباری است"
        },
        email: {
          required: () => "وارد کردن ایمیل اجباری میباشد",
          email: () => "فرمت وارد شده صحیح نمیباشد"
        },
        phoneNumber: {
          mobile: () => "فرمت وارد شده صحیح نمیباشد"
        }
      }
    };
    this.$validator.localize("fa", dict);
  },
  methods: {
    submitForm() {
      this.ajaxLoading = true;
      this.$http
        .post("Inquiries", this.form)
        .then(Response => {
          console.log(Response);
          if (Response.body.status == "OK") {
            alert("درخواست شما با موفقیت ثبت شد");
            this.form = {};
          }
        })
        .finally(() => {
          this.ajaxLoading = false;
        });
    },
    check_validation() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.submitForm();
        }
      });
      console.log("object");
    }
  }
};
</script>
