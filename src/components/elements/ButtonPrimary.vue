<template>
  <div class="l-primary-button">
    <a 
      v-if="tag === 'a'"
      :href="to"
      class="btn l-primary-button__button"
      :class="['btn-' + color, 'btn-' + size]"
    >
      <span>{{ label }}</span>
    </a>

    <button
      v-if="tag === 'button'"
      class="btn l-primary-button__button"
      :class="['btn-' + color, 'btn-' + size, 'btn-type-' + type, 'btn-' + icon]"
    >
      <span>{{ label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LButton',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'color'
    },
    to: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'label'
    },
    size: {
      type: String,
      default: 'md'
    },
    type: {
      type: String,
      default: 'base'
    },
    icon: {
      type: String,
      default: 'icon-out'
    }
  }
}
</script>

<style lang="sass">
  @import "../../assets/sass/mixins/mixins.sass"
  .l-primary-button
    height: 5.6rem
  .btn
    //colors
    &-color
      // border: 2px solid $primary-t
      // border-bottom: 6px solid $primary-t
      @include font(1.6rem, 1.75em, 600)
      color: $white
      +transition
      border-radius: .4rem
      background: $primary-t
      padding: .2rem .2rem .6rem
      span
        color: $white
        background-color: $primary
        display: inline-block
        border-radius: .4rem
        +transition



      &:hover
        padding: .2rem .2rem .6rem
        background-color: $primary-t
        span
          background-color: rgba(255, 255, 255, 0.12)
        // color: #fff
        // box-shadow: 0 12px 12px -4px rgba(235, 79, 37, 0.12), 0 4px 4px -1px rgba(10, 70, 82, 0.12), 0 1px 1px 0 rgba(235, 79, 37, 0.24)
        // background-color: $primary
        // transform: translateY(-1px)
      &:active
        padding: .2rem .2rem .4rem
        background-color: $primary-t
        span
          background-color: $primary
        // box-shadow: 0 8px 8px -4px rgba(235, 79, 37, 0.12), 0 1px 4px -1px rgba(10, 70, 82, 0.12), 0 0 1px 0 rgba(235, 79, 37, 0.24)
        // background-color: $primary
        
    //sizes
    &-xl
      font-size: 1.8rem
      font-weight: 600
      line-height: 1.33em
      letter-spacing: -0.4px
      +md
        font-size: 1.6rem
        font-weight: 600
        line-height: 1.75em
    &-md
      span
        padding: 1rem 3.5rem
    &-full
      width: 100%
      span 
        padding: 1rem 
        width: 100%
</style>
