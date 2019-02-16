<template>
  <section>
    <doctor-intro/>
    <doctor-benefits/>
    <doctor-procedure/>
    <doctor-comments/>
    <doctor-download/>
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
  }
};
</script>
