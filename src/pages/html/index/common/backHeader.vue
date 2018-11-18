<template>
  <div class="back-header">
    <v-toolbar >
      <v-btn icon @click="goBack" v-show="isBack">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>

  </div>

</template>

<script>
export default {
  props: ['title', 'isBack'],
  data() {
    return {
      title: '找回密码'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
  .back-header {
    .v-toolbar__title {
      margin: 0 auto;
    }
  }
</style>
