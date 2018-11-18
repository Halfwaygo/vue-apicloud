<template>
  <div class="login-page">
      <v-app id="inspire">
        <v-content >
          <v-container fluid fill-height>
            <v-layout align-center justify-center >
              <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                  <v-toolbar dark color="red">
                    <v-toolbar-title>登录</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field color="red" prepend-icon="person" name="login" label="Login" type="text" v-model="name"></v-text-field>
                      <v-text-field color="red" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" dark @click="register">注册</v-btn>
                    <v-btn color="red" dark @click="findPass">忘记密码</v-btn>
                    <v-btn color="red" dark @click="submit">登录</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
        <div class="footer">
          <v-avatar
            :tile="false"
            :size="50"
            color="grey lighten-4"
          >
            <img src="../img/weixin.png" alt="avatar">
          </v-avatar>
        </div>
      </v-app>
  </div>
</template>

<script>
export default {
  name:'Login',
  data() {
      return {
          name: '',
          dataHasLoaded: false,
          keyword: null,
      }
  },
  created() {
  },
  methods: {
    register() {
      this.$router.push('register')
    },
    findPass() {
    },
    submit() {
      this.$router.push('index')
    },
    search(keyword) {
      console.log(keyword);
    },
    getSuggestions(keyword) {
      console.log(keyword);
    },
  }
}
</script>

<style lang='less'>
  .login-page {
    .footer {
      padding-bottom: 1.0rem;
      text-align: center;
    }
  }
</style>
