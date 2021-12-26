<template>
  <header class="header" data-aos="fade-up">
    
    <transition name="fade">
      <div class="mobile__menu" v-show="$screen.width <= 991 && isMobileOpen == true">
        <div class="container">
          <div class="mobile__menu-links">
            <a href="#" v-scroll-to="{
              el: '#roadmap',
              onDone: closeMobileMenu
            }" class="mobile__menu-link">Roadmap</a>
            <a href="#" v-scroll-to="{
              el: '#collection',
              onDone: closeMobileMenu
            }" class="mobile__menu-link">Collection</a>
            <a href="#" v-scroll-to="{
              el: '#team',
              onDone: closeMobileMenu
            }" class="mobile__menu-link">Team</a>
          </div>
        </div>
      </div>
    </transition>

    <div class="container">
      <div class="menu__top">
        <div class="row justify-content-between align-items-center">
          <div class="col-auto" v-show="$screen.width > 991">
            <nav class="menu">
              <a href="#" v-scroll-to="'#roadmap'" class="nav-link">Roadmap</a>
              <a href="#" v-scroll-to="'#collection'" class="nav-link">Collection</a>
              <a href="#" v-scroll-to="'#team'" class="nav-link">Team</a>
              <router-link to="/howtobuy" class="nav-link">How to Buy?</router-link>
            </nav>
          </div>
          <div class="col-12 col-lg-auto">
            <div class="header-info">
              <div class="header-mmenu" v-show="$screen.width <= 991">
                <svg @click="isMobileOpen = true" v-if="isMobileOpen == false" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h24v24H0z"/>
                        <path d="M19.297 9.555a.817.817 0 0 0 .805-.82.807.807 0 0 0-.805-.82H4.703a.812.812 0 0 0-.805.82c0 .437.36.82.805.82h14.594zm0 3.633a.817.817 0 0 0 .805-.82.807.807 0 0 0-.805-.821H4.703a.812.812 0 0 0-.805.82c0 .438.36.82.805.82h14.594zm0 3.64c.445 0 .805-.383.805-.828a.807.807 0 0 0-.805-.82H4.703a.812.812 0 0 0-.805.82c0 .438.36.828.805.828h14.594z" fill="#FFF" fill-rule="nonzero"/>
                    </g>
                </svg>
                <svg @click="isMobileOpen = false" v-else width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M0 0h24v24H0z"/>
                        <path d="M18.078 18.453c.399-.406.399-1.07.008-1.46l-4.617-4.618 4.617-4.625c.39-.39.398-1.063-.008-1.46a1.05 1.05 0 0 0-1.46-.009L12 10.898 7.375 6.281c-.375-.383-1.063-.398-1.46.008-.4.399-.392 1.086-.009 1.461l4.617 4.625-4.617 4.617c-.383.383-.39 1.063.008 1.461.406.399 1.086.39 1.461.016L12 13.844l4.617 4.617c.39.39 1.063.39 1.461-.008z" fill="#FFF" fill-rule="nonzero"/>
                    </g>
                </svg>


              </div>
              <div class="header-info__soc soc">
                <a href="#" target="_blank" class="soc-link">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                      <rect fill-opacity="0" x="0" y="0" width="24" height="24"></rect>
                      <path d="M8.28,20.126 C15.824,20.126 19.952,13.87 19.952,8.454 C19.952,8.278 19.952,8.102 19.944,7.926 C20.744,7.35 21.44,6.622 21.992,5.798 C21.256,6.126 20.464,6.342 19.632,6.446 C20.48,5.942 21.128,5.134 21.44,4.174 C20.648,4.646 19.768,4.982 18.832,5.166 C18.08,4.366 17.016,3.87 15.84,3.87 C13.576,3.87 11.736,5.71 11.736,7.974 C11.736,8.294 11.776,8.606 11.84,8.91 C8.432,8.742 5.408,7.102 3.384,4.622 C3.032,5.23 2.832,5.934 2.832,6.686 C2.832,8.11 3.56,9.366 4.656,10.102 C3.984,10.078 3.352,9.894 2.8,9.59 C2.8,9.606 2.8,9.622 2.8,9.646 C2.8,11.63 4.216,13.294 6.088,13.67 C5.744,13.766 5.384,13.814 5.008,13.814 C4.744,13.814 4.488,13.79 4.24,13.742 C4.76,15.374 6.28,16.558 8.072,16.59 C6.664,17.694 4.896,18.35 2.976,18.35 C2.648,18.35 2.32,18.334 2,18.294 C3.808,19.446 5.968,20.126 8.28,20.126" id="shape" fill-opacity="0.6" fill="#E0E0FF" fill-rule="nonzero"></path>
                    </g>
                  </svg>
                </a>
                <a href="#" target="_blank" class="soc-link">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                      <rect fill-opacity="0" x="0" y="0" width="24" height="24"></rect>
                      <path d="M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M16.9785,8.54463333 C16.9055833,7.931325 16.16195,8.066175 15.7480833,8.20408333 C13.6209167,9.0135 11.515,9.88291667 9.41741667,10.7676667 C8.19816667,11.3078333 6.89325,11.8452667 5.72425,12.4891667 C5.1546,12.9062625 6.12260833,13.1818208 6.78318333,13.4553292 C7.51993333,13.6817283 8.37901667,14.0284625 9.1161,13.6227208 C10.5591,12.7938042 11.8942667,11.7930542 13.2629333,10.8498875 C13.512025,10.6905 14.2672,10.1703667 14.0116167,10.7875417 C13.0641167,11.8237083 12.0038667,12.6607917 11.0041167,13.6460417 C10.6535425,13.930875 10.2895333,14.5036833 10.682075,14.9025417 C11.8804083,15.7414583 13.103575,16.5534083 14.3174083,17.3732917 C14.8224917,17.77655 15.6118583,17.4503667 15.7229083,16.8202167 C16.0452,14.9284667 16.3757167,13.0369667 16.6616583,11.1389667 C16.7743083,10.2758833 16.938555,9.4128 16.9785,8.54463333 Z" id="shape" fill-opacity="0.6" fill="#E0E0FF" fill-rule="nonzero"></path>
                    </g>
                  </svg>
                </a>
                <a href="#" target="_blank" class="soc-link">
                  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g>
                      <rect fill-opacity="0" x="0" y="0" width="24" height="24"></rect>
                      <path d="M18.9308446,5.64367756 C17.6561123,5.05877617 16.2891546,4.6278466 14.8599152,4.38103534 C14.833887,4.37627196 14.807887,4.3881759 14.7944785,4.41198435 C14.6186757,4.7246635 14.4239433,5.13257899 14.2875771,5.4531987 C12.7503377,5.22305786 11.2209857,5.22305786 9.71526739,5.4531987 C9.57887303,5.12545222 9.37707022,4.7246635 9.20047867,4.41198435 C9.18707022,4.38897027 9.16107022,4.37706633 9.13504205,4.38103534 C7.70659138,4.62705787 6.33963367,5.05798744 5.06411257,5.64367756 C5.05307032,5.64843813 5.04360553,5.65638179 5.03732384,5.66669165 C2.44449292,9.54032536 1.73420814,13.3187478 2.08265011,17.0503252 C2.08422673,17.0685787 2.0944749,17.0860435 2.10866504,17.0971421 C3.81934077,18.3534237 5.47642242,19.1160998 7.10273224,19.6216209 C7.12876041,19.6295646 7.15633787,19.6200434 7.17290125,19.5986068 C7.55760547,19.0732547 7.90053504,18.5193111 8.1945632,17.9367759 C8.21191531,17.9026632 8.19535193,17.8621843 8.15988715,17.8486914 C7.6159435,17.6423533 7.09799985,17.3907759 6.59977451,17.1050857 C6.56036606,17.0820717 6.55721113,17.0257055 6.59346465,16.9987195 C6.69830972,16.9201562 6.80318295,16.8384097 6.90329563,16.7558745 C6.9214083,16.7408041 6.94664774,16.737621 6.96794351,16.7471421 C10.2410702,18.2415364 13.7846194,18.2415364 17.0191264,16.7471421 C17.0404221,16.7368322 17.0656616,16.7400153 17.084563,16.7550857 C17.1847038,16.837621 17.2895489,16.9201562 17.3951827,16.9987195 C17.4314362,17.0257055 17.42907,17.0820717 17.3896616,17.1050857 C16.8914362,17.3963252 16.3734926,17.6423533 15.8287602,17.8479026 C15.7932954,17.8613956 15.7775208,17.9026632 15.7948729,17.9367759 C16.0952109,18.5184942 16.4381405,19.0724378 16.8157461,19.5978181 C16.8315207,19.6200434 16.8598869,19.6295646 16.8859151,19.6216209 C18.5201123,19.1160998 20.1771826,18.3534237 21.8878586,17.0971421 C21.9028446,17.0860435 21.9123094,17.0693674 21.9138868,17.0511139 C22.3309009,12.7370013 21.215408,8.98956481 18.9568446,5.66748038 C18.9513235,5.65638179 18.9418869,5.64843813 18.9308446,5.64367756 Z M8.68335192,14.7781844 C7.69791533,14.7781844 6.88594351,13.8734802 6.88594351,12.7624098 C6.88594351,11.6513394 7.68216885,10.7466352 8.68335192,10.7466352 C9.69239415,10.7466352 10.4965068,11.6592831 10.4807322,12.7624098 C10.4807322,13.8734802 9.68450683,14.7781844 8.68335192,14.7781844 Z M15.3289574,14.7781844 C14.343549,14.7781844 13.5315772,13.8734802 13.5315772,12.7624098 C13.5315772,11.6513394 14.3277743,10.7466352 15.3289574,10.7466352 C16.3380278,10.7466352 17.1421123,11.6592831 17.1263658,12.7624098 C17.1263658,13.8734802 16.3380278,14.7781844 15.3289574,14.7781844 Z" id="shape" fill-opacity="0.6" fill="#E0E0FF" fill-rule="nonzero"></path>
                    </g>
                  </svg>
                </a>

              </div>
              <div class="header-info__wallet">
                <LButton 
                  tag="button"
                  label="Connect wallet"
                  @click="$emit('click')"
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'LHeader',
  data () {
    return {
      isMobileOpen: false
    }
  } ,
  methods: {
    closeMobileMenu() {
      this.isMobileOpen = false;
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/sass/mixins/mixins.sass"

.mobile__menu
  position: fixed
  top: 0 
  left: 0 
  right: 0 
  padding: 9.6rem 2rem 2.4rem
  background-color: $card-d-2
  display: flex
  flex-direction: column
  position: absolute
  z-index: 10
  &-links
    display: flex
    flex-direction: column
    width: 100%
  &-link
    @include font(1.4rem, 1.71em, 600)
    color: $white
    padding: 1.2rem 5.2rem
    &:hover
    &:active
      border-radius: .4rem
      background-color: $text-d-2

.header
  position: fixed
  top: 0
  left: 0
  right: 0
  width: 100%
  z-index: 100
  +lg
    // display: none
  .container
    +lg
      position: relative
      z-index: 100
  nav
    display: flex
    justify-content: flex-start
    align-items: center
    .nav-link
      @include font(1.6rem, 1.75em, 600)
      color: $white
      +transition
      &:hover
      &:not(:last-child)
        margin-right: 4.8rem
.menu__top
  border-bottom: 1px solid $text-d-text-d-6
  padding: 2rem 0 
  +lg
    padding: 1.6rem 0
.soc
  display: flex
  justify-content: flex-start
  align-items: center
  +lg

  .soc-link
    display: flex
    width: 4.8rem
    height: 4.8rem
    align-items: center
    justify-content: center
    +lg
      width: 2rem
      height: 2rem
      &:not(:last-child)
        margin-right: 1.6rem
    svg
      path
        +transition
    &:hover
      svg
        path
          fill-opacity: 1
.header
  &-mmenu
    display: flex
    width: 2.4rem
    height: 2.4rem
    align-items: center
    justify-content: center
    cursor: pointer
.header-info
  display: flex
  align-items: flex-start
  justify-content: flex-end
  +lg
    justify-content: space-between
    align-items: center
    width: 100%
    position: relative
  &__wallet
    margin-left: 3.2rem
    +lg
      margin-left: 1.6rem
    .l-primary-button
      +lg
        height: 4.4rem
    .btn 
      +lg
        span
          padding: .6rem  1.6rem
          @include font(1.4rem, 1.71em, 600)
// .mobile__menu
//   position: fixed
//   top: 0 
//   left: 0 
//   right: 0 
//   background-color: $card-d-2
//   z-index: 1
</style>