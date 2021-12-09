<template>
  <div class="team" v-if="poster && photo">
    <div class="team-card">
      <div class="team-card-inner">
      
        <div class="team-card__state">
          <img 
            v-lazy="'src/assets/images/team/' + poster" class="lazy"
            
          />
        </div>

        <div class="team-card__hover">
          <img 
            v-lazy="'src/assets/images/team/' + photo" class="lazy"
          />
        </div>
      </div>

    </div>
    <div class="team-bottom">
      <div class="team-name" v-html="name"></div>
      <div class="team-info" :class="horizontal == 1 ? 'team-info__horizontal': ''">
        <a :href="telegram" v-if="telegram" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"/>
                  <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm4.979 6.545c-.073-.614-.817-.479-1.23-.34-2.128.809-4.234 1.678-6.332 2.563-1.219.54-2.524 1.077-3.693 1.721-.57.417.399.693 1.06.966.736.227 1.595.573 2.332.168 1.443-.83 2.778-1.83 4.147-2.773.249-.16 1.004-.68.749-.062-.948 1.036-2.008 1.873-3.008 2.858-.35.285-.714.858-.322 1.257 1.198.838 2.422 1.65 3.635 2.47.505.404 1.295.077 1.406-.553.322-1.892.653-3.783.939-5.681.112-.863.277-1.726.317-2.594z" fill-opacity=".6" fill="#E0E0FF" fill-rule="nonzero"/>
              </g>
          </svg>
        </a>
        <a :href="linkedin" v-if="linkedin" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"/>
                  <path d="M19.04 19.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H9.793V9.5h2.845v1.3h.038c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238zM6.447 8.194c-.954 0-1.72-.772-1.72-1.72a1.72 1.72 0 1 1 1.72 1.72zm1.484 10.85h-2.97V9.5h2.97v9.543zM20.521 2H3.476C2.66 2 2 2.645 2 3.44v17.12c0 .796.66 1.44 1.476 1.44h17.042c.815 0 1.482-.644 1.482-1.44V3.44C22 2.646 21.333 2 20.518 2h.003z" fill-opacity=".6" fill="#E0E0FF" fill-rule="nonzero"/>
              </g>
          </svg>
        </a>
        <a :href="twitter" v-if="twitter" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"/>
                  <path d="M8.28 20.126c7.544 0 11.672-6.256 11.672-11.672 0-.176 0-.352-.008-.528a8.357 8.357 0 0 0 2.048-2.128 8.314 8.314 0 0 1-2.36.648 4.127 4.127 0 0 0 1.808-2.272 8.16 8.16 0 0 1-2.608.992A4.095 4.095 0 0 0 15.84 3.87a4.107 4.107 0 0 0-4.104 4.104c0 .32.04.632.104.936a11.649 11.649 0 0 1-8.456-4.288 4.113 4.113 0 0 0 1.272 5.48A4.15 4.15 0 0 1 2.8 9.59v.056a4.11 4.11 0 0 0 3.288 4.024 4 4 0 0 1-1.08.144c-.264 0-.52-.024-.768-.072a4.102 4.102 0 0 0 3.832 2.848 8.228 8.228 0 0 1-5.096 1.76c-.328 0-.656-.016-.976-.056a11.669 11.669 0 0 0 6.28 1.832" fill-opacity=".6" fill="#E0E0FF" fill-rule="nonzero"/>
              </g>
          </svg>
        </a>
        <a :href="instagram" v-if="instagram" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"/>
                  <path d="M13.028 2c1.8.004 2.18.018 3.095.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 0 1 1.772 1.153 4.902 4.902 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.042.914.056 1.295.06 3.095v2.056c-.004 1.8-.018 2.18-.06 3.095-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 0 1-1.153 1.772 4.902 4.902 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-.914.042-1.295.056-3.095.06h-2.056c-1.8-.004-2.18-.018-3.095-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 0 1-1.772-1.153 4.902 4.902 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.042-.914-.056-1.295-.06-3.095v-2.056c.004-1.8.018-2.18.06-3.095.049-1.064.218-1.791.465-2.427a4.902 4.902 0 0 1 1.153-1.772A4.902 4.902 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465.914-.042 1.295-.056 3.095-.06zm-.472 1.802h-1.112c-1.559.001-2.173.008-2.76.028l-.195.007-.53.023c-.975.045-1.504.207-1.857.344-.466.182-.8.399-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857l-.023.53-.007.195c-.02.587-.027 1.201-.028 2.76v1.112c.001 1.559.008 2.173.028 2.76l.007.195.023.53c.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344l.53.023.195.007c.587.02 1.201.027 2.76.028h1.112c1.559-.001 2.173-.008 2.76-.028l.195-.007.53-.023c.975-.045 1.504-.207 1.857-.344.466-.182.8-.399 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857l.023-.53.007-.195c.02-.587.027-1.201.028-2.76v-1.112c-.001-1.559-.008-2.173-.028-2.76l-.007-.195a86.81 86.81 0 0 0-.023-.53c-.045-.975-.207-1.504-.344-1.857a3.098 3.098 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344a86.802 86.802 0 0 0-.53-.023l-.195-.007c-.587-.02-1.201-.027-2.76-.028zM12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" fill-opacity=".6" fill="#E0E0FF" fill-rule="nonzero"/>
              </g>
          </svg>
        </a>
        <a :href="imdb" v-if="imdb" target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z"/>
                  <path d="M23 6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h22zM4.875 8.625H3v6.75h1.875v-6.75zm3.104 0H5.625v6.75h1.59l.007-4.457.67 4.457h1.132l.635-4.556.005 4.556h1.586v-6.75H8.877l-.42 3.153-.26-1.715-.045-.321c-.06-.417-.117-.79-.173-1.117zm6.948 0H12v6.75h2.927c.662 0 1.198-.533 1.198-1.191V9.816c0-.659-.536-1.191-1.198-1.191zm3.742 0h-1.794v6.663h1.681l.108-.412c.221.302.585.499.997.499h.12c.673 0 1.219-.527 1.219-1.177v-2.706c0-.65-.546-1.177-1.219-1.177h-.12c-.403 0-.76.189-.992.478V8.625zm.28 2.734c.1 0 .24.05.276.13.035.08.052.254.052.518v1.6c0 .301-.015.492-.047.57-.03.08-.179.12-.28.12-.102 0-.248-.042-.282-.12V11.47c.03-.07.182-.111.281-.111zM13.763 9.78c.207 0 .35.02.424.06.076.04.123.103.144.189.021.086.032.281.032.586v2.618c0 .45-.032.723-.095.824-.063.103-.231.152-.505.152z" fill-opacity=".6" fill="#E0E0FF" fill-rule="nonzero"/>
              </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LTeam',
  props: {
    name: {
      type: String,
      default: 'button'
    },
    imdb: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    instagram: {
      type: String,
      default: ''
    },
    telegram: {
      type: String,
      default: ''
    },
    linkedin: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    },
    posterhd: {
      type: String,
      default: ''
    },
    photo: {
      type: String,
      default: ''
    },
    photohd: {
      type: String,
      default: ''
    },
    horizontal: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
  @import "../../assets/sass/mixins/mixins.sass"
  .team
    position: relative
    margin-bottom: 3.2rem
    max-width: 20rem
    +lg
      max-width: 14rem
      margin-bottom: 2.4rem
    &-card
      background-color: transparent
      width: 20rem
      height: 20rem
      perspective: 1000px
      margin-bottom: .8rem
      // @include transition
      +lg
        width: 14rem
        height: 14rem
      img
        +transition
      &-inner
        position: relative
        width: 100%
        height: 100%
        text-align: center
        transition: transform 0.8s
        transform-style: preserve-3d
      &:hover
        // transform: scale(1.05)
        .team-card-inner
          transform: rotateY(180deg)
        .team-card__state
        .team-card__hover
      &__state,
      &__hover
        position: absolute
        width: 100%
        height: 100%
        -webkit-backface-visibility: hidden
        backface-visibility: hidden
        img
          max-width: 100%
      &__state
        
      &__hover
        transform: rotateY(180deg)
    &-bottom
      position: relative
    &-name
      @include font(2rem, 1.4em, 600, -0.4px)
      color: $white
      +lg
        @include font(1.6rem, 1.5em, 600)
    &-info
      position: absolute
      top: .2rem
      right: 0
      display: flex
      justify-content: flex-end
      align-items: center
      +lg
        flex-direction: column
        justify-content: flex-start
      &__horizontal
        +lg
          flex-direction: row
          justify-content: flex-end
      & > a
        display: inline-flex
        justify-content: center
        align-items: center
        +lg
          margin: 0 0 .4rem
        svg
          +lg
            width: 2rem
            height: 2rem
          path
            @include transition
        &:hover
          svg
            path
              fill-opacity: 1
        &:not(:first-child)
          margin-left: .8rem
          +lg
            margin: 0 0 .4rem
  .partners
    +lg
      display: flex
      justify-content: center
      flex-wrap: wrap
      img
        max-width: 14rem
</style>