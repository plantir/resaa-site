<template>
  <div class="step-container">
    <div class="step-info">مرحله ۳ - نمایش اطلاعات کارت ویزیت و استند</div>
    <div class="visit-card-options">
      <div class="section-title">طرح کارت ویزیت را انتخاب کنید:</div>
      <div class="row">
        <div class="col-md-4 col-sm-12"></div>
        <div class="col-md-4 col-sm-12"></div>
        <div class="col-md-4 col-sm-12"></div>
      </div>
    </div>
    <div class="stand-options">
      <div class="section-title">طرح استند را انتخاب کنید:</div>
      <div class="row">
        <div class="col-md-4 col-sm-12"></div>
        <div class="col-md-4 col-sm-12"></div>
        <div class="col-md-4 col-sm-12"></div>
      </div>
    </div>
    <div class="extra-description">
      <div class="section-title">متن توضیح اضافه روی کارت و استند:</div>
      <div class="row">
        <div class="col-md-6 col-xs-12">
          <div class="extra-description-help">به عنوان مثال:
            <br>«توضیح درمورد زمینه فعالیت پزشکی» یا «ساعات پاسخگویی» و...
          </div>
        </div>
        <div class="col-md-6 col-xs-12">
          <input placeholder="متن دلخواه">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.step-info {
  text-align: center;
  margin-bottom: 70px;
  color: $dark-blue-grey;
  font-weight: 500;
}

.section-title {
  direction: rtl;
  text-align: right;
  margin-bottom: 70px;
  color: $dark-blue-grey;
}

.extra-description-help {
  text-align: right;
  direction: rtl;
  margin-bottom: 30px;

  &::before {
    position: relative;
    top: 5px;
    margin-left: 10px;
    vertical-align: middle;
    font-size: 30px;
    content: "•";
    color: $light-gold;
  }
}

.extra-description {
  margin-bottom: 30px;

  input {
    padding: 15px;
    border: none;
    direction: rtl;
    text-align: right;
    width: 100%;
    height: 46px;
    border-radius: 23px;
    background-color: #f5f5f5;
  }
}
</style>
