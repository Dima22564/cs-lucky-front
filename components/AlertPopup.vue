<template>
  <div v-if="popupShow" class="popup__wrapper">
    <div class="popup__body">
      <div class="popup__form">
        <div class="popup__top">
          <div v-if="popup === 'info'" class="popup__icon popup__icon_1">
            <ExclamationIcon v-if="popup === 'info'" class="popup__mark popup__mark_1" />
          </div>
          <div v-if="popup === 'ok'" class="popup__icon popup__icon_2">
            <CheckIcon v-if="popup === 'ok'" class="popup__mark popup__mark_2" />
          </div>
          <div v-if="popup === 'warning'" class="popup__icon popup__icon_3">
            <HazardIcon v-if="popup === 'warning'" class="popup__mark popup__mark_3" />
          </div>
          <div v-if="popup === 'fail'" class="popup__icon popup__icon_4">
            <CloseIcon v-if="popup === 'fail'" class="popup__mark popup__mark_4" />
          </div>
          <p v-if="popup === 'info'" class="popup__title">
            Just to Know
          </p>
          <p v-if="popup === 'ok'" class="popup__title">
            Congrats!
          </p>
          <p v-if="popup === 'warning'" class="popup__title">
            Warning!
          </p>
          <p v-if="popup === 'fail'" class="popup__title">
            Ooops…
          </p>
          <CloseIcon @click="closePopup" class="popup__close" />
        </div>
        <p v-if="popup === 'info'" class="popup__text">
          If you looking for some help, you can go to our support center and talk with your personal manager.
        </p>
        <p v-if="popup === 'ok'" class="popup__text">
          You have successfully reset your password. Now you can easily sign in to your account.
        </p>
        <p v-if="popup === 'warning'" class="popup__text">
          If you keep going like this, something can be go wrong. Or maybe not — on your own risk.
        </p>
        <p v-if="popup === 'fail'" class="popup__text">
          Unfortunately something went wrong. We are doing our best right now to fix the problem.
        </p>

        <div class="popup__btns">
          <button class="popup__btn popup__btn_yellow">
            Got It
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close.vue'
import ExclamationIcon from 'vue-material-design-icons/Exclamation.vue'
import CheckIcon from 'vue-material-design-icons/Check.vue'
import HazardIcon from 'vue-material-design-icons/HazardLights.vue'
import { eventBus } from '../plugins/event-bus.js'
export default {
  components: {
    CloseIcon,
    ExclamationIcon,
    CheckIcon,
    HazardIcon
  },
  props: {
    popup: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      popupShow: false
    }
  },
  created () {
    eventBus.$on('depositPopupShow', () => {
      this.popupShow = true
    })
  },
  methods: {
    closePopup () {
      this.popupShow = false
    }
  }
}
</script>

<style lang="sass">
@import '../theme/_mix'
.popup
  &__wrapper
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(33, 36, 41, 0.96)
    z-index: 99999
  &__icon
    width: 48px
    height: 48px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 50%
    &_1
      background: rgba(0, 187, 255, 0.03)
    &_2
      background: rgba(0, 255, 170, 0.03)
    &_3
      background: rgba(238, 255, 0, 0.03)
    &_4
      background: rgba(255, 0, 170, 0.03)
  &__mark
    font-size: 22px
    &_1
      color: #00bbff
    &_2
      color: #00ffaa
    &_3
      color: #eeff00
    &_4
      color: #ff00aa
  &__text
    margin-bottom: 40px
    font-size: 16px
    line-height: 28px
    color: rgba(224, 224, 255, 0.6)
  &__body
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    +md
      align-items: flex-end
  &__form
    border-radius: 24px
    box-shadow: 32px 32px 96px 0 rgba(9, 14, 20, 0.4), -16px -16px 32px 0 rgba(224, 224, 255, 0.04), 0 16px 16px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(120deg, #2d2f33, #222529)
    padding: 40px
    max-width: 540px
    width: 100%
    +md
      border-radius: 40px 40px 0 0
      padding: 32px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 40px
  &__title
    letter-spacing: -0.4px
    color: white
    font-size: 20px
    line-height: 48px
    font-weight: 600
    margin: auto
  &__close
    color: #e0e0ff
    cursor: pointer
    font-size: 25px
  &__btns
    display: flex
    align-items: center
    justify-content: flex-end
  &__btn
    border: none
    padding: 12px 24px
    border-radius: 24px
    font-weight: 600
    font-size: 16px
    line-height: 24px
    color: white
    &_yellow
      box-shadow: 0 8px 8px -4px rgba(255, 170, 0, 0.12), 0 16px 24px 0 rgba(255, 170, 0, 0.24), 0 2px 4px -1px rgba(10, 70, 82, 0.12), 0 0 1px 0 rgba(255, 170, 0, 0.24)
      background-image: linear-gradient(106deg, #eeff00, #ffaa00 51%, #ff5e00)
</style>
