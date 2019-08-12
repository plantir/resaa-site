<style lang="scss">
.emergency_icon {
  cursor: pointer;
}
section#criticalCondition {
  .emergency_icon {
    &.hide-mobile {
      max-height: 80px;
    }
    &.show-mobile {
      position: absolute;
      top: 380px;
      z-index: 1;
      img {
        position: absolute;
        top: 0;
        z-index: 1;
        right: -16px;
        background: #ed1163;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
      }
      &::after {
        height: 73px;
        content: "";
        position: absolute;
        top: 0;
        border: 1px solid #ed1163;
        z-index: -1;
        width: 73px;
        right: -16px;
        padding: 10px;
        border-radius: 50%;
        animation: border-grow 2s infinite;
      }
      &::before {
        height: 73px;
        content: "";
        position: absolute;
        top: 0;
        border: 1px solid #ed1163;
        z-index: -1;
        width: 73px;
        right: -16px;
        padding: 10px;
        border-radius: 50%;
        animation: border-grow 2s 0.66s infinite;
      }
    }

    .border-show {
      height: 73px;
      content: "";
      position: absolute;
      top: 0;
      border: 1px solid #ed1163;
      z-index: -1;
      width: 73px;
      right: -16px;
      padding: 10px;
      border-radius: 50%;
      animation: border-grow 2s 1.33s infinite;
    }
  }
  .criticalbackgroundblur {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background: #00000085;
  }
}

.v-dialog {
  .v-card {
    background-color: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.87);
    display: flex;
    flex-direction: column;
    height: 400px;
    overflow: hidden;
    border-radius: 30px;
    @include media(xs-only) {
      height: auto;
      overflow: auto;
    }
  }
  .change-page {
    position: absolute;
    cursor: pointer;
    right: 25px;
    top: 70px;
    height: 40px;
    text-align: center;
    line-height: 43px;
    width: 40px;
    z-index: 1;
    background: #1d1f23;
    border-radius: 50% !important;
    align-items: center;
    justify-content: center;
    &.bottom {
      top: 350px;
    }
    i {
      color: #33b8c1;
    }
  }
  .header {
    height: auto;
    position: absolute;
    display: flex;
    width: 100%;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0 10px;
    align-items: center;
    z-index: 9;
    @include media(xs-only) {
    }
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 30px;
      width: 35px;
      @include media(xs-only) {
        margin: 0 10px;
      }
      img {
        max-width: 100%;
      }
    }

    .text {
      display: flex;
      align-items: center;
      @include media(xs-only) {
        flex-direction: column;
      }
      .item-title {
        font-size: 16px !important;
        margin: 0 0 0 20px;
        @include media(xs-only) {
          font-size: 13px !important;
          margin: 0;
        }
      }
      .subtitle {
        font-size: 12px;
        line-height: 2;
        @include media(xs-only) {
          font-size: 10px;
        }
      }
    }
    .close {
      margin-left: 20px;
      cursor: pointer;
      //  @include media(xs-only) {
      //   margin: 0 20px;
      // }
      @include media(xs-only) {
        position: fixed;
        left: 20px;
        top: 30px;
      }
    }
  }
  .emergancy_component {
    transition: transform 1s;
    &.part2 {
      transform: translateY(-400px);
    }
    &.part3 {
      transform: translateY(-800px);
    }
    > div {
      height: 400px;
      width: 100%;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 100px 25px 50px;
      line-height: 3;
      background-size: contain;
      background-repeat: no-repeat;
      @include media(xs-only) {
        height: auto;
        flex-direction: column;
        align-items: stretch;
        font-size: 1.225rem;
      }
      .item-title {
        margin-bottom: 25px;
        font-size: 22px !important;
      }
      .border {
        height: 80%;
        width: 1px;
        background: rgba(255, 255, 255, 0.5);
      }
      .emergency-list {
        width: 22%;
        @include media(xs-only) {
          width: 100%;
        }
        ul {
          margin: 0;
          padding: 0 15px 0 0px;
          list-style-type: arabic-indic;
        }
      }
    }
    .emergency-symptoms {
      padding-top: 100px;
      background-image: url(/img/criticalcondition-man-background-desktop.png);
      background-position: top right;
      background-color: #ff3862;
      border-radius: 20px 20px 0px 0px;
    }
    .initial-measures {
      background-image: url(/img/criticalcondition-hand-background.png);
      background-color: #28b67b;
    }

    .getting-help {
      background-image: url(/img/criticalcondition-help-background.png);
      background-position: top right;
      background-color: #34ccd7;
      border-radius: 0 0 20px 20px;
      .border {
        height: 30%;
      }
      .get-help-way {
        padding: 20px;
        text-align: center;
        line-height: 2;
        @include media(xs-only) {
          border-bottom: 1px solid #eaeaea;
          text-align: right;
        }
        span {
          display: block;
          direction: ltr;
          font-size: 16px;
        }
      }
      .no-border {
        border: none !important;
      }
    }
  }
}

