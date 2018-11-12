import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/login.vue';
import Index from '../pages/Index.vue';
import Register from '../pages/register.vue';
import FindPass from '../pages/findPass.vue';
import ShowPerson from '../pages/showPerson.vue';

const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
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
