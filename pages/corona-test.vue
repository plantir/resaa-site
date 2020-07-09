<style lang="scss" >
#corona-test {
  p {
    font-size: 16px;
  }
}
.coopretaionAndFaq,
.boxAndForm {
  margin-top: 30px;
  .flex {
    @include media(md-and-up) {
      padding: 16px;
    }
    + .flex {
      margin-top: 16px;
      @include media(md-and-up) {
        margin-top: 0;
      }
    }
  }
}
</style>
<template>
  <section id="corona-test">
    <FirstFord />
    <Symptoms />
    <AntyBody />
    <Pcr />
    <v-layout row wrap class="coopretaionAndFaq">
      <v-flex xs12 md6>
        <Cooperation />
      </v-flex>
      <v-flex xs12 md6>
        <Faq :items="faqs" />
      </v-flex>
    </v-layout>
    <v-layout row wrap class="boxAndForm">
      <v-flex xs12 md8>
        <FormBox />
      </v-flex>
      <v-flex xs12 md4>
        <PriceBox />
      </v-flex>
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
  data() {
    return {
      faqs: [
        {
          question: "۱- آیا نیاز است من تست کرونا بدهم؟",
          answer: `در صورتی که بر اساس علائم ذکر شده حس می کنید که ممکن است به کرونا مبتلا شده باشید به دلایل زیر تست دادن فکر خوبی است:
          <div>
            * تشخیص به موقع کرونا به درمان و گذر سریعتر از این بیماری کمک می کند.
          </div>
          <div>
            * با اطمینان از ابتلای خود، می توانید خود را قرنطینه کنید و از ابتلای افراد آسیب پذیر خانواده و دوستان جلوگیری کنید.
          </div>
          <div>
            * در صورتی که بیماری را پشت سر گذاشته باشید می توانید با توجه به نتیجه ی تست از قرنطینه خارج شوید.
          </div>`
        },
        {
          question: "۱- آیا نیاز است من تست کرونا بدهم؟",
          answer: `در صورتی که بر اساس علائم ذکر شده حس می کنید که ممکن است به کرونا مبتلا شده باشید به دلایل زیر تست دادن فکر خوبی است:
          <div>
            * تشخیص به موقع کرونا به درمان و گذر سریعتر از این بیماری کمک می کند.
          </div>
          <div>
            * با اطمینان از ابتلای خود، می توانید خود را قرنطینه کنید و از ابتلای افراد آسیب پذیر خانواده و دوستان جلوگیری کنید.
          </div>
          <div>
            * در صورتی که بیماری را پشت سر گذاشته باشید می توانید با توجه به نتیجه ی تست از قرنطینه خارج شوید.
          </div>`
        },
        {
          question: "۱- آیا نیاز است من تست کرونا بدهم؟",
          answer: `در صورتی که بر اساس علائم ذکر شده حس می کنید که ممکن است به کرونا مبتلا شده باشید به دلایل زیر تست دادن فکر خوبی است:
          <div>
            * تشخیص به موقع کرونا به درمان و گذر سریعتر از این بیماری کمک می کند.
          </div>
          <div>
            * با اطمینان از ابتلای خود، می توانید خود را قرنطینه کنید و از ابتلای افراد آسیب پذیر خانواده و دوستان جلوگیری کنید.
          </div>
          <div>
            * در صورتی که بیماری را پشت سر گذاشته باشید می توانید با توجه به نتیجه ی تست از قرنطینه خارج شوید.
          </div>`
        },
        {
          question: "۱- آیا نیاز است من تست کرونا بدهم؟",
          answer: `در صورتی که بر اساس علائم ذکر شده حس می کنید که ممکن است به کرونا مبتلا شده باشید به دلایل زیر تست دادن فکر خوبی است:
          <div>
            * تشخیص به موقع کرونا به درمان و گذر سریعتر از این بیماری کمک می کند.
          </div>
          <div>
            * با اطمینان از ابتلای خود، می توانید خود را قرنطینه کنید و از ابتلای افراد آسیب پذیر خانواده و دوستان جلوگیری کنید.
          </div>
          <div>
            * در صورتی که بیماری را پشت سر گذاشته باشید می توانید با توجه به نتیجه ی تست از قرنطینه خارج شوید.
          </div>`
        },
        {
          question: "۱- آیا نیاز است من تست کرونا بدهم؟",
          answer: `در صورتی که بر اساس علائم ذکر شده حس می کنید که ممکن است به کرونا مبتلا شده باشید به دلایل زیر تست دادن فکر خوبی است:
          <div>
            * تشخیص به موقع کرونا به درمان و گذر سریعتر از این بیماری کمک می کند.
          </div>
          <div>
            * با اطمینان از ابتلای خود، می توانید خود را قرنطینه کنید و از ابتلای افراد آسیب پذیر خانواده و دوستان جلوگیری کنید.
          </div>
          <div>
            * در صورتی که بیماری را پشت سر گذاشته باشید می توانید با توجه به نتیجه ی تست از قرنطینه خارج شوید.
          </div>`
        },
        {
          question: "۱- آیا نیاز است من تست کرونا بدهم؟",
          answer: `در صورتی که بر اساس علائم ذکر شده حس می کنید که ممکن است به کرونا مبتلا شده باشید به دلایل زیر تست دادن فکر خوبی است:
          <div>
            * تشخیص به موقع کرونا به درمان و گذر سریعتر از این بیماری کمک می کند.
          </div>
          <div>
            * با اطمینان از ابتلای خود، می توانید خود را قرنطینه کنید و از ابتلای افراد آسیب پذیر خانواده و دوستان جلوگیری کنید.
          </div>
          <div>
            * در صورتی که بیماری را پشت سر گذاشته باشید می توانید با توجه به نتیجه ی تست از قرنطینه خارج شوید.
          </div>`
        }
      ]
    };
  }
};
</script>