<style lang="scss">
.dialog-notification {
  padding: 1rem;
}
</style>

<template>
  <section>
    <patient-intro />
    <patient-benefits />
    <patient-procedure />
    <patient-doctors />
    <patient-register />
    <patient-charge />
    <blog />
    <patient-telegram />
    <patient-download />
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
    PatientDownload
  },
  data() {
    return {
      dialog: true
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
