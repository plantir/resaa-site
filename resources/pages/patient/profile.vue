<style lang="scss">
#profile {
  .profile-container {
    background-color: white;
    border-radius: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    min-height: 300px;
    align-items: center;
    padding: 0 32px;
  }

  .profile-avatar {
    width: 120px;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(10, 10, 10, 0.14);
    border: solid 3.5px #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    img {
      width: inherit;
      max-width: 100%;
      max-height: 100%;
    }

    &:hover .profile-avatar-edit-button {
      bottom: 0;
    }
  }

  .profile-avatar-edit-button {
    width: 100%;
    text-align: center;
    background-color: #0009;
    position: absolute;
    bottom: -30px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    label {
      cursor: pointer;
      color: white;
      line-height: 30px;
      font-size: 1rem;
      font-weight: 500;
      margin: 0;
    }
  }

  .profile-info-container {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .profile-info {
    margin-bottom: 10px;
    div {
      margin-bottom: 10px;
    }
  }

  .profile-name {
    color: $dark-blue-grey;
    font-size: 1.375rem;
    font-weight: 500;
  }

  .profile-phone-number {
    direction: ltr;
    text-align: right;
    color: $dark-blue-grey;
    font-size: 1.175rem;
  }

  .profile-balance {
    div {
      display: inline;
    }

    div:nth-child(1) {
      color: #7e86a6;
    }

    div:nth-child(3) {
      color: $dark-blue-grey;
      font-size: 1.175rem;
      font-weight: 500;
    }
  }

  .profile-balance-number {
    direction: ltr;
    text-align: right;
    color: $dark-blue-grey;
    font-size: 1.175rem;
    font-weight: 500;
  }

  .profile-buttons {
    display: flex;
    flex-direction: row;

    * {
      width: 160px;
      text-align: center;
      color: white;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      font-size: 1rem;
      font-weight: 500;
    }

    a {
      background-color: $tealish;
      margin-left: 5px;

      &:hover {
        text-decoration: none;
      }
    }

    div {
      background-color: #a5afb9;
      cursor: pointer;
    }
  }

  .profile-edit-container {
    direction: rtl;
    background-color: white;
    border-radius: 20px;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 300px;
    justify-content: center;
    align-items: center;
    .v-input__slot {
      box-shadow: none;
      height: 40px;
      min-height: 40px;
      border: none;
      background-color: #f5f5f5;
      border-radius: 20px;
      min-width: 300px;
      margin-bottom: 20px;
      padding: 0 15px;
    }
  }

  .profile-edit-input-area-container {
    display: flex;
    flex-direction: row;
  }

  .profile-edit-input-container {
    display: flex;
    flex-direction: column;

    // input,
    // .v-input__control {
    //   height: 30px;
    //   height: 40px;
    //   border: none;
    //   background-color: #f5f5f5;
    //   border-radius: 20px;
    //   min-width: 300px;
    //   margin-bottom: 20px;
    //   padding: 0 15px;
    // }
  }

  .profile-edit-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 30px;
  }

  .profile-edit-buttons {
    display: flex;
    flex-direction: row;
  }

  .profile-edit-title {
    font-size: 2.225rem;
    font-weight: 500;
    color: $tealish;
    margin-bottom: 30px;
  }

  .profile-edit-buttons {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    * {
      width: 160px;
      text-align: center;
      color: white;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
    }

    div:nth-child(1) {
      background-color: $tealish;
      margin-left: 5px;
    }

    div:nth-child(2) {
      background-color: #a5afb9;
    }
  }
  .profile-edit-avatar {
    button {
      display: block;
      width: 95%;
      background: red;
      color: #fff;
      border: none;
      border-radius: 8px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 800px) {
    .profile-buttons {
      flex-direction: column;

      a {
        margin-left: 0;
        margin-bottom: 10px;
      }
    }

    .profile-edit-input-area-container {
      flex-direction: column;
    }

    .profile-edit-avatar {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 20px;
      button {
        display: block;
        width: 95%;
        background: red;
        color: #fff;
        border: none;
        border-radius: 8px;
        margin: 0 auto;
      }
    }

    .profile-edit-container {
      padding: 20px 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .profile-container {
      flex-direction: column;
      padding: 20px 0;
    }

    .profile-info-container {
      margin: 0;
    }

    .profile-info {
      text-align: center;

      div {
        text-align: center;
      }
    }

    .profile-edit-left {
      margin-right: 0;
    }

    .profile-edit-buttons {
      flex-direction: column;
      align-items: center;

      div {
        margin-bottom: 20px;
        width: 100%;
      }

      div:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .profile-edit-title {
      font-size: 1.675rem;
    }

    .profile-edit-input-container {
      input {
        min-width: auto !important;
        width: 100%;
      }
    }

    .profile-edit-input-area-container,
    .profile-edit-left {
      width: 90%;
    }

    .profile-edit-input-area-container {
      align-items: center;
    }
  }
  .error-message {
    position: absolute;
    bottom: 20px;
    color: #f00;
  }
  .call-history {
    margin: 13px 0;
  }
}
</style>

<template>
  <v-container id="profile">
    <no-ssr>
      <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
      <section v-else>
        <div v-if="editMode === false" class="profile-container">
          <div class="profile-avatar">
            <v-loading v-if="saving"></v-loading>
            <img v-if="user_profile.image" :src="user_profile.image" alt>
            <img v-else src="/img/user-placeholder.png" alt>
            <div class="profile-avatar-edit-button">
              <label for="image">تغییر تصویر</label>
              <!-- <v-text-field
                hide-details
                solo
                type="file"
                @change="changeImage($event)"
                id="image"
                name="image"
                hidden="true"
              ></v-text-field>-->
              <input
                type="file"
                @change="changeImage($event)"
                id="image"
                name="image"
                hidden="true"
              >
            </div>
          </div>
          <div class="profile-info-container">
            <div class="profile-info">
              <div class="profile-name">{{ user_profile.firstName }} {{user_profile.lastName}}</div>
              <div class="profile-phone-number">{{ user_profile.phoneNumber | persianDigit}}</div>
              <div class="profile-balance">
                <div>اعتبار فعلی:</div>
                <div
                  class="profile-balance-number"
                >{{ user_profile.subscriberCards[0].credit | currency | persianDigit }}</div>
                <div>تومان</div>
              </div>
            </div>
            <div class="profile-buttons">
              <router-link
                class="profile-charge-button"
                :to="{name:'Charge',query:{mobile:user_profile.phoneNumber}}"
              >افزایش اعتبار</router-link>
              <div class="profile-edit-button" @click="activateEditMode">ویرایش حساب کاربری</div>
            </div>
          </div>
          <div class="error-message" v-if="sizeError">حجم عکس باید کمتر از ۵۰۰ کیلوبایت باشد.</div>
        </div>

        <div v-else-if="editMode === true" class="profile-edit-container">
          <v-loading v-if="saving" mode="relative"></v-loading>
          <div class="profile-edit-title">ویرایش حساب کاربری</div>
          <div class="profile-edit-input-area-container">
            <div class="profile-edit-avatar">
              <div class="profile-avatar">
                <img v-if="user_profile.image" :src="user_profile.image">
                <img v-else src="/img/user-placeholder.png" alt>
                <div class="profile-avatar-edit-button">
                  <label for="image">تغییر تصویر</label>
                  <input
                    type="file"
                    @change="changeImage($event)"
                    id="image"
                    name="image"
                    hidden="true"
                  >
                </div>
              </div>
              <button v-if="user_profile.image" @click="removeImage">حذف عکس</button>
            </div>
            <div class="profile-edit-left">
              <div class="profile-edit-input-container">
                <v-text-field
                  hide-details
                  v-validate="'required'"
                  v-model="editProfile.firstName"
                  label="لطفا نام خود را وارد نمایید"
                  name="name"
                  solo
                ></v-text-field>
                <!-- <input v-model="editProfile.firstName" placeholder="لطفا نام خود را وارد نمایید."> -->
                <v-text-field
                  hide-details
                  v-validate="'required'"
                  v-model="editProfile.lastName"
                  label="لطفا نام خانوادگی خود را وارد نمایید"
                  name="lastName"
                  solo
                ></v-text-field>
                <!-- <input
                  v-model="editProfile.lastName"
                  placeholder="لطفا نام خانوادگی خود را وارد نمایید."
                >-->
                <v-select
                  attach
                  solo
                  hide-details
                  item-text="title"
                  item-value="id"
                  required
                  v-validate="'required'"
                  :items="[{id:'Male',title:'مرد'},{id:'Female',title:'زن'}]"
                  v-model="editProfile.gender"
                  label="لطفا جنسیت خود را انتخاب نمایید"
                ></v-select>
                <!-- <b-form-select
                  required
                  v-model="editProfile.gender"
                  class="mb-3"
                  v-validate="'required'"
                  name="gender"
                >
                  <option value="Unknown">- لطفا جنسیت خود را انتخاب نمایید -</option>
                  <option value="Male">مرد</option>
                  <option value="Female">زن</option>
                </b-form-select>-->
              </div>
              <div class="profile-edit-buttons">
                <div class="profile-edit-ok" @click="save">تأیید</div>
                <div class="profile-edit-cancel" @click="cancel">انصراف</div>
              </div>
            </div>
          </div>
          <div class="error-message" v-if="sizeError">حجم عکس باید کمتر از ۵۰۰ کیلوبایت باشد.</div>
        </div>
        <div class="call-history">
          <CallHistory></CallHistory>
        </div>
      </section>
    </no-ssr>
  </v-container>
</template>

<script>
import CallHistory from "@/components/patient/callHistory/callHistory";
export default {
  components: {
    CallHistory
  },
  middleware: "auth",
  data() {
    return {
      ajaxLoading: true,
      saving: false,
      user_profile: null,
      user_callhistory: null,
      sizeError: null,
      editProfile: {},
      editMode: false,
      image: null
    };
  },

  mounted() {
    this.get_profile();
    this.get_callhistory();
  },
  methods: {
    activateEditMode() {
      this.editProfile = {
        gender: this.user_profile.gender,
        firstName: this.user_profile.firstName,
        lastName: this.user_profile.lastName
      };
      if (this.editMode === false) {
        this.editMode = true;
      }
    },
    get_profile() {
      this.ajaxLoading = true;
      this.$axios
        .get(`Accounts/${this.user_id}/Profile`, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        })
        .then(res => {
          this.user_profile = res.body.result.profile;
          if (this.user_callhistory) {
            this.ajaxLoading = false;
          }
        });
    },
    get_callhistory() {
      this.$axios
        .get(`Accounts/${this.user_id}/Calls`, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        })
        .then(res => {
          this.user_callhistory = res.body.result.calls;
          if (this.user_profile) {
            this.ajaxLoading = false;
          }
        });
    },
    save() {
      this.saving = true;
      this.$axios
        .put(`Accounts/${this.user_id}/Profile`, this.editProfile, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        })
        .then(() => {
          this.saving = false;
          this.editMode = false;
          this.get_profile();
        });
    },

    cancel() {
      if (this.editMode === true) {
        this.editMode = false;
      }
    },

    changeImage(event) {
      let file = event.target.files[0];
      if (!file) {
        return;
      }
      if (file.size > 524288) {
        this.sizeError = true;
        return;
      } else {
        this.sizeError = false;
      }
      // const reader = new FileReader();
      // reader.onload = e => {
      //   this.user_profile.image = e.target.result;
      // };
      // reader.readAsDataURL(file);
      this.saving = true;
      let data = new FormData();
      data.append("image", file);
      this.$axios
        .put(`Accounts/${this.user_id}/Profile/Image`, data, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`,
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          this.saving = false;
          this.get_profile();
        });
    },
    removeImage() {
      this.$axios
        .delete(`Accounts/${this.user_id}/Profile/Image`, {
          headers: {
            Authorization: `Bearer ${this.user.access_token}`
          }
        })
        .then(() => {
          this.saving = false;
          this.get_profile();
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

