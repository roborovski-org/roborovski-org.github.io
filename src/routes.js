import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';

import AppText from './AppText.vue';
import AppHome from './AppHome.vue';
import AppHotToBuy from './AppHotToBuy.vue';

//Meta Data
Vue.use(VueMeta)

const routes = [
  {
      path: '/',
      name: 'Home',
      component: AppHome
  },
  {
      path: '/terms',
      name: 'Terms',
      component: AppText
  },
  {
      path: '/howtobuy',
      name: 'HowToBuy',
      component: AppHotToBuy
  }
];

export default routes;