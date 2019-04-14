
<style lang="scss" scoped>
.step-info {
  text-align: center;
  margin-bottom: 70px;
  color: $dark-blue-grey;
  font-weight: 500;
}

.step-notes {
  margin: 50px 0;
  direction: rtl;
  text-align: right;
}

ul {
  list-style: none;
  padding: 0;

  li {
    color: #7e86a6;
    line-height: 20px;
    text-align: justify;
  }

  li::before {
    position: relative;
    top: 5px;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 30px;
    content: "•";
    color: $light-gold;
  }
}
</style>

<template>
  <div class="step-container">
    <div class="step-info">مرحله ۱ - دریافت مشخصات فردی</div>
    <form @submit.prevent="check_validation">
      <v-layout row wrap>
        <v-flex md6 sm12 pa-1>
          <div class="form-input">
            <v-text-field
              hide-details
              v-validate="'required'"
              v-model="doctor.firstName"
              label="نام"
              name="firstName"
              :class="{ 'is-invalid': submitted && errors.has('firstName') }"
              solo
            ></v-text-field>
            <div
              v-if="submitted && errors.has('firstName')"
              class="invalid-feedback"
            >{{ errors.first('firstName') }}</div>
          </div>
        </v-flex>
        <v-flex md6 sm12 pa-1>
          <div class="form-input">
            <v-text-field
              hide-details
              v-validate="'required'"
              v-model="doctor.lastName"
              label="نام خانوادگی"
              name="lastName"
              :class="{ 'is-invalid': submitted && errors.has('lastName') }"
              solo
            ></v-text-field>
            <div
              v-if="submitted && errors.has('lastName')"
              class="invalid-feedback"
            >{{ errors.first('lastName') }}</div>
          </div>
        </v-flex>
        <v-flex md6 sm12 pa-1>
          <div class="form-input">
            <v-select
              attach
              solo
              hide-details
              item-text="title"
              item-value="id"
              required
              v-validate="'required'"
              :items="medicalSpecialties"
              v-model="doctor.specialtyId"
              :class="{ 'is-invalid': submitted && errors.has('specialtyId') }"
              label="لطفا تخصص خود را انتخاب نمایید"
            ></v-select>
            <div
              v-if="submitted && errors.has('specialtyId')"
              class="invalid-feedback"
            >{{ errors.first('specialtyId') }}</div>
          </div>
        </v-flex>
        <v-flex md6 sm12 pa-1>
          <div class="form-input">
            <v-text-field
              hide-details
              v-validate="'required'"
              v-model="doctor.medicalCouncilNumber"
              label="کد نظام پزشکی"
              name="medicalCouncilNumber"
              :class="{ 'is-invalid': submitted && errors.has('medicalCouncilNumber') }"
              solo
            ></v-text-field>
            <div
              v-if="submitted && errors.has('medicalCouncilNumber')"
              class="invalid-feedback"
            >{{ errors.first('medicalCouncilNumber') }}</div>
          </div>
        </v-flex>
        <v-flex md6 sm12 pa-1>
          <div class="form-input">
            <v-select
              attach
              solo
              hide-details
              item-text="title"
              item-value="key"
              required
              v-validate="'required'"
              :items="[{key:'Male',title:'مرد'},{key:'Female',title:'زن'}]"
              v-model="doctor.gender"
              :class="{ 'is-invalid': submitted && errors.has('gender') }"
              label="لطفا جنسیت خود را انتخاب نمایید"
            ></v-select>
            <div
              v-if="submitted && errors.has('gender')"
              class="invalid-feedback"
            >{{ errors.first('gender') }}</div>
          </div>
        </v-flex>
        <v-flex md6 sm12 pa-1>
          <div class="form-input">
            <v-text-field
              hide-details
              v-validate="'required|nationalCode'"
              v-model="doctor.nationalNumber"
              label="کد ملی"
              name="nationalNumber"
              :class="{ 'is-invalid': submitted && errors.has('nationalNumber') }"
              solo
            ></v-text-field>
            <div
              v-if="submitted && errors.has('nationalNumber')"
              class="invalid-feedback"
            >{{ errors.first('nationalNumber') }}</div>
          </div>
        </v-flex>
        <v-flex md6 sm12 pa-1>
          <div class="form-input">
            <v-text-field
              hide-details
              v-validate="'required|mobile'"
              v-model="doctor.phoneNumber"
              label="شماره همراه"
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
      </v-layout>
    </form>
    <div class="step-notes">
      <ul>
        <li>به منظور ارائه خدمات با کیفیت مناسب، تنها پزشکانی که دارای کد نظام ‌پزشکی هستند، می‌توانند از خدمات رِسا استفاده کنند.</li>
        <li>تخصص پزشک با سایت نظام پزشکی بررسی می‌شود. اگر تاکنون تخصص شما در سایت نظام پزشکی ثبت نشده، نیاز به ارائه گواهی است.</li>
        <li>شماره همراه و کد ملی شما به‌هیچ عنوان در اختیار دیگران قرار نمی‌گیرد.</li>
      </ul>
    </div>
    <div class="step-actions">
      <div>
        <!-- <div
          v-if="currentStep !== 1 && currentStep !== 4"
          class="step-prev-button"
          @click="goPrevStep"
        >
          <i class="fa fa-angle-right"></i>
          <div class="text">قبلی</div>
        </div>-->
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
</template>

<script>
export default {
  data() {
    return {
      medicalSpecialties: [],
      submitted: false
    };
  },
  created() {
    this.$axios.get(`/api/Doctors/MedicalSpecialties`).then(response => {
      this.medicalSpecialties = response.data.result.medicalSpecialties;
    });
  },
  computed: {
    doctor() {
      return this.$store.state.doctor.info;
    },
    currentStep() {
      return this.$parent.currentStep;
    }
  },
  methods: {
    check_validation() {
      this.submitted = true;
    },
    goNextStep() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          this.$emit("goNextStep");
        }
      });
    }
  }
};
</script>
