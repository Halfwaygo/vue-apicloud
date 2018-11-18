<template>
  <div class="anounce">
    <back-header :title="title" :isBack="isBack"></back-header>
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

<style>

</style>
