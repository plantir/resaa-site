<style lang="scss">
$green-color: #43e7a5;
section#speciality {
  background: #1c1f24;
  color: #fff;
  .header {
    height: 600px;
    position: relative;
    display: flex;
    z-index: 1;
    padding-top: 220px;
    .banner {
      background: url(/img/speciality/background.jpg);
      width: 100%;
      height: 100%;
      background-position: top left;
      background-size: cover;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
    }
    h3 {
      font-weight: 400;
      color: $primary-color;
      font-size: 1.575rem;
    }
    h4 {
      font-weight: 300;
      color: #a3a3a3;
      margin: 8px 0 36px;
    }
    p {
      color: #eee;
      max-width: 400px;
      text-align: justify;
      font-weight: 300;
      line-height: 2.375rem;
    }
  }
  .icons {
    width: 760px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 100px;
    z-index: 1;
    .items {
      display: flex;
      justify-content: space-between;
      z-index: 1;
      background: #1c1f24;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          color: #fff;
          font-size: 1.175rem;
        }
      }
    }

    // &:after {
    //   content: "";
    //   width: 80%;
    //   display: block;
    //   position: absolute;
    //   z-index: -1;
    //   top: 124%;
    //   box-shadow: 0px -13px 72px 17px #000000;
    //   left: 0;
    //   right: 0;
    //   margin: auto;
    // }
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
      margin-bottom: 16px;
    }
    h3 {
      font-weight: 400;
      color: $primary-color;
      margin-bottom: 32px;
      font-size: 1.675rem;
    }
    p {
      color: #fff;
      text-align: justify;
      line-height: 2rem;
      font-weight: 300;
      font-size: 1.175rem;
    }
  }
  .doctor-count {
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    margin-top: 8px;
    > div {
      span {
        font-weight: 300;
        font-size: 1.375rem;
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
    max-width: 560px;
    margin: 0 auto;
    .list-header {
      display: flex;
      align-items: center;
      padding: 0 32px;
      justify-content: flex-start;
      color: $green-color;
      font-size: 1.475rem;
      img {
        max-width: 75px;
      }
    }
    .items {
      margin: 0 42px 0 16px;
      .item {
        display: flex;
        align-items: center;
        background: #1d1f23;
        height: 90px;
        padding: 0 32px;
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
          img {
            max-width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .doctor-info {
          display: flex;
          height: 60px;
          align-items: center;
          .detail {
            display: flex;
            flex-direction: column;
            .name {
              color: $primary-color;
              font-size: 1.325rem;
            }
            .speciality {
              font-size: 0.875rem;
              color: #adb0b3;
            }
          }
          .code {
            display: flex;
            flex-direction: column;
            span:first-child {
              color: #adb0b3;
              margin-bottom: 2px;
            }
            span:nth-child(2) {
              color: $green-color;
            }
          }
          .divider {
            display: block;
            width: 1px;
            height: 40px;
            background: #efefef;
            margin: auto 24px;
          }
        }
        .doctor-action {
          margin-right: 16px;
          flex-grow: 1;
          display: flex;
          justify-content: space-around;
          button {
            margin: 6px 4px;
          }
        }
      }
    }
  }
  .physician-section {
    .swiper-container {
      max-width: 750px;
      .image {
        border-radius: 100%;
        overflow: hidden;
        width: 150px;
        height: 150px;
        img {
          max-width: 100%;
        }
      }
      .name {
        color: $primary-color;
        margin: 8px 0 4px;
      }
      .speciality {
        color: #aaa;
        font-size: 0.875rem;
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
        background-size: 100%;
      }
      .swiper-button-next {
        background-image: url(~assets/img/arrow_left.png);
        width: 44px;
        height: 44px;
        background-size: 100%;
      }
    }
    .swiper-title {
      text-align: center;
      font-size: 1.675rem;
      margin-bottom: 60px;
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
    margin: 0 auto;
    .swiper-parent {
      padding: 0 68px;
      position: relative;
    }
    .swiper-container {
      position: initial;
    }
    .swiper-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        border-radius: 46px 46px 0 0;
        overflow: hidden;
      }
    }
    .content {
      width: 350px;
      background: #353b45;
      padding: 30px 30px 10px;
      box-sizing: border-box;
      border-radius: 0 0 46px 46px;
      .blog-title {
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 8px;
      }
      .date {
        color: $primary-color;
        font-size: 0.925rem;
        font-weight: 300;
        margin-bottom: 12px;
      }
      .summary {
        color: #aaa;
        font-size: 0.925rem;
        margin-bottom: 16px;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        > div:first-child {
          display: flex;
          > div {
            display: flex;
            align-items: center;
            + div {
              margin-right: 8px;
            }
          }
          .v-icon {
            color: #aaa;
            font-size: 1.175rem;
            margin-left: 4px;
          }
          span {
            color: #aaa;
            font-size: 0.875rem;
          }
        }
        button {
          width: 30px;
          height: 30px;
        }
      }
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
        height: 70px;
        padding: 0;
        direction: rtl;
        + .item {
          margin-top: 8px;
        }
        &.active {
          .item-summary {
            background: #ed1163;
          }
        }
      }
      .item-summary {
        display: flex;
        align-items: center;
        background: #1d1f23;
        padding: 0 16px;
        color: #ddd;
        height: 100%;
        font-size: 0.925rem;
      }
      .item-index {
        background: #1d1f23;
        margin-left: 8px;
        width: 70px;
        flex: 0 0 70px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $green-color;
        font-size: 2.175rem;
      }
    }
    .faq-detail {
      background: #202327;
      height: 632px;
      border-radius: 26px;
      padding: 16px;
      .text {
        background: darken($primary-color, 10);
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
        img {
          max-width: 50px;
          margin-top: 10px;
        }
      }
      .answer {
        display: flex;
        align-items: flex-start;
        flex-direction: row-reverse;
        margin-top: 26px;
        .doctor-info {
          display: flex;
          background: #fff;
          color: #aaa;
          border-radius: 12px;
          align-items: center;
          padding: 14px 8px;
          justify-content: space-between;
          margin-bottom: 20px;
          .doctor-name {
            display: flex;
            flex-direction: column;
            span:first-child {
              color: $primary-color;
              font-size: 1.175rem;
            }
            span:last-child {
              font-size: 0.875rem;
            }
          }
          .doctor-code {
            display: flex;
            align-items: center;
            flex: 0 0 50%;
            justify-content: flex-end;
            font-size: 0.925rem;
            img {
              max-width: 40px;
              margin-right: 8px;
            }
            span {
              font-size: 1rem;
              color: darken($green-color, 20);
            }
          }
        }
        .text {
          background: darken($green-color, 20);
          margin-left: 24px;
          &::before {
            right: 100%;
            left: auto;
            border-left: none;
            border-right: 12px solid darken($green-color, 20);
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
  .swiper-button-prev {
    background-image: url(~assets/img/arrow_right.png);
    width: 44px;
    height: 44px;
    background-size: 100%;
  }
  .swiper-button-next {
    background-image: url(~assets/img/arrow_left.png);
    width: 44px;
    height: 44px;
    background-size: 100%;
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
    .ps__thumb-y {
      right: 5px;
      background-color: $green-color;
    }
  }
}
</style>
<template>
  <section id="speciality">
    <div class="header">
      <div class="banner"></div>
      <v-container>
        <h3>تخصص قلب و عروق</h3>
        <h4>cardiology & carcivasclue section</h4>
        <p>کاردیولوژی یا پزشکی قلب یک تخصص در پزشکی است که با اختلالات قلب سر و کار دارد. این رشته شامل تشخیص پزشکی و درمان اختلالات مادرزادی قلب، بیماریهای عروق کرونر، نارسایی قلب، بیماریهای دریچه ای قلب و الکتروفیزیولوژی است. پزشکان متخصص قلب و عروق، کاردیولوژیست یا متخصص قلب و عروق خوانده می شوند. پزشکانی که در زمینه جراحی قلب تخصص دارند جراح قلب خوانده می شوند.</p>
      </v-container>
    </div>
    <div class="icons">
      <div class="items">
        <div class="item">
          <img src="~assets/img/icons/info.png" alt>
          <span>معرفی‌تخصص</span>
        </div>
        <div class="item">
          <img src="~assets/img/icons/physician.png" alt>
          <span>پزشکان مرتبط</span>
        </div>
        <div class="item">
          <img src="~assets/img/icons/blog.png" alt>
          <span>مقالات مرتبط</span>
        </div>
        <div class="item">
          <img src="~assets/img/icons/faq.png" alt>
          <span>پرسش و پاسخ</span>
        </div>
        <div class="item">
          <img src="~assets/img/icons/critical_condition.png" alt>
          <span>شرایط اورژانسی</span>
        </div>
      </div>
    </div>
    <v-container class="section-container">
      <section class="info-section">
        <h2 class="section-title">
          <img src="~assets/img/icons/info.png" alt>
          <span>معرفی تخصص</span>
        </h2>
        <v-layout row wrap>
          <v-flex md6 pa-4>
            <h3>۱. تخصص قلب و عروق چیست؟</h3>
            <div>
              <p>اردیولوژی یا پزشکی قلب یک تخصص در پزشکی است که با اختلالات قلب سر و کار دارد. این رشته شامل تشخیص پزشکی و درمان اختلالات مادرزادی قلب، بیماریهای عروق کرونر، نارسایی قلب، بیماریهای دریچه ای قلب و الکتروفیزیولوژی است. پزشکان متخصص قلب و عروق، کاردیولوژیست یا متخصص قلب و عروق خوانده می شوند. پزشکانی که در زمینه جراحی قلب تخصص دارند جراح قلب خوانده می شوند.</p>
              <p>نجام معاینه منظم فرد توسط متخصص قلب و عروق، یکی از بهترین راه‌های تشخیص بیماری‌های قلبی است، چرا که قبل از ابتلا یا عود بیماری، تشخیص داده می‌شود.</p>
            </div>
          </v-flex>
          <v-flex md6 pa-4>
            <h3>۲. وظایف متخصص قلب و عروق</h3>
            <div>
              <p>درمان بیماری‌های قلب و عروق خونی، انجام آنژیوگرافی، اکو و نیز تعیین موارد لازم برای عمل جراحی قلب به این گروه از پزشکان مرتبط است. عملکرد این رشته کاملا همانند رشته تخصصی قلب و عروق است (متخصصین قلب و عروق) که پس از دوره پزشکی عمومی به دست می‌آید. این رشته فلوشیپ‌های متعددی مثل اکوکاردیوگرافی (تصویربرداری از قلب با امواج صوتی)، اینترونشنال کاردیولوژی (ترمیم قلب و عروق از طریق کاتتر)، بیماری‌های مادرزادی قلب در بالغین، نارسایی قلب، پیس‌میکر (دستگاه ضربان‌ساز قلب) و. . . . نیز دارد.</p>
            </div>
          </v-flex>

          <v-flex md6 pa-4>
            <h3>۳. وظایف متخصص قلب و عروق</h3>
            <div>
              <p>درمان بیماری‌های قلب و عروق خونی، انجام آنژیوگرافی، اکو و نیز تعیین موارد لازم برای عمل جراحی قلب به این گروه از پزشکان مرتبط است. عملکرد این رشته کاملا همانند رشته تخصصی قلب و عروق است (متخصصین قلب و عروق) که پس از دوره پزشکی عمومی به دست می‌آید. این رشته فلوشیپ‌های متعددی مثل اکوکاردیوگرافی (تصویربرداری از قلب با امواج صوتی)، اینترونشنال کاردیولوژی (ترمیم قلب و عروق از طریق کاتتر)، بیماری‌های مادرزادی قلب در بالغین، نارسایی قلب، پیس‌میکر (دستگاه ضربان‌ساز قلب) و. . . . نیز دارد.</p>
            </div>
          </v-flex>
          <v-flex md6 pa-4>
            <h3>۴. تخصص قلب و عروق چیست؟</h3>
            <div>
              <p>اردیولوژی یا پزشکی قلب یک تخصص در پزشکی است که با اختلالات قلب سر و کار دارد. این رشته شامل تشخیص پزشکی و درمان اختلالات مادرزادی قلب، بیماریهای عروق کرونر، نارسایی قلب، بیماریهای دریچه ای قلب و الکتروفیزیولوژی است. پزشکان متخصص قلب و عروق، کاردیولوژیست یا متخصص قلب و عروق خوانده می شوند. پزشکانی که در زمینه جراحی قلب تخصص دارند جراح قلب خوانده می شوند.</p>
              <p>نجام معاینه منظم فرد توسط متخصص قلب و عروق، یکی از بهترین راه‌های تشخیص بیماری‌های قلبی است، چرا که قبل از ابتلا یا عود بیماری، تشخیص داده می‌شود.</p>
            </div>
          </v-flex>
        </v-layout>
      </section>
      <section class="physician-section">
        <h2 class="section-title">
          <img src="~assets/img/icons/physician.png" alt>
          <span>پزشکان مرتبط</span>
        </h2>
        <v-layout row wrap>
          <v-flex pa-4 md5>
            <div class="doctor-count">
              <div>
                <span>تعداد پزشکان :</span>
                <span>{{235 | persianDigit}}</span>
              </div>
              <div>
                <span>تعداد پزشکان :</span>
                <span>{{209 | persianDigit}}</span>
              </div>
            </div>
            <div class="doctor-list">
              <div class="list-header">
                <img src="~assets/img/icons/doctor-list.png" alt>
                <div>مشاهده لیست همه پزشکان مرتبط</div>
              </div>
              <no-ssr>
                <vue-custom-scrollbar
                  class="scroll-area"
                  :settings="{maxScrollbarLength: 30,scrollXMarginOffset:15,suppressScrollX:true}"
                >
                  <div class="items">
                    <div class="item" v-for="(item,index) in 10" :key="index">
                      <div class="doctor-image">
                        <img src="/img/doc-placeholder.png" alt>
                      </div>
                      <div class="doctor-info">
                        <div class="detail">
                          <span class="name">دکتر لیدا عسگری {{index}}</span>
                          <span class="speciality">متخصص قلب و عروق</span>
                        </div>
                        <div class="divider"></div>
                        <div class="code">
                          <span>کد رسا</span>
                          <span>{{7002 | persianDigit}}</span>
                        </div>
                      </div>
                      <div class="doctor-action">
                        <v-btn fab dark small color="primary">
                          <v-icon>fa-eye</v-icon>
                        </v-btn>
                        <v-btn fab dark small color="#43e7a5">
                          <v-icon>fa-phone</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                </vue-custom-scrollbar>
              </no-ssr>
            </div>
          </v-flex>
          <v-flex pa-4 md7>
            <div class="swiper-title">دسترسی سریع به پزشکان پاسخگو</div>
            <div v-swiper:mySwiper="swiperOption" dir="rtl">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(comment, index) in 10" :key="index">
                  <div class="image">
                    <img src="/img/doc-placeholder.png" alt>
                  </div>
                  <div class="name">دکتر مهران رضوی</div>
                  <div class="speciality">متخصص قلب و عروق</div>
                  <div class="code">
                    <span>کد رسا:</span>
                    <span>{{7002 | persianDigit}}</span>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </div>
          </v-flex>
        </v-layout>
      </section>
      <section class="blog-section">
        <h2 class="section-title">
          <img src="~assets/img/icons/blog.png" alt>
          <span>مقالات مرتبط</span>
        </h2>
        <div class="swiper-parent">
          <div v-swiper:mySwiper2="blog_swiper" dir="rtl">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(comment, index) in 10" :key="index">
                <div class="image">
                  <img src="~assets/img/blog_placeholder.jpg" alt>
                </div>
                <div class="content">
                  <div class="blog-title">حفاظت سلامت قلب با ورزش</div>
                  <div class="date">{{'2019-02-21' | persianDate | persianDigit}}</div>
                  <div
                    class="summary"
                  >علائم بیماری های آلرژی به علت فعال شدن سیستم ایمنیو واکنش آن به مواد عمدتا بی ضرر ...</div>
                  <div class="footer">
                    <div>
                      <div>
                        <v-icon>fa-user</v-icon>
                        <span>نویسنده</span>
                      </div>
                      <div>
                        <v-icon>fa-comment</v-icon>
                        <span>{{205 | persianDigit}}</span>
                      </div>
                      <div>
                        <v-icon>fa-heart-o</v-icon>
                        <span>{{1400 | persianDigit}}</span>
                      </div>
                    </div>
                    <div>
                      <v-btn fab dark small color="primary">
                        <v-icon>fa-eye</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </div>
        </div>
      </section>
      <section class="faq-section">
        <h2 class="section-title">
          <img src="~assets/img/icons/faq.png" alt>
          <span>پرسش و پاسخ</span>
        </h2>
        <v-layout row wrap>
          <v-flex pa-4 md5>
            <div class="faq-list">
              <no-ssr>
                <vue-custom-scrollbar
                  class="scroll-area"
                  :settings="{maxScrollbarLength: 30,scrollXMarginOffset:15,suppressScrollX:true}"
                >
                  <div class="items">
                    <div
                      class="item"
                      :class="{active:active_item == item}"
                      v-for="(item,index) in 10"
                      :key="index"
                      @click="active_item = item"
                    >
                      <div class="item-index">{{index+1 | persianDigit}}</div>
                      <div
                        class="item-summary"
                      >آیا در صورت داشتن احساس درد در قفسه سینه, ناحیه پشت و دست چپ می بایست حتما به پزشک ...</div>
                    </div>
                  </div>
                </vue-custom-scrollbar>
              </no-ssr>
            </div>
          </v-flex>
          <v-flex pa-4 md7>
            <div class="faq-detail">
              <div class="question">
                <div class="image">
                  <img src="~assets/img/user_placeholder.png" alt>
                </div>
                <div
                  class="text"
                >آیا در صورت داشتن احساس درد در قفسه سینه, ناحیه پشت و دست چپ می بایست حتما به پزشک مراجعه نمود یا مصرف دارو برای کاهش درد کافیست؟</div>
              </div>
              <div class="answer">
                <div class="image">
                  <img src="~static/img/doc-placeholder.png" alt>
                  <span>دکتر راهله برومند</span>
                </div>
                <div class="text">
                  <div class="doctor-info">
                    <div class="doctor-name">
                      <span>دکتر راهله برومند</span>
                      <span>متخصص قلب و عروق</span>
                    </div>
                    <div class="doctor-code">
                      کد رسا :
                      <span>7002</span>
                      <img src="~assets/img/fingerprint.png" alt>
                    </div>
                  </div>
                  <div>
                    با سلام,
                    در صورتی که درد به صورت مداوم بوده و یا در بازه هایی با فاصله کوتاه از یکدیگر تکرار می گردند حتما لازم است به نزدیکترین اورژانس مراجعه بفرمایید و درخواست نوار قلبی کنید و پس از اطمینان از وجود یا عدم وجود شرایط اورژانسی به پزشک مرتبط مراجعه بفرمایید.
                  </div>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </section>
    </v-container>
  </section>
</template>
<script>
export default {
  layout: "speciality",
  data() {
    return {
      active_item: null,
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
      }
    };
  }
};
</script>
