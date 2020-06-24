import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/homemain/HomeMain.vue'),
      meta: {
        type: 'home',
        order: '1-1'
      }
    },
    {
      path: '/drawlib',
      name: 'draw',
      component: () => import('@/views/draw/DrawMain.vue'),
      meta: {
        type: 'draw',
        order: '1-2'
      }
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/views/me/me'),
      meta: {
        type: 'me',
        ordre: '1-3'
      }
    }
  ],
});
