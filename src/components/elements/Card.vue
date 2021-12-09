<template>
  <div class="card" v-if="poster">
    <div class="card-overlay"></div>
    <div class="card-item">
      <div class="card-item__image">
        <img v-if="!posterhd"
          v-lazy="poster" alt="" title="" width="192" height="192" class="lazy img-responsive"
        />
        <img v-if="posterhd && poster"
          v-lazy="poster" :data-srcset="posterhd" alt="" title="" width="192" height="192" class="lazy img-responsive"
        />
      </div>
      <div class="card-item__info">
        <div class="card-item__info-row">
          <div class="card-item__info-col1">
            <span class="card-item__info-name">{{ name }}</span>
            <div v-if="summ">{{ summ }} ETH</div>
          </div>
          <div class="card-item__info-col2">

            <div class="card-item__icon card-item__icon--1" v-if="icon1 && icon1 == '1'">
              <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <rect x="0" y="0" width="16" height="16"></rect>
                  <path d="M11.4277344,13.2988281 C11.6816406,13.1083984 11.7304687,12.7910156 11.59375,12.3808594 L10.6025391,9.44628906 L13.1269531,7.63476562 C13.4785156,7.38574219 13.6298828,7.09765625 13.5273437,6.79492188 C13.4248047,6.4921875 13.1416016,6.34570312 12.7070312,6.35058594 L9.61621094,6.375 L8.67382812,3.42089844 C8.54199219,3.00097656 8.31738281,2.77148438 8,2.77148438 C7.68261719,2.77148438 7.46289062,3.00097656 7.32617187,3.42089844 L6.38378906,6.375 L3.29296875,6.35058594 C2.85839844,6.34570312 2.57519531,6.4921875 2.47265625,6.79003906 C2.36523438,7.09765625 2.52148438,7.38574219 2.87304688,7.63476562 L5.39746094,9.44628906 L4.40625,12.3808594 C4.26953125,12.7910156 4.31835938,13.1083984 4.57226562,13.2988281 C4.83105469,13.4941406 5.14355469,13.4306641 5.5,13.171875 L8,11.3359375 L10.5,13.171875 C10.8564453,13.4306641 11.1689453,13.4941406 11.4277344,13.2988281 Z" id="shape" fill="#383A3D" fill-rule="nonzero"></path>
                </g>
              </svg>
            </div>
            <div class="card-item__icon card-item__icon--2" v-if="icon1 && icon1 == '2'">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h16v16H0z"/>
                  <path d="M2.736 3.75c-.107.499-.146 1.163-.146 1.612 0 3.73 2.231 6.191 5.64 6.191 1.66 0 2.641-.727 3.149-1.274.395.566.61 1.162.86 1.958.077.244.253.352.453.352.396 0 .718-.342.718-.801 0-.689-1.006-1.895-1.523-2.373-2.202-2.046-5.537-.81-6.348-3.003-.059-.152.098-.259.23-.127 1.699 1.782 3.95.303 6.044 2.222.21.185.46.097.499-.123.024-.136.039-.36.039-.59 0-2.403-1.66-3.643-4.107-3.643-.8 0-1.738.205-2.466.205-.771 0-1.64-.054-2.353-.796-.244-.249-.6-.19-.689.19z" fill="#383A3D" fill-rule="nonzero"/>
                </g>
              </svg>
            </div>
            <div class="card-item__icon card-item__icon--3" v-if="icon1 && icon1 == '3'">
              <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h16v16H0z"/>
                  <path d="M8 12.92c.093 0 .22-.04.347-.103 2.812-1.426 3.755-2.207 3.755-3.955V5.263c0-.62-.225-.854-.752-1.079-.508-.21-2.286-.83-2.774-.991A2.15 2.15 0 0 0 8 3.1c-.186 0-.396.04-.576.093-.493.156-2.266.781-2.774.991-.532.22-.756.459-.756 1.08v3.598c0 1.748.981 2.466 3.754 3.955a.8.8 0 0 0 .352.102zM5.812 8.104c0-.068.035-.151.088-.215l2.715-3.354c.24-.289.625-.088.489.268l-.87 2.315H9.87c.147 0 .264.107.264.253a.357.357 0 0 1-.088.215L7.33 10.942c-.24.288-.625.088-.488-.269l.869-2.314H6.076a.254.254 0 0 1-.263-.254z" fill="#383A3D" fill-rule="nonzero"/>
                </g>
              </svg>
            </div>
            <div class="card-item__icon card-item__icon--4" v-if="icon2 && icon2 == '4'">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"/>
                <path d="M7.692 14.866c3.466 0 5.777-2.336 5.777-5.84C13.469 3.244 8.51.82 5.109.82c-.692 0-1.15.266-1.15.774 0 .197.09.4.236.578.806.971 1.504 1.961 1.517 3.161 0 .095-.007.184-.026.273-.387-.813-.984-1.231-1.536-1.231-.33 0-.552.228-.552.59 0 .216.05.54.05.876 0 1.479-1.117 2.17-1.117 4.545 0 2.691 2.057 4.481 5.161 4.481zm.159-2.088c-1.18 0-1.955-.698-1.955-1.752 0-1.092.761-1.441.863-2.234.006-.09.089-.134.171-.064.273.254.451.571.597.959.317-.515.419-1.397.298-2.343-.019-.108.064-.158.153-.12a3.561 3.561 0 0 1 2.1 3.243c0 1.27-.774 2.31-2.227 2.31z" fill="#383A3D" fill-rule="nonzero"/>
              </g>
            </svg>

          </div>
          <div class="card-item__icon card-item__icon--5" v-if="icon2 && icon2 == '5'">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"/>
                <path d="M8.002 12.213c3.995 0 6.656-3.218 6.656-4.204 0-.991-2.666-4.209-6.656-4.209-3.94 0-6.66 3.218-6.66 4.209 0 .986 2.715 4.204 6.66 4.204zm0-1.572a2.652 2.652 0 0 1-2.646-2.632c-.005-1.47 1.177-2.632 2.646-2.632A2.63 2.63 0 0 1 10.65 8.01c0 1.43-1.187 2.632-2.647 2.632zm0-1.631c.552 0 1.011-.454 1.011-1.001 0-.552-.459-1.006-1.01-1.006-.557 0-1.011.454-1.011 1.006a1.01 1.01 0 0 0 1.01 1.001z" fill="#383A3D" fill-rule="nonzero"/>
              </g>
            </svg>
          </div>
          <div class="card-item__icon card-item__icon--6" v-if="icon2 && icon2 == '6'">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h16v16H0z"/>
                <path d="m2.907 9.138 3.926 3.926c.762.766 1.567.771 2.33.01l3.94-3.941c.756-.762.756-1.567-.01-2.334L9.172 2.878c-.767-.767-1.572-.771-2.334-.01l-3.94 3.94c-.762.762-.757 1.568.01 2.33zm.835-.698c-.303-.308-.317-.62.005-.938l3.78-3.784c.322-.322.63-.313.937-.005l3.789 3.789c.308.308.317.62 0 .938l-3.784 3.784c-.323.317-.635.307-.938.005l-3.789-3.79zm.81-.25 3.228 3.228c.152.147.288.147.445-.005l3.222-3.222c.147-.147.147-.289-.005-.445L8.225 4.528c-.157-.156-.293-.156-.445-.004L4.558 7.746c-.157.156-.157.293-.005.445z" fill="#383A3D" fill-rule="nonzero"/>
              </g>
            </svg>
          </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LCard',
  props: {
    name: {
      type: String,
      default: ''
    },
    summ: {
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
    icon1: {
      type: String,
      default: ''
    },
    icon2: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
  @import "../../assets/sass/mixins/mixins.sass"
  .card
    position: relative
    border: solid 1px $bg-l-6
    padding: .4rem
    border-radius: 12px
    max-width: 20rem
    &-overlay
      border-radius: 12px
      -webkit-backdrop-filter: blur(40px)
      backdrop-filter: blur(40px)
      box-shadow: 8px 8px 24px 0 rgba(9, 13, 20, 0.4), -4px -4px 8px 0 $text-d-text-d-4, 0 1px 1px 0 rgba(9, 13, 20, 0.4)
      background-image: linear-gradient(143deg, $bg-l-12, $bg-l-6 52%, rgba(245, 247, 250, 0) 100%)
      position: absolute
      z-index: 1
      top: 0
      left: 0
      right: 0
      bottom: 0
    &-item
      position: relative
      z-index: 200
      &__icon
        display: flex
        width: 2rem
        min-width: 2rem
        height: 2rem
        border-radius: .4rem
        align-items: center
        justify-content: center
        &--1
          background-image: linear-gradient(to bottom, #d78ffb, #a0fef9)
        &--2
          background-image: linear-gradient(to bottom, #ceffad, #618c8f)
        &--3
          background-image: linear-gradient(to bottom, #d599e1, #f5a7b4 53%, #ffcbad)
        &--4
          background-image: linear-gradient(to bottom, #fbe2c4, #fea7a0)
        &--5
          background-image: linear-gradient(to bottom, #ade9ff, #ac99e1)
        &--6
          background-image: linear-gradient(to bottom, #faffad 1%, #ffcbad)
      &__image
        // margin-bottom: .4rem
        img
          +transition
          border-radius: .4rem
          &:hover
            transform: scale(1.4)
      &__info
        padding: .8rem .8rem .8rem 1.2rem
        background-color: rgba(40, 42, 46, 0.8)
        border-radius: .8rem
        margin-top: .4rem
        &-name
        &-summ
        &-row
          display: flex
          width: 100%
          justify-content: space-between
          align-items: center
          +lg
            flex-direction: column
            justify-content: flex-start
        &-col1
          +lg
            
            width: 100%
          span
            +font(1.4rem, 1.71em, 600)
            display: block
            color: $white
          div
            +font(1.3rem, 1.85em, 700, 1px)
            display: block
            color: $white
            // font-family: 'Druk Wide Cy Web Super';
        &-col2
          display: flex
          flex-direction: column
          justify-content: flex-start
          +lg
            flex-direction: row
            justify-content: flex-start
            align-items: flex-start
            margin: .8rem 0 0
            width: 100%
          .card-item__icon
            &:not(:last-child)
              margin: 0 0 .4rem
              +lg
                margin: 0 .8rem 0 0
</style>