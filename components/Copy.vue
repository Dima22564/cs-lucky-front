<template>
  <div class="copy">
    <div class="copy__top">
      <span class="copy__label copy__label_left">{{ label1 }}</span>
      <span :style="{color: color}" class="copy__label copy__label_right">{{ label2 }}</span>
    </div>
    <div class="copy__bottom">
      <input ref="textToCopy" type="text" class="copy__input" readonly value="sdfgrreghergerhgerhrtdhfrthrfthrthrjhrtjtrfdhfthtrfhjtrjytjkyukuykyukyhkyuryk">
      <CopyIcon @click="copy" class="copy__btn" />
    </div>
  </div>
</template>

<script>
import CopyIcon from 'vue-material-design-icons/ContentCopy.vue'
export default {
  components: {
    CopyIcon
  },
  props: {
    link: {
      type: String,
      required: true
    },
    label1: {
      type: String,
      required: false,
      default: ''
    },
    label2: {
      type: String,
      required: false,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: '#00ffaa'
    }
  },
  methods: {
    copy () {
      const input = this.$refs.textToCopy
      input.select()
      try {
        document.execCommand('copy')
      } catch (err) {
      }
      window.getSelection().removeAllRanges()
    }
  }
}
</script>

<style lang="sass">
.copy
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    font-size: 13px
    line-height: 16px
    font-weight: 500
    margin-bottom: 8px
  &__label
    &_left
      color: rgba(224, 224, 255, 0.4)
    &_right
      color: #00ffaa
  &__bottom
    position: relative
  &__input
    width: 100%
    padding: 12px 53px 12px 16px
    border-radius: 12px
    border: none
    font-size: 16px
    line-height: 24px
    color: white
    font-weight: 500
    background-color: rgba(224, 224, 255, 0.02)
    overflow: hidden
    text-overflow: ellipsis
  &__btn
    height: 48px
    width: 48px
    color: rgba(224, 224, 255, 0.4)
    cursor: pointer
    position: absolute
    right: 0
    top: 0
    display: flex
    align-items: center
    justify-content: center
</style>
