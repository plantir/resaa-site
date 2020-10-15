<style lang="scss" >
#corona-test {
  .layout {
    position: relative;
    z-index: 0;
  }
  p {
    font-size: 16px;
  }
  h2 {
    color: #212020;
    font-size: 28px;
    margin-bottom: 12px;
    font-weight: 500;
  }
  h3 {
    color: #212020;
    font-size: 18px;
  }
  strong {
    font-weight: 700;
    color: #212020;
  }
  .coopretaionAndFaq,
  .boxAndForm {
    margin-top: 50px;
    @include media(md-and-up) {
      margin-top: 30px;
    }
    .flex {
      @include media(md-and-up) {
        padding: 16px;
      }
      + .flex {
        margin-top: 30px;
        @include media(md-and-up) {
          margin-top: 0;
        }
      }
    }
  }
  .coopretaionAndFaq {
    .flex {
      &:nth-child(1) {
        order: 1;
        @include media(md-and-up) {
          order: 2;
        }
      }
      &:nth-child(2) {
        order: 2;
        @include media(md-and-up) {
          order: 1;
        }
      }
    }
  }
  .boxAndForm {
    margin-bottom: 40px;
    .flex {
      &:nth-child(1) {
        order: 1;
        @include media(md-and-up) {
          order: 2;
        }
      }
      &:nth-child(2) {
        order: 2;
        @include media(md-and-up) {
          order: 1;
        }
      }
    }
  }
  .virus {
    display: none;
    @include media(md-and-up) {
      display: block;
    }
    position: absolute;
    z-index: -1;
    &.left-faq {
      left: -50px;
      bottom: 90px;
    }
    &.right-faq {
      right: -70px;
      bottom: 20px;
    }
    &.left-price {
      left: -90px;
      top: 150px;
    }
    &.right-price {
      right: -80px;
      bottom: 150px;
    }
    &.left-antybody {
      left: -20px;
      bottom: -30px;
    }
    &.right-pcr {
      right: -80px;
      bottom: -30px;
    }
    &.left-top-symptoms {
      left: 20px;
      top: 30px;
    }
    &.right-top-symptoms {
      right: 10px;
      top: 30px;
    }
    &.left-bottom-symptoms {
      left: 20px;
      bottom: 30px;
    }
    &.right-bottom-symptoms {
      right: -40px;
      bottom: 30px;
    }
    &.top-firstford {
      left: 35%;
      top: 20px;
    }
    &.center-firstford {
      left: 60%;
      top: 80px;
    }
    &.bottom-firstford {
      left: 65%;
      bottom: 10px;
    }
  }
}
</style>
<template>
  <section id="corona-test">
    <v-layout row wrap>
      <v-flex xs12>
        <FirstFord />
      </v-flex>
      <v-img
        :alt="coronaVirusAlt"
        width="83px"
        class="virus top-firstford"
        src="/img/corona-test/virus.png"
      ></v-img>
      <v-img
        :alt="coronaVirusAlt"
        width="95px"
        class="virus center-firstford"
        src="/img/corona-test/virus.png"
      ></v-img>
      <v-img
        :alt="coronaVirusAlt"
        width="69px"
        class="virus bottom-firstford"
        src="/img/corona-test/virus.png"
      ></v-img>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <Symptoms />
      </v-flex>
      <v-img
        :alt="coronaVirusAlt"
        width="38px"
        class="virus left-top-symptoms"
        src="/img/corona-test/virus.png"
      ></v-img>
      <v-img
        :alt="coronaVirusAlt"
        width="52px"
        class="virus right-top-symptoms"
        src="/img/corona-test/virus.png"
      ></v-img>
      <v-img
        :alt="coronaVirusAlt"
        width="38px"
        class="virus left-bottom-symptoms"
        src="/img/corona-test/virus.png"
      ></v-img>
      <v-img
        :alt="coronaVirusAlt"
        width="116px"
        class="virus right-bottom-symptoms"
        src="/img/corona-test/virus.png"
      ></v-img>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <AntyBody />
      </v-flex>
      <v-img
        :alt="coronaVirusAlt"
        width="90px"
        class="virus left-antybody"
        src="/img/corona-test/virus.png"
      ></v-img>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <Pcr />
      </v-flex>
      <v-img
        :alt="coronaVirusAlt"
        width="90px"
        class="virus right-pcr"
        src="/img/corona-test/virus.png"
      ></v-img>
    </v-layout>
    <v-layout row wrap class="coopretaionAndFaq">
      <v-flex xs12 md6>
        <Faq :items="faqs" />
      </v-flex>
      <v-flex xs12 md6>
        <Cooperation />
      </v-flex>
      <v-img
        :alt="coronaVirusAlt"
        width="38px"
        class="virus left-faq"
        src="/img/corona-test/virus.png"
      ></v-img>
      <v-img
        :alt="coronaVirusAlt"
        width="52px"
        class="virus right-faq"
        src="/img/corona-test/virus.png"
      ></v-img>
    </v-layout>
    <v-layout row wrap class="boxAndForm" v-if="cities">
      <v-flex xs12 md4>
        <PriceBox :selectedCity="selectedCity" />
      </v-flex>
      <v-flex xs12 md8>
        <FormBox :cities="cities" @onchangecity="onChangeCity" />
      </v-flex>
      <v-img
        :alt="coronaVirusAlt"
        width="90px"
        class="virus left-price"
        src="/img/corona-test/virus.png"
      ></v-img>
      <v-img
        :alt="coronaVirusAlt"
        width="42px"
        class="virus right-price"
        src="/img/corona-test/virus.png"
      ></v-img>
    </v-layout>
  </section>
