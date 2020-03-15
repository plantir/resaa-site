<style lang="scss" scoped>
.custom-container {
  max-width: 1200px;
  margin: 0 auto;
}
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
  h1 {
    position: absolute;
    top: 153px;
    right: 120px;
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 80px;
      font-size: 20px;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
  }
  span {
    position: absolute;
    top: 230px;
    right: 130px;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 130px;
      font-size: 20px;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
  }
}
.breadcrumbs {
  display: flex;
  align-items: center;
  padding-right: 16px;
  @include media(sm) {
    padding-right: 0px;
    justify-content: center;
  }
  a {
    color: #707070;
    display: flex;
    &:hover {
      color: $primary-color;
    }
  }
  .v-icon {
    color: #a9a9a9;
    font-size: 18px;
  }
}
.card-title {
  color: #707070;
  font-weight: 500;
  margin-bottom: 4px;
  margin-left: 20px;
  @include media(sm) {
    text-align: center;
  }
}
.guide {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  max-width: 100%;
  // padding: 0 20px;
  .available {
    color: #43e7a5;
  }
  .not-available {
    color: #febe10;
  }
  @include media(sm) {
    margin-bottom: 16px;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #a3a3a3;
    @include media(sm) {
      font-size: 16px;
    }
    svg {
      margin-left: 12px;
      width: 25px;
      height: 25px;
      @include media(sm) {
        width: 25px;
        height: 25px;
      }
    }
    + div {
      // margin-right: 60px;
      @include media(sm) {
        // margin-right: 0px;
        // margin-top: 12px;
      }
    }
  }
}
.card-subtitle {
  color: #707070;
  font-weight: normal;
  margin-bottom: 40px;
  font-size: 15px;
  @include media(sm) {
    text-align: center;
  }
}
.item + .item {
  margin-top: 16px;
}
.card {
  border-radius: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 30px 60px;
  background: #fff;
  @include media(sm) {
    padding: 30px 16px;
  }
}
.card-header {
  display: flex;
}
.comments-wrapper {
  background: #fff;
  padding: 30px 0;
  h2 {
    text-align: center;
    color: #999999;
    font-weight: 500;
    margin-bottom: 40px;
    font-size: 21px;
  }
}
</style>
<template>
  <section ref="wrapper">
    <div class="header">
      <img
        v-if="$device.isDesktop"
        :src="'/api/' + category.backgroundImagePath"
        :alt="category.title"
      />
      <img v-else :src="'/api/' + category.mobileBackgroundImagePath" :alt="category.title" />
      <h1>{{ category.title }}</h1>
      <transition name="fade" mode="out-in">
        <span :key="text_array[header_text]">
          {{
          text_array[header_text]
          }}
        </span>
      </transition>
    </div>
    <v-container class="py-0">
      <div class="custom-container">
        <div class="breadcrumbs">
          <nuxt-link to="/">سامانه رسا</nuxt-link>
          <span>
            <v-icon>chevron_left</v-icon>
          </span>
          <nuxt-link :to="$route.fullPath">{{ category.title }}</nuxt-link>
        </div>
        <div class="card">
          <div class="card-header">
            <h2 class="card-title">لیست متخصصین {{ category.title }}</h2>
            <div class="guide hide-md">
              <div class="available">
                <Available />در دسترس
              </div>
              <div class="not-available">
                <NotAvailable />عدم دسترسی
              </div>
            </div>
          </div>
          <p class="card-subtitle">
            می توانید در این بخش لیست {{ category.title }} سامانه رسا را مشاهده
            کنید و مشاور مورد نظر خود را انتخاب کنید.
          </p>
          <div class="guide hide-md-and-up">
            <div class="available">
              <Available />در دسترس
            </div>
            <div class="not-available">
              <NotAvailable />عدم دسترسی
            </div>
          </div>
          <div
            class="item"
            v-for="doctor in related_doctors.slice(0, 3)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
          <Guide />
          <div
            class="item"
            v-for="doctor in related_doctors.slice(3, related_doctors.length)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
          <no-ssr>
            <pagination
              class="mt-3"
              :numOfPage="10"
              v-model="page"
              :limit="limit"
              :totalItems="totalItems"
              @change="changePage"
            ></pagination>
          </no-ssr>
        </div>
      </div>
    </v-container>
    <v-container
      v-if="category.testimonials && category.testimonials.length"
      class="comments-wrapper"
      fluid
    >
      <h2>
        نظر همراهان رسا در
        <br class="hide-md-and-up" />
        مورد {{ category.title }}
      </h2>
      <Comments :comments="category.testimonials" />
    </v-container>
    <v-container>
      <div class="custom-container">
        <Description :content="category.seoContents" />
      </div>
    </v-container>
  </section>
</template>
<script>
import Wave from "@/assets/svg/speciality_wave.svg?inline";
import Doctor from "@/components/categories/doctor";
import Comments from "@/components/categories/comments";
import Description from "@/components/categories/description";
import Guide from "@/components/specialities/guide";
import Available from "~/assets/svg/Available.svg?inline";
import NotAvailable from "~/assets/svg/NotAvailable.svg?inline";

export default {
  components: {
    Wave,
    Doctor,
    Guide,
    Comments,
    Description,
    Available,
    NotAvailable
  },
  props: ["category", "related_doctors", "limit", "totalItems", "requestId"],
  data() {
    return {
      text_array: [
        "از هر کجای ایران!",
        "با بهترین مشاوران!",
        "با کمترین هزینه!",
        "بدون رفت و آمد!",
        "بدون انتظار و نوبت!",
        "بدون نیاز به اینترنت!",
        "هر زمان که بخواهید!",
        "محرمانه و ناشناس!",
        "بدون نیاز به گوشی هوشمند!"
      ],
      page: 1,
      header_text: 0
    };
  },
  mounted() {
    setInterval(() => {
      if (this.header_text == this.text_array.length - 1) {
        this.header_text = 0;
      } else {
        this.header_text = this.header_text + 1;
      }
    }, 4000);
  },
  methods: {
    async changePage(page) {
      let loader = this.$loader.show(this.$refs.wrapper);
      this.page = page;
      try {
        let { result } = await this.$axios.$get(
          `categories/${this.category.id}/RelatedDoctors`,
          {
            params: {
              limit: this.limit,
              offset: this.offset,
              requestId: this.requestId
            }
          }
        );
        this.related_doctors = result.relatedDoctors;
        this.$scrollTo(this.$refs.wrapper, 1000);
      } catch (error) {}
      loader.hide();
    }
  },
  computed: {
    offset() {
      return (this.page - 1) * this.limit;
    }
  }
};
</script>
