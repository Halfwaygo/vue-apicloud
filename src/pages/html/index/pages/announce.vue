<template>
  <div class="anounce">
    <section style="padding-left: 10px;padding-right: 10px">
      <back-header :title="title" :isBack="false"></back-header>
      <div class="nav-drawer text-xs-center">
        <div style="font-size: 20px;margin-top:10px">2018年11月第1期公示</div>
        <div style="color: #ccc;margin-top:5px;margin-bottom:10px">发布日期: 2018-11-07</div>
        <v-divider></v-divider>
      </div>
      <v-list three-line>
          <v-list-tile
            avatar
          >
            <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" height="70px" style="margin-right: .4rem;border-radius:4px;">
            <v-list-tile-content>
              <v-list-tile-title>会员姓名: 周周</v-list-tile-title>
              <v-list-tile-title>互助原因: 管瘤</v-list-tile-title>
              <v-list-tile-title>互助金额: 269196元</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
      </v-list>
      <h4 class="subheading" style="margin-bottom: 10px">会员吴清彦于2017年12月7日在中山市人民医院确诊为食道癌</h4>
      <v-footer color="#f5f5f5">
        <v-spacer></v-spacer>
        查看详情
        <v-spacer></v-spacer>
      </v-footer>
    </section>
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
      title: '公示',
      isBack: false
    }
  }
}
</script>

<style lang="less">
  .anounce {
    padding-top: 60px;
  }
</style>
