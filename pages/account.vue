<template>
  <main class="cs-lucky-main">
    <div class="cs-lucky-container">
      <div class="cs-lucky-row">
        <div class="account-content">
          <div v-show="getWindowSize > 1080 || (getWindowSize <= 1080 && showContent)" class="account-items">
            <div class="userInfo">
              <img src="" alt="" class="userInfo__img">
              <div class="userInfo__text">
                <p class="name">
                  vino_costa
                </p>
                <p class="num">
                  $12,098
                </p>
              </div>
              <div class="account-toggler-wrapper account-toggler-wrapper-lgNone">
                <p class="text">
                  Steam Profile
                </p>
                <div class="account-toggler">
                  <div :class="hide ? 'toggler_active' : ''" @click="hide === true ? hide = true : hide = false" class="toggler">
                    <label for="sound" class="toggler__label">
                      <div class="toggler__circle" />
                      <div class="toggler__way" />
                    </label>
                    <input id="sound" v-model="hide" type="checkbox" name="sound" class="toggler__input">
                  </div>
                </div>
              </div>

              <button class="userInfo__btn">
                <PlusIcon class="icon-30 icon-30-w" />
              </button>
            </div>

            <div class="account-toggler-wrapper account-toggler-wrapper-lg">
              <p class="text">
                Steam Profile
              </p>
              <div class="account-toggler">
                <div :class="hide ? 'toggler_active' : ''" @click="hide === true ? hide = true : hide = false" class="toggler">
                  <label for="sound" class="toggler__label">
                    <div class="toggler__circle" />
                    <div class="toggler__way" />
                  </label>
                  <input id="sound" v-model="hide" type="checkbox" name="sound" class="toggler__input">
                </div>
              </div>
            </div>

            <div class="copy__wrapper">
              <Copy
                label1="Trade URL"
                label2="Find out"
                link="sdfgrreghergerhgerhrtdhfrthrfthrthrjhrtjtrfdhfthtrfhjtrjytjkyukuykyukyhkyuryk"
              />
            </div>
            <div class="copy__wrapper">
              <Copy
                label1="Trade URL"
                label2="Find out"
                link="sdfgrreghergerhgerhrtdhfrthrfthrthrjhrtjtrfdhfthtrfhjtrjytjkyukuykyukyhkyuryk"
                color="#ffaa00"
              />
            </div>

            <div class="miniItems">
              <div class="accItem">
                <div class="accItem__top">
                  <UserIcon class="accItem__icon" />
                  <span class="accItem__text">invited</span>
                </div>
                <p class="accItem__num">
                  140
                </p>
              </div>
              <div class="accItem accItem_fire">
                <div class="accItem__top">
                  <FireIcon class="accItem__icon" />
                  <span class="accItem__text">perc.</span>
                </div>
                <p class="accItem__num">
                  8%
                </p>
              </div>
              <div class="accItem accItem_card">
                <div class="accItem__top">
                  <CardIcon class="accItem__icon" />
                  <span class="accItem__text">EARNED</span>
                </div>
                <p class="accItem__num">
                  <span>$ </span> 970
                </p>
              </div>
            </div>
          </div>

          <div v-show="getWindowSize > 1080 || (getWindowSize <= 1080 && showContent)" class="account-panel">
            <span @click="showGameStats" class="account__tab">
              <EqualizerIcon class="icon" />
              <span class="text">Game Stats</span>
              <RightIcon class="account__arrow" />
            </span>
            <span class="account__tab">
              <CardIcon class="icon" />
              <span class="text">Withdrawals</span>
              <RightIcon class="account__arrow" />
            </span>
          </div>

          <div v-show="getWindowSize > 1080 || (getWindowSize <= 1080 && showStats)" class="lg-show">
            <div class="cards">
              <div class="cards__item cards__item_1">
                <LayerIcon />
                <span class="num">238.55</span>
              </div>
              <div class="cards__item cards__item_2">
                <UserIcon />
                <span class="num">238.55</span>
              </div>
              <div class="cards__item cards__item_3">
                <StarIcon />
                <span class="num">238.55</span>
              </div>
              <div class="cards__item cards__item_4">
                <EyeIcon />
                <span class="num">238.55</span>
              </div>
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

              <div class="gameTable__lines gameTable__lines_acc">
                <div class="table__line">
                  <span class="table__cell_acc table__cell lg-none">#835062</span>
                  <span class="table__cell_acc table__cell"><img src="" alt="" class="table__img"></span>
                  <span class="table__cell_acc table__cell table__status table__status_cashed lg-none">Cashed Out</span>
                  <span class="table__cell_acc table__cell table__cell_right table__status_cashed">$0.48</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_green">1.10x</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_lgreen">$4.82</span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">01.06.2020 </span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">16:48:53</span>
                </div>
                <div class="table__line">
                  <span class="table__cell_acc table__cell lg-none">#835062</span>
                  <span class="table__cell_acc table__cell"><img src="" alt="" class="table__img"></span>
                  <span class="table__cell_acc table__cell table__status table__status_cashed lg-none">Cashed Out</span>
                  <span class="table__cell_acc table__cell table__cell_right table__status_cashed">$0.48</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_green">1.10x</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_lgreen">$4.82</span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">01.06.2020 </span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">16:48:53</span>
                </div>
                <div class="table__line">
                  <span class="table__cell_acc table__cell lg-none">#835062</span>
                  <span class="table__cell_acc table__cell"><img src="" alt="" class="table__img"></span>
                  <span class="table__cell_acc table__cell table__status table__status_cashed lg-none">Cashed Out</span>
                  <span class="table__cell_acc table__cell table__cell_right table__status_cashed">$0.48</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_green">1.10x</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_lgreen">$4.82</span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">01.06.2020 </span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">16:48:53</span>
                </div>
                <div class="table__line">
                  <span class="table__cell_acc table__cell lg-none">#835062</span>
                  <span class="table__cell_acc table__cell"><img src="" alt="" class="table__img"></span>
                  <span class="table__cell_acc table__cell table__status table__status_cashed lg-none">Cashed Out</span>
                  <span class="table__cell_acc table__cell table__cell_right table__status_cashed">$0.48</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_green">1.10x</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_lgreen">$4.82</span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">01.06.2020 </span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">16:48:53</span>
                </div>
                <div class="table__line">
                  <span class="table__cell_acc table__cell lg-none">#835062</span>
                  <span class="table__cell_acc table__cell"><img src="" alt="" class="table__img"></span>
                  <span class="table__cell_acc table__cell table__status table__status_cashed lg-none">Cashed Out</span>
                  <span class="table__cell_acc table__cell table__cell_right table__status_cashed">$0.48</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_green">1.10x</span>
                  <span class="table__cell_acc table__cell table__cell_right table__cell_lgreen">$4.82</span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">01.06.2020 </span>
                  <span class="table__cell_acc table__cell table__cell_right lg-none">16:48:53</span>
                </div>
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
import { mapMutations, mapGetters } from 'vuex'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import UserIcon from 'vue-material-design-icons/Account.vue'
import FireIcon from 'vue-material-design-icons/Fire.vue'
import EqualizerIcon from 'vue-material-design-icons/Equalizer.vue'
import RightIcon from 'vue-material-design-icons/ChevronRight.vue'
import LayerIcon from 'vue-material-design-icons/Layers.vue'
import CardIcon from 'vue-material-design-icons/CreditCardOutline.vue'
import StarIcon from 'vue-material-design-icons/Star.vue'
import EyeIcon from 'vue-material-design-icons/Eye.vue'
import Chat from '../components/Chat'
import Footer from '../components/Footer'
import Copy from '../components/Copy'
export default {
  layout: 'default',
  components: {
    Chat,
    Footer,
    PlusIcon,
    Copy,
    UserIcon,
    FireIcon,
    CardIcon,
    EqualizerIcon,
    RightIcon,
    LayerIcon,
    StarIcon,
    EyeIcon
  },
  data () {
    return {
      showContent: true,
      showStats: false,
      hide: false
    }
  },
  mounted () {
    this.changeTabStore(null)
  },
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize'
    })
  },
  methods: {
    ...mapMutations({
      changeTabStore: 'common/changeTab'
    }),
    showGameStats () {
      if (this.getWindowSize < 1080) {
        this.showContent = false
        this.showStats = true
      }
    }
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
@import '../theme/_mix'
.account
  &-content
    display: flex
    flex-direction: column
    justify-content: space-between
    margin-right: 24px
    width: 100%
  &-items
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    align-items: center
  &-panel
    border-radius: 24px
    width: 100%
    box-shadow: inset 8px 8px 40px 0 rgba(9, 14, 20, 0.4), inset -4px -4px 8px 0 rgba(224, 224, 255, 0.04), inset 0 1px 1px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(to bottom, #090e14, #222529 47%, #2d2f33 94%)
    margin-bottom: 24px
    display: flex
    +lg
      flex-direction: column
      box-shadow: none
      background: none
  &__arrow
    display: none
    +lg
      display: block
      margin-left: auto
      opacity: 0.87
  &__tab
    display: flex
    align-items: center
    padding: 12px 26px
    color: $white
    cursor: pointer
    +lg
      width: 100%
      box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 14, 20, 0.4)
      border-radius: 12px
      background-image: linear-gradient(98deg, #2d2f33 1%, #272a2e 52%, #222529)
      &:not(:last-child)
        margin-bottom: 16px
    .text
      margin-left: 12px
      font-size: 16px
    .icon
      width: 24px
      height: 24px
      display: flex
      align-items: center
      justify-content: center
.userInfo
  background-image: linear-gradient(106deg, #2d2f33 1%, #272a2e 52%, #222529 100%)
  box-shadow: $dark-shadow
  border-radius: 24px
  padding: 24px
  width: calc(50% - 12px)
  display: flex
  align-items: center
  margin-bottom: 24px
  +lg
    width: calc(100%)
    margin-bottom: 16px
  &__img
    width: 96px
    height: 96px
    margin-right: 32px
    flex-shrink: 0
    border-radius: 12px
    +media(1380)
      width: 48px
      height: 48px
      margin-right: 16px
  &__text
    .name
      letter-spacing: -1px
      font-size: 24px
      line-height: 32px
      margin-bottom: 8px
      +media(1380)
        font-size: 16px
        line-height: 24px
        margin-bottom: 1px
    .num
      color: rgba(224, 224, 255, 0.6)
      font-weight: bold
      font-size: 16px
      +media(1380)
        font-size: 13px
        line-height: 16px
  &__btn
    @extend %btn-refresh
    width: 48px
    height: 48px
    border-radius: 50%
    flex-shrink: 0
    display: flex
    align-items: center
    justify-content: center
    color: $white
    background: $main-gradient
    box-shadow: $main-shadow
    margin-left: auto
.copy
  &__wrapper
    padding: 36px
    background-image: linear-gradient(106deg, #2d2f33 1%, #272a2e 52%, #222529 100%)
    box-shadow: $dark-shadow
    border-radius: 24px
    width: calc(50% - 12px)
    margin-bottom: 24px
    +lg
      width: 100%
      padding: 0
      background: none
      box-shadow: none
.miniItems
  display: flex
  align-items: center
  justify-content: space-between
  width: calc(50% - 12px)
  margin-bottom: 24px
  +lg
    width: 100%
    flex-wrap: wrap

.accItem
  padding: 24px
  border-radius: 24px
  background: $main-gradient
  box-shadow: $main-shadow
  max-height: 144px
  width: calc(33.33333% - 12px)
  +media(1300)
    padding: 16px
  +lg
    width: calc(50% - 12px)
    display: flex
    border-radius: 12px
    align-items: center
    justify-content: space-between
    padding: 12px 16px
  &_fire
    box-shadow: 0 8px 8px -4px rgba(245, 69, 98, 0.12), 0 16px 24px 0 rgba(245, 69, 98, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(245, 69, 98, 0.24)
    background-image: linear-gradient(133deg, #ff5e00, #f54562 54%, #c32de1)
  &_card
    box-shadow: 0 8px 8px -4px rgba(156, 66, 245, 0.12), 0 16px 24px 0 rgba(156, 66, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(156, 66, 245, 0.24)
    background-image: linear-gradient(133deg, #c32de1, #9c42f5 53%, #5d2de1)
    +lg
      width: 100%
      margin-top: 16px
  &__top
    display: flex
    align-items: center
    margin-bottom: 22px
    color: $white
    +media(1300)
      flex-direction: column
      align-items: flex-start
    +lg
      margin-bottom: 0
      flex-direction: row
      align-items: flex-start
  &__text
    margin-left: 16px
    text-transform: uppercase
    letter-spacing: 1px
    +media(1300)
      margin-left: 0
  &__num
    color: $white
    letter-spacing: -2px
    font-size: 48px
    line-height: 48px
    font-weight: bold
    +media(1300)
      font-size: 31px
    +lg
      font-size: 18px
      line-height: 24px
    span
      font-size: 18px
      line-height: 24px
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
    .lg-none
      +lg
        display: none
    &_acc
      height: calc(100vh - 144px - 48px - 48px - 144px - 56px - 16px - 98px - 48px - 24px - 20px)
      overflow-y: auto
      +lg
        height: calc(100vh - 152px - 48px - 82px)
        margin: 0 -20px
        padding: 0 20px
.table
  &__titles
    display: flex
    align-items: center
    padding: 0 19px
    margin-bottom: 20px
    +lg
      display: none
  &__title
    text-transform: uppercase
    font-size: 13px
    color: rgba(224, 224, 255, 0.6)
  &__cell
    width: 12.5%
    &_acc
      +lg
        width: initial
    &_green
      +lg
        padding: 6px 15px
        background: #16b862
        border-radius: 12px
    &_lgreen
      +lg
        padding: 6px 15px
        background: rgba(0, 255, 170, 0.06)
        color: #00ffaa
        border-radius: 12px
    &_right
      text-align: right
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
      justify-content: space-between
      padding: 12px
  &__img
    width: 72px
    height: 48px
  &__status
    font-weight: 600
    +lg
      display: none
    &_cashed
      color: #00ffaa
    &_crashed
      color: #ff00aa

.cards
  display: none
  flex-wrap: wrap
  justify-content: space-between
  +lg
    display: flex
  &__item
    width: calc(50% - 8px)
    padding: 12px
    color: $white
    display: flex
    align-items: center
    justify-content: space-between
    border-radius: 12px
    margin-bottom: 16px
    &_1
      box-shadow: 0 8px 8px -4px rgba(245, 69, 98, 0.12), 0 16px 24px 0 rgba(245, 69, 98, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(245, 69, 98, 0.24)
      background-image: linear-gradient(107deg, #ff5e00, #f54562 54%, #c32de1)
    &_2
      box-shadow: 0 8px 8px -4px rgba(156, 66, 245, 0.12), 0 16px 24px 0 rgba(156, 66, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(156, 66, 245, 0.24)
      background-image: linear-gradient(107deg, #ff00aa, #9c42f5 53%, #5d2de1)
    &_3
      box-shadow: 0 8px 8px -4px rgba(69, 121, 245, 0.12), 0 16px 24px 0 rgba(69, 121, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(69, 121, 245, 0.24)
      background-image: linear-gradient(107deg, #00bbff, #4579f5 51%, #5d2de1)
    &_4
      box-shadow: 0 8px 8px -4px rgba(0, 187, 255, 0.12), 0 16px 24px 0 rgba(0, 187, 255, 0.24), 0 2px 4px -1px rgba(10, 70, 82, 0.12), 0 0 1px 0 rgba(0, 187, 255, 0.24)
      background-image: linear-gradient(107deg, #00ffaa, #00bbff 53%, #4579f5)
    .num
      font-size: 18px
      letter-spacing: -0.4px

.account-toggler-wrapper
  margin: auto
  &-lgNone
    +lg
      display: none
  &-lg
    display: none
    +lg
      display: flex
      padding: 16px
      align-items: center
      justify-content: space-between
      width: 100%
      border-radius: 12px
      background-color: rgba(224, 224, 255, 0.02)
      margin-bottom: 16px
  .text
    font-size: 13px
    line-height: 16px
    color: rgba(224, 224, 255, 0.6)
    margin-bottom: 8px

</style>
