import Vue from 'vue';
import Router from 'vue-router';
import Boot from '@/views/Boot';
import Mainmenu from '@/views/Mainmenu';
import Play from '@/views/Play';
import Levels from '@/views/Levels';

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
    },
    {
      path: '/levels',
      name: 'Levels',
      component: Levels
    }
  ]
});
