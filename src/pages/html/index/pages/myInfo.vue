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
     </v-navigation-drawer>

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
        {  title: '重要信息通知方式', avatar: 'person' },
        { title: '通知设置', avatar: 'person' },
        { title: '账户信息', avatar: 'person' },
        { title: '修改密码', avatar: 'person' },
        { title: '收货地址', avatar: 'person' }
      ],
      isShow: false,
    }
  },
  methods: {
    showNav() {
      this.isShow = !this.isShow
    },
    kk() {
      alert(123)
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
  }
</style>
