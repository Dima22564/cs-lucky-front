<template>
  <span
    :class="getAutoWithdraw === coeff ? 'coeff_active' : ''"
    @click="setAutoWithdraw(coeff)"
    class="coeff"
  >
    x{{ coeff }}
  </span>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    coeff: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations({
      setAutoWithdraw: 'bet/setAutoWithdraw'
    })
  },
  computed: {
    ...mapGetters({
      getAutoWithdraw: 'bet/getAutoWithdraw'
    })
  }
}
</script>

<style lang="sass">
.coeff
  padding: 8px 16px
  cursor: pointer
  font-weight: bold
  font-size: 16px
  border-radius: 12px
  background-color: rgba(224, 224, 255, 0.02)
  &_active
    box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 14, 20, 0.4), inset 0 -2px 1px 0 rgba(9, 14, 20, 0.8)
    background-image: linear-gradient(to bottom, #383a3d 101%, #2d2f33 1%)
  &:hover
    box-shadow: 12px 12px 36px 0 rgba(9, 14, 20, 0.4), -8px -8px 8px 0 rgba(224, 224, 255, 0.04), 0 2px 2px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(to bottom, rgba(224, 224, 255, 0.06), rgba(224, 224, 255, 0.06)), linear-gradient(114deg, #2d2f33 1%, #272a2e 52%, #222529 100%)
  &:focus
    box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4), -2px -2px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(114deg, #2d2f33 1%, #272a2e 52%, #222529 100%)
  &_disabled
    box-shadow: 0 0 24px 0 rgba(9, 14, 20, 0.4), 0 0 8px 0 rgba(224, 224, 255, 0.04), 0 0 1px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(114deg, #2d2f33 1%, #272a2e 52%, #222529 100%)
</style>
