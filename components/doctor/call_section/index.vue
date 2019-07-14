<style lang="scss" scoped>
section#phoneDialog {
  > section {
    display: flex;
    align-items: center;
    color: #a3a3a3;

    @include media(md) {
      margin-left: 40px;
    }

    @include media(sm) {
      margin-left: 0;
    }

    > div:first-child {
      margin-left: 60px;
      display: flex;
      align-items: center;
      p {
        margin: 0;
      }
      @include media(sm) {
        margin-left: 25px;
      }

      i {
        color: #c3c5db;
        opacity: 0.6;
        margin-right: 16px;
      }
    }
  }
  .doctor-phone {
    background: #28db9b;
    width: 65px;
    height: 65px;
    padding: 20px;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
    position: relative;
    display: flex;
    @include media(sm) {
      width: 40px;
      height: 40px;
      padding: 8px;
    }
    &::before {
      content: "";
      border: 1px solid #28db9b;
      display: block;
      position: absolute;
      background: transparent;
      border-radius: 50%;
      animation: doctorphoneborder 3s infinite;
      animation-delay: 1.5s;
    }
    &::after {
      content: "";
      border: 1px solid #28db9b;
      display: block;
      position: absolute;
      background: transparent;
      border-radius: 50%;
      animation: doctorphoneborder 3s infinite;
    }
    img {
      width: 100%;
    }
  }
  .add_charge {
    margin-top: 16px;
    color: #28db9b;
    font-size: 0.875rem;
    .value {
      color: lighten(#28db9b, 45);
      font-size: 1.275rem;
    }
    a {
      color: lighten(#28db9b, 45);
      margin: 0 4px 0 6px;
      display: inline-block;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .link-call {
    // margin-right: 12px;
    @include media(sm) {
      // margin-right: 5px;
      padding-bottom: 3px;
    }
  }
  .v-menu__content {
    box-shadow: none;
    overflow: hidden;
    &::after {
      content: "";
      position: absolute;
      display: block;
      top: 60px;
      left: -10px;
      border: 10px solid transparent;
      border-right-color: #353b45;
      @include media(sm) {
        bottom: -10px;
        left: 70px;
        top: auto;
        border-color: transparent;
        border-top-color: #353b45;
      }
    }
  }

  .v-card {
    background: none;
    color: #fff;
    margin: 10px;
    border: none;
    box-shadow: none;
    background: #353b45;
    border-radius: 10px;
    width: 310px;
    position: relative;
    overflow: hidden;
    z-index: 0;
    &:after {
      content: "";
      position: absolute;
      background: url(~assets/img/element-bottom-left-gray.png);
      background-repeat: no-repeat;
      background-size: 120px;
      background-position: bottom left;
      opacity: 0.5;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .phone-dialog {
      padding: 10px;
    }
    .content-wrapper {
      padding-bottom: 15px;
      padding-right: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-height: 200px;
      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        span.important {
          color: #34ccd7;
          font-size: 17px;
          margin-right: 26px;
          direction: ltr;
          display: inline-flex;
          @include media(sm) {
            letter-spacing: 1px;
          }
        }
      }
      .info {
        flex: 1;
      }
      .hint {
        font-size: 0.825rem;
        margin-top: 1rem;
        display: block;
        a {
          color: lighten(#ffb74d, 25);
          margin: 0 4px 0 6px;
          display: inline-block;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      > div {
        margin-top: 15px;
      }
    }
  }
  .button-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .v-btn {
      flex: 1;
    }
  }
  .dialog-header {
    padding: 16px 10px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    @include media(sm) {
      flex-direction: column;
      // height: 90px;
    }
    .doctor-specialty {
      color: #a7a7a7;
    }
    .doctor-name {
      color: #63e1ae;
    }
    .dialog-code-ressa {
      display: flex;
    }
    .ressa-code {
      margin-left: 6px;
      color: #b1b1b1;
      display: flex;
      align-items: center;
      span {
        color: #43e7a5;
        font-size: 16px;
        margin-right: 4px;
      }
    }
  }
}
@keyframes doctorphoneborder {
  from {
    width: 65px;
    height: 65px;
    top: 0;
    right: 0;
    opacity: 1;
  }
  to {
    width: 125px;
    height: 125px;
    top: -30px;
    right: -30px;
    opacity: 0;
  }
}
@include media(sm) {
  @keyframes doctorphoneborder {
    from {
      width: 40px;
      height: 40px;
      top: 0px;
      right: 0px;
      opacity: 1;
    }
    to {
      width: 85px;
      height: 85px;
      top: -22.5px;
      right: -22.5px;
      opacity: 0;
    }
  }
}
</style>
<template>
  <section id="phoneDialog">
    <section>
      <div>
        <p>تماس مستقیم با پزشک</p>
        <v-icon>fa-angle-double-left</v-icon>
      </div>
      <v-menu
        v-model="phonedialog"
        attach
        :close-on-content-click="false"
        :nudge-width="200"
        :nudge-right="20"
        :nudge-top="top"
        :top="top == 70"
        :nudge-left="left"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <div class="doctor-phone" v-on="on">
            <img src="~assets/img/doctorPhone.svg" alt />
          </div>
        </template>

        <v-card>
          <v-loading v-if="booking_loading" mode="relative"></v-loading>
          <div class="phone-dialog">
            <div class="dialog-header">
              <div class="dialog-information">
                <div class="doctor-name">
                  {{ doctor.title }} {{ doctor.firstName }}
                  {{ doctor.lastName }}
                </div>
                <div class="doctor-specialty">{{doctor.specialty.title}}</div>
              </div>
              <div class="dialog-code-ressa">
                <div class="ressa-code">
                  کدرسا:
                  <span>{{ doctor.subscriberNumber | persianDigit }}</span>
                </div>
                <v-icon color="#63e1ae" style="font-size: 36px;">fingerprint</v-icon>
              </div>
            </div>
            <div class="content-wrapper">
              <div>مراحل برقراری ارتباط با پزشک مورد نظر:</div>
              <div class="info">
                <template v-if="user">
                  <ul v-if="$device.isMobile">
                    <li>
                      <span>۱. کلیک بر روی دکمه تماس با پزشک</span>
                    </li>
                    <li class="add_charge">
                      شما میتوانید به مدت
                      <span class="value">{{duration | persianDigit}}</span> دقیقه با این پزشک صحبت کنید در صورت نیاز میتوانید از طریق
                      <nuxt-link :to="{name:'charge'}">خرید شارژ</nuxt-link>اعتبار خود را افزایش دهید
                    </li>
                  </ul>
                  <ul v-else>
                    <li>
                      <span>۱. کلیک بر روی دکمه رزرو تماس</span>
                    </li>
                    <li>
                      <span>۲. تماس با شماره</span>
                      <span class="important">{{ '021-74471402' | persianDigit}}</span>
                    </li>
                    <li class="add_charge">
                      شما میتوانید به مدت
                      <span class="value">{{duration | persianDigit}}</span> دقیقه با این پزشک صحبت کنید در صورت نیاز میتوانید از طریق
                      <nuxt-link :to="{name:'charge'}">خرید شارژ</nuxt-link>اعتبار خود را افزایش دهید
                    </li>
                  </ul>
                </template>
                <template v-else>
                  <ul v-if="$device.isMobile">
                    <li>
                      <span>۱. کلیک بر روی دکمه تماس با پزشک</span>
                    </li>
                    <li>
                      ۲. وارد نمودن کد
                      <span
                        class="important"
                      >{{doctor.subscriberNumber | persianDigit}}</span>
                    </li>
                  </ul>
                  <ul v-else>
                    <li>
                      <span>۱. تماس با شماره</span>
                      <span class="important">{{ '021-74471111' | persianDigit}}</span>
                    </li>
                    <li>
                      ۲. وارد نمودن کد
                      <span
                        class="important"
                      >{{doctor.subscriberNumber | persianDigit}}</span>
                    </li>
                  </ul>
                </template>

                <span class="hint orange--text text--lighten-2" v-if="!user">
                  در صورتی که در سایت
                  <nuxt-link :to="{name:'patient-login',query:{return_url:$route.path}}">وارد شوید</nuxt-link>نیاز به وارد کردن کد نیست و مدت زمانی که میتوانید با این پزشک صحبت کنید را به شما اعلام میکنیم
                </span>
              </div>
              <div class="button-wrapper">
                <v-btn
                  v-if="$device.isMobile"
                  @click="reserve_doctor"
                  :href="user?'tel:02174471402':'tel:02174471111'"
                  color="#34ccd7"
                  outline
                  round
                  small
                >
                  <span class="link-call">تماس با پزشک</span>
                </v-btn>
                <v-btn
                  v-if="user && $device.isDesktop"
                  @click="reserve_doctor"
                  color="#34ccd7"
                  outline
                  round
                  small
                >
                  <!-- <v-icon>fa-phone</v-icon> -->
                  <span class="link-call">رزرو تماس</span>
                </v-btn>
                <!-- <v-btn :to="{name:'charge'}" color="#28db9a" dark outline round small>
                  <span class="link-call">شارژ حساب</span>
                </v-btn>-->
              </div>
            </div>
          </div>
        </v-card>
      </v-menu>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      booking_loading: false,
      phonedialog: false,
      top: 40,
      left: 0
    };
  },
  props: ["doctor", "duration"],
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      let width = window.innerWidth;
      this.top = width > 959 ? 40 : 70;
      this.left = width > 959 ? 0 : 120;
    },
    reserve_doctor() {
      if (!this.user) {
        return;
      }
      this.booking_loading = true;
      this.$axios
        .get(`/api/Accounts/${this.user_id}/Profile`, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        })
        .then(res => {
          this.$axios
            .post(
              `/api/Doctors/${this.doctor.subscriberNumber}/CommunicationBooking?patientPhoneNumber=${res.data.result.profile.phoneNumber}`
            )
            .then(res => {
              alert("رزرو پزشک با موفقیت انجام شد");
              this.booking_loading = false;
            })
            .catch(() => {
              alert("رزرو پزشک با مشکل مواجه شد");
              this.booking_loading = false;
            });
        });
    }
  },
  computed: {
    user() {
      return this.$store.state.patient.user;
    },
    user_id() {
      return this.$store.state.patient.user_id;
    }
  }
};
</script>