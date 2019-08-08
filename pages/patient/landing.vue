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
      title: "چگونگی ارتباط تلفنی بیمار با پزشک از طریق رِسا",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "با استفاده از رسا تماس های غیر ضروری خود از سمت بیماران را حذف کنید و مکالمات غیر مربوط به روند درمانی را کاهش رایگان ثبت‌نام کنید و با دسترسی به پزشکان معرفی‌شده در وب‌سایت رسا، تماس مستقیم با بهترین پزشکان متخصص را با صرفه‌جویی در وقت و هزینه خود، تجربه کنید"
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
