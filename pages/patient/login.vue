
<style lang="scss" scoped>
.login-patient-container {
  background: white url("/img/wave.png") center bottom no-repeat;
  padding: 30px 30px 160px;
  border-radius: 10px;
}

.section-title {
  text-align: center;
  color: $tealish;
  font-size: 2.675rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.section-description {
  text-align: center;
  font-size: 1rem;
  margin-bottom: 30px;
  direction: rtl;
  line-height: 1.9;
}

.patient-username {
  min-width: 200px;
  max-width: 350px;
  background-color: #f5f5f5;
  border-radius: 26px;
  font-size: 1rem;
  text-align: right;
  direction: rtl;
  margin: 0 auto 10px;
  padding: 10px;

  input {
    border: none;
    background: none;
    width: 90%;

    &::placeholder {
      color: #9aa0b7;
      font-size: 1rem;
    }
  }

  .fa {
    color: #c5c9d5;
    margin-left: 5px;
  }
}

.patient-password {
  min-width: 200px;
  max-width: 350px;
  background-color: #f5f5f5;
  border-radius: 26px;
  font-size: 1rem;
  text-align: right;
  direction: rtl;
  margin: 0 auto 10px;
  padding: 10px;

  input {
    border: none;
    background: none;
    width: 90%;

    &::placeholder {
      color: #9aa0b7;
      font-size: 1rem;
    }
  }

  .fa {
    color: #c5c9d5;
    margin-left: 5px;
  }
}

.charge-captcha {
  margin: 15px auto;
  display: flex;
  justify-content: center;
}

.login-button {
  min-width: 200px;
  max-width: 350px;
  padding: 10px;
  border: none;
  border-radius: 26px;
  background-color: $tealish;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 15px;
  transition: box-shadow 0.5s;
  display: block;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: 0 0 7px #8c8c8c;
    cursor: pointer;
  }
}
.error-message {
  min-width: 200px;
  max-width: 350px;
  padding: 10px;
  border: none;
  color: red;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 15px;
  transition: box-shadow 0.5s;
}
.forgot-password {
  text-align: center;
  margin-bottom: 10px;

  a {
    font-weight: 500;
    color: #0095e2;
    font-size: 1rem;
    transition: color 0.5s;

    &:hover,
    &:active,
    &:focus {
      color: $bright-sky-blue;
      text-decoration: none;
      cursor: pointer;
    }
  }
}

.sign-up {
  text-align: center;
  direction: rtl;
  font-size: 1rem;
  color: #7e86a6;
}

.sign-up-link {
  font-weight: 500;
  color: #0095e2;
  font-size: 1rem;
  transition: color 0.5s;

  &:hover,
  &:active,
  &:focus {
    color: $bright-sky-blue;
    text-decoration: none;
    cursor: pointer;
  }
}

@media only screen and (min-width: 1600px) {
  .login-patient-container {
    background-size: contain;
  }
}
.forget-password {
  text-align: center;
  margin-top: 16px;
  color: #7e86a6;
}
</style>
<template>
  <v-container>
    <v-loading v-if="ajaxLoading" mode="relative"></v-loading>
    <div class="login-patient-container">
      <div class="section-title">حساب کاربری</div>
      <div class="section-description">جهت دسترسی به خدمات برخط سامانه رِسا، لطفا وارد شوید</div>
      <div class="patient-username">
        <i class="fa fa-user"></i>
        <input
          v-model="user.username"
          @input="checkNumber"
          placeholder="پنج رقم آخر شماره کاربری / شماره موبایل"
          @keyup.enter="login"
        >
      </div>
      <div class="patient-password">
        <i class="fa fa-lock"></i>
        <input v-model="user.password" type="password" placeholder="کلمه عبور" @keyup.enter="login">
      </div>
      <button :disabled="error" @click="login" class="login-button">ورود به حساب کاربری</button>
      <div v-if="error" class="error-message">{{error}}</div>
      <div v-if="erroMessage" class="error-message">{{erroMessage}}</div>
      <!-- <div class="forgot-password">
        <a>یادآوری کلمه عبور</a>
      </div>-->
      <div class="sign-up">
        حساب کاربری ندارید؟
        <router-link :to="{name:'patient-register'}" class="sign-up-link">رایگان ثبت نام کنید</router-link>
      </div>
      <div
        class="forget-password"
      >در صورتی که کد کاربری و رمز عبور خود را فراموش کرده اید با موبایلی که ثبت نام کردید عدد 1 را به شماره 100074471111 ارسال کنید.</div>
    </div>
  </v-container>
</template>

<script>
import jwtDecode from "jwt-decode";
export default {
  head() {
    return {
      title: "ورود به بخش بیماران"
    };
  },
  data() {
    return {
      user: {
        grant_type: "password"
      },
      error: null,
      erroMessage: null,
      ajaxLoading: false,
      mobile_regex: /^[0][9][0-3|9][0-9]{8,8}$/g,
      subscribe_regex: /^[0-9]{5,5}$/g
    };
  },
  methods: {
    checkNumber() {
      this.error = null;
      let is_mobile = this.mobile_regex.exec(this.user.username);
      if (is_mobile) {
        return;
      }
      let is_subscribe = this.subscribe_regex.exec(this.user.username);
      if (is_subscribe) {
        return;
      }
      this.error = "فرمت نام کاربری اشتباه است";
    },
    login() {
      this.ajaxLoading = true;
      let data = `username=${this.user.username}&password=${
        this.user.password
      }&grant_type=${this.user.grant_type}`;
      this.$axios
        .post("/api/oauth2/token", data, {
          headers: {
            "Content-type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          // this.ajaxLoading = false;
          let decoded_token = jwtDecode(res.data.access_token);
          let id =
            decoded_token[
              "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
            ];

          this.$axios
            .get(`/api/Accounts/${id}/Profile`, {
              headers: {
                Authorization: `Bearer ${res.data.access_token}`
              }
            })
            .then(Response => {
              res.data.firstName = Response.data.result.profile.firstName;
              this.ajaxLoading = false;
              this.$store.commit("patient/login", res.data);
              this.$store.commit("patient/initialize_user");
              this.$router.push({ name: "patient-landing" });
            });
        })
        .catch(() => {
          this.erroMessage = "نام کاربری یا رمز عبور اشتباه است";
          this.ajaxLoading = false;
        });
    }
  }
};
</script>

