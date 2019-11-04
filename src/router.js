import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Draw from './views/draw/DrawMain.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        type: 'home',
        order: '1-1'
      }
    },
    {
      path: '/drawlib',
      name: 'draw',
      component: Draw,
      meta: {
        type: 'draw',
        order: '1-2'
      }
    }
  ],
});
