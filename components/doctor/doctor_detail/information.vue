<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
  .information {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 100px 60px;
    flex-direction: column;
    justify-content: space-between;

    @include media(sm) {
      padding: 40px 10px;
    }
    .doctor-information-Knowledge {
      > div {
        margin-bottom: 30px;
        @include media(sm) {
          margin-bottom: 30px;
          text-align: center;
        }
      }
      .part2 {
        > div {
          display: flex;
          align-items: center;
          color: #a3a3a3;
          @include media(sm) {
            flex-direction: column;
            .year {
              display: block !important;
              margin: 0;
            }
          }
          h4 {
            margin-left: 15px;
            font-weight: 500;
            font-size: 1.7rem;
            @include media(sm) {
              margin-left: 0;
              margin-bottom: 15px;
            }
          }
          .documents {
            display: flex;
            flex-direction: column;
            span {
              margin: 0 6px;
            }
            div * {
              display: inline;
              font-size: 1.2rem;
            }
          }
        }
      }
    }
    .doctor-information-Certificates {
      @include media(sm) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      div {
        color: #a3a3a3;
        margin: 20px 0;
        font-size: 1.2rem;
        @include media(sm) {
          margin: 10px 0;
        }
      }
    }
    .doctor-information-history {
      @include media(sm) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      div {
        margin: 20px 0;
        font-size: 1.2rem;
        color: #a3a3a3;
        @include media(sm) {
          margin: 10px 0;
          .mobile-block {
            display: block;
            text-align: center;
            font-size: 16px;
            color: #a3a3a3;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="information">
      <div class="doctor-information-Knowledge">
        <div class="part1">
          <!-- <img src="~assets/img/doctorKnowledge.png" alt> -->
          <doctorKnowledgeIcon class="svg-icon-blue-green" width="45px" />
        </div>
        <div class="part2">
          <div>
            <h4>تحصیلات آکادمیک</h4>
            <div class="documents">
              <div>
                <p class="year">1383 - 1387</p>
                <span>/</span>
                <p class="Evidence">کارشناسی</p>
                <span>/</span>
                <p class="place">دانشگاه علامه طباطبایی</p>
              </div>
              <div>
                <p class="year">1387 - 1389</p>
                <span>/</span>
                <p class="Evidence">کارشناسی ارشد</p>
                <span>/</span>
                <p class="place">دانشگاه تربیت مدرس تهران</p>
              </div>
            </div>
          </div>
        </div>
        <div class="part2">
          <div>
            <h4>گواهینامه های علمی</h4>
            <div class="documents">
              <div>
                <p class="place">پروانه اشتغال تخصصی</p>
              </div>
              <div>
                <p class="place">پروانه نظام پزشکی</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="doctor-information-Certificates">
        <div>
          <!-- <img src="~assets/img/doctorCertificates.png" alt> -->
          <doctorCertificatesIcon class="svg-icon-blue-green" width="45px" />
        </div>
        <div>دارای فلوشیپ تخصصی روانشناسی بالینی</div>
        <div>دارای بورد تخصصی روانشناسی</div>
        <div>عضو هیئت علمی دانشگاه علوم پزشکی بقیه الله</div>
      </div>
      <div class="doctor-information-history">
        <div>
          <!-- <img src="~assets/img/doctorhistory.png" alt> -->
          <physicianIcon class="svg-icon-blue-green" width="45px" />
        </div>
        <div>
          <span class="mobile-block">1390 تا کنون</span>- بیمارستان بقیه الله
        </div>
        <div>شروع طبابیت : از سال 1386</div>
      </div>
    </div>
  </section>
</template>
<script>
import physicianIcon from "@/assets/img/physician.svg";
import doctorCertificatesIcon from "@/assets/img/doctorCertificates.svg";
import doctorKnowledgeIcon from "@/assets/img/doctorKnowledge.svg";
export default {
  components: {
    physicianIcon,
    doctorCertificatesIcon,
    doctorKnowledgeIcon
  }
};
</script>
