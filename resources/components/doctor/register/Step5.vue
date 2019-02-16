<template>
  <div class="step-container">
    <div class="step-info">مرحله ۵ - تعیین زمان دریافت کارت ویزیت، استند و پوستر</div>
    <div class="row">
      <div class="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 col-xs-12 col-sm-12">
        <div class="step-time-table-container">
          <div class="step-time-table-header">زمان تقریبی تحویل مرسوله</div>
          <div class="step-table-days">
            <div class="step-table-day">
              <div class="day-date-container">
                <div class="day-name">دوشنبه</div>
                <div class="day-date">۱۲ شهریور ۱۳۹۶</div>
              </div>
              <div :class="[{'selected': selectedSlot === 1},'day-slot']" @click="selectDaySlot(1)">
                <div class="slot-selector">
                  <i v-if="selectedSlot === 1" class="fa fa-check"></i>
                </div>
                <div class="slot-time">ساعت ۱۳-۸</div>
              </div>
              <div :class="[{'selected': selectedSlot === 2},'day-slot']" @click="selectDaySlot(2)">
                <div class="slot-selector">
                  <i v-if="selectedSlot === 2" class="fa fa-check"></i>
                </div>
                <div class="slot-time">ساعت ۱۹-۱۳</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedSlot: -1
    };
  },
  methods: {
    selectDaySlot: function(slot) {
      this.selectedSlot = slot;
    }
  }
};
</script>

<style lang="scss" scoped>
.step-info {
  font-weight: 500;
  color: $dark-blue-grey;
  margin-bottom: 70px;
}

.step-time-table-header {
  background-color: white;
  border: solid 3px #f2f2f2;
  border-bottom: none;
  color: #a9a9c7;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 1.2rem;
  border-radius: 10px 10px 0 0;
}

.step-table-days {
  border-radius: 0 0 10px 10px;
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.step-table-day {
  cursor: pointer;
  margin-bottom: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 7.5px;
  box-shadow: 0 2.5px 5px 0 rgba(0, 0, 0, 0.05);
  // height: 60px;

  &:last-child {
    margin-bottom: 0;
  }
}

.day-date-container {
  text-align: right;
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  border-left: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
}

.day-name {
  color: #44436c;
}

.day-date {
  color: #777590;
}

.day-slot {
  user-select: none;
  cursor: pointer;
  width: 40%;
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 10px;
  border-left: 1px solid #ebebeb;

  &.selected {
    background-color: #f1fdff;

    .slot-selector {
      background-color: $bright-sky-blue;
    }
  }

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #f1fdff;
  }
}

.slot-selector {
  width: 16px;
  height: 16px;
  background-color: #f2f2f2;
  border-radius: 50%;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .fa {
    color: white;
  }
}
</style>
