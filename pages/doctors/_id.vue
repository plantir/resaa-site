<style lang="scss" scoped>
h1 {
  display: inline-block;
  font-size: 1.75rem;
  font-weight: 500;
}
p {
  margin-bottom: 0;
}
.doctor-profile-container {
  background: white;
  padding: 60px 90px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.doctor-avatar {
  direction: rtl;
  border: 3.5px solid white;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.14);
  margin-left: 40px;
  float: right;
}

.doctor-avatar-image {
  img {
    max-width: 170px;
    border-radius: 5px 5px 0 0;
    margin: auto 0;
  }
}

.doctor-resaa-info {
  direction: rtl;
  color: white;
  background-color: $tealish;
  border-radius: 0 0 5px 5px;
  padding: 10px 20px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    path {
      fill: #fff;
    }
  }
}

.doctor-resaa-code {
  display: inline-block;
}

.doctor-info {
  align-self: flex-end;
  direction: rtl;
  width: 100%;
  position: relative;
  a {
    margin: 0 4px;
  }
}
.call_button {
  @include media(md-and-down) {
    margin: 30px 0;
    position: relative;
  }
  position: absolute;
  left: 0;
  top: 0;
}
.doctor-name {
  font-size: 1.75rem;
  font-weight: 500;
  color: $dark-blue-grey;
  margin-bottom: 10px;
}

.doctor-is-available {
  display: inline-block;
  color: $tealish;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
}
.doctor-is-unavailable {
  display: inline-block;
  color: $red;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 10px;
}

.doctor-specialty {
  font-size: 1.175rem;
  font-weight: 400;
  color: $dark-blue-grey;
}

.specialty-area-container {
  padding: 10px 0;
}

.specialty-area {
  display: inline-block;
  padding: 5px 12px;
  margin-left: 5px;
  border-radius: 4px;
  color: white;
  background-color: $tealish;
  text-align: center;
  font-size: 1.175rem;
  font-weight: 400;
}

.doctor-np {
  color: #7e86a6;
  font-size: 1.175rem;
  margin-bottom: 7px;
}

.doctor-np-code {
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 400;
  color: $dark-blue-grey;
}

.available-time-container {
  color: #7e86a6;
  font-size: 1.175rem;
  margin-bottom: 7px;
  a {
    color: #0095e2;
  }
}

.available-time {
  display: inline-block;
  font-size: 1.175rem;
  font-weight: 400;
  color: $dark-blue-grey;
  margin-left: 4px;
}

.available-time-unit {
  display: inline-block;
  font-size: 1.175rem;
  font-weight: 400;
  color: $dark-blue-grey;
}

.available-time-description {
  color: #7e86a6;
  font-size: 1.175rem;
  display: flex;

  i {
    font-size: 0.925rem;
    color: $light-gold;
    margin-left: 5px;
    margin-top: 5px;
  }

  div {
    float: left;
    width: 95%;

    div {
      float: none;
      margin-bottom: 5px;
    }
  }

  a {
    color: #0095e2;
    transition: color 0.5s;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      color: $bright-sky-blue;
    }
  }
}

.doctor-contact-container {
  font-size: 1.175rem;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #7e86a6;
}

.doctor-address-container {
  direction: rtl;
  margin-bottom: 5px;

  div {
    display: inline;
  }
}

.doctor-address {
  color: $dark-blue-grey;
}

.doctor-phone-container {
  direction: rtl;
  margin-bottom: 5px;

  div {
    display: inline-block;
  }
}

.doctor-phone {
  color: $dark-blue-grey;
}
.time-table-wrapper {
  h2 {
    margin-bottom: 1.75rem;
    font-size: 1.2rem;
  }
  width: 100%;
  margin: 60px 0;
}
.doctor-map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  border: 3.5px solid white;
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(10, 10, 10, 0.14);

  iframe {
    width: 100%;
    height: 100%;

    html > body {
      background: none !important;
    }
  }
}

@media only screen and (max-width: 1150px) {
  .doctor-profile-container {
    padding: 30px 45px;
  }
}

@media only screen and (max-width: 1000px) {
  .doctor-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .doctor-avatar {
    float: none;
    margin: 0;
  }

  .doctor-avatar-image img {
    max-width: 200px;
  }

  .doctor-contact-container {
    text-align: center;
  }
}

@media only screen and (max-width: 500px) {
  .doctor-profile-container {
    padding: 20px;
  }
}
</style>