.v-dialog.v-dialog--persistent {
  border-radius: 20px 0 0;
}
@keyframes border-grow {
  from {
    width: 73px;
    height: 73px;
    top: 0;
    right: -16px;
    opacity: 1;
  }
  to {
    width: 203px;
    height: 203px;
    top: -65px;
    right: -81px;
    opacity: 0;
  }
}
</style>
<template>
  <section id="criticalCondition">
    <div class="emergency_icon show-mobile">
      <img src="~assets/img/icons/critical_condition_white.png" @click="dialog = true" />
      <div class="border-show"></div>
    </div>
    <div class="emergency_icon hide-mobile" @click="dialog = true">
      <img src="/img/CriticalPulse-None-Transparent.gif" alt />
    </div>
    <!-- <div class="criticalbackgroundblur" v-if="showcomponent"></div> -->
    <v-dialog ref="dialog" v-model="dialog" max-width="900">
      <v-card>
        <div class="change-page top hide-mobile" @click="gototop" v-if="top!=0">
          <v-icon>keyboard_arrow_up</v-icon>
        </div>
        <div class="change-page bottom hide-mobile" @click="gotobottom" v-if="top!=2">
          <v-icon>keyboard_arrow_down</v-icon>
        </div>
        <div class="header hide-mobile">
          <div class="logo">
            <img src="~assets/img/icons/critical_condition_white.png" alt />
          </div>
          <div class="text">
            <div class="item-title">شرایط اورژانسی / قلب و عروق</div>
            <div class="subtitle">cardiological emergency condition</div>
          </div>
          <v-spacer></v-spacer>
          <div class="close" @click="dialog = false">
            <v-icon color="#fff">clear</v-icon>
          </div>
        </div>
        <div class="emergancy_component" ref="test">
          <div class="emergency-symptoms">
            <div class="header show-mobile">
              <div class="logo">
                <img src="~assets/img/icons/critical_condition_white.png" alt />
              </div>
              <div class="text">
                <div class="item-title">شرایط اورژانسی / قلب و عروق</div>
                <div class="subtitle">cardiological emergency condition</div>
              </div>
              <v-spacer></v-spacer>
              <div class="close" @click="dialog = false">
                <v-icon color="#fff">clear</v-icon>
              </div>
            </div>
            <div class="item-title">علائم حاد اورژانسی</div>
            <div class="border"></div>
            <div class="emergency-list">
              <ul>
                <li>تیر کشیدن متعدد قفسه سینه</li>
                <li>احساس تنگی نفس</li>
                <li>درد در ناحیه شانه چپ و پشت</li>
                <li>احساس سنگینی در دست چپ</li>
                <li>درد در انگشت شصت پای چپ</li>
                <li>احساس درد در بازوی چپ</li>
              </ul>
            </div>
            <div class="emergency-list">
              <ul>
                <li>تیر کشیدن متعدد قفسه سینه</li>
                <li>احساس تنگی نفس</li>
                <li>درد در ناحیه شانه چپ و پشت</li>
                <li>احساس سنگینی در دست چپ</li>
                <li>درد در انگشت شصت پای چپ</li>
                <li>احساس درد در بازوی چپ</li>
              </ul>
            </div>
          </div>

          <div class="initial-measures" id="initialMeasures">
            <div class="item-title">اقدامات حیاتی اولیه</div>
            <div class="border"></div>
            <div class="emergency-list">
              <ul>
                <li>تیر کشیدن متعدد قفسه سینه</li>
                <li>احساس تنگی نفس</li>
                <li>درد در ناحیه شانه چپ و پشت</li>
                <li>احساس سنگینی در دست چپ</li>
                <li>درد در انگشت شصت پای چپ</li>
                <li>احساس درد در بازوی چپ</li>
              </ul>
            </div>
            <div class="emergency-list">
              <ul>
                <li>تیر کشیدن متعدد قفسه سینه</li>
                <li>احساس تنگی نفس</li>
                <li>درد در ناحیه شانه چپ و پشت</li>
                <li>احساس سنگینی در دست چپ</li>
                <li>درد در انگشت شصت پای چپ</li>
                <li>احساس درد در بازوی چپ</li>
              </ul>
            </div>
          </div>

          <div class="getting-help" id="gettingHelp">
            <div class="item-title">علائم حاد اورژانسی</div>
            <div class="border"></div>
            <div class="get-help-way">تماس با مراکز اورژانسی</div>
            <div class="border"></div>
            <div class="get-help-way">تماس با پزشکان مرتبط رسا</div>
            <div class="border"></div>
            <div class="get-help-way no-border">
              تماس با واحد پشتیبانی رسا
              <span>{{"021 7447 1300"|persianDigit}}</span>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </section>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      top: 0,
      timeout: null,
      oldScroll: 0
    };
  },
  watch: {
    dialog: function(value) {
      if (window.innerWidth < 601) {
        return;
      }
      if (value) {
        window.addEventListener("wheel", this.wheelListener);
      } else {
        window.removeEventListener("wheel", this.wheelListener);
      }
    }
  },
  methods: {
    wheelListener(e) {
      const delta = Math.sign(event.deltaY);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if (delta > 0) {
          this.gotobottom();
        } else {
          this.gototop();
        }
      }, 300);
    },
    gototop() {
      if (this.top == 2) {
        this.top--;
        this.$refs.test.classList.remove("part3");
      } else if (this.top > 0) {
        this.top--;
        this.$refs.test.classList.remove("part2");
      }
    },
    gotobottom() {
      if (this.top == 0) {
        this.top++;
        this.$refs.test.classList.add("part2");
      } else if (this.top < 2) {
        this.top++;
        this.$refs.test.classList.add("part3");
      }
    },
    gotoInitial() {
      console.log("object");
      this.$scrollTo("#initialMeasures", 1000);
    },
    gotogettingHelp() {
      this.$scrollTo("#gettingHelp", 1000);
    }
  }
};
</script>