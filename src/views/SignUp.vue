<template>
  <div class="page">
    <div class="header">
      <h1 class="logo">Instagram</h1>
      <p>Sign up to see photos and videos from your friends.</p>
      <button><i class="fab fa-facebook-square"></i> Log in with Facebook</button>
      <div>
        <hr>
        <p>OR</p>
        <hr>
      </div>
    </div>
    <div class="container">
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          v-loading="loading"
          label-width="auto"
          class="demo-ruleForm"
      >
        <el-form-item  prop="email">
          <el-input v-model="ruleForm.email" autocomplete="off" placeholder="Email" />
        </el-form-item>
        <el-form-item>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input
                  v-model="ruleForm.firstName"
                  placeholder="First Name"
              />
            </el-col>
            <el-col :span="12">
              <el-input
                  v-model="ruleForm.lastName"
                  placeholder="Last Name"
              />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item prop="username">
          <el-input
              v-model="ruleForm.username"
              autocomplete="off"
              placeholder="Username"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              v-model="ruleForm.password"
              type="password"
              autocomplete="off"
              placeholder="Password"
          />
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input
              v-model="ruleForm.confirmPassword"
              type="password"
              autocomplete="off"
              placeholder="Confirm password"
          />
        </el-form-item>
        <el-form-item>
          <el-button @click="signUp(ruleFormRef)" class="sign-up" >Sign up</el-button>
        </el-form-item>
      </el-form>

      <ul>
        <li>By signing up, you agree to our</li>
        <li><a href="">Terms</a></li>
        <li><a href="">Data Policy</a></li>
        <li>and</li>
        <li><a href="">Cookies Policy</a> .</li>
      </ul>
    </div>
  </div>
  <div class="option">
    <p>Have an account? <a href="/login">Log in</a></p>
  </div>
  <div class="otherapps">
    <p>Get the app.</p>
    <button type="button"><i class="fab fa-apple"></i> App Store</button>
    <button type="button"><i class="fab fa-google-play"></i> Google Play</button>
  </div>
  <div class="footer">
    <ul>
      <li><a href="">ABOUT</a></li>
      <li><a href="">HELP</a></li>
      <li><a href="">PRESS</a></li>
      <li><a href="">API</a></li>
      <li><a href="">JOBS</a></li>
      <li><a href="">PRIVACY</a></li>
      <li><a href="">TEMS</a></li>
      <li><a href="">LOCATIONS</a></li>
      <li><a href="">TOP ACCOUNTS</a></li>
      <li><a href="">HASHTAGS</a></li>
      <li><a href="">LANGUAGE</a></li>
    </ul>
    <p>© 2024 INSTAGRAM</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import {ElForm} from "element-plus";
import Utils from "@/utils";
import AlertService from "@/services/AlertService";
import AuthApi from "@/api/auth-api";
import {useRoute} from "vue-router";
const loading = ref(false);
const ruleFormRef = ref<FormInstance>()
const route = useRoute();
const ruleForm = reactive({
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  confirmPassword: ''
})

const validateEmail = (rule: any, value: any, callback: any) => {
  if(!Utils.validateEmail(value)){
    callback(new Error("Please input email again"));
  }
  callback();
}

const validateUsername = (rule: any, value: any, callback: any) => {
  if(!Utils.validateUsername(value)){
    callback(new Error("Please input username again"));
  }
  callback();
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if(!Utils.validatePassword(value)){
    callback(new Error("Please input password again"));
  }
  callback();
}


const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (value !== ruleForm.password) {
    callback(new Error("Please input confirm password again"))
  }
  callback();
}

const rules = reactive<FormRules<typeof ruleForm>>({
  email:[{ validator: validateEmail, trigger: ['blur'] }],
  username: [
    {
      validator: validateUsername,
      trigger: ['blur']
    },
    {
      min:6,
      trigger: ['blur']
    }
  ],
  password: [{ validator: validatePassword, trigger: ['blur'] }],
  confirmPassword: [{ validator: validateConfirmPassword, trigger: ['blur'] }],
})

