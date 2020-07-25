<template>
  <main class="cs-lucky-main">
    <div class="cs-lucky-container">
      <div class="cs-lucky-row">
        <div class="stats-content">
          <div class="stats__items">
            <div class="statItem statItem--2x statItem_dark">
              <span class="title">Game Stats</span>
              <span class="statItem__num">#835200</span>
            </div>

            <div class="statItem statItem_yellow">
              <div class="statItem__icon">
                <LayerIcon class="icon-30 icon-30-w" />
              </div>
              <div class="statItem__text">
                <p class="num">
                  238.55
                </p>
                <p class="text">
                  Value
                </p>
              </div>
            </div>

            <div class="statItem statItem_pink">
              <div class="statItem__icon">
                <UserIcon class="icon-30 icon-30-w" />
              </div>
              <div class="statItem__text">
                <p class="num">
                  238.55
                </p>
                <p class="text">
                  Value
                </p>
              </div>
            </div>

            <div class="statItem statItem_violet">
              <div class="statItem__icon">
                <StarIcon class="icon-30 icon-30-w" />
              </div>
              <div class="statItem__text">
                <p class="num">
                  238.55
                </p>
                <p class="text">
                  Value
                </p>
              </div>
            </div>

            <div class="statItem statItem_blue">
              <div class="statItem__icon">
                <EyeIcon class="icon-30 icon-30-w" />
              </div>
              <div class="statItem__text">
                <p class="num">
                  238.55
                </p>
                <p class="text">
                  Value
                </p>
              </div>
            </div>
          </div>
          <div class="stats__linesWrapper">
            <div class="stats__bg" />
            <div class="stats__lines">
              <History
                :cost="12.2"
                :cost2="15.2"
                :coeff="2.30"
                :items="['/images/it-1.png', '/images/it-2.png', '/images/it-3.png', 'fergfe']"
                avatar="/images/avatar-2.png"
              />
              <History
                :cost="12.2"
                :cost2="15.2"
                :coeff="2.30"
                :items="['/images/it-1.png']"
                avatar="/images/avatar-2.png"
              />
              <History
                :cost="12.2"
                :cost2="15.2"
                :coeff="2.30"
                :items="['/images/it-1.png', '/images/it-2.png', '/images/it-3.png', 'fergfe']"
                avatar="/images/avatar-2.png"
              />
              <History
                :cost="12.2"
                :cost2="15.2"
                :coeff="2.30"
                :items="['/images/it-1.png', '/images/it-2.png', '/images/it-3.png', 'fergfe']"
                avatar="/images/avatar-2.png"
              />
              <History
                :cost="12.2"
                :cost2="15.2"
                :coeff="2.30"
                :items="['/images/it-1.png', '/images/it-2.png', '/images/it-3.png', 'fergfe']"
                avatar="/images/avatar-2.png"
              />
              <History
                :cost="12.2"
                :cost2="15.2"
                :coeff="2.30"
                :items="['/images/it-1.png', '/images/it-2.png', '/images/it-3.png', 'fergfe']"
                avatar="/images/avatar-2.png"
              />
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
import { mapMutations } from 'vuex'
import LayerIcon from 'vue-material-design-icons/Layers.vue'
import UserIcon from 'vue-material-design-icons/Account.vue'
import StarIcon from 'vue-material-design-icons/Star.vue'
import EyeIcon from 'vue-material-design-icons/Eye.vue'
import Chat from '../components/Chat'
import Footer from '../components/Footer'
import History from '../components/History'
export default {
  layout: 'default',
  components: {
    Chat,
    Footer,
    LayerIcon,
    UserIcon,
    StarIcon,
    EyeIcon,
    History
  },
  mounted () {
    this.changeTabStore(null)
  },
  methods: {
    ...mapMutations({
      changeTabStore: 'common/changeTab'
    })
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
.stats
  &-content
    width: 100%
    display: flex
    flex-direction: column
    margin-right: 24px
    justify-content: space-between
  &__linesWrapper
    position: relative
  &__bg
    width: calc(100% + 20px + 24px)
    position: absolute
    bottom: 0
    left: -20px
    height: 128px
    z-index: 5
    background-image: linear-gradient(to bottom, rgba(33, 36, 41, 0), #212429)
  &__items
    margin-bottom: 24px
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
  &__lines
    overflow-y: scroll
    margin: 0 0 0 -24px
    padding: 0 0 0 24px
    height: calc(100vh - 56px - 16px - 72px - 48px - 96px - 24px)
.statItem
  display: flex
  align-items: center
  width: calc(16.66% - 24px)
  border-radius: 24px
  padding: 16px
  justify-content: center
  color: $white
  &--2x
    width: calc(33.333% - 24px)
  &_yellow
    box-shadow: 0 8px 8px -4px rgba(255, 170, 0, 0.12), 0 16px 24px 0 rgba(255, 170, 0, 0.24), 0 2px 4px -1px rgba(10, 70, 82, 0.12), 0 0 1px 0 rgba(255, 170, 0, 0.24);
    background-image: linear-gradient(115deg, #eeff00, #ffaa00 51%, #ff5e00 100%)
  &_pink
    box-shadow: 0 8px 8px -4px rgba(245, 69, 98, 0.12), 0 16px 24px 0 rgba(245, 69, 98, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(245, 69, 98, 0.24)
    background-image: linear-gradient(115deg, #ff5e00, #f54562 54%, #c32de1 100%)
  &_violet
    box-shadow: 0 8px 8px -4px rgba(156, 66, 245, 0.12), 0 16px 24px 0 rgba(156, 66, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(156, 66, 245, 0.24)
    background-image: linear-gradient(115deg, #c32de1, #9c42f5 53%, #5d2de1 100%)
  &_blue
    box-shadow: 0 8px 8px -4px rgba(69, 121, 245, 0.12), 0 16px 24px 0 rgba(69, 121, 245, 0.24), 0 2px 4px -1px rgba(27, 10, 82, 0.12), 0 0 1px 0 rgba(69, 121, 245, 0.24)
    background-image: linear-gradient(115deg, #00bbff, #4579f5 51%, #5d2de1 100%)
  &_dark
    min-height: 72px
    font-size: 16px
    line-height: 24px
    font-weight: bold
    padding: 24px
    justify-content: space-between
    box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(102deg, #2d2f33 1%, #272a2e 52%, #222529)
  &__icon
    margin-right: 16px
    width: 40px
    height: 40px
    border-radius: 12px
    background: rgba(255, 255, 255, 0.06)
    display: flex
    align-items: center
    justify-content: center
  &__text
    .num
      letter-spacing: -0.4px
      @extend %font-18-24
      font-weight: bold
    .text
      @extend %font-13-16
      rgba(255, 255, 255, 0.8)
</style>
