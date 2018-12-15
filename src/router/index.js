import Vue from 'vue';
import Router from 'vue-router';
import Boot from '@/views/Boot';
import Mainmenu from '@/views/Mainmenu';
import Play from '@/views/Play';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Boot',
      component: Boot
    },
    {
      path: '/mainmenu',
      name: 'Mainmenu',
      component: Mainmenu
    },
    {
      path: '/play',
      name: 'Play',
      component: Play
    }
  ]
});
