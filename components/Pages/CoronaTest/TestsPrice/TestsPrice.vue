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
  background: $primary-color;
  width: 100%;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
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
      align-items: center;
      justify-content: center;
    }
    &:hover {
      color: $primary-color;
    }
  }
}
.mobile-wrapper {
  width: 100%;
  h3 {
    text-align: center;
  }
  .test-item {
    padding: 0 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 2px dashed gray;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      height: 38px;
      > span {
        flex: 0 0 33.3333%;
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
}
</style>
<template>
  <section>
    <v-card v-if="$device.isDesktop">
      <div class="header">
        هزینه‌ی تست های کرونا در شهرهای مختلف
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
                  <span class="mr-4">
                    {{ test.total_amount | currency | persianDigit }} تومان
                  </span>
                </div>
                <div class="price-item">
                  <span>پیش پرداخت</span>
                  <span class="mr-4">
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
      <h3 class="mb-3 text-center">
        هزینه‌ی تست های کرونا در شهرهای مختلف
      </h3>
      <v-expansion-panel expand>
        <v-expansion-panel-content v-for="city in cities" :key="city.id">
          <template v-slot:header>
            <div>{{ city.name }}</div>
          </template>
          <div
            class="test-item"
            v-for="test in city.tests"
            :key="test.id"
            @click="goOnForm(city, test)"
          >
            <div>
              <span>
                {{ test.name }}
              </span>
              <span class="mr-4">
                {{ test.total_amount | currency | persianDigit }} تومان
              </span>
              <v-spacer></v-spacer>
            </div>
            <div>
              <span>پیش پرداخت</span>
              <span class="mr-4">
                {{ test.prepay_amount | currency | persianDigit }} تومان
              </span>
            </div>
            <v-icon>la-cart-plus</v-icon>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </section>
</template>
<script>
export default {
  props: ["cities"],
  methods: {
    goOnForm(city, test) {
      this.$emit("onClick", { city, test });
    }
  }
};
</script>
