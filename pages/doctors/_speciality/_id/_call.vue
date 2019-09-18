<style lang="scss" >
#call-doctor {
  h1 {
    text-align: center;
    color: #7e7e7e;
    font-weight: 500;
    margin-bottom: 40px;
    font-size: 18px;
    @include media(sm) {
      margin-bottom: 16px;
    }
  }
  .card {
    border-radius: 30px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -2px 5px rgba(0, 0, 0, 0.1);
    margin: 30px 0;
    padding: 30px 60px;
    background: #fff;
    @include media(sm) {
      padding: 30px;
    }
  }
  .steper {
    height: 140px;
    padding: 0 40px;
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 30px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -2px 5px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    background: #fff;
    @include media(sm) {
      padding: 0 10px;
      height: 80px;
      border-radius: 12px;
    }
    .step {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 24px;
      position: relative;
      @include media(sm) {
        padding: 6px;
      }
      .step-icon {
        width: 40px;
        height: 40px;
        background-color: #a3a3a3;
        border-radius: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        font-size: 18px;
        span {
          display: flex;
        }
        @include media(sm) {
          width: 25px;
          height: 25px;
          font-size: 16px;
          .v-icon {
            font-size: 18px;
          }
        }
      }
      .step-label {
        font-size: 14px;
        font-weight: 500;
        color: #8d8d8d;
        @include media(sm) {
          font-size: 11px;
        }
      }
      &.active {
        .step-icon {
          background-color: #0ec7e6;
          .v-icon {
            color: #fff;
          }
        }
      }
      &.completed {
        .step-icon {
          background-color: #28db9a;
          .v-icon {
            color: #fff;
          }
        }
      }
    }
    .circle {
      display: inline-block;
      width: 10px;
      height: 10px;
      background: #fff;
      border-radius: 100%;
      @include media(sm) {
        width: 6px;
        height: 6px;
      }
    }
    .step-divider {
      align-self: center;
      flex: 1 1 0px;
      height: 4px;
      background-color: #a3a3a3;
      border-radius: 100px;
      margin: -26px -26px 0;
      @include media(sm) {
        margin: -26px -20px 0;
        height: 1px;
      }
      &.completed {
        background-color: #28db9a;
      }
    }
  }
  .notify {
    max-width: 800px;
    margin: 0 auto !important;
    font-size: 14px;
    font-weight: normal;
    color: #7e7e7e;
    @include media(sm) {
      padding: 20px;
    }
    > div {
      display: flex;
      align-items: center;
      + div {
        margin-top: 24px;
      }
    }
    svg {
      width: auto;
      height: auto;
      max-width: 40px;
      min-width: 40px;
      margin-left: 50px;
      @include media(sm) {
        margin-left: 20px;
      }
    }
  }
}
</style>

<template>
  <v-container grid-list-xs>
    <section id="call-doctor">
      <div class="steper">
        <div class="step completed">
          <div class="step-icon">
            <span>
              <v-icon>check</v-icon>
            </span>
          </div>
          <div class="step-label">انتخاب پزشک</div>
        </div>
        <div class="step-divider completed"></div>
        <div class="step" :class="{completed:step>2,active:step == 2}">
          <div class="step-icon">
            <span v-if="step == 2">
              <i class="circle"></i>
            </span>
            <span v-else-if="step>2">
              <v-icon>check</v-icon>
            </span>
            <span v-else>۲</span>
          </div>
          <div class="step-label">عضویت / ورود</div>
        </div>
        <div class="step-divider" :class="{completed:step>2}"></div>
        <div class="step" :class="{completed:step>3,active:step == 3}">
          <div class="step-icon">
            <span v-if="step == 3">
              <i class="circle"></i>
            </span>
            <span v-else-if="step>3">
              <v-icon>check</v-icon>
            </span>
            <span v-else>۳</span>
          </div>
          <div class="step-label">افزایش اعتبار</div>
        </div>
        <div class="step-divider" :class="{completed:step>3}"></div>
        <div class="step" :class="{active:step == 4}">
          <div class="step-icon">
            <span v-if="step == 4">
              <i class="circle"></i>
            </span>
            <span v-else>۴</span>
          </div>
          <div class="step-label">تماس با پزشک</div>
        </div>
      </div>
      <nuxt-child :key="$route.name"></nuxt-child>
    </section>
  </v-container>
</template>

<script>
export default {
  computed: {
    step() {
      if (this.$route.name.includes("register")) {
        return 2;
      }
      if (this.$route.name.includes("charge")) {
        return 3;
      }
      if (
        this.$route.name.includes("booking") ||
        this.$route.name.includes("callback")
      ) {
        return 4;
      }
    }
  }
};
</script>