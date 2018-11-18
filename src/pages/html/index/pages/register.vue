<template>
  <div class="register-page">
     <back-header :title="title" :isBack="isBack"></back-header>
     <div class="content">
       <v-form>
        <v-text-field  v-model="form.phone" color="red"  label="请输入手机号" type="text"></v-text-field>
        <v-flex style="overflow: hidden">
          <v-text-field  v-model="form.code" style="width:60%; float: left" color="red"  label="请输入验证码" type="text">
          </v-text-field>
          <span @click="getCode" v-show="isShowGetCode" style="color: red;display: inline-block;margin-top: 10px;">获取验证码</span>
          <span v-show="!isShowGetCode" style="color: red;display: inline-block;margin-top: 10px;">
            {{paddingTime}}s后重新获取
          </span>
        </v-flex>
        <v-text-field  v-model="form.newPass" color="red"  label="请输入新密码"  type="password"></v-text-field>
        <v-text-field  v-model="form.confirmpass" color="red"  label="确认新密码" type="password"></v-text-field>
      </v-form>
     </div>

     <div class="regsert-btn">
       <v-btn color="red" dark style="width: 100%;">立即注册</v-btn>
     </div>
     <div class="">
       <v-layout row wrap>
          <v-flex xs6>
            <v-btn flat color="red" @click="$router.push('login')">已有账号直接登录</v-btn>
          </v-flex>
          <v-flex xs6 style="text-align: right">
            <v-btn flat color="#000" @click="$router.push('findPass')">忘记密码</v-btn>
          </v-flex>
       </v-layout>
     </div>
  </div>
</template>

<script>
import backHeader from '../common/backHeader.vue'
import { setInterval } from 'timers';

export default {
  components: {
    backHeader
  },
  data() {
    return {
      form: {
        phone: '',
        code: '',
        newPass: '',
        confirmpass: ''
      },
      title: '找回密码',
      isShowGetCode: true,
      paddingTime: null,
      isBack: true,
    }
  },
  methods: {
    getCode() {
      this.isShowGetCode = false
      // let time = 5
      // let interTime = setInterval(() => {
      //   time -= 1
      //   if(time === 0) {
      //     this.isShowGetCode = true
      //     window.clearInterval(interTime)
      //   }
      // }, 1000)
      this.interValTime(60).then((interTime) => {
        this.isShowGetCode = true
        window.clearInterval(interTime)
      })

    },

    interValTime(t) {
      let This = this
      This.paddingTime = t
      const promise = new Promise((resolve, reject) => {
        let interTime = window.setInterval(() => {
          t -= 1
          console.log(t)
          This.paddingTime = t
          if(t === 0) {
            resolve(interTime)
          }
        }, 1000)
      })
      return promise
    }
  },
  created() {

  }
}
</script>

<style lang="less">
  .register-page {
    .content {
      padding-top: 1.0rem;
      padding-left: .6rem;
    }
  }
</style>
