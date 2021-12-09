<template>
  <div id="app">
    <div class="line"></div>

    <LHeader /> 

    <screenFirst  v-on:toggle="togglePopup($event)" />

    <screenWelcome  />

    <screenOwn v-on:toggle="togglePopup($event)" />

    <screenBenefits />

    <screenRoadmap />

    <screenTeam />

    <LFooter />

    <modal v-show="showModal == true" v-on:toggle="togglePopup($event)"></modal>
  </div>
</template>

<script>

export default {
  name: 'AppHome',
  data () {
    return {
      showModal: false,
    }
  },
  metaInfo: {
    title: 'Roborovski',
    titleTemplate: '%s'
  },
  methods: {
    togglePopup(x){
      this.showModal = x;
    },
  },
  mounted() {
    let style = document.createElement('link');
    style.type = "text/css";
    style.rel = "stylesheet";
    style.href = '//cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(style);
  }
}
</script>

