<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px auto 20px;
  padding: 0 20px;
  max-width: 970px;
  @include media(xs-only) {
    padding: 0;
  }
}
.v-card {
  border-radius: 10px;
}
.header {
  background: #00bca4;
  width: 100%;
  font-weight: 500;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff !important;
    font-size: 18px !important;
  }
}
.description {
  font-size: 14px;
  padding: 16px 36px;
  text-align: center;
}
.content {
  margin: 30px 0;
}
.city-item {
  padding: 0 36px;
  display: flex;
  min-height: 58px;
  align-items: center;
  border-bottom: 2px dashed gray;
  &:last-child {
    border: none;
  }
  .city-name {
    font-weight: 500;
    font-size: 16px;
    flex: 0 0 100px;
  }
  .test-item-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 12px 0;
  }
  .test-item {
    cursor: pointer;
    height: auto;
    width: calc(33.333% - 16px);
    ::v-deep {
      .v-btn__content {
        flex-direction: column;
        align-items: self-start;
        justify-content: center;
      }
    }
    .v-icon {
      position: absolute;
      left: -4px;
    }
    div.price-item {
      display: flex;
      height: 40px;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      > span {
        flex: 0 0 50%;
        text-align: right;
      }
    }
    &:hover {
      color: $primary-color;
    }
  }
}
.mobile-wrapper {
  width: 100%;
  h2 {
    text-align: center;
    font-size: 18px !important;
  }
  .total-price {
    font-size: 14px;
  }
  .prepay-price {
    font-size: 11px;
  }
  .test-item {
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 2px dashed gray;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      height: 34px;
      > span {
        flex: 0 0 50%;
      }
    }
    .v-icon {
      position: absolute;
      left: 24px;
    }
    &:last-child {
      border: none;
    }
  }
  .v-expansion-panel {
    box-shadow: none;
    ::v-deep {
      .v-expansion-panel__header {
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16);
        border-radius: 10px;
        background: #fff;
        font-size: 16px;
        font-weight: 700;
        @include media(md-and-up) {
          min-height: 60px;
        }
      }
      .v-expansion-panel__body {
        padding-top: 20px;
        background: none;
        transition: 0.18s cubic-bezier(1, 1, 1, 1);
        .v-card {
          overflow: hidden;
          box-shadow: 0 1px 5px rgba(0, 0, 0, 0.16) !important;
          border-radius: 10px;
          padding: 0;
          font-size: 13px;
          line-height: 25px;
        }
      }
      .v-expansion-panel__container {
        background: none;
        border-top: none;
        margin-top: 16px;
        &:first-child {
          margin-top: 0;
        }
        .v-icon {
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) !important;
        }
        &--active {
          .v-expansion-panel__header {
            background: #00bca4;
            color: #fff;
          }
          .v-expansion-panel__header {
            .v-icon {
              color: #fff !important;
              // &:before {
              // content: "\f28e";
              // }
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <v-card v-if="$device.isDesktop">
      <div class="header">
        <h2>
          هزینه‌ی تست های کرونا در شهرهای مختلف
        </h2>
      </div>
      <div class="body">
        <p class="description">
          برای انجام تست کرونا در منزل لازم است فرم زیر را پر کنید. پس از پرداخت
          هزینه ی تست، پشتیبانی در کمتر از ۲ ساعت در بازه ی ۹ الی ۲۱ با شما تماس
          خواهد
        </p>
        <div class="content">
          <div class="city-item" v-for="city in cities" :key="city.id">
            <div class="city-name">{{ city.name }}</div>
            <div class="test-item-wrapper">
              <v-btn
                class="test-item"
                v-for="test in city.tests"
                :key="test.id"
                color="blue-grey lighten-5"
                @click="goOnForm(city, test)"
              >
                <div class="price-item">
                  <span>
                    {{ test.name }}
                  </span>
                  <span>
                    {{ test.total_amount | currency | persianDigit }} تومان
                  </span>
                </div>
                <div class="price-item">
                  <span>پیش پرداخت</span>
                  <span>
                    {{ test.prepay_amount | currency | persianDigit }} تومان
                  </span>
                </div>
                <v-icon>la-cart-plus</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </v-card>
    <div v-else class="mobile-wrapper">
      <h2 class="mb-3 text-center">
        هزینه‌ی تست های کرونا در شهرهای مختلف
      </h2>
      <v-expansion-panel expand v-model="model">
        <v-expansion-panel-content v-for="city in cities" :key="city.id">
          <div slot="header">
            <p class="mb-0">{{ city.name }}</p>
          </div>
          <v-card>
            <div
              class="test-item"
              v-for="test in city.tests"
              :key="test.id"
              @click="goOnForm(city, test)"
            >
              <div class="total-price">
                <span>
                  {{ test.name }}
                </span>
                <span>
                  {{ test.total_amount | currency | persianDigit }} تومان
                </span>
              </div>
              <div class="prepay-price">
                <span>پیش پرداخت</span>
                <span>
                  {{ test.prepay_amount | currency | persianDigit }} تومان
                </span>
              </div>
              <v-icon>la-cart-plus</v-icon>
            </div>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </section>
</template>
<script>
export default {
  props: ["cities"],
  data() {
    return {
      model: 0
    };
  },
  methods: {
    goOnForm(city, test) {
      this.$emit("onClick", { city, test });
    }
  }
};
</script>
