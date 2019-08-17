<style lang="scss" >
#doctors {
  .doctors-section-patients-container {
    background-color: white;
  }

  .doctors-title {
    padding-top: 60px;
    text-align: center;
    font-weight: 500;
    font-size: 2.375rem;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(240deg, #3de0cb, #0dc9f0),
      linear-gradient(#00bff4, #00bff4);
    padding-bottom: 4px;
  }

  .doctors-description {
    margin-top: 10px;
    color: #777590;
    font-weight: normal;
    text-align: center;
  }

  .doctors-info-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 60px 0;
    @include respond-to(lg) {
      flex-direction: column;
    }
  }

  .doctors-list {
    width: 480px;
    max-width: 90%;
  }

  .doctors-image-container {
    background: url("ptrn@2x.png");
    display: flex;
    justify-content: center;
    background-size: contain;
  }

  .doctors-image {
    height: 400px;
    width: auto;
    max-width: 100%;
  }

  .doctors-box {
    background-color: #f2f2f2;
    padding: 10px;
    width: 100%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    @include respond-to(sm) {
      flex-direction: row;
      flex-wrap: wrap;
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
    a:focus {
      text-decoration: none;
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

  .item-right-section {
    display: flex;
    align-items: center;
    width: 100%;
    @include respond-to(sm) {
      flex-direction: column;
    }
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
    .fa {
      font-size: 2.375rem;
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

  .item-avatar {
    width: 50px;
    height: 50px;
    margin: 5px 5px 5px 10px;
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
    color: #777590;
    text-align: right;
    font-weight: 500;
  }

  .item-doctor-specialty {
    color: #777590;
    text-align: right;
  }

  .item-doctor-name,
  .item-doctor-specialty {
    @include respond-to(sm) {
      white-space: nowrap;
      text-align: center;
      display: block;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 100%;
      padding: 0 8px;
    }
  }
  .item-resaa-code-container {
    margin-left: 10px;
    height: 24px;
    padding: 15px;
    border-radius: 20px;
    background-color: #2fc8dd;
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row;
    // @include respond-to(sm){
    //   flex-direction: column;
    //   height: 60%;
    //   width: 100px;
    //   padding: 0;
    //   justify-content: center;
    //   align-items: center;
    // }
    @include respond-to(sm) {
      width: 100%;
      justify-content: center;
      margin-left: 0;
      border-radius: 0;
    }
  }

  .item-resaa-code-label {
    margin-left: 5px;
    white-space: nowrap;
  }

  .item-doctor-tags {
    display: flex;
    flex-wrap: wrap;
    margin: 10px 50px;
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

  .doctors-full-list-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
  }

  .doctors-full-list-button {
    width: 200px;
    border-width: 2px;
  }
  .item-right-sub-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    @include respond-to(sm) {
    }
  }
  .search-box {
    border-radius: 16px 16px 0 0;
    border: 1px solid #f2f2f2;
    background: #f2f2f2;
    padding: 2px;
    position: relative;
    background: #fff;
    input {
      width: 100%;
      border-radius: 16px 16px 0 0;
      border: none;
      height: 40px;
      padding: 0 40px 0 16px;
      direction: rtl;
    }
    .icon {
      position: absolute;
      right: 0;
      height: 40px;
      display: flex;
      top: 2px;
      align-items: center;
      width: 40px;
      justify-content: center;
      color: #999;
      font-size: 1.375rem;
    }
  }
  .pagination-box {
    padding: 2px;
    background: #f1f1f1;
    border-radius: 0 0 16px 16px;
    .show-xs {
      display: none;
      @include respond-to(sm) {
        display: flex;
      }
      li {
        flex: 0 0 20%;
      }
    }
    .hide-xs {
      @include respond-to(sm) {
        display: none;
      }
    }
  }
}
</style>

<template>
  <div class="doctors-section-patients-container" id="doctors">
    <h2 class="doctors-title">پزشکان رِسا</h2>
    <p class="doctors-description">پزشک مورد نظر خود را اینجا پیدا کنید</p>
    <div class="doctors-info-container">
      <div class="doctors-list">
        <div class="search-box">
          <input
            type="text"
            v-model="filter"
            @input="changeFilter($event)"
            placeholder="جستجو براساس نام پزشک، کد رِسا، رشته تخصصی"
          />
          <span v-if="!filter" class="icon">
            <i class="fa fa-search fa-rotate-90"></i>
          </span>
          <span v-else @click="clearFilter()" class="icon">
            <i class="fa fa-times"></i>
          </span>
        </div>
        <div class="doctors-box">
          <no-ssr>
            <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
          </no-ssr>
          <div v-for="doctor in doctors" :key="doctor.id" class="doctors-item">
            <router-link
              target="_blank"
              :to="{name:'doctors-id',params:{id:doctor.subscriberNumber}}"
            >
              <div class="doctors-item-info">
                <div class="item-right-section">
                  <div class="item-avatar">
                    <img
                      v-if="doctor.imagePath"
                      :src="'https://webapi.resaa.net/'+doctor.imagePath"
                      alt
                    />
                    <img v-else src="/img/doc-placeholder.png" alt="پزشکان سامانه رسا" />
                  </div>
                  <div class="item-right-sub-section">
                    <div class="item-doctor-name">{{doctor.firstName}} {{doctor.lastName}}</div>
                    <div
                      v-if="doctor.specialty"
                      class="item-doctor-specialty"
                    >{{doctor.specialty.title}}</div>
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
        <no-ssr>
          <div class="pagination-box">
            <pagination
              class="hide-xs"
              v-model="page"
              :limit="limit"
              :totalItems="totalItems"
              @change="changePage"
            ></pagination>
            <pagination
              class="show-xs"
              v-model="page"
              :numOfPage="5"
              :limit="limit"
              :totalItems="totalItems"
              @change="changePage"
            ></pagination>
          </div>
        </no-ssr>
      </div>
      <div class="doctors-image-container">
        <img class="doctors-image" src="./doctors2.png" />
      </div>
    </div>
    <div class="doctors-full-list-container">
      <v-btn
        class="doctors-full-list-button"
        :to="{name:'doctors'}"
        target="_blank"
        color="secondary"
        round
        outline
      >لیست کامل پزشکان رِسا</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    ajaxLoading: true,
    timeout: null,
    previousRequest: null,
    doctors: [],
    limit: 6,
    page: 1,
    totalItems: 0,
    filter: ""
    // items: "id,specialty,subscriberNumber,firstName,lastName,imagePath"
  }),
  beforeCreate() {
    let actions = {
      query: {
        method: "GET",
        url: "Doctors?name={name}&fields={fields}&limit={limit}&offset={offset}"
      }
    };
    this.fields = "id,specialty,subscriberNumber,firstName,lastName,imagePath";
  },
  mounted() {
    this.getDoctors();
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
    changeFilter() {
      clearTimeout(this.timeout);
      this.page = 1;
      this.timeout = setTimeout(this.getDoctors, 800);
    },
    clearFilter() {
      this.filter = "";
      this.changeFilter();
    },
    getDoctors() {
      this.ajaxLoading = true;
      let url = `/Doctors?fields=${this.fields}&limit=${this.limit}&offset=${this.offset}`;
      if (this.filter) {
        url += `&query=${this.filter}`;
      }
      this.$axios
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
        });
    }
  }
};
</script>

