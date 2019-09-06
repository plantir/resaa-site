<style lang="scss" >
:root {
  --grey-color: #969696;
}
#doctor-detail {
  .v-card {
    padding: 40px 20px;
    border-radius: 30px;
    position: relative;
  }
  .title {
    color: var(--grey-color);
    font-size: 18px !important;
    font-weight: 500;
    margin-bottom: 16px;
  }
  section + section {
    margin-top: 28px;
  }
}
</style>

<template>
  <div id="doctor-detail">
    <v-container>
      <Info :doctor="doctor" />
      <Call />
      <Why />
      <Address :doctor="doctor" />
    </v-container>
    <v-container fluid class="pa-0">
      <RelatedDoctors :doctor="doctor" />
      <Comments />
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
export default {
  head() {
    return {
      title: this.title,
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
          hid: "canonical",
          property: "canonical",
          content: this.og.canonical
        },
        {
          hid: "description",
          property: "description",
          content: this.description
        }
      ]
    };
  },
  components: { Info, Call, Why, Address, RelatedDoctors, Comments, Social },
  async asyncData({ store, params, $axios, isClient }) {
    // if (isClient) {
    //   return window.location.reload;
    // }
    let fields =
      "id,firstName,lastName,imagePath,currentlyAvailable,subscriberNumber,specialty,tags,expertise,title,workplaces,medicalCouncilNumber";
    let res = await $axios.$get(`/Doctors/${params.id}?fields=${fields}`);
    let doctor = res.result.doctor;
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
    let description = `با استفاده از سامانه رسا می توانید در کوتاه ترین زمان ممکن، مستقیما با دکتر ${doctor.firstName}  ${doctor.lastName} متخصص ${doctor.specialty.title} تماس تلفنی برقرار کنید و به پاسخ سوالات خود برسید.`;
    let og = {
      image:
        "https://webapi.resaa.net/" + doctor.imagePath ||
        "/img/doc-placeholder.png",
      site_name: `رسا : دکتر ${doctor.firstName} ${doctor.lastName}`,
      title: `تخصص : ${doctor.specialty.title}`,
      description: `کد رسا : ${doctor.subscriberNumber}`,
      canonical: `${process.env.SITE_URL}/doctors/${doctor.subscriberNumber}`
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
      og: og
    };
  },
  mounted() {
    // this.$axios.get('/api')
    setTimeout(() => {
      if (process.client && !this.hideMap) {
        this.$refs.mapRef.$mapPromise.then(map => {
          var bounds = new google.maps.LatLngBounds();
          for (let location of this.locations) {
            bounds.extend({
              lat: parseFloat(location.lat),
              lng: parseFloat(location.lng)
            });
          }
          map.fitBounds(bounds);
        });
      }
    }, 100);
    if (this.user) {
      this.$axios
        .get(`/Doctors/${this.$route.params.id}/CommunicationQuote`, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        })
        .then(res => {
          this.duration = res.data.result.quote.duration;
        });
    }
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

