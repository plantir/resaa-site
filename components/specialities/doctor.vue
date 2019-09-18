<style lang="scss" scoped>
.item {
  border: 1px solid #43e7a5;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  .image {
    border-radius: 100%;
    width: 140px;
    height: 140px;
    border: 1px solid #d4d4d4;
    padding: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    .status {
      position: absolute;
      top: 4px;
      right: 12px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      border-radius: 100%;
    }
    &.deactive {
      img {
        filter: grayscale(0.8);
      }
    }
  }
  .name {
    flex: 1;
    text-align: right;
    margin-right: 20px;
    .doctor-name {
      font-size: 20px;
      color: #969696;
      font-weight: 500;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    .doctor-speciality {
      font-size: 16px;
      color: #9f9f9f;
      font-weight: 500;
      margin-bottom: 20px;
    }
    .doctor-tags {
      font-size: 12px;
      color: #9f9f9f;
      font-weight: 300;
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    font-size: 15px;
    padding: 10px 0;
    .success-call {
      span {
        color: #1ad0c1;
      }
    }
    .price-per-minute {
      color: #1ad0c1;
    }
    .select-btn {
      min-width: 160px;
      min-height: 36px;
      font-size: 13px;
      background: linear-gradient(to left, #0ec7e6, #28db9a);
      font-weight: 500;
    }
  }
}
</style>

<template>
  <section class="item">
    <div class="image" :class="{deactive:!doctor.currentlyAvailable}">
      <div class="status">
        <component :is="doctor.currentlyAvailable?'Available':'NotAvailable'"></component>
      </div>
      <img
        v-if="doctor.imagePath"
        :src="'https://webapi.resaa.net/'+doctor.imagePath"
        :alt="`تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`"
      />
      <img
        v-else
        src="/img/doc-placeholder.png"
        :alt="`تصویر ${doctor.title} ${doctor.firstName} ${doctor.lastName}`"
      />
    </div>
    <div class="name">
      <div class="doctor-name">دکتر پیمان رضایی مرام</div>
      <div class="doctor-speciality">کارشناس ارشد روانشناسی عمومی</div>
      <div class="doctor-tags">
        <span v-for="(tag,index) in doctor.custom_tags.slice(0,3)" :key="tag.id">
          {{tag.title}}
          <template v-if="index != 2">،</template>
        </span>
      </div>
    </div>
    <div class="price">
      <div class="success-call">
        <span>{{500 | persianDigit}}+</span>
        جلسه رضایت بخش
      </div>
      <div>
        <div class="price-per-minute">{{1000 | persianDigit}} تومان / دقیقه</div>
        <v-btn @click="onSubmit" class="select-btn" dark round>
          <span>انتخاب مشاور</span>
        </v-btn>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    doctor: {}
  }
};
</script>