<template>
  <div id="content-container">

    <!--Phone's pictures section-->
    <section class="phones">
      <img src="../assets/img/phones.png" alt="pictures on phone" class="phone-image">
      <div class="display-phone">
        <img class="picture" src="../assets/img/photo-1.png" alt="#">
        <img class="picture" src="../assets/img/photo-2.png" alt="#">
        <img class="picture" src="../assets/img/photo-3.png" alt="#">
        <img class="picture" src="../assets/img/photo-4.png" alt="#">
        <img class="picture" src="../assets/img/photo-5.png" alt="#">
      </div>
    </section>

    <!--User's log in section-->
    <section class="user">

      <div class="login-container">

        <!--Instagram Logo-->
        <div class="instagram-logo-box">
          <img class="instagram-logo" src="../assets/img/instagram-logo.png">
        </div>

        <!--Form Login-->
        <form id="login-post" v-loading="loading">
          <div class="inputs-container">
            <input v-model="email" type="text" name="username" placeholder="Phone number, username or email">
          </div>
          <div class="inputs-container">
            <input v-model="password" type="password" name="password" placeholder="Password">
          </div>
          <el-button class="login-button" @click="doLogin">Log In</el-button>

          <div class="or-container">
            <div class="line"></div>
            <div class="or">OR</div>
            <div class="line"></div>
          </div>

          <!--Facebook login-->
          <div class="facebook-container">
            <a class="facebook-login" href="#" ><img class="facebook-logo"
                                                                    src="../assets/img/facebook-logo.png">Log in
              with Facebook</a>
          </div>
        </form>

        <!--Password recovery-->
        <a class="password-forgot" href="#" >Forgot password?</a>
      </div>

      <!--Sign up-->
      <div class="signup-container">
        <p>Don't have an account? <a class="signup" href="/sign-up">Sign up</a></p>
      </div>

      <!--App's download-->
      <div class="get-container">
        <p>Get the app.</p>
        <div class="download-container">
          <a class="download-appstore" href="#" ><img class="appstore"
                                                                     src="../assets/img/applestore-logo.png"></a>
          <a class="download-googleplay" href="#" ><img class="googleplay"
                                                                       src="../assets/img/googleplay-logo.png"></a>
        </div>
      </div>

    </section>

  </div>

  <footer class="page-footer">

    <div class="links-container">
      <ul class="links-list">
        <li>
          <a class="link" href="#" target="_blank">ABOUT</a>
        </li>
        <li>
          <a class="link" href="#" >PRESS</a>
        </li>
        <li>
          <a class="link" href="#" >API</a>
        </li>
        <li>
          <a class="link" href="#" >JOBS</a>
        </li>
        <li>
          <a class="link" href="#" >PRIVACY</a>
        </li>
        <li>
          <a class="link" href="#" >TERMS</a>
        </li>
        <li>
          <a class="link" href="#">LOCATIONS</a>
        </li>
        <li>
          <a class="link" href="#">TOP ACCOUNTS</a>
        </li>
        <li>
          <a class="link" href="#">HASHTAGS</a>
        </li>
        <li>
          <a class="link" href="#">LANGUAGE</a>
        </li>
      </ul>
    </div>

    <div class="footer-span-container">
      <span class="footer-span">
        © 2024 INSTAGRAM FROM FACEBOOK
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";
import AuthApi from "@/api/auth-api";
import AlertService from "@/services/AlertService";
const loading = ref(false);
const email = ref("");
const password = ref("");

const doLogin = () => {
  loading.value = true;
  const request = {
    email: email.value,
    password: password.value
  }
  AuthApi.login(request).then((res) => {
    console.log(res);
    loading.value = false;
  }).catch(error => {
    AlertService.error("","Sorry, your username or password was incorrect.");
    loading.value = false;
  })

}

</script>

<style lang="scss" scoped>
:root {
  --main-color: #0095f6;
  --text-color: #262626;
  --background-color: rgb(250, 250, 250);
  --border-color: 219, 219, 219;
  --footer-text-color: rgb(00, 55, 107);
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  text-decoration: none;
  font-size: 14px;
  border: none;
}

body{
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#content-container{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 64px auto 0;
  padding-bottom: 64px;
}

