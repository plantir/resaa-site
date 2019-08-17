<style lang="scss" scoped>
section {
  width: 100%;
  height: 100%;
}
.topics {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 100px 80px;
  flex-direction: column;
  align-items: center;
  @include media(md) {
    padding: 100px 40px;
  }
  @include media(sm) {
    padding: 100px 20px;
  }
  .doctor-topic-img {
    width: 190px;
    margin-bottom: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include media(md) {
      width: 160px;
      margin-bottom: 100px;
    }
    @include media(sm) {
      width: 130px;
      margin-bottom: 70px;
    }
    img {
      max-width: 100%;
    }
  }
  .doctor-topic {
    width: 100%;
    + .doctor-topic {
      margin-top: 50px;
    }
    h3 {
      color: #a3a3a3;
      margin-bottom: 22px;
      font-weight: 500;
      @include media(sm) {
        font-weight: 500;
        font-size: 17px;
        line-height: 2;
        text-align: center;
        margin-bottom: 15px;
      }
    }
    ul {
      list-style-type: disc;
      font-size: 20px;
      color: #30d5e3;
      margin-right: 60px;
      @include media(md) {
        margin-right: 30px;
      }
      @include media(sm) {
        margin-right: 15px;
      }
      li {
        color: #a3a3a3;
        display: flex;
        height: 40px;
        align-items: center;
        font-size: 1.125rem;
        &:before {
          position: relative;
          top: 5px;
          margin-left: 10px;
          vertical-align: middle;
          content: "•";
          font-size: 40px;
          padding: 0;
          color: #30d5e2;
        }
        @include media(sm) {
          font-size: 0.975rem;
        }
      }
    }
  }
}
</style>
<template>
  <section>
    <div class="topics">
      <div class="doctor-topic-img">
        <img src="~assets/img/doctorSubjectHeader.png" alt />
      </div>
      <div class="doctor-topic">
        <h3>موضوعاتی که پزشک مایل به پاسخگویی هستند</h3>
        <ul>
          <li>روانشناسی بالینی</li>
          <li>روانشناسی کودکان</li>
        </ul>
      </div>
      <div class="doctor-topic">
        <h3>انجام خدمات تخصصی در مطب</h3>
        <ul>
          <li>تزریق داروهای مرتبط ضدافسردگی</li>
          <li>دوره کنترل هیپوکامپ با دستگاه</li>
        </ul>
      </div>
    </div>
  </section>
</template>
