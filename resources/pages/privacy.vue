<template>
  <v-container>
    <div class="privacy-container">
      <div
        class="section-description"
      >سامانه رسا متعلق به شرکت برگ های سبز و نقره ای بوده و تمامی حقوق مادی و معنوی رسا متعلق به این شرکت است.</div>
      <div class="sub-section-title">حریم خصوصی</div>
      <div class="section-description">
        حفظ حریم خصوصی یکی از مهم ترین ارزش های موجود برای شرکت برگ های سبز و نقره ای است به گونه ای که یکی از مهم ترین ارزش های ارائه شده توسط سامانه رسا، مخفی بودن شماره تماس تماس شخصی پزشکان از بیماران و بالعکس است.
        شما پس از برقراری اولین تماس توسط سامانه رسا، به عنوان کاربر رسا شناخته شده و کلیه اطلاعات مرتبط با استفاده از سامانه در اختیار رسا قرار خواهد گرفت.
        <br>این اطلاعات شامل موارد زیر است:
      </div>
      <ul>
        <li>اطلاعاتی که کاربر مستقیما به رسا می دهد:</li>
        <div
          class="section-description"
        >این اطلاعات شامل شماره موبایل فرد است. این شماره معرف شخص حقوقی استفاده کننده از رسا است.</div>
        <li>اطلاعاتی که رسا در راستای استفاده از سامانه توسط کاربر به آن دسترسی پیدا می کند:</li>
        <div
          class="section-description"
        >این اطلاعات شامل پزشک های مورد تماس، اطلاعات پرداخت و ساعات تماس می باشد.
          <br>تماس های پشتیبانی جهت ارائه خدمات بهتر و بازبینی فرایند ضبط خواهند شد.
          <br>شایان ذکر است که مکالمات و تماس های کاربران با پزشکان، کاملا محرمانه و خصوصی بوده و ضبط نشده و توسط شخص ثالث نیز شنود نخواهد شد.
          <br>از طرفی رسا مانند تمام وبسایت ها، از کوکی ها و ابزار های جمع آوری IP استفاده می کند و اطلاعات مربوط به دستگاه و شبکه اینترنت و اطلاعات مشابه در اختیار و مورد استفاده رسا قرار خواهد گرفت.
          <br>کامنت ها و نظرات و امتیازات ثبت شده توسط کاربران نیز از جمله اطلاعاتی است که در اختیار رسا قرار خواهد گرفت.
        </div>
      </ul>
      <div class="sub-section-title">استفاده از اطلاعات:</div>
      <div
        class="section-description"
      >شرکت برگ های سبز و نقره ای دسترسی کارمندان خود به اطلاعات را محدود نموده و هر فرد بنا بر مسئولیت خود به میزان مورد نیاز به اطلاعات دسترسی خواهد داشت.
        <br>اطلاعات ثبت شده توسط سامانه رسا جهت ارائه، نگهداری و بهبود خدمات مورد استفاده قرار خواهد گرفت.
        <br>همچنین این اطلاعات جهت برقراری ارتباط بهینه بین پزشک و کاربر و جهت اطلاع رسانی، کنترل کیفی، بررسی مشکلات و شکایات و موارد مرتبط مورد استفاده قرار خواهند گرفت.
        <br>سامانه رسا از اطلاعات جمع آوری شده برای شخصی سازی سرویس های خود و ارائه بهترین خدمات به صورت فرد به فرد استفاده خواهد کرد.
        <br>رسا ممکن است نقد ها و نظر های ارسالی کاربران را در راستای رعایت قوانین شرکت برگ های سبز و نقره ای ویرایش کند. کاربران ضمن استفاده از امکانات این سامانه، حق ویرایش اطلاعات و استفاده از آن ها را در چهارچوب فوق الذکر به رسا اعطا نموده و حق اعتراض را از خود سلب می کنند. رسا ملزم است در صورت ویرایش نقد ها و نظر ها عبارت ویرایش شده توسط رسا را ذکر کند.
      </div>
      <div
        class="section-description"
      >بدیهی است حفظ، نگهداری و حفاظت از اطلاعات به عهده رسا بوده و این اطلاعات در اختیار غیر قرار داده نخواهد شد، مگر به دستور مقام قضایی.</div>
      <!-- <div class="panel-group">
        <div class="panel panel-default" v-for="(item,i) in privacy" :key="i">
          <div class="panel-heading" @click="item.collapse = !item.collapse">
            <h4 class="panel-title">{{item.title}}</h4>
          </div>
          <b-collapse :id="'collapse-'+i" v-model="item.collapse">
            <div v-html="item.html"></div>
          </b-collapse>
        </div>
      </div>-->
      <v-expansion-panel popout>
        <v-expansion-panel-content v-for="(item,i) in privacy" :key="i">
          <div slot="header">{{item.title}}</div>
          <v-card>
            <v-card-text v-html="item.html"></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "قوانین رسا درمورد حریم خصوصی و استفاده از اطلاعات",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "یکی از مهمترین ارزش‌های ارائه شده توسط سامانه رسا، حفاظت از اطلاعاتی است که کاربر مستقیما به رسا می‌دهد یا رسا طی استفاده کاربر از سامانه توسط کاربر به آن دسترسی می‌یابد"
        }
      ]
    };
  },
  computed: {
    privacy() {
      return this.$store.state.privacy.list;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-heading {
  cursor: pointer;
}
.privacy-container {
  direction: rtl;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
}

.section-title {
  text-align: center;
  color: $tealish;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 30px;
}

.section-description {
  text-align: justify;
  font-size: 1rem;
  margin-bottom: 30px;
  direction: rtl;
  line-height: 1.9;
}

.sub-section-title {
  text-align: right;
  color: $tealish;
  font-size: 1.375rem;
  font-weight: 500;
  margin-bottom: 30px;
}

.last {
  margin-bottom: 0 !important;
}
</style>
