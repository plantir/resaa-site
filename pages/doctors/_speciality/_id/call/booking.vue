<style lang="scss" scoped>
.price {
  color: #28db9a;
}
.top-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  @include media(sm) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .payment-status {
    color: #848484;
    font-size: 18px;
    font-weight: 500;
    margin-top: 26px;
    margin-bottom: 8px;
    @include media(sm) {
      margin-top: 0;
      margin-bottom: 16px;
    }
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
    &.deactive {
      img {
        filter: grayscale(0.8);
      }
    }
  }
}

.bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include media(sm) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
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
              <span v-if="status == 'fail'">پرداخت ناموفق</span>
              <span v-if="status == 'success'">پرداخت موفق</span>
              <span v-if="status == 'continue'">
                <span v-if="doctor.currentlyAvailable">تماس با پزشک</span>
                <span v-else>ثبت درخواست تماس با پزشک</span>
              </span>
            </div>
            <div v-if="status == 'success'" class="amount">
              <span>حساب شما</span>
              <span class="price">{{ charge.amount | currency | persianDigit }} تومان</span>
              <span>شارژ شد.</span>
            </div>
            <div v-if="status !== 'continue'" class="trackingNumber">
              <span>کد پیگیری: {{ charge.trackingNumber | persianDigit }}</span>
            </div>
          </div>
          <div class="image" :class="{ deactive: !doctor.currentlyAvailable }">
            <div class="status">
              <component :is="doctor.currentlyAvailable ? 'Available' : 'NotAvailable'"></component>
            </div>
            <img
              v-if="doctor.imagePath"
              :src="'https://webapi.resaa.net/' + doctor.imagePath"
              :alt="
                `تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`
              "
            />
            <img
              v-else
              src="/img/doc-placeholder.png"
              :alt="
                `تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`
              "
            />
          </div>
        </div>
        <div class="bottom-section">
          <div>
            <div v-if="status == 'fail'">
              <p>عملیات پرداخت ناموفق بود.</p>
              <p>
                در صورتی که مبلغی از حساب شما کسر شده باشد، حداکثر تا ۷۲ ساعت به
                حساب بانکی شما واریز می گردد. در صورت تکرار این مشکل با پشتیبانی
                تماس بگیرید.
              </p>
            </div>
            <div v-else>
              <p>
                <span>اعتبار فعلی حساب شما</span>
                <span class="price">{{ credit | currency | persianDigit }} تومان</span>
                <span>است.</span>
              </p>
              <p>
                <span>شما می توانید</span>
                <span
                  v-if="doctor.pricePerMinute != 0"
                  class="price"
                >{{ duration | persianDigit }} دقیقه</span>
                <span>
                  با {{ doctor.title }} {{ doctor.firstName }}
                  {{ doctor.lastName }} (کد رسا:
                  {{ doctor.subscriberNumber | persianDigit }}) صحبت کنید.
                </span>
              </p>
            </div>
          </div>
          <v-btn
            v-if="status == 'fail'"
            round
            depressed
            dark
            class="retry-btn"
            to="charge"
          >تلاش مجدد</v-btn>
          <v-btn
            round
            depressed
            dark
            @click="reserveDoctor"
            :href="'tel:02174471402'"
            v-else-if="$device.isMobile"
          >
            <span v-if="!doctor.currentlyAvailable">ثبت درخواست تماس</span>
            <span v-else>تماس با پزشک</span>
          </v-btn>
          <v-btn v-else round depressed dark class="retry-btn" @click="reserveDoctor">
            <span v-if="!doctor.currentlyAvailable">ثبت درخواست تماس</span>
            <span v-else>تماس با پزشک</span>
          </v-btn>
        </div>
      </div>
    </div>
    <div v-if="status == 'fail'" class="card notify">
      <div>
        <Tellphone />
        <div>
          <p>
            پشتیبانی رسا تا برقراری تماس موفق در کنار شماست. شماره پشتیبانی
            ۰۲۱۷۴۴۷۱۳۰۰
          </p>
        </div>
      </div>
    </div>
    <div v-else-if="!doctor.currentlyAvailable" class="card notify">
      <div>
        <img src="~assets/img/lamp@2x.png" alt />
        <div>
          <p>
            کافیست دکمه ثبت درخواست تماس را بفشارید و با موبایل خود با شماره
            ۰۲۱۷۴۴۷۱۴۰۲ تماس بگیرید. پس از پخش شدن صدای گویا عدد یک را وارد
            کنید.
          </p>
          <p>
            پزشک نهایتا در اولین ساعت پاسخگویی خود با شماره موبایلی که در سامانه
            ثبت کرده‌اید تماس می‌گیرد. هزینه مکالمه به صورت دقیقه ای از اعتبار
            شما کسر می‌گردد.
          </p>
          <p>
            پزشک با شماره ۰۲۱۷۴۴۷۱۱۱۱ با شما تماس می‌گیرد. در صورت عدم پاسخگویی
            شما مبلغی از حساب شما کسر نمی‌گردد.
          </p>
        </div>
      </div>
    </div>
    <template v-else>
      <div class="card notify hide-md">
        <div>
          <img src="~assets/img/booking_website@2x.png" />دکمه تماس با پزشک را
          بفشارید و با موبایل خود با شماره ۰۲۱۷۴۴۷۱۴۰۲ تماس بگیرید.
        </div>
        <div>
          <img src="~assets/img/booking_telephone@2x.png" />برای تماس با تلفن
          ثابت یا هر خطی بجز موبایلتان با شماره ۰۲۱۷۴۴۷۱۱۱۱ تماس بگیرید و کد
          کاربری و رمز عبوری که برای شما پیامک شده است، را وارد کنید. سپس کد
          رسای پزشک را وارد کنید تا تماس شما با پزشک بر قرار شود.
        </div>
      </div>
      <div class="card notify hide-md-and-up">
        <div>
          <img src="~assets/img/booking_phone@2x.png" />دکمه تماس با پزشک را
          بفشارید و با شماره سامانه رسا که روی صفحه موبایلتان ظاهر می شود تماس
          بگیرید. تماس شما به صورت خودکار با پزشک برقرار می شود
        </div>
        <div>
          <img src="~assets/img/booking_telephone@2x.png" />برای تماس با تلفن
          ثابت یا هر خطی بجز موبایلتان با شماره ۰۲۱۷۴۴۷۱۱۱۱ تماس بگیرید و کد
          کاربری و رمز عبوری که برای شما پیامک شده است، را وارد کنید. سپس کد
          رسای پزشک را وارد کنید تا تماس شما با پزشک بر قرار شود.
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import doctors from "@/components/doctor_detail/doctors.json";
import Available from "@/assets/svg/Available.svg?inline";
import NotAvailable from "@/assets/svg/NotAvailable.svg?inline";

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
      try {
        let { result } = await this.$axios.$get(
          `/Doctors/${this.$route.params.id}/profile`
        );
        this.doctor = result.doctor;
      } catch (error) {}
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
      let booking_status;
      try {
        let res = await this.$axios.post(
          `/Doctors/${this.$route.params.id}/CommunicationBooking?patientPhoneNumber=${this.user.phoneNumber}`
        );
        this.$dialog
          .message(
            `هم اکنون با شماره<span style="direction: ltr;display: inline-block;margin: 0 8px;font-weight: bold;color: #555;"> 021-74471402 </span>تماس بگیرید.<br/>
            در صورتی که ساعت پاسخگویی پزشک نباشد با شماره گیری عدد 1 درخواست تماس پزشک با شما ثبت می شود و پزشک در اولین فرصت با شماره 74471111 با شما تماس میگیرد.`
          )
          .success()
          .icon("phone_in_talk")
          .alert();
        booking_status = true;
        this.ajaxLoading = false;
      } catch (error) {
        this.$dialog
          .message("رزرو پزشک با مشکل مواجه شد")
          .error()
          .alert();
        this.ajaxLoading = false;
        booking_status = false;
      }
      let data = {
        booking_status,
        user: this.user,
        doctor: this.doctor
      };
      this.$gtm.push({ event: "final_booking_btn_click", ...data });
    }
  },
  computed: {
    user_id() {
      return this.$store.state.patient.user_id;
    }
  }
};
</script>
