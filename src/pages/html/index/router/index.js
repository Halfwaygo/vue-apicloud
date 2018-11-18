import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Login from '../pages/login.vue';
import Index from '../pages/Index.vue';
import Register from '../pages/register.vue';
import FindPass from '../pages/findPass.vue';
import ShowPerson from '../pages/showPerson.vue';
import Announce from '../pages/announce.vue';
import MyInfo from '../pages/myInfo.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    children: [{
      name: 'Index',
      path: '/index',
      component: Index
    },
    {
      name: 'Announce',
      path: '/announce',
      component: Announce
    },
    {
      name: 'MyInfo',
      path: '/myinfo',
      component: MyInfo
    }]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'Register',
    path: '/register',
    component: Register
  },
  {
    name: 'FindPass',
    path: '/findPass',
    component: FindPass
  },
  {
    name: 'showPerson',
    path: '/showPerson',
    component: ShowPerson
  },
  {
    path: '*',
    redirect: {
      name: 'login',
    },
  },

];

const router = new VueRouter({
  routes
});
Vue.use(VueRouter);
router.beforeEach((to, from, next) => {
  next()
})
export default router;
