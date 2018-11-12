import App from './app.vue';
import Vue from 'vue';

import vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import store from './store';
import vTap from 'v-tap';
Vue.use(vTap); //添加vue tap事件
Vue.use(vuetify); //添加vue tap事件

import router from './router';

// window.apiready = function() {
//     new Vue({
//         el: '#app',
//         router,
//         store,
//         template: '<App/>',
//         render: h => h(App)
//     })
// }

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app');

