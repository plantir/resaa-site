<style lang="scss" >
#doctors {
  // display: none;
  .doctors-search-panel {
    padding: 20px;
    border-radius: 10px;
    background-color: #f2f2f2;
    margin-bottom: 20px;
    @include respond-to(sm) {
      padding: 20px 4px;
    }
  }

  .search-panel-title {
    color: #44436c;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }

  .search-input {
    margin-bottom: 15px;
    .v-input__control {
      min-height: 38px;
    }
    .v-input__slot {
      box-shadow: none;
      border-radius: 26px;
    }
  }

  .search-panel-button {
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    color: white;
    width: 80%;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18.5px;
    background-color: $tealish;
    border: none;
    &:disabled {
      opacity: 0.75;
      cursor: not-allowed;
    }
    &.clear-filter {
      margin-top: 8px;
      background-color: #777590;
    }
  }

  .doctors-container {
    padding: 20px;
    background-color: white;
    border-radius: 15px;
    width: 100%;
    @include respond-to(sm) {
      padding: 20px 4px;
    }
  }

  .section-title {
    color: $tealish;
    text-align: center;
    font-size: 2.375rem;
    font-weight: 500;
    margin-bottom: 23px;
  }

  .section-description {
    text-align: center;
    color: $dark-blue-grey;
    margin-bottom: 50px;
  }

  .doctors-info-container {
    text-align: center;
    @include respond-to(lg) {
      flex-direction: column;
    }
  }

  .doctors-info {
    direction: rtl;
    display: inline-block;
    margin: 0 auto 50px auto;
    color: $azure;
    background-color: #ecf7fb;
    border: solid 1px #96dbf2;
    border-radius: 5px;
    text-align: center;
    padding: 10px;

    .fa {
      margin-left: 5px;
    }
  }

  .doctors-box {
    background-color: #f2f2f2;
    border-radius: 16px 16px 0 0;
    padding: 10px;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    @include respond-to(sm) {
      flex-direction: row;
      flex-wrap: wrap;
    }
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
  }
  .doctors-search-panel {
    border-radius: 10px;
    background-color: #f2f2f2;
  }

  .doctors-item-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-left: 16px;
    min-height: 60px;
    border-radius: 7.5px;
    background-color: white;
    box-shadow: 0 2.5px 5px 0 rgba(0, 0, 0, 0.05);
    @include respond-to(sm) {
      flex-direction: column;
      padding-left: 0;
      min-height: 140px;
    }
  }

  .doctors-item {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 100%;
    flex: 0 0 100%;
    padding: 4px 0;
    @include respond-to(sm) {
      padding: 4px;
      width: 50%;
      flex: 0 0 50%;
    }
    &:hover {
      .item-doctor-name {
        color: #0095e2;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .item-avatar {
    width: 50px;
    height: 50px;
    flex: 0 0 50px;
    margin: 4px 10px;
    background-color: #f2f2f2;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  .item-doctor-name {
    color: #44436c;
    text-align: right;
    font-weight: 500;
    @include respond-to(sm) {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 4px;
      text-align: center;
    }
  }

  .item-doctor-specialty {
    color: #777590;
    text-align: right;
    @include respond-to(sm) {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 4px;
      text-align: center;
    }
  }

  .item-right-section {
    display: flex;
    @include respond-to(sm) {
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .item-right-sub-section {
    padding: 8px 0;
    width: 100%;
  }
  .item-left-section {
    margin-left: 5px;
    direction: rtl;
    display: flex;
    flex-direction: row;
    align-items: center;
    @include respond-to(sm) {
      width: 100%;
      margin-left: 0;
    }
    // @include respond-to(xs) {
    //   width: 100%;
    //   display: flex;
    //   justify-content: center;
    //   padding-bottom: 10px;
    // }
    .fa {
      font-size: 3rem;
      color: #c7c7cc;
      position: absolute;
      left: 6px;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      @include respond-to(sm) {
        display: none;
      }
    }
  }

  .item-resaa-code-container {
    margin-left: 10px;
    height: 24px;
    padding: 15px;
    border-radius: 12px;
    background-color: #2fc8dd;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row;
    @include respond-to(sm) {
      width: 100%;
      justify-content: center;
      margin-left: 0;
      border-radius: 0;
    }
  }

  .item-resaa-code-label {
    margin-left: 5px;
  }

  .item-doctor-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 10px;
  }

  .item-doctor-tag {
    font-size: 1rem;
    background-color: $tealish;
    border-radius: 5px;
    color: white;
    text-align: center;
    padding: 5px 10px;
    margin-left: 5px;
    margin-bottom: 5px;
  }
  .pagination-box {
    padding: 2px;
    background: #f1f1f1;
    border-radius: 0 0 16px 16px;
    .show-xs {
      display: none;
      @include respond-to(xs) {
        display: flex;
      }
      li {
        flex: 0 0 20%;
      }
    }
    .hide-xs {
      @include respond-to(xs) {
        display: none;
      }
    }
  }
}
</style>
<template>
  <v-container>
    <section id="doctors">
      <div class="doctors-container">
        <div class="section-title">پزشکان رِسا</div>
        <div class="section-description">لیست پزشکان</div>
        <div class="doctors-info-container">
          <div class="doctors-info">
            <i class="fa fa-info-circle"></i>
            پزشک متخصص بیماری خود را نمی‌شناسید؟ به‌راحتی می‌توانید از پزشکان عمومی رِسا بپرسید
          </div>
        </div>
        <v-layout row wrap>
          <v-flex md4 sm12 pa-1>
            <div class="doctors-search-panel">
              <div class="search-panel-title">جستجوی پزشک</div>
              <div class="search-input">
                <v-text-field
                  hide-details
                  height="30"
                  v-model="filter.name"
                  @keyup.enter="changeFilter"
                  label="نام پزشک"
                  solo
                ></v-text-field>
                <!-- <input v-model="filter.name" @keyup.enter="changeFilter" placeholder="نام پزشک"> -->
              </div>
              <div class="search-input">
                <!-- <input v-model="filter.code" @keyup.enter="changeFilter" placeholder="کد رِسا"> -->
                <v-text-field
                  hide-details
                  v-model="filter.code"
                  @keyup.enter="changeFilter"
                  label="کد رِسا"
                  solo
                ></v-text-field>
              </div>
              <div class="search-input">
                <v-select
                  attach
                  solo
                  hide-details
                  item-text="title"
                  item-value="id"
                  :items="medicalSpecialties"
                  v-model="filter.specialtyId"
                  label="لطفا تخصص مورد نظر را انتخاب نمایید"
                ></v-select>
              </div>
              <div class="search-input">
                <v-select
                  attach
                  solo
                  hide-details
                  item-text="name"
                  item-value="id"
                  :items="provinces"
                  label="لطفا استان مورد نظر را انتخاب نمایید"
                  required
                  v-model="filter.provinceId"
                  @input="getCities"
                ></v-select>
              </div>
              <div class="search-input" v-if="filter.provinceId">
                <v-select
                  attach
                  solo
                  hide-details
                  item-text="name"
                  item-value="id"
                  :items="cities"
                  v-model="filter.cityId"
                  label="لطفا شهر مورد نظر را انتخاب نمایید"
                ></v-select>
              </div>
              <button
                @click="changeFilter"
                :disabled="(filter.provinceId && !filter.cityId)"
                class="search-panel-button"
              >جستجو</button>
              <button
                v-if="filter.name || filter.code || filter.specialtyId || filter.provinceId || filter.cityId"
                @click="clearFilter"
                class="search-panel-button clear-filter"
              >راه اندازی مجدد</button>
            </div>
          </v-flex>
          <v-flex md8 sm12 pa-1>
            <div ref="doctors" class="doctors-box">
              <v-loading v-if="ajaxLoading" mode="relative"></v-loading>

              <div v-for="doctor in doctors" :key="doctor.id" class="doctors-item">
                <router-link :to="{name:'doctors-id',params:{id:doctor.subscriberNumber}}">
                  <div class="doctors-item-info">
                    <div class="item-right-section">
                      <div class="item-avatar">
                        <img v-if="doctor.image" :src="doctor.image" alt>
                        <img v-else src="/img/doc-placeholder.png" alt>
                      </div>
                      <div class="item-right-sub-section">
                        <div class="item-doctor-name">{{doctor.firstName}} {{doctor.lastName}}</div>
                        <div
                          v-if="doctor.specialty"
                          class="item-doctor-specialty"
                        >{{doctor.specialty.title}}</div>
                        <div v-if="doctor.tags" class="item-doctor-tags">
                          <div
                            v-for="tag in doctor.tags"
                            :key="tag.id"
                            class="item-doctor-tag"
                          >{{tag.title}}</div>
                        </div>
                      </div>
                    </div>
                    <div class="item-left-section">
                      <div class="item-resaa-code-container">
                        <div class="item-resaa-code-label">کد رِسا:</div>
                        <div class="item-resaa-code">{{doctor.subscriberNumber | persianDigit}}</div>
                      </div>
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                  </div>
                </router-link>
              </div>
              <div v-if="!ajaxLoading && doctors.length == 0" class="no-result">موردی یافت نشد</div>
            </div>
            <div class="pagination-box">
              <div class="hide-xs">
                <no-ssr>
                  <pagination
                    :numOfPage="14"
                    v-model="page"
                    :limit="limit"
                    :totalItems="totalItems"
                    @change="changePage"
                  ></pagination>
                </no-ssr>
              </div>
              <div class="show-xs">
                <no-ssr>
                  <pagination
                    :numOfPage="6"
                    v-model="page"
                    :limit="limit"
                    :totalItems="totalItems"
                    @change="changePage"
                  ></pagination>
                </no-ssr>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    ajaxLoading: true,
    doctors: [],
    medicalSpecialties: [],
    provinces: [],
    cities: [],
    limit: 10,
    page: 1,

    totalItems: 0,
    filter: { specialtyId: null, provinceId: null, cityId: null }
  }),
  beforeCreate() {
    this.$geo = this.$resource(
      "",
      {},
      {
        province: {
          method: "GET",
          url: "Geo/Provinces"
        },
        city: {
          method: "GET",
          url: "Geo/Provinces/{id}/Cities"
        }
      }
    );
    this.$doctors = this.$resource(
      "Doctors",
      {},
      {
        query: {
          method: "GET",
          url:
            "Doctors?name={name}&fields={fields}&limit={limit}&offset={offset}"
        },
        medicalSpecialties: {
          method: "GET",
          url: "Doctors/MedicalSpecialties"
        }
      }
    );
    this.fields = "id,specialty,subscriberNumber,firstName,lastName,image";
  },
  created() {
    this.getDoctors();
    this.$doctors.medicalSpecialties().then(response => {
      this.medicalSpecialties = response.data.result.medicalSpecialties;
    });
    this.$geo.province().then(response => {
      this.provinces = response.data.result.provinces;
    });
  },

  computed: {
    offset() {
      return (this.page - 1) * this.limit;
    }
  },
  methods: {
    changePage(page) {
      this.page = page;
      this.getDoctors();
    },
    getCities() {
      this.filter.cityId = null;
      this.$geo.city({ id: this.filter.provinceId }).then(response => {
        this.cities = response.data.result.cities;
      });
    },
    changeFilter() {
      this.page = 1;
      this.getDoctors();
    },
    clearFilter() {
      this.filter = { specialtyId: null, provinceId: null, cityId: null };
      this.page = 1;
      this.getDoctors();
    },
    getDoctors() {
      this.ajaxLoading = true;
      let url = `Doctors?fields=${this.fields}&limit=${this.limit}&offset=${
        this.offset
      }`;
      if (this.filter.name) {
        url += `&name=${this.filter.name}`;
      }
      if (this.filter.code) {
        url += `&code=${this.filter.code}`;
      }
      if (this.filter.specialtyId) {
        url += `&specialtyId=${this.filter.specialtyId}`;
      }
      if (this.filter.cityId) {
        url += `&cityId=${this.filter.cityId}`;
      }
      this.timeout = setTimeout(() => {
        this.$http
          .get(url, {
            before(request) {
              if (this.previousRequest) {
                this.previousRequest.abort();
              }
              this.previousRequest = request;
            }
          })
          .then(response => {
            this.doctors = response.data.result.doctors;
            this.totalItems = response.data.result.doctorsTotalCount;
            this.ajaxLoading = false;
            this.$scrollTo(this.$refs.doctors, 1000, { offset: -100 });
          });
      }, 200);
    }
  }
};
</script>