.phones,
.display-phone{
  margin: 0 20px;
}

.display-phone{
  position: relative;
}

.picture{
  position: absolute;
  top: -513px;
  left: 98px;
  opacity: 0;
  animation-name: animation;
  animation-duration: 25s;
  animation-iteration-count: infinite;
}

.user{
  margin: 12px 0 0;
  justify-content: center;
  top: .45em;
}

.login-container{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login-container,
.signup-container{
  background-color: rgb(255, 255, 255);
  border: 1px solid #dbdbdb;
  margin-bottom: 10px;
  padding: 10px 0;
}

.instagram-logo-box{
  width: 175px;
  margin: 22px 86.5px 0;
}

.instagram-logo{
  height: 51px;
}

#login-post{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
}

.inputs-container{
  margin: 0 40px 6px;
  width: 100%;
}

.inputs-container input{
  background: #fafafa;
  width: 100%;
  padding: 9px 0 7px 8px;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  outline: none;
}

.inputs-container input:focus{
  border-color: rgb(180, 180, 180);
}

.login-button{
  background-color: #0095f6;
  color: rgb(255,255,255);
  font-weight: bold;
  padding: 8px;
  height: 32px;
  border-radius: 8px;
  text-align: center;
  width: 100%;
  margin: 8px 40px;
}

.login-button:hover{
  background-color: #00a0f7;
  color: white;
}

.or-container{
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  margin: 10px 40px 18px;
  width: 100%;
}

.line{
  background-color: rgb(var(--border-color));
  height: 1px;
  position: relative;
  top: .45em;
}

.or{
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: rgb(114, 114, 114);
}

.facebook-container{
  text-align: center;
  margin: 8px 40px;
}

.facebook-logo{
  width: 16px;
  margin-right: 8px;
}

.facebook-login{
  color: rgb(56, 81, 133);
  font-weight: 600;
}

.password-forgot{
  color: var(--footer-text-color);
  text-align: center;
  font-size: 12px;
  margin-top: 15px;
  margin-bottom: 10px;
}

.signup-container p,
.get-container p{
  color: var(--text-color);
}

.signup-container p{
  margin: 15px;
  text-align: center;
}

.signup{
  color: #0095f6;
  font-weight: 600;
}

.get-container{
  display: flex;
  flex-direction: column;
  height: 102px;
  width: 350px;
}

.get-container p{
  margin: 10px 20px;
  box-sizing: content-box;
  text-align: center;
}

.download-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
}

.download-appstore{
  margin-right: 8px;
}

.appstore,
.googleplay{
  height: 40px;
  width: 136px;
}

.page-footer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
}

.links-container,
.footer-span-container{
  margin-bottom: 20px;
}

.links-list{
  text-align: center;
}

.links-list li{
  display: inline-block;
}

.links-list li a{
  color: var(--footer-text-color);
  font-size: 12px;
  font-weight: 600;
  margin: 0 16px 7px 0;
}

.footer-span{
  color: rgba(142,142,142,1);
  font-size: 12px;
  margin: 20px 0;
  top: .1em;
}

@media(max-width: 1005px){

  .page-footer{
    display: block;
    padding-bottom: 10px;
  }

  .links-list{
    margin-bottom: 10px;
    text-align: left;
  }

}

@media(max-width: 785px){

  .phones{
    display: none;
  }

  .page-footer{
    max-width: 360px;
    margin: 0 auto;
  }

  .links-container,
  .footer-span-container{
    margin-bottom: 0;
  }

  .links-list{
    margin-bottom: 0;
  }

  .links-list,
  .footer-span-container{
    text-align: center;
  }

  .links-list li{
    padding-bottom: 10px;
  }

}

@media(max-width:400px){

  .download-container{
    flex-direction: column;
    margin: 0 auto;
  }

}

@keyframes animation{
  25%{
    opacity: 1;
  }

  50%{
    opacity: 0;
  }
}

.picture:nth-child(1){
  animation-delay: 5s;
}
.picture:nth-child(2){
  animation-delay: 10s;
}
.picture:nth-child(3){
  animation-delay: 15s;
}
.picture:nth-child(4){
  animation-delay: 20s;
}
.picture:nth-child(5){
  animation-delay: 25s;
}
</style>