</template>
<script>
import FirstFord from "@/components/Pages/CoronaTest/FirstFord/FirstFord.vue";
import Symptoms from "@/components/Pages/CoronaTest/Symptoms/Symptoms.vue";
import AntyBody from "@/components/Pages/CoronaTest/AntyBody/AntyBody.vue";
import Pcr from "@/components/Pages/CoronaTest/Pcr/Pcr.vue";
import Cooperation from "@/components/Pages/CoronaTest/Cooperation/Cooperation.vue";
import Faq from "@/components/Pages/CoronaTest/Faq/Faq.vue";
import FormBox from "@/components/Pages/CoronaTest/FormBox/FormBox.vue";
import PriceBox from "@/components/Pages/CoronaTest/PriceBox/PriceBox.vue";
export default {
  layout: "corona-test",
  components: {
    FirstFord,
    Symptoms,
    AntyBody,
    Pcr,
    Cooperation,
    Faq,
    FormBox,
    PriceBox,
  },

  head() {
    return {
      title: "تست کرونا در منزل",
      link: [
        {
          rel: "canonical",
          href: `${process.env.SITE_URL}${this.$route.path}`,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "تست کرونا، تست آنتی بادی و تست PCR در منزل با سامانه رسا. متخصصین آزمایشگاه برای گرفتن انواع تست های کرونا به منزل شما می آیند و دیگر لازم نیست از خانه خود خارج شوید.",
        },
      ],
    };
  },
  computed: {
    faqs() {
      return this.$store.state.faq.corona;
    },
  },
  data() {
    return {
      new_user: false,
      loading: null,
      coronaVirusAlt: "ویروس کرونا",
      selectedCity: null,
      cities: null,
    };
  },
  async mounted() {
    //     let confirm = await this.$dialog.warning().alert({
    //       message: `با توجه به دستور جدید وزارت بهداشت مبنی بر غیر مجاز بودن نمونه گیری خارج از آزمایشگاه ها برای تست کرونا خدمات نمونه گیری در منزل تا اطلاع ثانوی امکان پذیر نمی باشد.
    // شما میتوانید برای تصمیم گیری برای نمونه گیری در آزمایشگاه ها با توجه به شرایط کنونی بیماری و علائم خود از <a href="/categories/medical-consultation-for-coronavirus/1141">مشاوره پزشکان متخصص</a> استفاده نمایید.`,
    //       ok_txt: "مشاوره تلفنی کرونا",
    //     });
    //     if (confirm) {
    //       this.$router.push(
    //         "/categories/medical-consultation-for-coronavirus/1141"
    //       );
    //     }
    try {
      let url = process.env.EXTRA_API_URL + "/corona_cities";
      this.cities = await this.$axios.$get(url);
    } catch (error) {
      this.$toast.warning().showSimple('عدم ارتباط با سرور')
    }
  },
  methods: {
    onChangeCity(city_id) {
      this.selectedCity = this.cities.find((item) => item.id == city_id);
    },
  },
};
</script>
