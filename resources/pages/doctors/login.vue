<template>
  <v-container>
    <div class="login-doctor-container">
      <div class="section-title">حساب کاربری</div>
      <div
        class="section-description"
      >پزشک گرامی، جهت دسترسی به خدمات برخط سامانه رِسا، لطفا وارد شوید</div>
      <div class="doctor-username">
        <i class="fa fa-user"></i>
        <input id="username" placeholder="کد رسا / شماره همراه">
      </div>
      <div class="doctor-password">
        <i class="fa fa-lock"></i>
        <input id="password" placeholder="کلمه عبور">
      </div>
      <div
        class="g-recaptcha charge-captcha"
        data-sitekey="6Ldum2AUAAAAALQrnrey6kthZixJIfe1wQboLGwI"
      ></div>
      <div class="login-button">ورود به حساب کاربری</div>
      <!-- <div class="forgot-password">
        <a>یادآوری کلمه عبور</a>
      </div>-->
      <div class="sign-up">حساب کاربری ندارید؟
        <router-link :to="{name:'RegisterDoctor'}" class="sign-up-link">رایگان ثبت نام کنید</router-link>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login-doctor-container {
  background: white url("/img/wave.png") center bottom no-repeat;
  padding: 30px 30px 160px;
  border-radius: 10px;
}

.section-title {
  text-align: center;
  color: $bright-sky-blue;
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

.doctor-username {
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

  i {
    color: #c5c9d5;
    margin-left: 5px;
  }
}

.doctor-password {
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

.login-button {
  min-width: 200px;
  max-width: 350px;
  padding: 10px;
  border: none;
  border-radius: 26px;
  background-color: $bright-sky-blue;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  margin: 0 auto 15px;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 7px #8c8c8c;
    cursor: pointer;
  }
}

.charge-captcha {
  margin: 15px auto;
  display: flex;
  justify-content: center;
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
  }
}

@media only screen and (min-width: 1600px) {
  .login-doctor-container {
    background-size: contain;
  }
}
</style>
