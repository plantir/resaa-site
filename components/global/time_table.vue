<style lang="scss" scoped>
section {
  direction: ltr;
  position: relative;
  width: 100%;
  height: 400px;
  padding-left: 100px;
}
.days {
  width: 100px;
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 50px;
  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefee;
    color: #374452;
    font-weight: bold;
    border-bottom: 1px solid #fff;
    &.selected {
      border-right: 4px solid $red;
    }
  }
}
.hours {
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  padding: 0 50px;
  top: 0px;
  height: 50px;
  align-items: center;
  border: 1px solid #efefef;
  border-bottom: none;
  div {
    flex: 0 0 100px;
    text-align: center;
    &:last-child {
      text-indent: -99999px;
    }
  }
}
.table-wraper {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  > div {
    min-width: 2400px;
    position: relative;
    padding-top: 50px;
  }
  .event {
    position: absolute;
    height: 50px;
    background: lightblue;
    width: 100px;
    top: 50px;
    left: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.175rem;
    font-weight: bold;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    .sep {
      margin: 0 8px;
    }
  }
}
.selected-time {
  position: absolute;
  width: 4px;
  background: $red;
  height: 100%;
  z-index: 9;
  &:before {
    content: "";
    width: 0;
    position: absolute;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #f44336;
    left: -6px;
    top: 0;
  }
  &:after {
    content: "";
    width: 0;
    position: absolute;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #f44336;
    left: -6px;
    bottom: 0;
  }
}
table {
  width: 100%;
  th,
  td {
    height: 50px;
    width: 100px;
    text-align: center;
  }
  th {
    border-top: 1px solid #efefef;
    &:first-child {
      border-left: 1px solid #efefef;
    }
    &:last-child {
      border-right: 1px solid #efefef;
    }
  }
  td {
    border: 1px solid #efefef;
  }
}
</style>
<template>
  <section>
    <div class="days">
      <div :class="{selected:date===6}">
        <span>شنبه</span>
      </div>
      <div :class="{selected:date===0}">
        <span>یکشنبه</span>
      </div>
      <div :class="{selected:date===1}">
        <span>دوشنبه</span>
      </div>
      <div :class="{selected:date===2}">
        <span>سه‌شنبه</span>
      </div>
      <div :class="{selected:date===3}">
        <span>چهارشنبه</span>
      </div>
      <div :class="{selected:date===4}">
        <span>پنجشنبه</span>
      </div>
      <div :class="{selected:date===5}">
        <span>جمعه</span>
      </div>
    </div>

    <div ref="timeTable" class="table-wraper">
      <div>
        <div class="selected-time" :style="'left:'+time+'px'"></div>
        <div class="event" v-for="(event,index) in events" :style="event.style" :key="index">
          <span>{{event.start}}</span>
          <span class="sep">-</span>
          <span>{{event.end}}</span>
        </div>
        <div class="hours">
          <div v-for="(h,index) in hours" :key="index">{{h}}</div>
        </div>
        <table cellspacing="0" cellpadding="0">
          <!-- <tr>
            <th ></th>
          </tr>-->
          <tr>
            <td v-for="(h,index) in hours" :key="index"></td>
          </tr>
          <tr>
            <td v-for="(h,index) in hours" :key="index"></td>
          </tr>
          <tr>
            <td v-for="(h,index) in hours" :key="index"></td>
          </tr>
          <tr>
            <td v-for="(h,index) in hours" :key="index"></td>
          </tr>
          <tr>
            <td v-for="(h,index) in hours" :key="index"></td>
          </tr>
          <tr>
            <td v-for="(h,index) in hours" :key="index"></td>
          </tr>
          <tr>
            <td v-for="(h,index) in hours" :key="index"></td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
import hours from "./hours";
export default {
  props: ["segments"],
  data() {
    return {
      hours,
      events: [],
      date: null,
      time: null
    };
  },
  created() {
    this.date = new Date().getDay();
    this.time = (new Date().getHours() + new Date().getMinutes() / 60) * 100;
    for (const item of this.segments) {
      let start_time_hour = Math.floor((item.from / 60) % 24);
      let end_time_hour = Math.floor((item.to / 60) % 24);
      let start_time_minute = Math.round(((item.from / 60) % 1) * 60);
      let end_time_minute = Math.round(((item.to / 60) % 1) * 60);
      const top = (Math.floor(item.from / 60 / 24) + 1) * 50 + "px";
      const left =
        start_time_hour * 100 + (start_time_minute / 60) * 100 + "px";
      const width = ((item.to - item.from) / 60) * 100 + "px";
      if (start_time_minute < 10) {
        start_time_minute = `0${start_time_minute}`;
      }
      if (end_time_minute < 10) {
        end_time_minute = `0${end_time_minute}`;
      }
      if (start_time_hour < 10) {
        start_time_hour = `0${start_time_hour}`;
      }
      if (end_time_hour < 10) {
        end_time_hour = `0${end_time_hour}`;
      }
      const event = {
        style: `top:${top};left:${left};width:${width}`,
        start: `${start_time_hour}:${start_time_minute}`,
        end: `${end_time_hour}:${end_time_minute}`
      };
      this.events.push(event);
    }
  },
  mounted() {
    if (this.$refs.timeTable) {
      let width = this.$refs.timeTable.clientWidth;
      this.$refs.timeTable.scrollLeft = this.time - width / 2;
    }
  }
};
</script>
