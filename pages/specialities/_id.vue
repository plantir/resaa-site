<style lang="scss">
$green-color: #43e7a5;
section#speciality,
section#header {
  @include media(xs-only) {
    padding: 0;
  }
  @include media(md) {
    padding: 0;
  }
}
section#speciality {
  background: #1c1f24;
  color: #fff;
  position: relative;
  overflow: hidden;
  .space {
    text-align: center;
    color: #37d4dd;
    font-size: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px;
  }
  .pa-4 {
    @include media(xs-only) {
      padding: 4px !important;
    }
  }
  p {
    line-height: 2rem;
    @include media(xs-only) {
      text-align: justify;
    }
  }
  .container {
    // padding-left: 90px;
    @include media(xs-only) {
      text-align: center;
    }
  }
  .header {
    height: 600px;
    position: relative;
    display: flex;
    z-index: 1;
    // padding-top: 220px;
    padding-right: 80px;
    @include media(md) {
      height: 450px;
      padding-top: 20px;
    }
    background-color: #1c1f24;
    @include media(xs-only) {
      height: auto;
      padding-top: 460px;
      padding-right: 0;
    }
    .speciality-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 550px;
      max-width: 100%;
    }
    .text-cardio {
      position: absolute;
      font-size: 18rem;
      z-index: -1;
      line-height: 1;
      font-family: Bebas;
      text-transform: uppercase;
      color: #202327;
      right: 90px;
      top: 220px;
      max-width: 1170px;
      @include media(md) {
        font-size: 14rem;
      }
      @include media(sm) {
        font-size: 6rem;
        top: 310px;
        right: auto;
        left: 16px;
      }
    }
    // .banner {
    //   // background: url(/img/speciality/background.jpg);
    //   width: 100%;
    //   height: 100%;
    //   background-position: top left;
    //   background-size: cover;
    //   position: absolute;
    //   z-index: -1;
    //   top: 0;
    //   left: 0;
    //   @include media(md) {
    //     background-repeat: no-repeat;
    //     background-size: 1500px;
    //   }
    //   @include media(sm) {
    //     background-size: 1200px;
    //   }
    // }
    h3 {
      font-weight: 400;
      color: $primary-color;
      font-size: 2.175rem;
    }
    h4 {
      font-weight: 400;
      font-size: 1.375rem;
      font-family: bebas;
      color: #999;
      margin: 8px 0 36px;
      @include media(sm) {
        margin-bottom: 0;
      }
    }
    p {
      color: #eee;
      max-width: 400px;
      text-align: justify;
      font-weight: 300;
      line-height: 2.375rem;
      @include media(xs-only) {
        max-width: 100%;
        padding: 30px 20px;
        text-align: center;
      }
      // @include media(md) {
      //   max-width: 600px;
      //   margin: 0 auto;
      // }
    }
  }
  .icons {
    width: 760px;
    max-width: 100%;
    margin: 90px auto;
    position: relative;
    z-index: 1;
    .items {
      display: flex;
      justify-content: space-between;
      z-index: 1;
      background: #1c1f24;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 85px;
        svg {
          width: 40px;
          height: 40px;
          path {
            fill: $primary-color;
          }
        }
        span {
          color: #fff;
          font-size: 1.275rem;
        }
        img {
          width: 40px;
        }
      }
    }
    &:after {
      content: "";
      width: 100%;
      height: 55px;
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      z-index: -1;
      margin: auto;
      top: 124%;
      background: url(~assets/img/icons/shadow.jpg);
    }
  }
  .section-container {
    section + section {
      margin-top: 62px;
    }
    .section-title {
      display: flex;
      justify-content: center;
      align-items: center;
      color: $primary-color;
      margin-bottom: 32px;
      font-size: 1.775rem;
      span {
        margin-right: 20px;
        font-weight: normal;
      }
    }
    h3 {
      display: inline-flex;
      font-weight: 400 !important;
      color: $primary-color !important;
      margin-bottom: 32px !important;
      font-size: 1.675rem !important;
      * {
        color: $primary-color !important;
        font-weight: 400 !important;
        font-size: 1.675rem !important;
      }
    }
    .index-number {
      margin-left: 4px;
      display: inline-flex;
      font-weight: 400 !important;
      color: $primary-color !important;
      margin-bottom: 32px !important;
      font-size: 1.675rem !important;
    }
    p {
      color: #fff;
      text-align: justify;
      line-height: 2rem;
      font-weight: 300;
      font-size: 1.275rem;
      @include media(sm) {
        font-size: 0.975rem;
      }
    }
    h3 {
      font-weight: 400;
      color: #37d4dd;
      margin-bottom: 32px;
      font-size: 1.775rem !important;
      @include media(sm) {
        font-size: 1.275rem !important;
      }
    }
  }
  section.info-section {
    .layout {
      .flex {
        p {
          color: #a3a3a3;
        }
      }
    }
  }
  section.important-device {
    text-align: center;
    max-width: 750px;
    margin: 60px auto;
    @include media(sm) {
      display: none;
    }
    h2 {
      margin-bottom: 60px;
      color: #37d4dd;
      font-weight: 400;
      font-size: 1.775rem;
    }
    div {
      margin-bottom: 50px;
      h3 {
        font-weight: 400;
        color: #fff;
        margin-bottom: 20px;
      }
      p {
        font-size: 1.3rem;
        text-align: center;
        color: #a3a4a4;
      }
    }
  }
  .doctor-count {
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    margin-top: 8px;
    max-width: 80%;
    @include media(sm) {
      max-width: 100%;
    }
    > div {
      span {
        font-weight: 300;
        font-size: 1.2rem;
        @include media(sm) {
          font-size: 1rem;
        }
      }
      span:nth-child(2) {
        color: $green-color;
      }
    }
  }
  .doctor-list {
    background: #202327;
    border-radius: 26px;
    padding-bottom: 16px;
    max-width: 80%;
    @include media(xs-only) {
      max-width: 100%;
    }
    .list-header {
      display: flex;
      align-items: center;
      padding: 15px;
      justify-content: flex-start;
      color: $green-color;
      font-size: 1.5rem;
      @include media(xs-only) {
        font-size: 1.2rem;
        padding: 5px;
        font-weight: 200;
      }
      div {
        margin-right: 20px;
      }
      svg {
        width: 50px;
        height: 50px;
        path {
          fill: $secondary-color;
        }
        @include media(xs-only) {
          width: 30px;
        }
      }
    }
    .items {
      margin: 0 42px 0 16px;
      @include media(xs-only) {
        margin: 0 6px 0 6px;
      }
      .item {
        display: flex;
        align-items: center;
        background: #1d1f23;
        height: 90px;
        padding: 0 10px;
        direction: rtl;
        + .item {
          margin-top: 8px;
        }

        .doctor-image {
          flex: 0 0 70px;
          width: 70px;
          height: 70px;
          border-radius: 100%;
          overflow: hidden;
          margin-left: 26px;
          background: #fff;
          position: relative;
          cursor: pointer;
          @include media(xs-only) {
            flex: 0 0 60px;
            height: 60px;
            margin-left: 5px;
          }
          img {
            max-width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .doctor-info {
          display: flex;
          flex-grow: 1;
          height: 60px;
          align-items: center;
          @include media(xs-only) {
            flex-direction: column;
          }
          .detail {
            display: flex;
            flex-direction: column;
            flex: 1;
            .name {
              color: $primary-color;
              font-size: 1.075rem;
              @include media(xs-only) {
                max-width: 180px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
            .speciality {
              font-size: 0.9rem;
              color: #adb0b3;
            }
          }
          .code {
            display: flex;
            flex-direction: column;
            @include media(xs-only) {
              flex-direction: row;
            }
            span:first-child {
              color: #adb0b3;
              margin-bottom: 2px;
              font-size: 1.175rem;
              @include media(xs-only) {
                margin-bottom: 0;
                margin-left: 10px;
              }
            }
            span:nth-child(2) {
              color: $green-color;
              text-align: center;
            }
          }
          .divider {
            display: block;
            width: 1px;
            height: 40px;
            background: #efefef;
            margin: auto 10px;
            @include media(xs-only) {
              display: none;
            }
          }
        }
        .doctor-action {
          margin-right: 16px;
          display: flex;
          justify-content: space-around;
          svg {
            path {
              fill: #fff;
            }
          }
          @include media(xs-only) {
            flex-direction: column;
          }
          .v-btn {
            margin: 6px 4px;
            width: 30px;
            height: 30px;
            i {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .sky-btn {
    background: $primary-color;
    &:hover {
      background: darken($primary-color, 15);
    }
  }
  .green-btn {
    background: #43e7a5;
    .v-icon {
      display: flex;
    }
    &:hover {
      background: darken(#43e7a5, 20);
    }
  }
  .physician-section {
    .hide-mobile {
      @include media(xs-only) {
        display: none;
      }
    }
    .hide-desktop {
      display: none;
      @include media(xs-only) {
        display: inherit;
      }
    }
    .swiper-container {
      max-width: 750px;
      @include media(xs-only) {
        margin-bottom: 50px;
      }
      .image {
        width: 70%;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .name {
        color: $primary-color;
        margin: 8px 0 4px;
        font-size: 1.175rem;
      }
      .speciality {
        color: #aaa;
        font-size: 0.9rem;
        margin-bottom: 4px;
      }
      .code {
        span {
          color: #aaa;
        }
        span:nth-child(2) {
          color: $green-color;
        }
      }
      .swiper-button-prev {
        background-image: url(~assets/img/arrow_right.png);
        width: 44px;
        height: 44px;
        right: -15px;
        background-size: 100%;
      }
      .swiper-button-next {
        background-image: url(~assets/img/arrow_left.png);
        width: 44px;
        height: 44px;
        left: -15px;
        background-size: 100%;
      }
    }
    .swiper-title {
      text-align: center;
      font-size: 1.7rem;
      margin-bottom: 60px;
      @include media(xs-only) {
        display: none;
      }
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      // padding: 32px 8px;
    }
  }
  .blog-section {
    max-width: 1390px;
    margin-bottom: 200px;
    .swiper-parent {
      padding: 0 68px;
      position: relative;
      @include media(xs-only) {
        padding: 0 8px;
      }
    }
    .swiper-container {
      position: initial;
    }
  }
  .faq-section {
    .faq-list {
      background: #202327;
      border-radius: 26px;
      padding-bottom: 16px;
      max-width: 560px;
      margin: 0 auto;
      padding: 16px 0;
      .scroll-area {
        height: 600px;
      }
    }
    .items {
      margin: 0 42px 0 16px;
      .item {
        cursor: pointer;
        display: flex;
        align-items: center;
        height: 56px;
        padding: 0;
        direction: rtl;
        + .item {
          margin-top: 16px;
        }
        &.active {
          .item-summary {
            background-color: #ed1163;
            background-image: url(~assets/img/Speciality_element.png);
          }
        }
      }
      .item-summary {
        display: flex;
        align-items: flex-start;
        overflow: hidden;
        background: #1d1f23;
        padding: 0 16px;
        color: #ddd;
        height: 56px;
        font-size: 1rem;
      }
      .item-index {
        background: #1d1f23;
        margin-left: 8px;
        width: 56px;
        flex: 0 0 56px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $green-color;
        font-size: 2.2rem;
      }
    }
    .faq-detail {
      background-color: #202327;
      background-image: url(~assets/img/Speciality_element_conversation.png);
      background-position: left bottom;
      background-size: cover;
      background-repeat: no-repeat;
      height: 632px;
      border-radius: 26px;
      padding: 16px 40px;
      overflow: auto;
      .text {
        background: darken($primary-color, 10);
        background-image: url(~assets/img/element-top-left.png);
        background-position: left;
        background-size: cover;
        background-repeat: no-repeat;
        padding: 14px;
        border-radius: 26px;
        max-width: 300px;
        text-align: justify;
        line-height: 1.675rem;
        font-weight: 300;
        position: relative;
        margin-right: 24px;
        &::before {
          content: "";
          width: 0;
          height: 0;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-left: 12px solid darken($primary-color, 10);
          position: absolute;
          left: 100%;
          top: 30px;
        }
      }
      .question {
        display: flex;
        align-items: flex-start;
        margin-top: 40px;
        .text {
          padding: 24px;
        }
        svg {
          width: 50px;
          height: 50px;
        }
      }
      .answer {
        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;
        margin-top: 26px;
        > div {
          padding: 0 10px;
        }
        .text {
          background: darken($green-color, 20);
          background-image: url(~assets/img/element-bottom-right.png);
          background-position: bottom right;
          background-repeat: no-repeat;
          background-size: auto;
          padding: 14px;
          margin-left: 24px;
          &::before {
            right: 100%;
            left: auto;
            border-left: none;
            border-right: 12px solid darken($green-color, 20);
          }
          .doctor-info {
            display: flex;
            background: #fff;
            color: #aaa;
            border-radius: 18px;
            align-items: center;
            padding: 14px 8px;
            justify-content: space-between;
            margin-bottom: 20px;
            .doctor-name {
              display: flex;
              flex-direction: column;
              span:first-child {
                color: $primary-color;
                font-size: 1.2rem;
              }
              span:last-child {
                font-size: 0.9rem;
              }
            }
            .doctor-code {
              display: flex;
              align-items: center;
              flex: 0 0 50%;
              justify-content: flex-end;
              font-size: 1rem;
              img {
                max-width: 40px;
                margin-right: 8px;
              }
              span {
                font-size: 1.1rem;
                color: darken($green-color, 20);
              }
            }
          }
        }
        .image {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          img {
            border-radius: 100%;
            max-width: 70px;
            margin-bottom: 12px;
          }
        }
      }
    }
  }
  section.faq-section {
    margin-bottom: 100px;
  }
  .swiper-button-prev {
    background-image: url(~assets/img/arrow_right.png);
    width: 44px;
    height: 44px;
    background-size: 100%;
    @include media(xs-only) {
      background-size: 35px;
      right: -10px;
    }
  }
  .swiper-button-next {
    background-image: url(~assets/img/arrow_left.png);
    width: 44px;
    height: 44px;
    background-size: 100%;
    @include media(xs-only) {
      background-size: 35px;
      left: -10px;
    }
  }
  .scroll-area {
    position: relative;
    margin: auto;
    height: 400px;
    direction: ltr;
    background: rgba(0, 0, 0, 0);
  }
  .ps__rail-y {
    opacity: 1;
    right: 15px;
    background: #1d1f23;
    border-radius: 20px;
    @include media(xs-only) {
      right: 5px !important;
    }
    .ps__thumb-y {
      right: 5px;
      background-color: $green-color;
    }
  }
  .section-title {
    svg {
      width: 48px;
      height: 48px;
    }
  }
  .swiper-paginationText {
    text-align: center;
  }
  .swiper-pagination-bullet {
    opacity: 1;
    border: 1px solid $primary-color;
    width: 12px;
    height: 12px;
    &.swiper-pagination-bullet-active {
      opacity: 1;
      background: $primary-color;
      border: none;
    }
  }
}
</style>
<template>
  <section id="speciality">
    <div class="header">
      <img class="speciality-image" :src="backgroundImage" alt />
      <div class="text-cardio">{{speciality.description}}</div>
      <v-container>
        <h3>{{speciality.title}}</h3>
        <h4>{{speciality.description}}</h4>
        <p v-html="speciality.characterization"></p>
      </v-container>
    </div>
    <div class="icons hide-mobile">
      <div class="items">
        <div class="item">
          <!-- <img src="~assets/img/icons/info.png" alt> -->
          <infoIcon class="svg-icon-blue" width="40px" />
          <span>معرفی‌تخصص</span>
        </div>
        <div class="item">
          <!-- <img src="~assets/img/icons/physician.png" alt> -->
          <physicianIcon class="svg-icon-blue" width="40px" />
          <span>پزشکان مرتبط</span>
        </div>
        <div class="item">
          <!-- <img src="~assets/img/icons/blog.png" alt> -->
          <blogIcon class="svg-icon-blue" width="40px" />

          <span>مقالات مرتبط</span>
        </div>
        <div class="item">
          <!-- <img src="~assets/img/icons/faq.png" alt> -->
          <faqIcon class="svg-icon-blue" width="40px" />

          <span>پرسش و پاسخ</span>
        </div>
        <div class="item have-gif">
          <criticalCondition />
          <span>شرایط اورژانسی</span>
        </div>
      </div>
    </div>
    <div class="show-mobile">
      <criticalCondition />
    </div>
    <!-- <section class="swiper-section show-mobile">
      <h2 class="section-title">
        <img src="~assets/img/icons/info.png" alt>
        <span>معرفی‌تخصص</span>
      </h2>
     
    </section>-->
    <v-container class="section-container">
      <section class="info-section">
        <!-- <h2 class="section-title">
          <img src="~assets/img/icons/info.png" alt>
          <span>معرفی تخصص</span>
        </h2>-->
        <div v-swiper:mySwiperText="swiperOptionText" dir="rtl" class="show-mobile">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item,index) in speciality.introductoryRemarks"
              :key="index"
            >
              <div class="doctor-comment-card">
                <v-flex md6 pa-4>
                  <h3 v-html="item.title"></h3>
                  <div v-html="item.description"></div>
                </v-flex>
              </div>
            </div>
          </div>
          <div class="swiper-paginationText swiper-pagination-bullets"></div>
        </div>
        <div class="hide-mobile">
          <v-layout row wrap>
            <v-flex md6 pa-4 v-for="(item,index) in speciality.introductoryRemarks" :key="index">
              <span class="index-number">{{index+1 | persianDigit}}.</span>
              <h3 v-html="item.title"></h3>
              <div class="description" v-html="item.description"></div>
            </v-flex>
          </v-layout>
        </div>
      </section>
      <section v-if="$route.params.id == 23" class="important-device">
        <h2>مهم ترین دستگاه های تشخیصی برای یافتن نوع عارضه قلبی</h2>
        <div>
          <h3>نوار قلبی / الکتروکاردیوگرافی</h3>
          <p>نوار قلبی، فعالیت الکتریکی قلب را ثبت می‌کند و نشان‌دهنده نحوه عملکرد ریتم قلب است. با نوار قلب می‌توان تا حد زیادی شواهدی از سکته قلبی را مشخص کرد. این روش قابل‌دسترس و ارزان است، ولی مشکل این وسیله، دادن اطلاعات کلی است و نمی‌توان با نوار قلب، به جزییات اختلال قلبی پی برد.</p>
        </div>
        <div>
          <h3>هولتر ریتم قلب</h3>
          <p>وقتی فردی دچار اختلال ریتم قلبی است، می‌توان از ابزاری به نام هولتر ریتم قلب استفاده کرد. این دستگاه به شکل پرتابل و قابل حمل است و برای مدت طولانی (24 ساعت یا بیشتر)‌ به بیمار وصل می‌شود. اگر اختلالات ریتم قلبی در زمان‌های خاصی اتفاق افتاده باشد، با این دستگاه دقیق‌تر مشخص می‌شود.</p>
        </div>
        <div>
          <h3>رادیوگرافی از قفسه سینه</h3>
          <p>همان عکسبرداری ساده از قفسه سینه است که در آن اندازه قلب، سایه قلب و بافت ریه و استخوان‌ها مشخص می‌شود. بررسی با این ابزار هم جنبه کلی دارد.</p>
        </div>
        <div>
          <h3>اکوکاردیوگرافی</h3>
          <p>برای اطلاع از وضعیت دریچه‌ها و حفره‌های قلبی، عملکرد پمپاژ و اختلال‌های مادرزادی قلبی، متخصص قلب و عروق از وسیله‌ای به نام اکوکاردیوگرافی استفاده میکند. مکانیسم کارکرد این وسیله با استفاده از امواج ماورای‌ صوت است. مزیت این ابزار، بی‌خطر بودن آن (حتی برای خانم‌های باردار) و قدرت بالای آن در تشخیص‌ است.</p>
        </div>
        <div>
          <h3>تست ورزش</h3>
          <p>تست ورزش مانند نوار قلبی است، با این تفاوت که بیمار روی دستگاه تردمیل حرکت می‌کند و نوار قلب ثبت می‌شود. اگر اختلالی در عملکرد ریتم و خون‌رسانی قلبی وجود داشته باشد، با تست ورزش مشخص می‌شود.</p>
        </div>
      </section>
      <section v-else-if="$route.params.id == 41" class="important-device">
        <h2>چه زمانی باید به روانشناس مراجعه کنیم؟</h2>
        <div>
          <!-- <h3>نوار قلبی / الکتروکاردیوگرافی</h3> -->
          <p>زندگی همیشه با خود چالش‌هایی را به همراه دارد. برخی از این مشکلات خیلی و سخت و غیرقابل تحمل‌اند و به نظر میرسد که ادامه دادن غیرممکن باشد. اما باید بدانیم که برای هر مانعی که زندگی بر سر راهمان می‌گذارد همیشه کمک و راه حلی وجود دارد. در مقابل مشکلات زیر حتما به روانشناس مراجعه کنید.</p>
        </div>
        <div>
          <h3>از دست دادن عزیزان</h3>
          <p>با اینکه مرگ بخش جدانشدنی زندگیست، اما این‌طور نیست که کنار آمدن با آن نیز ساده باشد. با این حال، اجتناب از واقعیت‌ها می‌تواند منجر به مشکلات طولانی و ماندگاری شود.</p>
        </div>
        <div>
          <h3>استرس و اضطراب</h3>
          <p>اگر این مشکل را به حال خود بگذارید، به افسردگی، انزوای اجتماعی و مشکلات دیگری منجر شود.</p>
        </div>
        <div>
          <h3>افسردگی</h3>
          <p>علائم آن ناامیدی و درماندگی است که باید در طول زمان درمان شود.</p>
        </div>
        <div>
          <h3>ترس‌ها و فوبیاها</h3>
          <p>بعضی ترس‌ها معمول اند و برخی غیرعادی مانند ترس از خوردن ، خطری جدی برای سلامتی‌اند.</p>
        </div>
        <div>
          <h3>مسائل خانوادگی و روابط</h3>
          <p>با اینکه روابط بهترین بخش زندگی‌اند، گاهی اوقات به منابع استرس و مشکلات تبدیل می‌شوند.</p>
        </div>
        <div>
          <h3>عادت‌های ناسالم و اعتیاد</h3>
          <p>برخی استعمال دخانیات را برای فرار از مشکلات موجود انتخاب می‌کنند.</p>
        </div>
        <div>
          <h3>افزایش عملکرد</h3>
          <p>ورزش‌کاران حرفه‌ای برای بازدهی بهتر و بیشتر به روان‌شناس مراجعه می‌کنند.</p>
        </div>
        <div>
          <h3>اختلالات روانی</h3>
          <p>این اختلالات پشت علائم متعددی مخفی‌اند و تنها با کمک متخصص کشف می‌شوند.</p>
        </div>
      </section>
      <div class="space">...</div>
      <section class="physician-section">
        <h2 class="section-title">
          <!-- <img src="~assets/img/icons/physician.png" alt> -->
          <physicianIcon class="primary--text" width="53px" />

          <span>پزشکان مرتبط</span>
        </h2>
        <v-layout row wrap>
          <v-flex pa-4 lg6>
            <div class="doctor-count">
              <div>
                <span>تعداد پزشکان :</span>
                <span>{{rleated_doctors.length | persianDigit}}</span>
              </div>
              <div>
                <span>تعداد پزشکان پاسخگو :</span>
                <span>{{available_doctors.length | persianDigit}}</span>
              </div>
            </div>
            <div
              v-if="available_doctors.length"
              v-swiper:mySwiper="swiperOptionDoctorsmobile"
              dir="rtl"
              class="hide-desktop"
            >
              <div class="swiper-wrapper">
                <nuxt-link
                  class="swiper-slide"
                  v-for="(doctor, index) in available_doctors"
                  :key="index"
                  tag="div"
                  :to="`/doctors/${doctor.subscriberNumber}`"
                >
                  <div class="image">
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
                  <div class="name">{{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}</div>
                  <div class="speciality">متخصص {{doctor.specialty.title}}</div>
                  <div class="code">
                    <span>کد رسا:</span>
                    <span>{{doctor.subscriberNumber | persianDigit}}</span>
                  </div>
                </nuxt-link>
              </div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </div>
            <div class="doctor-list">
              <div class="list-header">
                <!-- <img src="~assets/img/icons/doctor-list.png" alt> -->
                <doctorListIcon class="primary--color" />
                <div>مشاهده لیست همه پزشکان مرتبط</div>
              </div>
              <no-ssr>
                <vue-custom-scrollbar
                  class="scroll-area"
                  :settings="{maxScrollbarLength: 30,scrollXMarginOffset:15,suppressScrollX:true}"
                >
                  <div class="items">
                    <div
                      class="item"
                      v-for="doctor in rleated_doctors"
                      :key="doctor.subscriberNumber"
                    >
                      <nuxt-link
                        tag="div"
                        :to="`/doctors/${doctor.subscriberNumber}`"
                        class="doctor-image"
                      >
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
                      </nuxt-link>
                      <div class="doctor-info">
                        <div class="detail">
                          <nuxt-link
                            class="name"
                            :to="`/doctors/${doctor.subscriberNumber}`"
                          >{{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}</nuxt-link>
                          <span class="speciality">متخصص {{doctor.specialty.title}}</span>
                        </div>
                        <div class="divider"></div>
                        <nuxt-link class="code" :to="`/doctors/${doctor.subscriberNumber}`">
                          <span>کد رسا</span>
                          <span>{{doctor.subscriberNumber | persianDigit}}</span>
                        </nuxt-link>
                      </div>
                      <div class="doctor-action">
                        <v-btn
                          fab
                          dark
                          small
                          :to="`/doctors/${doctor.subscriberNumber}`"
                          class="sky-btn"
                        >
                          <!-- <v-icon>fa-eye</v-icon>-->
                          <eyeIcon class="svg-icon-white" width="16px" />
                        </v-btn>
                        <v-btn
                          fab
                          dark
                          small
                          :to="`/doctors/${doctor.subscriberNumber}`"
                          class="green-btn"
                        >
                          <v-icon>fa-phone</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </vue-custom-scrollbar>
              </no-ssr>
            </div>
          </v-flex>
          <v-flex pa-4 lg6 class="hide-mobile">
            <div style="width:100%">
              <div class="swiper-title">دسترسی سریع به پزشکان پاسخگو</div>
              <div v-swiper:mySwiperdesktop="swiperOptionDoctors" dir="rtl">
                <div class="swiper-wrapper">
                  <nuxt-link
                    class="swiper-slide"
                    v-for="doctor in available_doctors"
                    :key="doctor.subscriberNumber"
                    :to="`/doctors/${doctor.subscriberNumber}`"
                  >
                    <div class="image">
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
                    <div class="name">دکتر {{doctor.firstName}} {{doctor.lastName}}</div>
                    <div class="speciality">متخصص {{doctor.specialty.title}}</div>
                    <div class="code">
                      <span>کد رسا:</span>
                      <span>{{doctor.subscriberNumber | persianDigit}}</span>
                    </div>
                  </nuxt-link>
                </div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </section>
      <!-- <section class="blog-section">
        <div class="space">...</div>
        <div class="container">
          <doctorSlider :dark="dark" />
        </div>
      </section>-->
      <section class="faq-section hide-mobile">
        <h2 class="section-title">
          <faqIcon class="svg-icon-blue" width="53px" />
          <span>پرسش و پاسخ</span>
        </h2>
        <v-layout row wrap>
          <v-flex pa-4 lg5>
            <div class="faq-list">
              <no-ssr>
                <vue-custom-scrollbar
                  class="scroll-area"
                  :settings="{maxScrollbarLength: 30,scrollXMarginOffset:15,suppressScrollX:true}"
                >
                  <div class="items">
                    <div
                      class="item"
                      :class="{active:active_item.id == item.id}"
                      v-for="(item,index) in speciality.frequentlyAskedQuestions"
                      :key="index"
                      @click="active_item = item"
                    >
                      <div class="item-index">{{index+1 | persianDigit}}</div>
                      <div class="item-summary" v-html="item.question"></div>
                    </div>
                  </div>
                </vue-custom-scrollbar>
              </no-ssr>
            </div>
          </v-flex>
          <v-flex pa-4 lg7 v-if="active_item">
            <div class="faq-detail">
              <div class="question">
                <div class="image">
                  <!-- <img src="~assets/img/user_placeholder.png" alt> -->
                  <userIcon class="svg-icon-white" width="50px" />
                </div>
                <div class="text" v-html="active_item.question"></div>
              </div>
              <div class="answer">
                <div class="image">
                  <img src="~static/img/doc-placeholder.png" alt />
                  <span>{{active_item.respondent.fullName}}</span>
                </div>
                <div class="text">
                  <div class="doctor-info">
                    <div class="doctor-name">
                      <span>{{active_item.respondent.fullName}}</span>
                      <span>متخصص قلب و عروق</span>
                    </div>
                    <div class="doctor-code">
                      کد رسا :
                      <span>{{active_item.respondent.subscriberNumber}}</span>
                      <img src="~assets/img/fingerprint.png" alt />
                    </div>
                  </div>
                  <div v-html="active_item.answer"></div>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </section>
      <div class="show-mobile">
        <faq-mobile
          v-if="speciality.frequentlyAskedQuestions"
          :items="speciality.frequentlyAskedQuestions"
        ></faq-mobile>
      </div>
    </v-container>
  </section>
</template>
<script>
import faqMobile from "@/components/faq/faq-list-mobile";
import criticalCondition from "@/components/specialities/criticalCondition";
import infoIcon from "@/assets/svg/info.svg?inline";
import physicianIcon from "@/assets/svg/physician.svg?inline";
import blogIcon from "@/assets/svg/blog.svg?inline";
import faqIcon from "@/assets/svg/faq.svg?inline";
import eyeIcon from "@/assets/svg/eye.svg?inline";
import doctorListIcon from "@/assets/svg/doctorList.svg?inline";
import userIcon from "@/assets/svg/user.svg?inline";
import doctorSlider from "@/components/doctor/doctor_detail/doctorSlider/doctorSlider";
import doctors from "@/components/doctor_detail/doctors";
export default {
  layout: "speciality",
  components: {
    criticalCondition,
    faqMobile,
    infoIcon,
    physicianIcon,
    blogIcon,
    faqIcon,
    eyeIcon,
    doctorListIcon,
    userIcon,
    doctorSlider
  },
  async asyncData({ $axios, params }) {
    let service = await $axios.$get(
      `/Doctors/MedicalSpecialties/${params.id}/Manifest`
    );
    let rleated_doctors;
    if (params.id == 41) {
      rleated_doctors = doctors;
    } else {
      let { result } = await $axios.$get(
        `/Doctors?fields=specialty,title,subscriberNumber,firstName,lastName,imagePath,currentlyAvailable&specialtyId=${params.id}`
      );
      rleated_doctors = result.doctors;
    }
    let available_doctors = rleated_doctors.filter(
      item => item.currentlyAvailable
    );
    let speciality = service.result.manifest;
    let active_item = service.result.manifest.frequentlyAskedQuestions[0];
    return {
      active_item: null,
      dark: true,
      swiperOptionText: {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-paginationText",
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        grabCursor: true
      },
      swiperOptionDoctors: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        // slidesPerGroup: 1,
        // loopFillGroupWithBlank: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        },
        grabCursor: true
      },
      swiperOptionDoctorsmobile: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        },
        grabCursor: true
      },
      swiperOption: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        grabCursor: true
      },
      blog_swiper: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        grabCursor: true
      },
      active_item,
      speciality,
      rleated_doctors,
      available_doctors
    };
  },
  async mounted() {},
  computed: {
    backgroundImage() {
      return (
        `https://webapi.resaa.net/${this.speciality.backgroundImagePath}` ||
        "/img/speciality/background.jpg"
      );
    }
  }
};
</script>
