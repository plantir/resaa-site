<style lang="scss" scoped>
.custom-container {
  max-width: 1200px;
  margin: 0 auto;
}
.header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
  h1 {
    position: absolute;
    top: 153px;
    right: 120px;
    font-size: 28px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 80px;
      font-size: 20px;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
  }
  span {
    position: absolute;
    top: 230px;
    right: 130px;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    @include media(sm) {
      top: 130px;
      font-size: 20px;
      right: 0;
      left: 0;
      text-align: center;
      font-weight: normal;
    }
  }
}
.breadcrumbs {
  display: flex;
  align-items: center;
  padding-right: 16px;
  @include media(sm) {
    padding-right: 0px;
    justify-content: center;
  }
  a {
    color: #707070;
    display: flex;
    &:hover {
      color: $primary-color;
    }
  }
  .v-icon {
    color: #a9a9a9;
    font-size: 18px;
  }
}
.card-title {
  color: #707070;
  font-weight: 500;
  margin-bottom: 4px;
  @include media(sm) {
    text-align: center;
  }
}
.card-subtitle {
  color: #707070;
  font-weight: normal;
  margin-bottom: 40px;
  font-size: 15px;
  @include media(sm) {
    text-align: center;
  }
}
.item + .item {
  margin-top: 16px;
}
.card {
  border-radius: 30px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px 0;
  padding: 30px 60px;
  background: #fff;
  @include media(sm) {
    padding: 30px 16px;
  }
}
.comments-wrapper {
  background: #fff;
  padding: 30px 0;
  h2 {
    text-align: center;
    color: #999999;
    font-weight: 500;
    margin-bottom: 40px;
    font-size: 21px;
  }
}
</style>
<template>
  <section>
    <div class="header">
      <img
        v-if="$device.isDesktop"
        src="~assets/img/speciality_bg.png"
        alt="مشاوره تلفنی با متخصص روانشناسی"
      />
      <img
        v-else
        src="~assets/img/speciality_bg_mobile@2x.png"
        alt="مشاوره تلفنی با متخصص روانشناسی"
      />
      <h1>مشاوره تلفنی با متخصص روانشناسی</h1>
      <transition name="fade" mode="out-in">
        <span :key="text_array[header_text]">{{text_array[header_text]}}</span>
      </transition>
    </div>
    <v-container class="py-0">
      <div class="custom-container">
        <div class="breadcrumbs">
          <nuxt-link to="/">سامانه رسا</nuxt-link>
          <span>
            <v-icon>chevron_left</v-icon>
          </span>
          <nuxt-link :to="$route.fullPath">مشاوره تلفنی با متخصص روانشناس</nuxt-link>
        </div>
        <div class="card">
          <h2 class="card-title">لیست متخصصین روانشناسی</h2>
          <p
            class="card-subtitle"
          >می توانید در این بخش لیست مشاوران روانشناسی سامانه رسا را مشاهده کنید و مشاور مورد نظر خود را انتخاب کنید.</p>
          <div
            class="item"
            v-for="doctor in sorted_doctors.slice(0,3)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
          <Guide />
          <div
            class="item"
            v-for="doctor in sorted_doctors.slice(3,6)"
            :key="doctor.subscriberNumber"
          >
            <Doctor :doctor="doctor" />
          </div>
        </div>
      </div>
    </v-container>
    <v-container class="comments-wrapper" fluid>
      <h2>
        نظر همراهان رسا در
        <br class="hide-md-and-up" />مورد مشاوره تلفنی روانشناسی
      </h2>
      <Comments />
    </v-container>
    <v-container>
      <div class="custom-container">
        <Description />
      </div>
    </v-container>
  </section>
</template>
<script>
import Wave from "@/assets/svg/speciality_wave.svg?inline";
import doctors from "@/components/doctor_detail/doctors";

