<style lang="scss">
:root {
  --grey-color: #969696;
}
#doctor-detail {
  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding-right: 16px;
    margin-bottom: 8px;
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
  .v-card {
    padding: 40px 20px;
    border-radius: 30px;
    position: relative;
  }
  .section-title {
    color: var(--grey-color);
  }
  .title {
    color: var(--grey-color);
    font-size: 18px !important;
    font-weight: 500;
    margin-bottom: 16px;
  }
  [class*="r-display-"] {
    color: var(--grey-color);
  }
  section + section {
    margin-top: 28px;
    @include media(sm) {
      margin-top: 20px;
    }
  }
  .custom-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4px;
  }
}
</style>

<template>
  <div id="doctor-detail">
    <v-container>
      <div class="custom-container">
        <div class="breadcrumbs">
          <nuxt-link to="/">سامانه رسا</nuxt-link>
          <span>
            <v-icon>chevron_left</v-icon>
          </span>
          <nuxt-link
            :to="`/doctors/${doctor.specialtyEnglishTitle.replace(/ /g, '-')}`"
          >{{ doctor.specialtyTitle }}</nuxt-link>
          <span>
            <v-icon>chevron_left</v-icon>
          </span>
          <nuxt-link :to="$route.fullPath">
            {{ doctor.title }} {{ doctor.firstName }}
            {{ doctor.lastName }}
          </nuxt-link>
        </div>
        <Info :doctor="doctor" />
        <Call :doctor="doctor" />
        <Why />
        <Address v-if="doctor.workplaces && doctor.workplaces.length" :doctor="doctor" />
      </div>
    </v-container>
    <v-container fluid class="pa-0">
      <RelatedDoctors :doctor="doctor" />
      <Comments :doctor="doctor" />
      <Social :doctor="doctor" />
    </v-container>
  </div>
</template>

<script>
import Info from "@/components/doctor_detail/Info";
import Call from "@/components/doctor_detail/Call";
import Why from "@/components/doctor_detail/Why";
import Address from "@/components/doctor_detail/Address";
import RelatedDoctors from "@/components/doctor_detail/RelatedDoctors";
import Comments from "@/components/doctor_detail/Comments";
import Social from "@/components/doctor_detail/Social";
import doctors from "@/components/doctor_detail/doctors.json";
export default {
  head() {
    return {
      title: this.title,
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.schema),
          type: "application/ld+json"
        }
      ],
      link: [{ rel: "canonical", href: this.og.canonical }],
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: this.og.image
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.og.title
        },

        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.og.site_name
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.og.description
        },
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  components: { Info, Call, Why, Address, RelatedDoctors, Comments, Social },
  async asyncData({ app, store, error, params, $axios, isClient }) {
    // if (isClient) {
    //   return window.location.reload;
    // }
    if (isNaN(params.id)) {
      return error({ statusCode: 404, message: "doctor not found" });
    }
    try {
      var { result } = await $axios.$get(`/Doctors/${params.id}/profile`);
    } catch (err) {
      return error({ statusCode: 404, message: "doctor not found" });
    }
    let doctor = result.doctor;

    let locations = [];
    for (let address of doctor.workplaces) {
      if (address.latitude && address.longitude) {
        locations.push({
          lat: address.latitude,
          lng: address.longitude
        });
      }
    }
    let hideMap = false;
    let center = { lat: 10, lng: 10 };
    if (locations.length == 0) {
      hideMap = true;
    } else if (locations.length == 1) {
      center = locations[0];
    }
    let title = `دکتر ${doctor.firstName} ${doctor.lastName} | تماس مستفیم با پزشک در سامانه رسا`;
    let description = `با استفاده از سامانه رسا می توانید در کوتاه ترین زمان ممکن، مستقیما با دکتر ${doctor.firstName}  ${doctor.lastName} متخصص ${doctor.specialtyTitle} تماس تلفنی برقرار کنید و به پاسخ سوالات خود برسید.`;
    let og = {
      image:
        "https://webapi.resaa.net/" + doctor.imagePath ||
        "/img/doc-placeholder.png",
      site_name: `رسا : دکتر ${doctor.firstName} ${doctor.lastName}`,
      title: `تخصص : ${doctor.specialtyTitle}`,
      description: `کد رسا : ${doctor.subscriberNumber}`,
      canonical: `${process.env.SITE_URL}/doctors/${doctor.specialtyEnglishTitle}/${doctor.subscriberNumber}`
    };
    return {
      doctor: doctor,
      ajaxLoading: false,
      duration: null,
      hideMap: hideMap,
      title: title,
      description: description,
      center: { lat: 10, lng: 10 },
      locations: locations,
      og: og,
      schema: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        breadcrumb: {
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
              name: doctor.specialtyTitle,
              item: `https://resaa.net/doctors/${doctor.specialtyEnglishTitle}/`
            },
            {
              "@type": "ListItem",
              position: 3,
              name: `دکتر ${doctor.firstName} ${doctor.lastName}`,
              item: `https://resaa.net/doctors/${doctor.specialtyEnglishTitle}/${doctor.subscriberNumber}`
            }
          ]
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `https://webapi.resaa.net/Doctors/${doctor.subscriberNumber}/Image`
        },
        // aggregateRating: {
        //   "@type": "aggregateRating",
        //   ratingValue: "88",
        //   bestRating: "100",
        //   ratingCount: "25"
        // },
        description: doctor.aboutDoctor.map(item => item.title).join(",")
      }
    };
  },
  mounted() {
    // setTimeout(() => {
    //   if (process.client && !this.hideMap) {
    //     this.$refs.mapRef.$mapPromise.then(map => {
    //       var bounds = new google.maps.LatLngBounds();
    //       for (let location of this.locations) {
    //         bounds.extend({
    //           lat: parseFloat(location.lat),
    //           lng: parseFloat(location.lng)
    //         });
    //       }
    //       map.fitBounds(bounds);
    //     });
    //   }
    // }, 100);
    // if (this.user) {
    //   this.$axios
    //     .get(`/Doctors/${this.$route.params.id}/CommunicationQuote`, {
    //       headers: {
    //         Authorization: `Bearer ${this.user.access_token}`
    //       }
    //     })
    //     .then(res => {
    //       this.duration = res.data.result.quote.duration;
    //     });
    // }
  },
  computed: {
    user() {
      return this.$store.state.patient.user;
    }
  },
  methods: {
    geo(address) {
      if (process.client) {
        window.location.href = `geo:${address.longitude},${address.latitude}`;
      }
    }
  }
};
</script>
