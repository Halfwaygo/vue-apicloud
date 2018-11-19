<template>
  <div class="my-info">
     <v-navigation-drawer style="z-index: 100;" touchless stateless fixed :value="isShow">
       <div class="nav-drawer text-xs-center red">
           <v-avatar
            :size="50"
           >
            <img :src="baseInfo.avatar" alt="avatar">

           </v-avatar>
           <div style="color: white;margin-top:10px;">{{ baseInfo.name }}</div>
       </div>

       <v-list subheader>
          <v-list-tile
            v-for="item in fixArr"
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon>{{item.avatar}}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="item.title"></v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list>

       <v-btn @click="showNav">关闭</v-btn>
       <v-footer text-xs-center fixed @click.native="toLogin">
         <v-spacer></v-spacer>退出登录<v-spacer></v-spacer>
       </v-footer>
     </v-navigation-drawer>
     <!-- 我 -->
     <div @click="showNav">
       <v-list two-line dark>
          <v-list-tile
            avatar
          >
            <v-list-tile-avatar>
              <img :src="baseInfo.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="baseInfo.name"></v-list-tile-title>
              <v-list-tile-sub-title v-html="baseInfo.id"></v-list-tile-sub-title>
            </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>chevron_right</v-icon>
              </v-list-tile-action>

          </v-list-tile>
      </v-list>
     </div>

     <v-container grid-list-md text-xs-center class="fix-container">
      <v-layout row wrap>
        <v-flex xs4 class="fix-container-block">
          <div class="block-header-img" style="background-color: #FBC73C;">
            <img src="../img/jiangli.png">
          </div>
          <div>加入凭证</div>
        </v-flex>
        <v-flex xs4 class="fix-container-block">
          <div class="block-header-img" style="background-color: #FCB285;">
            <img src="../img/add_person.png">
          </div>
          <div>报案</div>
        </v-flex>
        <v-flex xs4 class="fix-container-block">
          <div class="block-header-img" style="background-color: #F97AA8;">
            <img src="../img/add_money.png">
          </div>
          <div>充值</div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-list>
      <template v-for="(item, index) in infoArr" >
        <v-list-tile
          :key="item.title"
          avatar
        >
          <v-list-tile-avatar>
            <!-- <img :src="item.avatar"> -->
            <v-icon>{{item.avatar}}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="index" style="float:right;width:94%"></v-divider>
       </template>
    </v-list>

  </div>
</template>

<script>
import backHeader from '../common/backHeader.vue'

export default {
  components: {
    backHeader
  },
  data() {
    return {
      baseInfo: {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        name: '刘卫',
        id: '1865410'
      },
      fixArr: [
        {  title: '重要信息通知方式', avatar: 'brightness_high' },
        { title: '通知设置', avatar: 'brightness_high' },
        { title: '账户信息', avatar: 'chrome_reader_mode' },
        { title: '修改密码', avatar: 'person' },
        { title: '收货地址', avatar: 'place' }
      ],
      infoArr: [
        {  title: '为亲友加入', avatar: 'group' },
        {  title: '邀请有礼', avatar: 'brightness_high' },
      ],
      isShow: false,
    }
  },
  methods: {
    showNav() {
      this.isShow = !this.isShow
    },
    toLogin() {
      this.$router.push('login')
    }
  }
}
</script>

<style lang="less">
  .my-info {
    .v-list--two-line {
      background: #f44336 !important;
    }
    .nav-drawer {
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .fix-container-block {
      flex-direction: column;
      display: flex;
      align-items: center;
      .block-header-img {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        margin-bottom: .4rem;
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 3.4rem;
        img {
          width: 2.0rem;
          height: 2.0rem;
        }
      }
      .hz-title {
        color: #000;
        margin-bottom: .4rem;
      }
      .hz-word {
        color: #ccc;
      }
    }
  }
</style>