import Doctor from "@/components/specialities/doctor";
import Guide from "@/components/specialities/guide";
import Comments from "@/components/specialities/comments";
import Description from "@/components/specialities/description";
export default {
  layout: "speciality",
  components: { Wave, Doctor, Guide, Comments, Description },
  head() {
    return {
      title: this.title,
      __dangerouslyDisableSanitizers: ["script"],
      link: [
        { rel: "canonical", href: `${process.env.SITE_URL}${this.$route.path}` }
      ],
      script: [
        {
          innerHTML: JSON.stringify(this.main_schema),
          type: "application/ld+json"
        },
        {
          innerHTML: JSON.stringify(this.doctors_schema),
          type: "application/ld+json"
        },
        {
          innerHTML: JSON.stringify(this.faq_schema),
          type: "application/ld+json"
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  asyncData(ctx) {
    let sorted_doctors = ctx.app.$virtual_doctors
      .filter(item => item.currentlyAvailable)
      .sort(() => {
        return 0.5 - Math.random();
      });
    sorted_doctors.push(
      ...ctx.app.$virtual_doctors
        .filter(item => !item.currentlyAvailable)
        .sort(() => {
          return 0.5 - Math.random();
        })
    );
    if (sorted_doctors.length < 6) {
      sorted_doctors.push(
        ..._.sampleSize(notavailable, 6 - sorted_doctors.length)
      );
    }
    return {
      title: "مشاوره تلفنی با متخصص روانشناسی",
      description: `دریافت مشاوره تلفنی روانشناسی فقط در سامانه رسا، با کمترین هزینه، بدون دریافت نوبت، بدون رفت و آمد، بدون انتظار و با بهترین مشاوران`,
      text_array: [
        "از هر کجای ایران!",
        "با بهترین مشاوران!",
        "با کمترین هزینه!",
        "بدون رفت و آمد!",
        "بدون انتظار و نوبت!",
        "بدون نیاز به اینترنت!",
        "هر زمان که بخواهید!",
        "محرمانه و ناشناس!",
        "بدون نیاز به گوشی هوشمند!"
      ],
      header_text: 0,
      sorted_doctors: sorted_doctors,
      main_schema: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "سامانه رسا",
            item: "https:/resaa.net"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "مشاوره تلفنی با متخصص روانشناس",
            item: "https://resaa.net/doctors/psychology/"
          }
        ]
      },
      doctors_schema: {
        "@context": "http://schema.org",
        "@type": "ItemList",
        name: "لیست متخصصین روانشناسی",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://resaa.net/doctors/psychology/7106",
              name: "دکتر مینا حسینی سده",
              image: {
                "@type": "ImageObject",
                url: "https://webapi.resaa.net/Doctors/17106/Image"
              }
            }
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://resaa.net/doctors/psychology/7265",
              name: "دکتر اکرم صادقی",
              image: {
                "@type": "ImageObject",
                url: "https://webapi.resaa.net/Doctors/17265/Image"
              }
            }
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://resaa.net/doctors/psychology/7830",
              name: "دکتر فتانه محمدی",
              image: {
                "@type": "ImageObject",
                url: "https://webapi.resaa.net/Doctors/17830/Image"
              }
            }
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@id": "https://resaa.net/doctors/psychology/7155",
              name: "دکتر ندا نعیمی",
              image: {
                "@type": "ImageObject",
                url: "https://webapi.resaa.net/Doctors/17155/Image"
              }
            }
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@id": "https://resaa.net/doctors/psychology/7305",
              name: "دکتر بهنوش ده‌آرا",
              image: {
                "@type": "ImageObject",
                url: "https://webapi.resaa.net/Doctors/17305/Image"
              }
            }
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@id": "https://resaa.net/doctors/psychology/7594",
              name: "دکتر ملیحه طباطبائی",
              image: {
                "@type": "ImageObject",
                url: "https://webapi.resaa.net/Doctors/17594/Image"
              }
            }
          }
        ]
      },
      faq_schema: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "چرا مشاوره روانشناسی؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: `با پیشرفت روزافزون علم پزشکی سطح سلامت همه ما به طرز چشم گیری بهبود یافته است، به طوری که متوسط طول عمر افراد فقط در نیم قرن گذشته ده سال افزایش داشته است. با این حال پیشرفت فناوری و تغییرات سبک زندگی باعث بروز فشار های روانی و افزایش استرس و اضطراب در انسان امروزی شده است به نحوی که آمار ها نشان می دهد سطح اضطراب یک فرد نرمال نسبت به 7 دهه پیش نزدیک به سه برابر شده است. در چنین شرایطی است که با مشاوره روانشناسی با یک مشاور دلسوز می‌توانیم راحت تر از پس مشکلات برآمده و آسایش را به زندگی خود بازگردانیم.`
            }
          },
          {
            "@type": "Question",
            name: "آیا شما به مشاوره روانشناسی نیاز دارید؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: `خیلی ها ترجیح می دهند مشکلات زندگی خود را به تنهایی حل کنند و تا جای ممکن کسی نباشند که به روانشناس مراجعه کرده. حتی اگر شما هم با مشاوره مشکلی نداشته باشید، حتما افرادی را اطراف خود می شناسید که معتقدند مشاوره روانشناسی فقط برای افرادیست که مشکلات خیلی حاد دارند و به اصطلاح روانی شده اند!
            اما حقیقت این است که مشاوره روانشناسی به شما کمک می کند ذهن خود را بهتر بشناسید و بتوانید افکار و رفتار و احساست خود را بهتر بررسی کرده و مدیریت کنید. به کمک مشاور می توانید از دست احساسات و افکار آزار دهنده خود رها شوید و به خود و زندگی تان حس بهتری داشته باشید. اتفاقا همین که شما به توانایی خودتان در حل مشکلات باور دارید یعنی با راهنمایی مشاور می توانید به سرعت از پس افکار و احساسات خود بر آیید.`
            }
          },
          {
            "@type": "Question",
            name: "انواع روش های مشاوره روانشناسی",
            acceptedAnswer: {
              "@type": "Answer",
              text: `اید مهم ترین قسمت یک مشاوره ارتباطی است که بین شما و متخصص برقرار می شود. در عصر ارتباطات راه های مختلفی برای برقراری این ارتباط بین شما و مشاور وجود دارد که هر کدام نسبت به دیگری مزایا و معایبی دارد که در ادامه بررسی می کنیم:
            <a href='https://resaa.net/doctors/psychology/'>مشاوره روانشناسی حضوری</a>
            <a href='https://resaa.net/doctors/psychology/'>مشاوره روانشناسی تلفنی</a>
            <a href='https://resaa.net/doctors/psychology/'>مشاوره روانشناسی آنلاین</a>`
            }
          },
          {
            "@type": "Question",
            name: "محبوب ترین زمینه های مشاوره روانشناسی کدام اند؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: `خدمات مشاوره روانشناسی برای طیف گسترده ای از مسائل و مشکلات قابل استفاده اند. این مسائل بر اساس ماهیت آن به زمینه های زیر تقسیم می شوند:
            مشاوره خانواده و روابط زناشویی این حوزه عموما به بررسی مسائل ارتباطی بین افراد خانواده خصوصا زوج ها می پردازد.
            مشاوره ازدواج و پیش از ازدواج این حوزه عموما به بررسی تطابق روحیات و خصوصیات افرادی که تصمیم به ازدواج دارند میپردازد و به زوج های جوان راهکارهایی جهت انتخابی موفق و ازدواجی پایدار ارائه می کند.
            مشاوره فردی در این حوزه عموما افرادی که مشکلاتی از جمله اضطراب و استرس، افسردگی، کمبود اعتماد به نفس، وسواس و سایر اختلالات فردی دارند به کمک مشاور به بررسی روش های کنترل احساسات و افکار خود می پردازند.
            مشاور مادر، کودک و فرزند پروری در این حوزه مشاوران از زمان بارداری تا پس از زایمان برای مشکلاتی چون افسردگی های دوران بارداری و پس از زایمان به یاری مراجعین می پردازند. این حوزه همچنین برای تربیت موفق تر کودکان از سنین شیرخوارگی تا نوجوانی راهکار های به روز ارائه می دهند تا ارتباط مطلوب تری بین کودک و والدین شکل بگیرد.`
            }
          },
          {
            "@type": "Question",
            name: "مشاور روانشناس خوب کیست؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: `مشاور خوب، به دقت و با حوصله گوش می دهد قطعا مشاور برای اینکه درک درستی از دغدغه ها و مسائل شما پیدا کند لازم است به دقت به صحبت ها و درد دل شما توجه کند. همچنین مشاوری که صبورانه فرصت را در اختیار شما قرار دهد ارتباط صمیمانه تری می سازد.
            مشاور خوب همدل است برای همه ما پیش آمده است که موضوعی ذهنمان را درگیر کرده باشد و همین که آن را با دیگران مطرح کنیم به جای همدلی و همدردی مورد سرزنش و تحقیر دیگران واقع شویم. یک مشاور خوب کسی را قضاوت یا سرزنش نمی کند، تمام هم و غم اش این است که به ما کمک کند به افکار و احساسات خود مسلط شده و با راهکار های عملی قدمی در جهت رفع مشکلات خود برداریم.`
            }
          },
          {
            "@type": "Question",
            name: "روند مشاوره روانشناسی چگونه است؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: `زمانی که برای اولین بار به روان‌شناس مراجعه می‌کنید باید انتظار این را داشته باشید که او سوالاتی درباره مشکلتان و جزئیاتی از تاریخچه زندگی شخصی‌تان بپرسد. این سوالات معمولا شامل مواردی همچون زمان شروع مشکل، چه چیزهایی باعث بهتر و بدتر شدن آن می‌شود و اینکه این مشکل چه تأثیری در کار و زندگی اجتماعی شما می‌گذارد.
            همچنین سوالاتی تجربیات شما در حین رشد، تحصیلات و شغل، وضعیت تأهل و روابط بین فردی و اینکه داروی خاصی مصرف می‌کنید این مرحله جمع‌آوری اطلاعات است و ممکن است چندین جلسه طول بکشد و سپس توسط آزمون‌های روان‌شناختی درمانی را در قالب مشاوره یا روان‌درمانی ارائه خواهد داد. به یاد داشته باشید که روان‌شناس در هیچ شرایطی اجازه ندارد دارو تجویز کند.`
            }
          },
          {
            "@type": "Question",
            name: "روند مشاوره روانشناسی تلفنی در سامانه رسا چگونه است؟",
            acceptedAnswer: {
              "@type": "Answer",
              text: `یکی از چالش هایی که افراد هنگام مشاوره روانشناسی تلفنی با آن مواجه می شدند، محدودیت استفاده از خدمات مشاوره با استفاده از موبایل بوده که سامانه رسا با ایجاد بستری هوشمند، راهکاری مناسب برای تسهیل این روند ارائه کرده است.
            شما عزیزان میتوانید در هر ساعت از شبانه روز با بهترین و با تجربه ترین مشاورین روانشناس، ارتباط مستقیم تلفنی برقرار کرده و متناسب با مدت زمان مکالمه ی خود هزینه ی آن را پرداخت کنید.`
            }
          }
        ]
      }
    };
  },
  mounted() {
    setInterval(() => {
      if (this.header_text == this.text_array.length - 1) {
        this.header_text = 0;
      } else {
        this.header_text = this.header_text + 1;
      }
    }, 4000);
  }
};
</script>