<template>
  <v-container>
    <div class="about-container">
      <div class="section-title">درباره ما</div>
      <div class="section-description">
        شروع تشکیل سامانه رسا از سال 95 زده شد. رسا زمانی به وجود اومد که مادر یکی از بنیان گذار هاش که از قضا خودشم پزشک بود اومد و مشکل در ارتباط بودن با بیماراش رو مطرح کرد و همین باعث شد که یه عده از فارغ التحصیلای دانشگاه تهران و صنعتی شریف به فکر بیفتن و رسا رو به وجود بیارن.
        تو این مدت رسا سعی کرده که یک راه ارتباطی مطمئن بین پزشک و بیمار رو توی بستر تلفن برقرار کنه و ارزش های اصلی خودش که خدمت درعرصه سلامت و حفظ حریم شخصی افراد هست رو هم همیشه به عنوان رسالت خودش مد نظر قرار داده.
        راستی رسا متعلق به شرکت دانش بنیان برگ های سبز و نقره ای هست و مجوز های لازم از وزارت صنعت، معدن و تجارت و وزارت ارشاد رو داره.
        رسا افتخار این رو داره که تو مجموعه پزشکاش کلی پزشک متخصص و خوشنام و با سابقه داره و امکان ارتباط با این پزشکان رو برای همه به وجود آورده.
      </div>
      <div class="about-team-title">خانواده رِسا</div>
      <div class="about-team-members">
        <v-layout row wrap>
          <v-flex
            md3
            sm4
            pa-1
            v-for="(member, index) in teamMembers"
            class="team-member"
            :key="index"
          >
            <div class="team-member-container">
              <div class="team-member-image">
                <img v-if="member.avatar" alt="member" :src="member.avatar" />
              </div>
              <div class="team-member-short">{{member.firstName + ' ' + member.lastName}}</div>
              <div class="team-member-full">
                <div class="team-member-name">{{member.firstName + ' ' + member.lastName}}</div>
                <div v-if="member.position" class="team-member-title">{{member.position}}</div>
                <div class="team-member-social-links">
                  <a
                    target="_blank"
                    v-if="member.email"
                    :href="'mailto:'+ member.email"
                    class="link"
                  >
                    <i class="fa fa-envelope-square" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" v-if="member.twitter" :href="member.twitter" class="link">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                  </a>
                  <a target="_blank" v-if="member.linkedin" :href="member.linkedin" class="link">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: "چرا سامانه رسا شکل گرفت؟",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "سامانه رسا با بهره‌گیری از افراد فارغ‌التحصیل دانشگاه‌های معتبری چون تهران و شریف، سعی کرده است راهی مطمئن برای برقراری تماس تلفنی بین بیمار و پزشک را فراهم آورد"
        },
        {
          hid: "canonical",
          property: "canonical",
          content: `${process.env.SITE_URL}${this.$route.path}`
        }
      ]
    };
  },
  computed: {
    teamMembers() {
      return this.$store.state.about.members;
    }
  }
};
</script>

<style lang="scss" scoped>
.about-container {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
}

.section-title {
  text-align: center;
  color: $tealish;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 30px;
}

.section-description {
  line-height: 1.9;
  text-align: justify;
  font-size: 1rem;
  margin-bottom: 30px;
  direction: rtl;
}

.about-team-members {
  font-weight: 700;
  font-size: 1.5rem;
}

.about-team-title {
  text-align: center;
  font-weight: 700;
  margin-bottom: 30px;
}

.team-member-container {
  text-align: center;
  font-weight: normal;
  border-radius: 10px;
  position: relative;
  color: white;
  overflow: hidden;
  width: 180px;
  height: 180px;
  margin: 0 auto 50px auto;

  &:hover {
    .team-member-full {
      opacity: 1;
    }

    .team-member-short {
      opacity: 0;
    }
  }
}

.team-member-image {
  img {
    width: 100%;
  }
  background-color: #f5f5f5;
  height: 100%;
}

.team-member-short {
  opacity: 1;
  transition: opacity 0.2s linear;
  position: absolute;
  bottom: 0;
  height: 30px;
  font-size: 1rem;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
}

.team-member-full {
  opacity: 0;
  transition: opacity 0.2s linear;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  padding-top: 100px;
  font-weight: normal;
}

.team-member-name {
  font-size: 1rem;
}

.team-member-title {
  font-size: 1.1rem;
  font-weight: normal;
  margin: 5px 0;
}

.team-member-social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  .link {
    display: flex;
    margin: 0 4px;
    align-items: center;
    color: white;
    cursor: pointer;

    &:hover {
      color: $tealish;
    }
  }
}

@media only screen and (max-width: 500px) {
  .about-team-members > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .team-member {
    width: 100%;
  }
}
</style>
