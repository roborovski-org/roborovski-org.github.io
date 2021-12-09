import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import AppHome from './AppHome.vue'
import AppText from './AppText.vue'
// import Meta from 'vue-meta'

import VueLazyload from 'vue-lazyload'
// import store from './store'

import AOS from 'aos'
import 'aos/dist/aos.css'

import screenFirst from './components/screenFirst.vue'
import screenWelcome from './components/screenWelcome.vue'
import screenOwn from './components/screenOwn.vue'
import LHeader from './components/header/header.vue'
import screenBenefits from './components/screenBenefits.vue'
import screenRoadmap from './components/screenRoadmap.vue'
import screenTeam from './components/screenTeam.vue'
import LFooter from './components/footer/Footer.vue'
import LTeam from './components/elements/Team.vue'
import LButton from './components/elements/ButtonPrimary.vue'
import LCard from './components/elements/Card.vue'
import flipCountdown from './components/elements/CountDownTimer.vue'
import Modal from './components/elements/Modal.vue'
import screenPrivacy from './components/screenPrivacy.vue'

import 'bootstrap/scss/bootstrap-grid.scss';
import './assets/sass/style.sass'; 

Vue.component('screenFirst', screenFirst);
Vue.component('screenWelcome', screenWelcome);
Vue.component('screenOwn', screenOwn);
Vue.component('LHeader', LHeader);
Vue.component('screenBenefits', screenBenefits);
Vue.component('screenRoadmap', screenRoadmap);
Vue.component('screenTeam', screenTeam);
Vue.component('LFooter', LFooter);
Vue.component('LTeam', LTeam);
Vue.component('LButton', LButton);
Vue.component('LCard', LCard);
Vue.component('flipCountdown', flipCountdown);
Vue.component('modal', Modal);
Vue.component('screenPrivacy', screenPrivacy);



Vue.use(VueLazyload);

// vue scroll to block
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

// or register it globally
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
Vue.use(CoolLightBox)

//routes 
Vue.use(VueRouter);
import routes from './routes';



// Configure router
const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
});

Vue.prototype.$screen = Vue.observable({
  width: window.innerWidth,
  height: window.innerHeight
});

window.addEventListener('resize', () => {
  Vue.prototype.$screen.width = window.innerWidth;
  Vue.prototype.$screen.height = window.innerHeight;
});

new Vue({
  el: '#app',
  created () {
    AOS.init()
  },
  render: h => h(App),
  router
})
