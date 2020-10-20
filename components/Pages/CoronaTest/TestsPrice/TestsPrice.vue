<style lang="scss" scoped>
section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 60px auto 20px;
  padding: 0 20px;
  max-width: 970px;
  @include media(xs-only){
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
  height: 64px;
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
  height: 58px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px dashed gray;
  &:last-child {
    border: none;
  }
  .city-name {
    font-weight: 500;
    font-size: 16px;
  }
  .test-item {
    cursor: pointer;
    &:hover {
      color: $primary-color;
    }
  }
}
.mobile-wrapper {
  width: 100%;
  h3{
    text-align: center;
  }
  .test-item {
    padding: 0 36px;
    display: flex;
    height: 58px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px dashed gray;
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
            <div
              class="test-item"
              v-for="test in city.tests"
              :key="test.id"
              @click="goOnForm(city, test)"
            >
              <span>
                {{ test.name }}
              </span>
              <span class="mr-3">
                {{ test.total_amount | currency | persianDigit }} تومان
              </span>
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
            <span>
              {{ test.name }}
            </span>
            <span class="mr-3">
              {{ test.total_amount | currency | persianDigit }} تومان
            </span>
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
