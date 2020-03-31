<style lang="scss">
.dialog-notification {
  padding: 1rem;
}
</style>

<template>
  <section>
    <patient-intro @openVideo="openVideo" />
    <patient-benefits @openVideo="openVideo" />
    <patient-procedure @openVideo="openVideo" />
    <patient-doctors />
    <patient-register />
    <patient-charge />
    <blog />
    <patient-telegram />
    <!-- <patient-download /> -->
    <PatientVideo v-if="show_video" @closeModal="closeModal"></PatientVideo>
  </section>
</template>

<script>
import PatientIntro from "~/components/patient/Intro/Intro";
import PatientRegister from "~/components/patient/Register/Register";
import PatientProcedure from "~/components/patient/Procedure/Procedure";
import PatientDoctors from "~/components/patient/Doctors/Doctors";
import PatientBenefits from "~/components/patient/Benefits/Benefits";
import PatientCharge from "~/components/patient/Charge/Charge";
import Blog from "~/components/patient/blog";
import PatientTelegram from "~/components/patient/Telegram/Telegram";
import PatientDownload from "~/components/patient/Download/Download";
import PatientVideo from "@/components/patient/video/video";

export default {
  head() {
    return {
      title: "سامانه رسا | مشاوره پزشکی تلفنی با بهترین متخصصین",
      link: [
        { rel: "canonical", href: `${process.env.SITE_URL}${this.$route.path}` }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "سامانه رسا بزرگترین بستر مشاوره پزشکی تلفنی با بهترین متخصصین در ایران. با رسا می تونی با کمترین هزینه و در کوتاه ترین زمان ممکن با پزشک در تماس باشی."
        }
      ]
    };
  },
  components: {
    PatientIntro,
    PatientBenefits,
    PatientProcedure,
    PatientDoctors,
    PatientRegister,
    PatientCharge,
    Blog,
    PatientTelegram,
    PatientDownload,
    PatientVideo
  },
  data() {
    return {
      dialog: true,
      show_video: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    openVideo() {
      this.show_video = true;
    },
    closeModal() {
      this.show_video = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
