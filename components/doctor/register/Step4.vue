<style lang="scss">
#step4 {
  .row {
    [class*=" col-"] {
      float: right;
    }
  }
  .checkbox-wrapper {
    position: relative;
    text-align: right;
    margin-bottom: 2.175rem;
  }
  .step-info {
    text-align: center;
    margin-bottom: 70px;
    color: $dark-blue-grey;
    font-weight: 500;
  }

  .section-title {
    direction: rtl;
    text-align: right;
    margin-bottom: 30px;
    color: $dark-blue-grey;
  }

  .print-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: 110px;
    height: 25px;
    border-radius: 12.5px;
    color: $bronze;
    cursor: pointer;
    margin: 10px auto;
    background-color: $light-gold;
  }

  .preview-text {
    direction: rtl;
    text-align: justify;
    max-height: 400px;
    overflow-y: scroll;
    padding: 20px;
    border-radius: 7.5px;
    background-color: #fcfcfd;
    border: solid 1.5px #e2e4ea;
  }

  .address-help {
    direction: rtl;
    color: #7e86a6;
    margin-bottom: 30px;

    &::before {
      position: relative;
      top: 5px;
      margin-left: 10px;
      vertical-align: middle;
      font-size: 30px;
      content: "•";
      color: $light-gold;
    }
  }
}

.print-area {
  display: none;
}
@media print {
  .print-area {
    display: block;
    direction: rtl;
  }
  .site-area {
    display: none;
  }
  // @page {
  //   size: auto; /* auto is the initial value */
  //   margin: 0mm; /* this affects the margin in the printer settings */
  // }

  // html {
  //   background-color: #ffffff;
  //   margin: 0px; /* this affects the margin on the html before sending to printer */
  // }

  // body {
  //   margin: 10mm 15mm 10mm 15mm; /* margin you want for the content */
  // }
}
</style>

<template>
  <section id="step4">
    <div class="step-container">
      <div class="step-info">مرحله ۴ - قرارداد و شرایط استفاده</div>
      <form @submit.prevent="check_validation">
        <div class="doctor-contact-info">
          <div class="section-title">اطلاعات تماس پزشک</div>
          <v-layout row wrap>
            <v-flex md6 sm12 pa-1>
              <div class="form-input">
                <v-select
                  attach
                  solo
                  hide-details
                  required
                  item-text="name"
                  item-value="id"
                  v-validate="'required'"
                  name="provinceId"
                  @input="getCities"
                  :items="provinces"
                  v-model="doctor.contactInformation.provinceId"
                  :class="{ 'is-invalid': submitted && errors.has('provinceId') }"
                  label="لطفا استان مورد نظر را انتخاب نمایید"
                ></v-select>

                <div
                  v-if="submitted && errors.has('provinceId')"
                  class="invalid-feedback"
                >{{ errors.first('provinceId') }}</div>
              </div>
            </v-flex>
            <v-flex md6 sm12 pa-1>
              <div class="form-input">
                <v-select
                  attach
                  solo
                  hide-details
                  required
                  item-text="name"
                  item-value="id"
                  v-validate="'required'"
                  name="cityId"
                  :items="cities"
                  v-model="doctor.contactInformation.cityId"
                  :class="{ 'is-invalid': submitted && errors.has('cityId') }"
                  label="لطفا شهر مورد نظر را انتخاب نمایید"
                ></v-select>
                <div
                  v-if="submitted && errors.has('cityId')"
                  class="invalid-feedback"
                >{{ errors.first('cityId') }}</div>
              </div>
            </v-flex>

            <v-flex md6 sm12 pa-1>
              <div class="form-input">
                <v-text-field
                  hide-details
                  v-validate="'required|phone'"
                  v-model="doctor.contactInformation.phoneNumber"
                  label="شماره تماس"
                  name="phoneNumber"
                  :class="{ 'is-invalid': submitted && errors.has('phoneNumber') }"
                  solo
                ></v-text-field>
                <div
                  v-if="submitted && errors.has('phoneNumber')"
                  class="invalid-feedback"
                >{{ errors.first('phoneNumber') }}</div>
              </div>
            </v-flex>
            <v-flex md6 sm12 pa-1>
              <div class="form-input">
                <v-text-field
                  hide-details
                  v-validate="'required|postalCode'"
                  v-model="doctor.contactInformation.postalCode"
                  label="کد پستی مطب یا بیمارستان"
                  name="postalCode"
                  :class="{ 'is-invalid': submitted && errors.has('postalCode') }"
                  solo
                ></v-text-field>
                <div
                  v-if="submitted && errors.has('postalCode')"
                  class="invalid-feedback"
                >{{ errors.first('postalCode') }}</div>
              </div>
            </v-flex>
            <v-flex sm12>
              <div class="form-input">
                <v-text-field
                  hide-details
                  v-validate="'required'"
                  v-model="doctor.contactInformation.address"
                  label="آدرس مطب یا بیمارستان"
                  name="address"
                  :class="{ 'is-invalid': submitted && errors.has('address') }"
                  solo
                ></v-text-field>
                <div
                  v-if="submitted && errors.has('address')"
                  class="invalid-feedback"
                >{{ errors.first('address') }}</div>
              </div>
              <div
                class="address-help"
              >مرسوله های ارسالی از طرف رِسا، به این آدرس برای شما ارسال می‌شوند.</div>
            </v-flex>
          </v-layout>
          <gharardad></gharardad>
        </div>
        <div class="checkbox-wrapper" :class="{ 'is-invalid': submitted && errors.has('privacy') }">
          <input type="checkbox" v-validate="'required'" name="privacy">
          قرارداد را خواندم و قبول دارم.
          <div
            v-if="submitted && errors.has('privacy')"
            class="invalid-feedback"
          >شما باید شرایط قرارداد را قبول کنید</div>
        </div>
      </form>

      <div class="step-actions">
        <div>
          <div
            v-if="currentStep !== 1 && currentStep !== 4"
            class="step-prev-button"
            @click="goPrevStep"
          >
            <i class="fa fa-angle-right"></i>
            <div class="text">قبلی</div>
          </div>
        </div>
        <div>
          <div class="step-next-button" v-show="currentStep !== 4" @click="goNextStep">
            <div v-if="currentStep < 3 " class="text">بعدی</div>
            <div v-else class="text">تایید و ثبت نهایی</div>
            <i class="fa fa-angle-left"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gharardad from "./gharardad";
export default {
  components: { gharardad },
  data: () => ({
    provinces: [],
    cities: [],
    submitted: false
  }),

  created() {
    this.$axios.get(`/Geo/Provinces`).then(response => {
      this.provinces = response.data.result.provinces;
    });
    if (this.doctor.contactInformation.provinceId) {
      this.$axios
        .get(
          `/Geo/Provinces/${
            this.doctor.contactInformation.provinceId
          }/Cities`
        )
        .then(response => {
          this.cities = response.data.result.cities;
        });
    }
  },
  methods: {
    getCities() {
      this.doctor.contactInformation.cityId = null;
      this.$axios
        .get(
          `/Geo/Provinces/${
            this.doctor.contactInformation.provinceId
          }/Cities`
        )
        .then(response => {
          this.cities = response.data.result.cities;
        });
    },
    check_validation() {
      this.submitted = true;
    },
    goPrevStep() {
      this.$emit("goPrevStep");
    },
    goNextStep() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$emit("goNextStep");
        }
      });
    },
    print() {}
  },
  computed: {
    doctor() {
      return this.$store.state.doctor.info;
    },
    currentStep() {
      return this.$parent.currentStep;
    }
  }
};
</script>

