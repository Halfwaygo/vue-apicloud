<template>
  <div>
     <v-toolbar height="40" color="red" dark fixed clipped-right>
       <div style="text-align: center;width: 100%;">
         asd
       </div>

     </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name:'index',
  props: {
    icon: {
      type: String,
      default: '$vuetify.icons.cancel'
    }
  },
  data() {
      return {
          kx: '33424234',
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

<style>

</style>
