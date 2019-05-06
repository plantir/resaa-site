<style lang="scss" scoped>
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

  i {
    margin-left: 4px;
  }
}

.doctor-resaa-code {
  display: inline-block;
}

.doctor-info {
  align-self: flex-end;
  direction: rtl;
  width: 100%;
  a {
    margin: 0 4px;
  }
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
  h3 {
    margin-bottom: 1.75rem;
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
    <no-ssr v-if="ajaxLoading">
      <v-loading mode="relative"></v-loading>
    </no-ssr>
    <div v-else class="doctor-profile-container">
      <div class="doctor-info">
        <div class="doctor-avatar">
          <div class="doctor-avatar-image">
            <img v-if="doctor.imagePath" :src="'https://webapi.resaa.net/'+doctor.imagePath">
            <img v-else src="/img/doc-placeholder.png" alt>
          </div>
          <div class="doctor-resaa-info">
            <i class="fa fa-phone-square"></i>
            کد رِسا:
            <div class="doctor-resaa-code">{{doctor.subscriberNumber | persianDigit}}</div>
          </div>
        </div>
        <div class="doctor-info-container">
          <div class="doctor-name">
            {{doctor.title}} {{doctor.firstName}} {{doctor.lastName}}
            <div v-if="doctor.currentlyAvailable" class="doctor-is-available">(در دسترس)</div>
            <div v-else class="doctor-is-unavailable">(در دسترس نمی باشد)</div>
          </div>
          <div v-if="doctor.specialty" class="doctor-specialty">{{doctor.specialty.title}}</div>
          <div class="specialty-area-container">
            <div v-for="tag in doctor.tags" :key="tag.id" class="specialty-area">{{tag.title}}</div>
          </div>
          <div class="doctor-np">
            کد نظام پزشکی:
            <div class="doctor-np-code">{{doctor.medicalCouncilNumber || '-'}}</div>
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
        <div class="available-time-description">
          <i class="fa fa-circle"></i>
          <div>
            <div>
              <span>این زمان براساس میزان</span>
              <router-link v-if="user" :to="{name:'PatientProfile'}">شارژ فعلی</router-link>
              <router-link v-else :to="{name:'patient-login'}">شارژ فعلی</router-link>
              <span>شما محاسبه شده است.</span>
            </div>
            <div>
              <span>می‌توانید از طریق</span>
              <router-link :to="{name:'Charge'}">خرید شارژ اینترنتی</router-link>اعتبار خود را افزایش دهید.
            </div>
          </div>
        </div>
      </div>
      <div class="doctor-contact-container">
        <div v-for="(workplace,index) in doctor.workplaces" :key="index">
          <h4>{{workplace.title}}</h4>
          <div class="doctor-address-container">
            <div>آدرس:</div>
            <div class="doctor-address">{{workplace.street}}</div>
          </div>
          <div class="doctor-phone-container">
            <div>تلفن:</div>
            <div class="doctor-phone">{{workplace.phoneNumber | persianDigit}}</div>
          </div>
          <div>{{workplace.description}}</div>
        </div>
      </div>
      <div class="time-table-wrapper">
        <h3>زمان های پاسخگویی</h3>
        <no-ssr>
          <timeTable :segments="doctor.timetable.segments"></timeTable>
        </no-ssr>
      </div>
      <div class="doctor-map" v-if="showMap">
        <no-ssr>
          <GmapMap
            ref="mapRef"
            :options="{disableDefaultUI: true}"
            :center="center"
            :zoom="15"
            style="width: 100%; height:300px"
          >
            <GmapMarker
              v-for="(address,index) in doctor.workplaces"
              :key="index"
              @click="geo(address)"
              ref="mapMarker"
              :position="{lat:address.latitude, lng:address.longitude}"
            />
          </GmapMap>
        </no-ssr>
      </div>
    </div>
  </v-container>
</template>

<script>
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
        }
      ]
    };
  },

  async asyncData({ store, params, $axios }) {
    let { data } = await $axios.get(
      `/api/Doctors/${params.id}?fields=firstName,lastName,imagePath,specialty`
    );
    let title = `دکتر ${data.result.doctor.firstName} ${
      data.result.doctor.lastName
    } - شماره تلفن مستقیم - رسا`;
    let og = {
      image:
        "https://webapi.resaa.net/" + data.result.doctor.imagePath ||
        "/img/doc-placeholder.png",
      site_name: `رسا : دکتر ${data.result.doctor.firstName} ${
        data.result.doctor.lastName
      }`,
      title: `تخصص : ${data.result.doctor.specialty.title}`,
      description: `کد رسا : ${params.id}`
    };
    return {
      doctor: null,
      ajaxLoading: true,
      duration: null,
      showMap: true,
      title: title,
      og
    };
  },
  beforeCreate() {
    this.fields =
      "id,firstName,lastName,imagePath,currentlyAvailable,subscriberNumber,specialty,tags,expertise,timetable,title,workplaces,medicalCouncilNumber";
  },
  created() {
    console.log(this.$route);
    this.$axios
      .get(
        `/api/Doctors/${this.$route.params.id}?fields=${
          this.fields
        }&clientTimeZoneOffset=${new Date().getTimezoneOffset()}`
      )
      .then(response => {
        this.ajaxLoading = false;

        this.doctor = response.data.result.doctor;
        if (this.doctor.workplaces.lenght > 1) {
          setTimeout(() => {
            this.$refs.mapRef.$mapPromise.then(map => {
              var bounds = new this.$google.maps.LatLngBounds();
              for (let address of this.doctor.workplaces) {
                bounds.extend({
                  lat: parseFloat(address.latitude),
                  lng: parseFloat(address.longitude)
                });
              }
              map.fitBounds(bounds);
            });
          }, 100);
        } else {
          this.center = {
            lat: this.doctor.workplaces[0].latitude,
            lng: this.doctor.workplaces[0].longitude
          };
          if (
            this.doctor.workplaces.length == 0 ||
            !this.doctor.workplaces[0].longitude
          ) {
            this.showMap = false;
          }
        }
      });
    if (this.user) {
      this.$axios
        .get(
          `/api/Doctors/${
            this.$route.params.subscriberNumber
          }/CommunicationQuote`,
          {
            headers: {
              Authorization: `Bearer ${this.user.access_token}`
            }
          }
        )
        .then(res => {
          this.duration = res.data.result.quote.duration;
        });
    }
  },
  computed: {
    // google: gmapApi,
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    // geo(address) {
    //   window.location.href = `geo:${address.longitude},${address.latitude}`;
    // }
  }
};
</script>

