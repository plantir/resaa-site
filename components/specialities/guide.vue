<style lang="scss" scoped>
section {
  border: 2px solid #1ad1c2;
  display: flex;
  align-items: center;
  margin: 20px 0;
  height: 150px;
  border-radius: 30px;
  justify-content: space-between;
  padding: 0 30px;
}
.step {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex: 0 0 200px;
  height: 100%;
  .label {
    position: absolute;
    top: 10px;
    right: 30px;
    width: 25px;
    height: 25px;
    border: 2px solid #43e7a5;
    color: #43e7a5;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
  p {
    color: #9f9f9f;
    font-size: 14px;
    font-weight: normal;
  }
  .image {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-height: 70px;
  }
}

.chevron {
  svg {
    width: 30px;
    height: 30px;
    path {
      fill: #43e7a5;
    }
  }
}
</style>
<template>
  <section>
    <div class="step">
      <div class="label">۱</div>
      <div class="image">
        <img src="~assets/img/doctor.png" />
      </div>
      <p>پزشک خود را از لیست انتخاب کنید</p>
    </div>
    <div class="chevron">
      <chevron />
    </div>
    <div class="step">
      <div class="label">۲</div>
      <div class="image">
        <img src="~assets/img/smartphone.png" />
      </div>
      <p>شماره موبایل خود را وارد کنید</p>
    </div>
    <div class="chevron">
      <chevron />
    </div>
    <div class="step">
      <div class="label">۳</div>
      <div class="image">
        <img src="~assets/img/money.png" />
      </div>
      <p>هزینه مشاوره خود را پرداخت کنید</p>
    </div>
    <div class="chevron">
      <chevron />
    </div>
    <div class="step">
      <div class="label">۴</div>
      <div class="image">
        <img src="~assets/img/call.png" />
      </div>
      <p>با پزشک تماس بگیرید</p>
    </div>
  </section>
</template>
<script>
import chevron from "@/assets/svg/chevron_left.svg?inline";
export default {
  components: {
    chevron
  }
};
</script>