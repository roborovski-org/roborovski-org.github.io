<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-overlay" @click="closePopup()"></div>
        <div class="modal-container">

          <div class="modal-img">
            <img v-lazy="'src/assets/images/popup/r-popup.png'" data-srcset="src/assets/images/popup/r-popup.png 2x" width="432" height="432" alt="" title="" class="lazy">
          </div>

          <div class="modal-body">
            <div class="modal-header"><span>423</span> / 2,500</div>
            <div class="modal-desc">Roborovski minted</div>

            <div class="modal-select">
              <div class="sel">
                <div class="sel-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" opacity=".6">
                      <path d="M0 0h24v24H0z"/>
                      <path d="M17.59 13.406c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h11.18z" fill="#E0E0FF" fill-rule="nonzero"/>
                    </g>
                  </svg>
                </div>

                <input 
                  type="number"
                  value="1"
                  
                />

                <div class="sel-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd" opacity=".6">
                      <path d="M0 0h24v24H0z"/>
                      <path d="M11.996 19.07c.57 0 1.04-.484 1.04-1.015v-4.649h4.554c.547 0 1.023-.469 1.023-1.039 0-.562-.476-1.039-1.023-1.039h-4.555V6.68c0-.547-.469-1.016-1.039-1.016-.562 0-1.031.469-1.031 1.016v4.648H6.41c-.531 0-1.023.477-1.023 1.04 0 .57.492 1.038 1.023 1.038h4.555v4.649c0 .53.469 1.015 1.031 1.015z" fill="#E0E0FF" fill-rule="nonzero"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="sel-desc">Amount max 5 per transaction</div>

            </div>
            <div class="sel__res">
              <div class="sel__res-col sel__res-col--1">
                <span>1 x 14.14 ETH</span>
                <div>Excluding gas fee</div>
              </div>
              <div class="sel__res-col sel__res-col--2">
                
                <span>14.14 ETH</span>
                <div>Price</div>
              </div>
            </div>
            <div class="modal-submit">
              
              <LButton 
                tag="button"
                label="Mint"
                size="full"
                @click=""
              />
            </div>
          </div>

          <button class="modal-close-button" @click="closePopup()">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0h24v24H0z"/>
              <path d="M18.078 18.453c.399-.406.399-1.07.008-1.46l-4.617-4.618 4.617-4.625c.39-.39.398-1.063-.008-1.46a1.05 1.05 0 0 0-1.46-.009L12 10.898 7.375 6.281c-.375-.383-1.063-.398-1.46.008-.4.399-.392 1.086-.009 1.461l4.617 4.625-4.617 4.617c-.383.383-.39 1.063.008 1.461.406.399 1.086.39 1.461.016L12 13.844l4.617 4.617c.39.39 1.063.39 1.461-.008z" fill-opacity=".24" fill="#E0E0FF" fill-rule="nonzero"/>
            </g>
          </svg>
          </button>

        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'Modal',
  methods: {
    closePopup(){
      this.$emit('toggle', false);
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/sass/mixins/mixins.sass"
.sel 
  display: flex
  justify-content: space-between
  border-radius: 4px
  background-color: $text-d-2
  padding: 1.2rem
  &__res
    border-radius: 4px
    background-color: $text-d-2
    width: 100%
    display: flex
    padding: .4rem
    justify-content: space-between
    +lg
      flex-direction: column
    &-col
      width: calc(50% - .2rem) 
      padding: 1rem 1.2rem
      +lg
        width: 100%
      span
        @include font(1.6rem, 1.5em, 600)
        display: block
      div
        @include font(1.4rem, 1.43em, 500)
      &--1
        border-radius: 2px
        background-color: rgba(40, 42, 46, 0.8)
        span
          font-family: 'Gilroy'
          color: $white
      &--2
        color: $white
        span
          font-family: 'Druk Wide Cy Web Super';

  input
    @include font(1.6rem, 1.75em, 600)
    font-family: Gilroy
    line-height: 1.75
    text-align: center
    color: $white
    background: transparent
    height: 2.8rem
    outline: none !important
    border: none !important
    font-family: 'Gilroy'

  &-item
    cursor: pointer
    display: flex
    svg
      g
        +transition
    &:hover
      svg
        g
          opacity: 1

  &-desc
    margin: .8rem 0 2.4rem
    padding-left: 1.2rem
    @include font(1.3rem, 1.23em, 500)
    color: $text-d-60


.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center
  transition: opacity 0.3s ease
  +lg
    align-items: flex-end
.modal-wrapper
  display: table-cell
  vertical-align: middle
  +lg
    vertical-align: bottom
    width: 100%
.modal-container
  position: relative
  z-index: 100
  width: 872px
  border-radius: 12px
  -webkit-backdrop-filter: blur(40px)
  backdrop-filter: blur(40px)
  box-shadow: 32px 32px 96px 0 rgba(9, 13, 20, 0.4), -16px -16px 32px 0 $text-d-text-d-4, 0 16px 16px 0 rgba(9, 13, 20, 0.4)
  border: solid 1px $bg-l-6
  background-image: linear-gradient(117deg, $bg-l-12, $bg-l-6 52%, rgba(245, 247, 250, 0) 100%)
  display: flex
  +lg
    width: 100%
    border-radius: 1.2rem 1.2rem 0 0
.modal
  &-overlay
    background-color: rgba(9, 13, 20, 0.8)
    position: absolute
    z-index: 1
    top: 0
    left: 0 
    right: 0
    bottom: 0
  &-submit
    padding-top: 2.4rem
    margin-top: auto
    width: 100%
    +lg
      padding-top: 3.2rem
    
    // .btn-color, 
    // .l-primary-button, 
    // .l-primary-button__button,
    // .btn span
    //   width: 100% !important
  &-close-button
    position: absolute
    top: 4.8rem
    right: 4.8rem
    z-index: 10
    cursor: pointer
    display: flex
    background: transparent
    +lg
      top: 3rem
      right: 3rem
    path 
      +transition
    &:hover
      path 
        fill-opacity: .48
  &-body 
    padding: 4.8rem
    position: relative
    flex-grow: 1
    display: flex
    flex-direction: column
    +lg
      padding: 3.2rem
  &-img
    padding: .4rem
    border-radius: .8rem
    +lg
      display: none
      
  &-header
    @include font(3rem, 1.2em, 400)
    // font-family: DrukWideCyTT-Super
    color: #fff
    margin: 0 0 .8rem
    font-family: 'Druk Wide Cy Web Super'
    +lg
      font-size: 2.4rem
      line-height: 1.33em
      margin: 0 0 .4rem
    span
      color: $secondary
  &-desc
    @include font(1.6rem, 1.5em, 600)
    color: $white
    margin-bottom: 2.4rem


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

</style>