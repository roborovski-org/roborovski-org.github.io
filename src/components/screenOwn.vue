<template>
  <section class="section-own" id="collection">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-8">
          <div class="own__img">
            <img v-lazy="'src/assets/images/bg/bg-nft.png'" data-srcset="src/assets/images/bg/bg-nft@2x.png 2x" width="872" height="500" class="img-responsive lazy">
            
            <div v-show="$screen.width <= 991" class="cards__pos-button" @click = "showPopup()">
              <button class="btn-round">
                <span>Mint now</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-3 offset-xl-1">
          <div class="pre-title"><span>nft collection</span></div>
          <h2 class="title">Make <span>Roborovski</span> Your Ownr</h2>
          <p class="desc">Each Roborovski NFT is a piece of art that tells an immersive and meaningful story of its own.</p>
        </div>
      </div>
      <div class="cards">
        <div class="cards__pos cards__pos--1" data-aos="flip-up">
          <LCard 
            poster="src/assets/images/nft/nft-1.png"
            posterhd="src/assets/images/nft/nft-1@2x.png 2x"
            name="Roborovski #1224"
            summ="2.28"
            icon1="1"
            icon2="4"
          />
        </div>
        <div class="cards__pos cards__pos--2" data-aos="flip-down">
          <LCard 
            poster="src/assets/images/nft/nft-2.png"
            posterhd="src/assets/images/nft/nft-2@2x.png 2x"
            name="Roborovski #65"
            summ="1.65"
            icon1="2"
            icon2="5"
          />
        </div>
        <div class="cards__pos cards__pos--3" data-aos="flip-up">
          <LCard 
            poster="src/assets/images/nft/nft-3.png"
            posterhd="src/assets/images/nft/nft-3@2x.png 2x"
            name="Roborovski #724"
            summ="1.97"
            icon1="3"
            icon2="6"
          />
        </div>
        <div class="cards__pos cards__pos--4" data-aos="flip-down">
          <LCard 
            poster="src/assets/images/nft/nft-4.png"
            posterhd="src/assets/images/nft/nft-4@2x.png 2x"
            name="Roborovski #9542"
            summ="2.01"
            icon1="1"
            icon2="4"
          />
          <div v-show="$screen.width > 991" class="cards__pos-button">
            <button class="btn-round" @click = "showPopup()">
              <span>Mint now</span>
            </button>
          </div>
        </div>
        <div class="cards__pos cards__pos--5" data-aos="flip-up">
          <LCard 
            poster="src/assets/images/nft/nft-5.png"
            posterhd="src/assets/images/nft/nft-5@2x.png 2x"
            name="Roborovski #8372"
            summ="1.44"
            icon1="2"
            icon2="5"
          />
        </div>
        <div class="cards__pos cards__pos--6" data-aos="flip-down">
          <LCard 
            poster="src/assets/images/nft/nft-6.png"
            posterhd="src/assets/images/nft/nft-6@2x.png 2x"
            name="Roborovski #1132"
            summ="1.83"
            icon1="3"
            icon2="6"
          />
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'screenOwn',
  methods: {
    showPopup(){
      this.$emit('toggle', true);
    }
  }
}
</script>

<style lang="sass">
  @import "../assets/sass/mixins/_mixins"
  .section-own
    background-image: linear-gradient(to bottom, $surface-d-bg-d, #15191f)
    padding: 7.2rem 0
    position: relative
    z-index: 1
    +lg
      padding: 2.4rem 0 3.2rem
    .title
      +lg
        margin-bottom: 2.4rem
    .desc
      +lg
        margin: 0 0 3.2rem
  .own
    &__img
      +lg
        position: relative
        margin: 0 0 1.6rem
  .cards
    display: flex
    margin: 0 -1.5rem
    position: relative
    margin-top: -12rem
    +lg
      margin: 0 -0.8rem
      flex-wrap: wrap
      align-items: flex-start
      & > div
        width: 50%
    .card
      +lg
        width: 100%
        max-width: 100%
    +media-i(1200, 1399)
      margin-top: -7rem
    +xl
      margin-top: -2rem
    +lg
    
      margin-top: 0
    &__pos
      padding: 0 1.5rem
      +xl
        padding: 0 .8rem
      +lg
        margin: 0 0 1.6rem
      &-button
        margin-top: 4.8rem
        display: flex
        width: 100% 
        justify-content: center
        +lg
          justify-content: flex-end
          position: absolute
          right: 0
          bottom: 2rem
      &--1
      &--2
        margin-top: -3.2rem
        +lg
          margin-top: 0
      &--3
        margin-top: -6.4rem
        +lg
          margin-top: 0
      &--4
        margin-top: -20.6rem
        +lg
          margin-top: 0
      &--5
        margin-top: -6.4rem
        +lg
          margin-top: 0
    .card
      +transition
      &:hover
        // transform: translateY(-.8rem)
        // margin-top: -10px
</style>