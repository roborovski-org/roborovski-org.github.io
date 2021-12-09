<template>

    <section class="section-welcome">
        <div class="container" data-aos="fade-up">
          <div v-show="$screen.width >  991" class="welcome-line" data-aos="fade-down" data-delay="500" data-offset="100">
            <img v-lazy="'src/assets/images/welcome-line.svg'" width="816" height="172" alt="" title="" class="">
          </div>
          <div class="row align-items-center row-mb-144" data-aos="fade-right">
            <div class="col-lg-8">
              <div class="welcome__img">
                <img v-lazy="'src/assets/images/own/1.png'" data-srcset="src/assets/images/own/1@2x.png 2x" alt="" title="" class="lazy img-responsive">
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pre-title"><span>Welcome to Marvin’s Pet Shop</span></div>
              <h2 class="title">The Story Behind <span>Roborovski</span> the Hamster</h2>
              <p class="desc">Left alone and forgotten, Roborovski’s size keeps him isolated from the hustle and bustle of Marvin’s Pet Shop. Resentment and jealousy begin to pour into his body, where he will storm the world in a murderous rampage.</p>
            </div>
          </div>
          <div class="row align-items-center" data-aos="fade-left">
            <div class="col-lg-4 order-2 order-lg-1">
              <div class="pre-title"><span>Become Part of This Monumental Tale</span></div>
              <h2 class="title">intricately crafted by a team of <span>award-winning</span> Hollywood artists</h2>
              <p class="desc">Caravan Studio has lovingly made the NFT artwork collection that narrates his story, paired with an exclusive film for owners. One of the most revered names in comic books, video games, film, and media art.</p>
            </div>
            <div class="col-lg-8 order-1 order-lg-2">
              <div class="welcome__img welcome__img--right">
                <img v-lazy="'src/assets/images/own/2.png'" data-srcset="src/assets/images/own/2@2x.png 2x" alt="" title="" class="lazy img-responsive">
              </div>
            </div>
          </div>
        </div>
    </section>
    
</template>

<script>
export default {
  name: 'screenOwn'
}
</script>

<style lang="sass">
  @import "../assets/sass/mixins/_mixins"
  .section-welcome
    padding: 7.2rem 0
    position: relative
    z-index: 1
    background-image: linear-gradient(to bottom, $socket-d, $surface-d-bg-d)
    overflow: hidden
    +lg
      // display: none
      padding: 3.2rem 0 2.4rem
      background-image: linear-gradient(to bottom, $socket-d, $surface-d-bg-d)
    .row-mb-144
      margin-bottom: 14.4rem
      +lg
        margin-bottom: 4.8rem
    .container
      position: relative
    .row
      position: relative
      z-index: 10
  .welcome
    &-line
      position: absolute
      top: 44.4rem
      left: calc(50% - 40.8rem)
      z-index: 1
      +xl
        // top: 41rem
      +media-i(991, 1399)
        top: 42rem
      img
        transform: translateX(10rem)
        +media-i(991, 1399)
          transform: translateX(2rem)
          max-width: 90%
    &__img
      display: flex
      align-items: center
      justify-content: flex-start
      +lg 
        margin-bottom: 1.6rem
        justify-content: center
      &--right
        justify-content: flex-end
        +lg
          justify-content: center
</style>