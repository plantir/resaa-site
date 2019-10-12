<template>
  <section>
    <doctor-intro />
    <doctor-benefits />
    <doctor-procedure />
    <doctor-comments />
    <doctor-download />
  </section>
</template>
<script>
import DoctorIntro from "~/components/doctor/Intro";
import DoctorBenefits from "~/components/doctor/Benefits";
import DoctorProcedure from "~/components/doctor/Procedure";
import DoctorDownload from "~/components/doctor/Download";
import DoctorComments from "~/components/doctor/Comments";

export default {
  components: {
    DoctorIntro,
    DoctorBenefits,
    DoctorProcedure,
    DoctorDownload,
    DoctorComments
  },
  head() {
    return {
      title: "چگونه بیماران می توانند خارج از مطب با من در ارتباط باشند؟",
      link: [
        { rel: "canonical", href: `${process.env.SITE_URL}${this.$route.path}` }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "با استفاده از رسا تماس های غیر ضروری خود از سمت بیماران را حذف کنید و مکالمات غیر مربوط به روند درمانی را کاهش دهید"
        }
      ]
    };
  }
};
</script>
