<template>
    <div id="app">
     <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                dataHasLoaded: false
            }
        },
        created() {
            // this.ver = api.version;
            // this.sType = api.systemType;
            // this.sVer = api.systemVersion;
            // this.id = api.deviceId;
            // this.model = api.deviceModel;
            // this.name = api.deviceName;
            // this.cType = api.connectionType;
            // this.winName = api.winName;
            // this.winWidth = api.winWidth;
            // this.winHeight = api.winHeight;
            // this.frameName = api.frameName || '';
            // this.frameWidth = api.frameWidth || '';
            // this.frameHeight = api.frameHeight || '';
            // this.dataHasLoaded = true;
        },
        methods: {
            ss() {
              alert(33)
            //   this.$router.push('/login');
              this.$router.push({path: 'login'})
            }
        }
    }
</script>

<style lang="less">
  .v-toolbar__content {
      font-size: 16px;
      text-align: center;
  }
</style>

