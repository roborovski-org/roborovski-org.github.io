<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-auto">
          <div class="footer__info">
            <img v-lazy="'src/assets/images/roborovski-sign.png'" alt="" title="" class="footer__logo">
            <div class="footer__author">
              <span>Project created by </span> <a href="https://www.syaconcept.com/" target="_blank">SYA Concept</a>
            </div>
            <div class="footer__author">
              <span>Webpage created by</span> <a href="https://roobinium.io/" target="_blank">roobinium.io</a>
            </div>
            <div class="footer__copy">© 2021 Roborovski</div>
          </div>
        </div>
        <div class="col-6 col-lg-auto ml">
          <div class="footer__links">
            <div class="footer__links-title">Docs</div>
            <div class="footer__links-items">
              <router-link to="/terms" class="footer__links-item">Terms & Conditions</router-link>
              <!-- <a href="/terms.pdf" class="footer__links-item" target="_blank">Terms & Conditions</a> -->
              <a href="#" class="footer__links-item" target="_blank">Smart Contract</a>
            </div>
          </div>
        </div>
        <div class="col-6 col-lg-auto">
          <div class="footer__links footer__links--ml13">
            <div class="footer__links-title">follow</div>
            <div class="footer__links-items">
              <a href="#" class="footer__links-item" target="_blank">Twitter</a>
              <a href="#" class="footer__links-item" target="_blank">Telegram</a>
              <a href="#" class="footer__links-item" target="_blank">Discord</a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'LFooter',
    // data () {
    //   return {
    //     classes: []
    //   }
    // },
    // methods: {
    //   hoverOver: function() {
    //     // console.log('over');
    //     this.classes = ['animate__animated', 'animate__bounce']
    //   },
    //   hoverOut: function() {
    //     // console.log('out');
    //     this.classes = []
    //   },
    //   hoverOutTimeout: function() {
    //     setTimeout(() => { 
    //       console.log('out');
    //       this.classes = []
    //     }, 1000);
    //   },
    // }
  }
</script>

<style lang="sass">
  @import "../../assets/sass/mixins/mixins.sass"
  .footer
    background-color: $socket-d
    padding: 4.8rem 0 
    +lg
      padding: 3.2rem 0
    .ml
      margin-left: auto
      +lg
        margin-left: 0
    &__info
    &__logo
      max-width: 200px
      margin-bottom: 2.8rem
      +lg
        margin-bottom: 1.6rem
    &__copy
      @include font(1.4rem, 1.71rem, 500)
      +lg
        margin-bottom: 3.2rem
    &__author
      @include font(1.4rem, 1.71rem, 500)
      color: $text-d-60
      margin-bottom: .4rem
      a
        +transition
        color: $white
        &:hover
          color: $text-d-60
    &__links
      &--ml13
        margin-left: 13rem
        +lg
          margin-left: 0
      &-title
        margin: 0 0 1.6rem
        @include font(1.3rem, 1.23em, 600, 1px)
        color: $white
        text-transform: uppercase
      &-items
        display: flex
        flex-direction: column
        align-items: flex-start
      &-item
        @include font(1.4rem, 1.71em, 500)
        color: $text-d-60
        +transition
        &:hover, &.active
          color: $white
          transform: translateX(.4rem)
        &:not(:last-child)
          margin-bottom: .4rem
</style>