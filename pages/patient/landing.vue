<style lang="scss">
.dialog-notification {
  padding: 1rem;
}
</style>

<template>
  <section>
    <patient-intro/>
    <patient-benefits/>
    <patient-procedure/>
    <patient-doctors/>
    <patient-register/>
    <patient-charge/>
    <patient-telegram/>
    <patient-download/>
    <!-- <v-dialog v-model="dialog" max-width="500px" transition="dialog-transition">
      <v-card class="dialog-notification">
        با سلام و عرض ادب
        متاسفانه به خاطر مشکلات مرکز مخابراتی امروز خطوط سامانه رسا دچار مشکلاتی می باشد. ضمن پوزش از مشکلات به وجود آمده خواهشمند است با شکیبایی خود ما را در حل این مشکل یاری نمایید. متخصصین رسا در حال تعامل مداوم با مخابرات برای حل مشکل پیش آمده می باشند.
        در صورت وجود مورد خیلی ضروری می توانید از طریق آی دی تلگرام @gsleaves آن را با ما در میان بگذارید.
        با تشکر و احترام، سامانه رسا
        <v-btn dark color="info" @click="dialog=false">متوجه شدم</v-btn>
      </v-card>
    </v-dialog>-->
  </section>
</template>

<script>
import PatientIntro from "~/components/patient/Intro/Intro";
import PatientRegister from "~/components/patient/Register/Register";
import PatientProcedure from "~/components/patient/Procedure/Procedure";
import PatientDoctors from "~/components/patient/Doctors/Doctors";
import PatientBenefits from "~/components/patient/Benefits/Benefits";
import PatientCharge from "~/components/patient/Charge/Charge";
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
