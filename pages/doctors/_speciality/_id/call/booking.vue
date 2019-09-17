<style lang="scss" scoped>
.price {
  color: #28db9a;
}
.top-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  .payment-status {
    color: #848484;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  .amount {
    color: #848484;
    font-size: 16px;

    margin-bottom: 8px;
  }
  .trackingNumber {
    color: #848484;
    font-size: 14px;
    margin-bottom: 32px;
  }
  .image {
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 1px solid #d4d4d4;
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .status {
      position: absolute;
      top: 4px;
      right: 12px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 100%;
    }
  }
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    flex: 0 0 60%;
  }
  p {
    margin-bottom: 8px;
    font-size: 16px;
    color: #848484;
  }
  .v-btn {
    min-width: 160px;
    min-height: 46px;
    font-size: 16px;
    background: linear-gradient(to left, #0ec7e6, #28db9a);
    font-weight: 500;
    margin-left: 0;
    .v-icon {
      font-size: 24px;
    }
  }
}
</style>
<template>
  <section>
    <div class="card">
      <no-ssr v-if="ajaxLoading">
        <v-loading mode="relative"></v-loading>
      </no-ssr>
      <div v-else>
        <div class="top-section">
          <div>
            <div class="payment-status">
              <span v-if="status=='fail'">پرداخت ناموفق</span>
              <span v-if="status=='success'">پرداخت موفق</span>
            </div>
            <div v-if="status=='success'" class="amount">
              <span>حساب شما</span>
              <span class="price">{{charge.amount | currency | persianDigit}} تومان</span>
              <span>شارژ شد.</span>
            </div>
            <div v-if="status!=='continue'" class="trackingNumber">
              <span>کد پیگیری: {{charge.trackingNumber | persianDigit}}</span>
            </div>
          </div>
          <div class="image">
            <div class="status">
              <component :is="doctor.currentlyAvailable?'Available':'NotAvailable'"></component>
            </div>
            <img
              v-if="doctor.imagePath"
              :src="'https://webapi.resaa.net/'+doctor.imagePath"
              :alt="`تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`"
            />
            <img
              v-else
              src="/img/doc-placeholder.png"
              :alt="`تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`"
            />
          </div>
        </div>
        <div class="bottom-section">
          <div>
            <div v-if="status ==  'fail'">
              <p>عملیات پرداخت ناموفق بود.</p>
              <p>در صورتی که مبلغی از حساب شما کسر شده باشد، حداکثر تا ۷۲ ساعت به حساب بانکی شما واریز می گردد. در صورت تکرار این مشکل با پشتیبانی تماس بگیرید.</p>
            </div>
            <div v-else>
              <p>
                <span>اعتبار فعلی حساب شما</span>
                <span class="price">{{credit | currency | persianDigit}} تومان</span>
                <span>است.</span>
              </p>
              <p>
                <span>شما می توانید</span>
                <span class="price">{{duration | persianDigit}} دقیقه</span>
                <span>با {{doctor.title}} {{doctor.firstName}} {{doctor.lastName}} (کد رسا: {{doctor.subscriberNumber | persianDigit}}) صحبت کنید.</span>
              </p>
            </div>
          </div>
          <v-btn
            v-if="status ==  'fail'"
            round
            depressed
            dark
            class="retry-btn"
            to="charge"
          >تلاش مجدد</v-btn>
          <v-btn v-else round depressed dark class="retry-btn" @click="reserveDoctor">تماس با پزشک</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import doctors from "@/components/doctor_detail/doctors.js";
import Available from "~/assets/svg/Available.svg?inline";
import NotAvailable from "~/assets/svg/NotAvailable.svg?inline";
export default {
  components: { Available, NotAvailable },
  data() {
    return {
      ajaxLoading: true,
      status: "continue",
      doctor: {},
      user: {},
      charge: {
        trackingNumber: 12345
      },
      duration: 0,
      credit: 0
    };
  },
  async mounted() {
    try {
      let { result } = await this.$axios.$get(
        `/Accounts/${this.user_id}/Profile`
      );
      this.user = result.profile;
      let { credit } = this.user.subscriberCards.find(
        item => item.state == "Active"
      );
      this.credit = credit;
    } catch (error) {}
    try {
      this.doctor = doctors.find(
        item => item.subscriberNumber == this.$route.params.id
      );
      let { result } = await this.$axios.$get(
        `/Doctors/${this.$route.params.id}/CommunicationQuote`
      );
      this.duration = result.quote.duration;
      if (this.$route.query.chargeRequestId) {
        try {
          let { result } = await this.$axios.$get(
            `/Charge/${this.$route.query.chargeRequestId}/Receipt`
          );
          let {
            status,
            trackingNumber,
            chargeDenomination
          } = result.chargeReceipt;
          if (status === "Successful") {
            this.status = "success";
            this.charge.amount = chargeDenomination.amount;
            this.charge.trackingNumber = trackingNumber;
          } else {
            this.status = "fail";
            this.charge.trackingNumber = trackingNumber;
          }
        } catch (error) {}
      }
      this.ajaxLoading = false;
    } catch (error) {
      this.status = "fail";
      this.ajaxLoading = false;
    }
  },
  methods: {
    async reserveDoctor() {
      this.ajaxLoading = true;
      try {
        let res = await this.$axios.post(
          `/Doctors/${this.$route.params.id}/CommunicationBooking?patientPhoneNumber=${this.user.phoneNumber}`
        );
        alert("رزرو پزشک با موفقیت انجام شد");
        this.ajaxLoading = false;
      } catch (error) {
        alert("رزرو پزشک با مشکل مواجه شد");
        this.ajaxLoading = false;
      }
    }
  },
  computed: {
    user_id() {
      return this.$store.state.patient.user_id;
    }
  }
};
</script>