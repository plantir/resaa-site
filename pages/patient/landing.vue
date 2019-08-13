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
      title: "ارتباط تلفنی و مستقیم با پزشک",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "با عضویت در سامانه رسا می توانید با پزشکان رسا ارتباط تلفنی مستقیم داشته باشید و در اولین فرصت سوالات خود را از پزشک مورد نظر خود بپرسید."
        },
        {
          hid: "canonical",
          property: "canonical",
          content: `${process.env.SITE_URL}${this.$route.path}`
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
