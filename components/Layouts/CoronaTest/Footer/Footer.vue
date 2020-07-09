<style lang="scss" scoped>
.footer-bottom {
  background: #3b4753;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #a5abb6;
    margin: 0;
  }
}
</style>

<template>
  <section>
    <div class="footer-bottom">
      <p>
        کلیه حقوق مادی و معنوی این سایت به شرکت رسالت سلامت ایرانیان (برگ های سبز و نقره ای سابق) تعلق
        دارد &copy; {{year | persianDigit}}
      </p>
    </div>
  </section>
</template>

<script>
import moment from "moment-jalaali";

export default {
  computed: {
    year() {
      return moment().jYear();
    }
  }
};
</script>
