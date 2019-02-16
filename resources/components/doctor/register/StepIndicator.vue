<template>
  <div class="step-indicator-container">
    <div class="step-indicator-pc">
      <div
        v-for="step in numberOfSteps"
        :class="[{'done': step < currentStep, 'doing': step === currentStep}, 'step']"
        :key="step"
      >
        <div class="step-text">{{step | persianDigit}}</div>
        <div class="step-line"></div>
      </div>
    </div>
    <div class="active-step-mobile">
      <div class="doing step">
        <div class="step-line"></div>
        <div class="step-text">{{currentStep | persianDigit}}</div>
        <div class="step-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["numberOfSteps", "currentStep"]
};
</script>

<style lang="scss" scoped>
// @media (max-width: 700px) {
//   .active-step-mobile {
//     display: block !important;

//     .step-line {
//       display: block !important;
//     }
//   }

//   .step-indicator-pc {
//     display: none !important;
//   }
// }

.active-step-mobile {
  display: none;
}

.step-indicator-pc {
  overflow: hidden;
  display: flex;
  justify-content: center;
  margin: 40px 0;
  // min-width: 380px;
}

.step-indicator-container {
  overflow: hidden;
  // display: flex;
  // justify-content: center;
  overflow-x: auto;
  margin: 40px 0;
}

.step {
  display: flex;
  align-items: center;

  .step-line {
    background-color: #f5f5f5;
    height: 4px;
    width: 40px;
    margin: 5px;
    @include respond-to(md) {
      width: 20px;
      height: 2px;
    }
  }

  .step-text {
    background-color: #f5f5f5;
    width: 35px;
    height: 35px;
    font-size: 1.175rem;
    line-height: 35px;
    font-weight: 700;
    color: #c5c9d5;
    text-align: center;
    border-radius: 50%;
    box-sizing: border-box;
    // @include respond-to(md) {
    //   width: 25px;
    //   height: 25px;
    // }
  }

  &.done {
    .step-text {
      background-color: $bright-sky-blue;
      color: white;
    }

    .step-line {
      background-color: $bright-sky-blue;
    }
  }

  &.doing {
    .step-text {
      color: $bright-sky-blue;
      line-height: 30px;
      background-color: white;
      border: 2.5px solid $bright-sky-blue;
    }
  }

  &:last-child {
    .step-line {
      display: none;
    }
  }
}
</style>
