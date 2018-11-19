<template>
  <div>
    <router-view class="main-content"></router-view>
    <v-card height="200px" flat fixed>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        fixed
        color="transparent"
      >
        <v-btn
          color="red"
          flat
          value="index"
        >
          <span>首页</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn
          color="red"
          flat
          value="announce"
        >
          <span>公示</span>
          <v-icon>dvr</v-icon>
        </v-btn>

        <v-btn
          color="red"
          flat
          value="myinfo"
        >
          <span>我</span>
          <v-icon>person</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      bottomNav: 'index'
    }
  },
  watch: {
    bottomNav(newVal) {
      this.$router.push(newVal)
    }
  },
  computed: {
  }
}
</script>

<style>

</style>
