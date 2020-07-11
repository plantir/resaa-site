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
  .boxAndForm {
    margin-bottom: 40px;
    .flex {
      &:first-child {
        order: 1;
        @include media(md-and-up) {
          order: 2;
        }
      }
      &:last-child {
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
      <FirstFord />
      <v-img width="83px" class="virus top-firstford" src="/img/corona-test/virus.png"></v-img>
      <v-img width="95px" class="virus center-firstford" src="/img/corona-test/virus.png"></v-img>
      <v-img width="69px" class="virus bottom-firstford" src="/img/corona-test/virus.png"></v-img>
    </v-layout>
    <v-layout row wrap>
      <Symptoms />
      <v-img width="38px" class="virus left-top-symptoms" src="/img/corona-test/virus.png"></v-img>
      <v-img width="52px" class="virus right-top-symptoms" src="/img/corona-test/virus.png"></v-img>
      <v-img width="38px" class="virus left-bottom-symptoms" src="/img/corona-test/virus.png"></v-img>
      <v-img width="116px" class="virus right-bottom-symptoms" src="/img/corona-test/virus.png"></v-img>
    </v-layout>
    <v-layout row wrap>
      <AntyBody />
      <v-img width="90px" class="virus left-antybody" src="/img/corona-test/virus.png"></v-img>
    </v-layout>
    <v-layout row wrap>
      <Pcr />
      <v-img width="90px" class="virus right-pcr" src="/img/corona-test/virus.png"></v-img>
    </v-layout>
    <v-layout row wrap class="coopretaionAndFaq">
      <v-flex xs12 md6>
        <Cooperation />
      </v-flex>
      <v-flex xs12 md6>
        <Faq :items="faqs" />
      </v-flex>
      <v-img width="38px" class="virus left-faq" src="/img/corona-test/virus.png"></v-img>
      <v-img width="52px" class="virus right-faq" src="/img/corona-test/virus.png"></v-img>
    </v-layout>
    <v-layout row wrap class="boxAndForm">
      <v-flex xs12 md4>
        <PriceBox />
      </v-flex>
      <v-flex xs12 md8>
        <FormBox />
      </v-flex>
      <v-img width="90px" class="virus left-price" src="/img/corona-test/virus.png"></v-img>
      <v-img width="42px" class="virus right-price" src="/img/corona-test/virus.png"></v-img>
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
    PriceBox
  },
  computed: {
    faqs() {
      return this.$store.state.faq.corona;
    }
  },
  data() {
    return {
      new_user: false,
      loading: null
    };
  },
  methods: {}
};
</script>