function signUp(formEl: FormInstance | undefined){
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      loading.value = true;
      AuthApi.registry(ruleForm).then((res) => {
        clearForm();
        loading.value = false;
        console.log(res);
        AlertService.success("Success register");
        route.push('/login');
      }).catch(err => {
        loading.value = false;
        clearForm();
        AlertService.error(err.data);
      })
    } else {
      console.log('error submit!')
    }
  })
}

function redirect(path: any){
  window.open(path, "_self");
}

function clearForm(){
  ruleForm.email ="" ;
  ruleForm.password="";
  ruleForm.confirmPassword="";
  ruleForm.firstName="";
  ruleForm.lastName="";
  ruleForm.username="";
}


</script>

<style scoped lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #fafafa;
}

main{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
}

/* header style */
.page .header{
  text-align: center;
}

.page .header .logo,
.page .header p,
.page .header button{
  margin-bottom: 15px;
}

.page .header > p{
  font-weight: bold;
  color: #8e8e8e;
  font-size: 18px;
}

.page .header > button{
  width: inherit;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #0095f6;
  color: #ffffff;
}

.page .header div{
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #8e8e8e;
}

.page .header div p{
  padding: 0 20px;
}

.page .header div hr{
  width: 200px;

}

/* container style*/
.page .container{
  display: flex;
  flex-direction: column;
}

.page .container form, input{
  width: inherit;
}

.page .container form input{
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  padding: 10px 5px;
  margin: 5px 0;
}

.page .container form input:last-of-type{
  margin-bottom: 10px;
}

.page .container form button{
  width: inherit;
  margin-bottom: 20px;
  padding: 7px 20px;
  border-radius: 5px;
  border: none;
  background-color: #0095f6;
  color: #ffffff;
}

.page .container ul{
  list-style: none;
  text-align: center;
  margin-bottom: 10px;
}

.page .container ul li{
  display: inline;
  color: #8e9096;
}

.page .container ul li a{
  text-decoration: none;
  font-weight: bold;
  color: #8e9096;
}

/* option style */
.option p > a{
  text-decoration: none;
  color: #00a0f7;
}

/* otherapps style */
.otherapps{
  text-align: center;
}

.otherapps p{
  margin-bottom: 15px;
}

.otherapps > button{
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 18px;
}

/* footer style */
.footer{
  bottom: 0;
  height: 2.5rem;
  margin-top: 50px;
}

.footer ul{
  text-align: center;
}
.footer ul li{
  display: inline;
  margin-right: 5px;
}
.footer ul li a{
  text-decoration: none;
  font-size: 12px;
  color: #00376b;
}

.footer p{
  margin: 10px 0;
  text-align: center;
  color: #8e9096;
  font-size: 14px;
}



/* Mobile Styles */

@media only screen and (max-width: 400px) {
  body {
    font-family: Freight Sans
  }

  .page{
    width: 250px;
    background-color: #fafafa;
  }

  .page .header{
    width: inherit;
    margin-top: 10px;
  }

  .page .container{
    width: inherit;
  }

  .option{
    margin: 80px 0;
  }

  .page .container input{
    padding: 10px 5px;
    margin: 5px 0;
  }

  .page .footer{
    width: inherith
  }
}

@media only screen and (min-width: 401px){
  body {
    font-family: Neue Helvetica
  }
  .page{
    border: 1px solid #dbdbdb;
    width: 350px;
    background-color: white;
    margin: auto;
  }

  .page .header{
    width: 270px;
    margin-top: 15px;
  }

  .page .container{
    width: 270px;
  }

  .option{
    border: 1px solid #dbdbdb;
    background-color: white;
    width: 350px;
    height: 70px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .otherapps{
    margin: 20px 0;
  }

  .otherapps button{
    margin-right: 5px;
  }

  .otherapps button:after-of-type{
    margin-right: none;
  }

  .page .footer{
    width: 100%;
  }
}

.sign-up{
  width: 100% !important;
}
.sign-up:hover{
   cursor: pointer;
 }
</style>