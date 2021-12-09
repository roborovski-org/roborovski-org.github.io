<template>
  <div id="app">
    <div class="line"></div>

    <transition name="moveInUp">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="sass">
  @import './assets/sass/mixins/_mixins.sass';

  #app
    
    background-image: linear-gradient(to bottom, $socket-d, $surface-d-bg-d)
    background-size: cover
    font-family: Montserrat, sans-serif
  .line
    border: 1px solid transparent
</style>
