<template>
  <div>
    <v-toolbar >
      <v-btn icon @click="goBack">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>注册</v-toolbar-title>
    </v-toolbar>

  </div>

</template>

<script>
export default {
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

<style>

</style>
