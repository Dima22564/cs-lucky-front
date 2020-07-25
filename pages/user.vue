<template>
  <main class="cs-lucky-main">
    <div class="cs-lucky-container">
      <div class="cs-lucky-row">
        <div class="user-content">
          <div class="user__info">
            <img src="" alt="" class="user__img">
            <div class="user__text">
              <p class="user__name">
                William
              </p>
              <p class="user__stats">
                Profile Stats
              </p>
            </div>
            <button class="user__steam">
              <SteamIcon class="icon-30 icon-30-w icon" />
              <span class="text">Steam Profile</span>
            </button>
          </div>

          <div class="gameTable">
            <div class="gameTable__bg" />
            <div class="table__titles">
              <span class="table__title table__cell">game id</span>
              <span class="table__title table__cell">item</span>
              <span class="table__title table__cell">status</span>
              <span class="table__title table__cell table__cell_right">earnings</span>
              <span class="table__title table__cell table__cell_right">multiplier</span>
              <span class="table__title table__cell table__cell_right">bet</span>
              <span class="table__title table__cell table__cell_right">date</span>
              <span class="table__title table__cell table__cell_right">time</span>
            </div>

            <div class="gameTable__lines">
              <div class="table__line">
                <span class="table__cell table__cell_id">#835062</span>
                <span class="table__cell table__cell_img"><img src="" alt="" class="table__img"></span>
                <span class="table__cell table__status table__status_cashed">
                  <span class="table__cell_title">status</span>
                  <span>Cashed Out</span>
                </span>
                <span class="table__cell table__cell_right table__status_cashed">
                  <span class="table__cell_title">earnings</span>
                  <span>$0.48</span>
                </span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">multiplier</span><span>1.10x</span></span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">bet</span><span>$4.82</span></span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">date</span><span>01.06.2020</span> </span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">time</span><span>16:48:53</span></span>
              </div>
              <div class="table__line">
                <span class="table__cell table__cell_id">#835062</span>
                <span class="table__cell table__cell_img"><img src="" alt="" class="table__img"></span>
                <span class="table__cell table__status table__status_crashed">
                  <span class="table__cell_title">status</span>
                  <span>Cashed Out</span>
                </span>
                <span class="table__cell table__cell_right table__status_crashed">
                  <span class="table__cell_title">earnings</span>
                  <span>$0.48</span>
                </span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">multiplier</span><span>1.10x</span></span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">bet</span><span>$4.82</span></span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">date</span><span>01.06.2020</span> </span>
                <span class="table__cell table__cell_right"><span class="table__cell_title">time</span><span>16:48:53</span></span>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Chat class="mobileChat" />
      </div>
    </div>
  </main>
</template>

<script>
import SteamIcon from 'vue-material-design-icons/Steam.vue'
import Chat from '../components/Chat'
import Footer from '../components/Footer'
export default {
  layout: 'default',
  components: {
    Chat,
    Footer,
    SteamIcon
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
@import '../theme/_mix'
.user
  &-content
    display: flex
    flex-direction: column
    justify-content: space-between
    width: 100%
    margin-right: 24px
  &__info
    box-shadow: $dark-shadow
    background-image: linear-gradient(96deg, #2d2f33 1%, #272a2e 52%, #222529)
    margin-bottom: 24px
    border-radius: 24px
    padding: 24px
    display: flex
    align-items: center
    +lg
      margin-bottom: 16px
      padding: 16px
  &__img
    width: 64px
    height: 64px
    margin-right: 24px
    border-radius: 12px
    flex-shrink: 0
  &__name
    letter-spacing: -0.4px
    @extend %font-20-28
  &__stats
    color: rgba(224, 224, 255, 0.6)
  &__steam
    background: $main-gradient
    color: $white
    padding: 12px 24px
    border-radius: 24px
    border: none
    font-weight: 600
    margin-left: auto
    box-shadow: $main-shadow
    +lg
      width: 48px
      height: 48px
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center
    .text
      font-size: 16px
      line-height: 24px
      +lg
        display: none
    .icon
      margin-right: 12px
      +lg
        margin-right: 0
.gameTable
  margin-bottom: auto
  position: relative
  &__bg
    position: absolute
    bottom: 0
    left: -20px
    width: calc(100% + 20px + 20px)
    background-image: linear-gradient(to bottom, rgba(33, 36, 41, 0), #212429)
    z-index: 5
    height: 128px
  &__lines
    height: calc(100vh - 96px - 24px - 112px - 24px - 46px - 56px - 16px)
    overflow-y: auto
    margin-left: -20px
    padding-left: 20px
    +lg
      height: calc(100vh - 48px - 82px - 32px - 112px)
      margin-right: -20px
      padding-right: 20px
.table
  &__titles
    display: flex
    align-items: center
    padding: 0 19px
    margin-bottom: 20px
  &__title
    text-transform: uppercase
    font-size: 13px
    color: rgba(224, 224, 255, 0.6)
  &__cell
    width: 12.5%
    +lg
      width: 100% !important
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 4px
    &_right
      text-align: right
    &_img
      +lg
        width: 50% !important
        justify-content: flex-end
    &_id
      +lg
        width: 50% !important
    &_title
      display: none
      +lg
        display: block
        color: rgba(224, 224, 255, 0.6)
        font-size: 13px
        line-height: 24px
        letter-spacing: 1px
        text-transform: uppercase
        font-weight: 600
  &__line
    padding: 12px 19px
    background-image: linear-gradient(94deg, #2d2f33 1%, #272a2e 52%, #222529)
    box-shadow: $dark-shadow
    margin-bottom: 24px
    border-radius: 24px
    font-size: 14px
    color: $white
    font-weight: bold
    display: flex
    align-items: center
    +lg
      flex-wrap: wrap
      padding: 24px !important
    &:last-child
      margin-bottom: 100px
      +lg
        margin-bottom: 50px
  &__img
    width: 72px
    height: 48px
  &__status
    font-weight: 600
    &_cashed
      color: #00ffaa
    &_crashed
      color: #ff00aa
</style>
