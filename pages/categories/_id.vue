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
  @include media(sm) {
    text-align: center;
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
  <section>
    <div class="header">
      <img
        v-if="$device.isDesktop"
        :src="'/api/' + category.backgroundImagePath"
        :alt="category.title"
      />
      <img
        v-else
        :src="'/api/' + category.mobileBackgroundImagePath"
        :alt="category.title"
      />
      <h1>{{ category.title }}</h1>
      <transition name="fade" mode="out-in">
        <span :key="text_array[header_text]">{{
          text_array[header_text]
        }}</span>
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
          <h2 class="card-title">لیست متخصصین {{ category.title }}</h2>
          <p class="card-subtitle">
            می توانید در این بخش لیست {{ category.title }} سامانه رسا را مشاهده
            کنید و مشاور مورد نظر خود را انتخاب کنید.
          </p>
          <div
            class="item"
            v-for="doctor in sorted_doctors.slice(0, 3)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
          <Guide />
          <div
            class="item"
            v-for="doctor in sorted_doctors.slice(3, sorted_doctors.length)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
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
        <br class="hide-md-and-up" />مورد {{ category.title }}
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
export default {
  layout: "speciality",
  components: { Wave, Doctor, Guide, Comments, Description },
  head() {
    return {
      title: this.title,
      __dangerouslyDisableSanitizers: ["script"],
      link: [
        { rel: "canonical", href: `${process.env.SITE_URL}${this.$route.path}` }
      ],
      script: [
        {
          innerHTML: JSON.stringify(this.main_schema),
          type: "application/ld+json"
        },
        {
          innerHTML: JSON.stringify(this.doctors_schema),
          type: "application/ld+json"
        },
        {
          innerHTML: JSON.stringify(this.faq_schema),
          type: "application/ld+json"
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  async asyncData(ctx) {
    let category, related_doctors;
    try {
      let { result } = await ctx.$axios.$get(`categories/${ctx.params.id}`);
      category = result.manifest;
    } catch (error) {}
    try {
      let { result } = await ctx.$axios.$get(
        `categories/${ctx.params.id}/RelatedDoctors`
      );
      related_doctors = result.relatedDoctors;
    } catch (error) {}
    return {
      title: category.title,
      description: `دریافت ${category.title} فقط در سامانه رسا، با کمترین هزینه، بدون دریافت نوبت، بدون رفت و آمد، بدون انتظار و با بهترین مشاوران`,
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
      header_text: 0,
      sorted_doctors: related_doctors,
      category: category,
      main_schema: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "سامانه رسا",
            item: "https:/resaa.net"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: category.title,
            item: `https://resaa.net/categories/${ctx.params.id}`
          }
        ]
      },
      doctors_schema: {
        "@context": "http://schema.org",
        "@type": "ItemList",
        name: `لیست متخصصین ${category.title}`,
        itemListElement: related_doctors.map((doctor, key) => {
          return {
            "@type": "ListItem",
            position: key + 1,
            item: {
              "@id": `https://resaa.net/doctors/psychology/${doctor.subscriberNumber}`,
              name: `${doctor.fullNameWithTitle}`,
              image: {
                "@type": "ImageObject",
                url: `https://webapi.resaa.net/Doctors/${doctor.subscriberNumber}/Image`
              }
            }
          };
        })
      },
      faq_schema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: category.seoContents.map(item => {
          return {
            "@type": "Question",
            name: item.title.replace(/<\/?[a-z0-9]+>/g, ""),
            acceptedAnswer: {
              "@type": "Answer",
              text: item.description
            }
          };
        })
      }
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
  }
};
</script>
