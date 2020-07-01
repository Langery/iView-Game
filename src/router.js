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
      path: '/modal',
      name: 'modal',
      component: () => import('@/views/modal/ModalMain.vue'),
      meta: {
        type: 'modal',
        order: '1-3'
      }
    },
    {
      path: '/gui',
      name: 'GUI',
      component: () => import('@/views/gui/GuiMain.vue'),
      meta: {
        type: 'GUI',
        order: '1-4'
      }
    },
    {
      path: '/drawlib',
      name: 'drawlib',
      component: () => import('@/views/drawlib/DrawMain.vue'),
      meta: {
        type: 'drawlib',
        order: '1-5'
      }
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/views/me/me'),
      meta: {
        type: 'me',
        ordre: '1-6'
      }
    }
  ],
});
