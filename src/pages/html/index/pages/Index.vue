<template>
  <div class="index-page">
    <back-header :title="title" :isBack="false"></back-header>

    <v-carousel height="250" style="margin-top:56px">
      <v-carousel-item
          height="250"
          v-for="(item,i) in bannerArr"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
    </v-carousel>

    <v-container grid-list-md text-xs-center class="fix-container">
      <v-layout row wrap>
        <v-flex xs4 class="fix-container-block">
          <div class="block-header-img" style="background-color: #FBC73C;">
            <img src="../img/jiangli.png">
          </div>
          <div>邀请有礼</div>
        </v-flex>
        <v-flex xs4 class="fix-container-block">
          <div class="block-header-img" style="background-color: #FCB285;">
            <img src="../img/add_person.png">
          </div>
          <div>添加亲友</div>
        </v-flex>
        <v-flex xs4 class="fix-container-block">
          <div class="block-header-img" style="background-color: #F97AA8;">
            <img src="../img/add_money.png">
          </div>
          <div>账户充值</div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-subheader class="sub-title">加入冰雪互助</v-subheader>

    <v-divider></v-divider>

    <v-container grid-list-md text-xs-center class="fix-container">
      <v-layout row wrap>
        <v-flex xs4 class="fix-container-block">
            <div class="hz-title">51,387,814</div>
            <div class="hz-word">已加入会员</div>
        </v-flex>
        <v-flex xs4 class="fix-container-block">
            <div class="hz-title">51,387,814</div>
            <div class="hz-word">已互助金额</div>
        </v-flex>
        <v-flex xs4 class="fix-container-block">
          <div class="hz-title">51,387,814</div>
          <div class="hz-word">已互助人数</div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-divider></v-divider>

    <div class="huzu-project">
      <v-subheader class="h-z-title">冰雪大病互助计划(中青年版)</v-subheader>
      <v-divider></v-divider>
      <v-layout row wrap>
        <v-flex xs6>
           123
        </v-flex>
        <v-flex xs6>
           456
        </v-flex>
      </v-layout>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import backHeader from '../common/backHeader.vue'

export default {
  components: {
    backHeader
  },
  name:'index',
  props: {
    icon: {
      type: String,
      default: '$vuetify.icons.cancel'
    }
  },
  data() {
      return {
          title: '冰雪互助',
          bannerArr: [
            {
              src: require('../img/demo.jpg')
            },
            {
              src: require('../img/timg.jpg')
            }
          ],

          planArr: [
            { header: '加入冰雪互助' },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
              title: '最高300000互助金',
              subtitle: "<div class='text--primary'>癌症等60种重大疾病</div><div>18~50周岁可加入</div>"
            },
            {
              avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
               title: '最高1200000互助金',
              subtitle: "<div class='text--primary'>癌症医疗费用</div><div>出生28天到45周岁</div>"
            }
          ],

      }
  },
  computed: {
    ...mapState([
      'isDay',
    ]),
  },
  created() {

  },
}
</script>

<style lang="less" scoped>
  .index-page {
    .banner {
      height: 3.0rem;
    }
    .sub-title {
      color: #000;
      // padding-left: 20px;
      // font-size: 22px;
      // color: #000;
      // &::before {
      //   content: "";
      //   position: absolute;
      //   height: 24px;
      //   width: 4px;
      //   background: red;
      //   left: 10px;
      // }
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

    .huzu-project {
      .h-z-title {
        color: #000;
        font-size: 22px;
      }
    }
  }
</style>
