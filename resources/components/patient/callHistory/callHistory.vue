<template>
  <div class="call-history-container">
    <div>
      <div class="section-title">تاریخچه تماس‌ها</div>
      <div class="section-description">لیست تاریخچه تماس‌های صورت گرفته با پزشکان رِسا</div>
      <div class="call-history-search">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input
          v-model="query"
          @input="changeFilter($event)"
          placeholder="جستجو براساس نام پزشک، کد رِسا، رشته تخصصی"
        >
      </div>
      <div class="call-history-box">
        <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
        <div class="call-history-item" v-for="item in calls" :key="item.id">
          <div class="item-right-section">
            <div class="item-avatar"></div>
            <div class="item-right-sub-section">
              <div class="item-doctor-name">
                <router-link
                  target="_blank"
                  :to="{name:'Doctor',params:{subscriberNumber:item.receiver.subscriberNumber}}"
                >{{item.receiver.fullName || item.receiver.title}}</router-link>
              </div>
              <div
                class="item-date"
              >{{item.startedAt | persianDate('dddd','fa') }} {{item.startedAt | persianDate('jYYYY/jMM/jDD HH:mm:ss') | persianDigit}}</div>
            </div>
          </div>
          <div class="item-left-section">
            <div class="item-call-duration-container">
              <div class="item-call-duration-label">مدت مکالمه:</div>
              <div class="item-call-duration">{{item.effectiveDuration | persianDigit}}"</div>
            </div>
            <div class="item-call-price-container">
              <div class="item-call-price-label">هزینه مکالمه:</div>
              <div class="item-call-price">{{sum(item.transactions) | currency | persianDigit}}</div>
              <div class="item-call-price-currency">تومان</div>
            </div>
          </div>
        </div>
        <div v-if="!ajaxLoading && calls.length == 0" class="no-result">موردی یافت نشد</div>
      </div>
    </div>
    <div v-if="!ajaxLoading && calls.length > 0" class="pagination-box">
      <no-ssr>
        <div class="hide-xs">
          <pagination
            :numOfPage="20"
            v-model="page"
            :limit="limit"
            :totalItems="totalItems"
            @change="changePage"
          ></pagination>
        </div>
        <div class="show-xs">
          <pagination
            :numOfPage="6"
            v-model="page"
            :limit="limit"
            :totalItems="totalItems"
            @change="changePage"
          ></pagination>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ajaxLoading: true,
      timeout: null,
      previousRequest: null,
      calls: [],
      limit: 10,
      page: 1,
      totalItems: 100,
      query: ""
    };
  },
  created() {
    this.get_list();
  },
  methods: {
    get_list() {
      this.ajaxLoading = true;
      let url = `Accounts/${this.user_id}/Calls?limit=${this.limit}&offset=${
        this.offset
      }`;
      if (this.query) {
        url += `&query=${this.query}`;
      }
      this.$axios
        .get(url, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          },
          before(request) {
            if (this.previousRequest) {
              this.previousRequest.abort();
            }
            this.previousRequest = request;
          }
        })
        .then(response => {
          this.calls = response.data.result.calls;
          this.totalItems = response.data.result.callsTotalCount || 100;
          this.ajaxLoading = false;
        });
    },
    changePage(page) {
      this.page = page;
      this.get_list();
    },
    changeFilter() {
      clearTimeout(this.timeout);
      this.page = 1;
      this.timeout = setTimeout(this.get_list, 800);
    },
    sum(transactions) {
      let total = 0;
      for (let item of transactions) {
        total += item.amount;
      }
      return total;
    }
  },
  computed: {
    offset() {
      return (this.page - 1) * this.limit;
    },
    user() {
      return this.$store.state.patient.user;
    },
    user_id() {
      return this.$store.state.patient.user_id;
    }
  }
};
</script>

<style lang="scss" scoped>
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
@media (max-width: 600px) {
  .call-history-item {
    align-items: center !important;
    justify-content: center !important;
    flex-direction: column !important;
    height: 160px !important;

    .item-right-section {
      flex-direction: column !important;
      justify-content: center !important;
      align-items: center !important;

      .item-avatar {
        margin: 0 0 10px 0 !important;
      }
      .item-right-sub-section {
        .item-doctor-name {
          text-align: center !important;
        }
      }
    }

    .item-call-duration-container {
      justify-content: center !important;
    }
    .item-call-price-container {
      justify-content: center !important;
    }
  }
}

.call-history-container {
  padding: 50px;
  background-color: white;
  border-radius: 15px;
  width: 100%;
}

.section-title {
  color: $tealish;
  text-align: center;
  font-size: 2.675rem;
  font-weight: 500;
  margin-bottom: 30px;
}

.section-description {
  text-align: center;
  color: $dark-blue-grey;
  margin-bottom: 50px;
}

.call-history-box {
  background-color: #f2f2f2;
  border-radius: 0 0 7.5px 7.5px;
  padding: 10px;
  width: 100%;
  direction: ltr;
}

.call-history-search {
  padding: 0 10px;
  line-height: 43px;
  border-radius: 7.5px 7.5px 0 0;
  height: 43px;
  background-color: white;
  border: solid 3px #f2f2f2;
  border-bottom: none;
  text-align: right;
  direction: rtl;
  overflow: hidden;

  .fa {
    color: #a9a9c7;
    margin-left: 10px;
  }

  input {
    width: 90%;
    height: 100%;
    border: none;

    &::placeholder {
      color: #a9a9c7;
      font-size: 1rem;
    }
  }
}

.call-history-item {
  padding-left: 10px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  height: 60px;
  border-radius: 7.5px;
  background-color: white;
  box-shadow: 0 2.5px 5px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  margin-bottom: 10px;

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
  margin: 5px 5px 5px 10px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-doctor-name {
  color: #44436c;
  text-align: right;
  font-weight: 500;
}

.item-date {
  color: #777590;
}

.item-right-section {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.item-left-section {
  direction: rtl;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-call-duration-container {
  color: #777590;
  display: flex;
  flex-direction: row;
}

.item-call-duration {
  direction: ltr;
  margin-right: 5px;
}

.item-call-price-container {
  color: #777590;
  display: flex;
  flex-direction: row;
}

.item-call-price {
  direction: ltr;
  color: #d0225e;
  margin-right: 5px;
}

.item-call-price-currency {
  color: #d0225e;
  margin-right: 5px;
}
</style>