<template>
  <v-container>
    <no-ssr></no-ssr>
    <no-ssr v-if="ajaxLoading">
      <v-loading mode="relative"></v-loading>
    </no-ssr>
    <div v-else class="doctor-profile-container">
      <div class="doctor-info">
        <div class="doctor-avatar">
          <div class="doctor-avatar-image">
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
          <div class="doctor-resaa-info">
            <phone />
            <!-- <i class="fa fa-phone-square"></i> -->
            <div>
              کد رِسا:
              <p class="doctor-resaa-code">{{doctor.subscriberNumber | persianDigit}}</p>
            </div>
          </div>
        </div>
        <div class="doctor-info-container">
          <div class="doctor-name">
            <h1>{{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}</h1>
            <p v-if="doctor.currentlyAvailable" class="doctor-is-available">(در دسترس)</p>
            <p v-else class="doctor-is-unavailable">(در دسترس نمی باشد)</p>
          </div>
          <p v-if="doctor.specialty" class="doctor-specialty">
            تخصص:
            <strong>{{doctor.specialty.title}}</strong>
          </p>
          <div class="specialty-area-container">
            <div v-for="tag in doctor.tags" :key="tag.id" class="specialty-area">{{tag.title}}</div>
          </div>
          <div class="doctor-np">
            کد نظام پزشکی:
            <p class="doctor-np-code">{{doctor.medicalCouncilNumber || '-'}}</p>
          </div>
          <div v-if="user" class="available-time-container">
            مدت زمان قابل گفتگو:
            <div class="available-time">{{duration}}</div>
            <div class="available-time-unit">دقیقه</div>
          </div>
          <div v-else class="available-time-container">
            <span>مدت زمان قابل گفتگو: برای دیدن مدت زمان مکالمه ابتدا</span>
            <router-link :to="{name:'patient-login'}">وارد سایت</router-link>شوید
          </div>
        </div>
        <callSection class="call_button" :doctor="doctor" :duration="duration"></callSection>
        <div class="available-time-description">
          <i class="fa fa-circle"></i>
          <div>
            <p>
              <span>این زمان براساس میزان</span>
              <router-link v-if="user" :to="{name:'patient-profile'}">شارژ فعلی</router-link>
              <router-link v-else :to="{name:'patient-login'}">شارژ فعلی</router-link>
              <span>شما محاسبه شده است.</span>
            </p>
            <p>
              <span>می‌توانید از طریق</span>
              <router-link :to="{name:'charge'}">خرید شارژ اینترنتی</router-link>اعتبار خود را افزایش دهید.
            </p>
          </div>
        </div>
      </div>
      <div class="doctor-contact-container">
        <div v-for="(workplace,index) in doctor.workplaces" :key="index">
          <h2>{{workplace.title}}</h2>
          <div class="doctor-address-container">
            <div>آدرس:</div>
            <div class="doctor-address">{{workplace.street}}</div>
          </div>
          <div class="doctor-phone-container">
            <p class="doctor-phone">تلفن: {{workplace.phoneNumber | persianDigit}}</p>
          </div>
          <p>{{workplace.description}}</p>
        </div>
      </div>
      <div class="time-table-wrapper">
        <h2>زمان های پاسخگویی</h2>
        <no-ssr>
          <timeTable :close="false"></timeTable>
        </no-ssr>
      </div>
      <!--    
        v-if="showMap"
        :options="{disableDefaultUI: true}"
        :center="center"
        :zoom="15"
      -->
      <div class="doctor-map" v-if="!hideMap">
        <no-ssr>
          <GmapMap
            :center="center"
            :options="{disableDefaultUI: true}"
            :zoom="15"
            ref="mapRef"
            style="width: 100%; height:300px"
          >
            <GmapMarker
              v-for="(position,index) in locations"
              :key="index"
              @click="geo(position)"
              ref="mapMarker"
              :position="position"
            />
          </GmapMap>
        </no-ssr>
      </div>
    </div>
  </v-container>
</template>

<script>
import callSection from "~/components/doctor/call_section/index.vue";
import phone from "~/assets/svg/phone.svg?inline";
import doctors from "~/components/doctor_detail/doctors.js";
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
  components: { callSection, phone },
  async asyncData({ store, params, $axios, isClient, redirect }) {
    // let test_doctor = doctors.find(item => item.subscriberNumber == params.id);
    // if (test_doctor) {
    //   let url = `/doctors/psychology/${test_doctor.subscriberNumber}`;
    //   return redirect(encodeURI(url));
    // }
    // if (isClient) {
    //   return window.location.reload;
    // }
    let fields =
      "id,firstName,lastName,imagePath,currentlyAvailable,subscriberNumber,specialty,tags,expertise,title,workplaces,medicalCouncilNumber";
    let a = await $axios.$get(`/Doctors/${params.id}?fields=${fields}`);
    let doctor = a.result.doctor;
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

