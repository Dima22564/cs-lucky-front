<template>
  <div class="historyItem">
    <img :src="avatar" alt="" class="historyItem__avatar">
    <div class="historyItem__wrapper">
      <button v-if="items.length > 3" class="historyItem__circle">
        3+
      </button>
      <div class="historyItem__weapons">
        <div v-for="item in items.slice(0, 3)" :key="item.id" class="historyItem__weaponWrapper">
          <img :src="item.image" alt="" class="historyItem__weapon">
        </div>
      </div>
    </div>

    <div class="historyItem__right">
      <div class="historyItem__info">
        ${{ cost.toFixed(2) }}
      </div>
      <div v-if="isWin === null" class="historyItem__round">
        <span>In Round</span>
      </div>
      <div v-if="isWin !== null" :class="{ historyItem__info_green: isWin === 1, historyItem__info_red: isWin === 0 }" class="historyItem__info">
        {{ coeff }}x
      </div>
      <div v-if="isWin === 1" class="historyItem__info historyItem__info_l-green">
        ${{ cost2 }}
      </div>
    </div>

    <div v-if="(winItem && getWindowSize > 1220) || (isWin === 0 && getWindowSize > 1220)" class="historyItem__win">
      <img v-if="winItem" :src="winItem.image" class="historyItem__imgWin" alt="">
      <img v-show="isWin === 0" src="/images/loose.svg" alt="" class="historyItem__winImg">
      <img v-show="isWin === 1" src="/images/win.svg" alt="" class="historyItem__winImg historyItem__winImg_win">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    cost: {
      type: Number,
      required: true
    },
    cost2: {
      type: null,
      required: true
    },
    coeff: {
      type: null,
      required: true
    },
    isWin: {
      type: null
    },
    winItem: {
      type: Object,
      required: false
    }
  },
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize'
    })
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
@import '../theme/_mix'
.historyItem
  background-image: linear-gradient(96deg, #2d2f33 1%, #272a2e 52%, #222529)
  box-shadow: $dark-shadow
  border-radius: 24px
  padding: 12px
  display: flex
  align-items: center
  // width: calc(100% + 17px)
  margin-right: 18px
  overflow: hidden
  +media(1475)
    margin-left: 0
    justify-content: flex-start
  &:not(:last-child)
    margin-bottom: 24px
    +lg
      margin-bottom: 16px
  &:last-child
    margin-bottom: 70px
    +lg
      margin-bottom: 50px
  &__avatar
    width: 48px
    height: 48px
    border-radius: 12px
    margin-right: 12px
    flex-shrink: 0
  &__con
    position: relative
  &__weapons
    display: flex
    align-items: center
    max-width: 216px
    position: relative
    overflow: hidden
  &__weaponWrapper
    border-radius: 12px
    background-color: rgba(224, 224, 255, 0.02)
    display: flex
    align-items: center
    justify-content: center
    width: 64px
    height: 48px
    flex-shrink: 0
    &:not(:last-child)
      margin-right: 12px
  &__wrapper
    margin-right: 38px
    position: relative
    width: 216px
    +media(1475)
      display: none
  &__weapon
    width: 70%
  &__circle
    width: 24px
    height: 24px
    border-radius: 50%
    box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 14, 20, 0.4), inset 0 -2px 1px 0 rgba(9, 14, 20, 0.8)
    background-image: linear-gradient(to bottom, #383a3d, #2d2f33)
    @extend %font-13-16
    color: $white
    position: absolute
    @extend %btn-refresh
    top: 0
    right: 0
    z-index: 5
    transform: translate(50%, 50%)
  &__right
    margin-left: auto
    display: flex
    align-items: center
    +media(1475)
      width: 100%
  &__round
    padding: 10px 56px
    background-color: rgba(224, 224, 255, 0.02)
    color: rgba(224, 224, 255, 0.6)
    font-size: 14px
    line-height: 16px
    border-radius: 12px
    margin-right: 117px
    +media(1475)
      margin-right: 0
    +media(1220)
      font-size: 13px
      padding: 10px 20px
  &__win
    position: relative
    margin: -12px -12px -12px 0
    height: 72px
    display: flex
    align-items: center
    justify-content: center
  &__winBg
    position: absolute
  &__winImg
    width: 70px
    height: 100%
    position: absolute
    right: -10px
    top: 0
    &_win
      top: initial
      bottom: 0
  &__imgWin
    width: 48px
    height: 48px
    margin-right: 20px
    z-index: 5
  &__info
    padding: 6px 21px
    border-radius: 12px
    margin-right: 18px
    font-size: 14px
    font-weight: bold
    color: $white
    +media(1220)
      padding: 6px 15px
    &_green
      background: #16b862
    &_red
      background: #f54562
      margin-right: 205px
      +media(1475)
        margin-right: 50px
    &_l-green
      background-color: rgba(0, 255, 170, 0.06)
      color: #00ffaa
      margin-right: 82px
      +media(1530)
        margin-right: 18px
</style>
