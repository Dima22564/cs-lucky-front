<template>
  <main class="cs-lucky-main">
    <div class="cs-lucky-container">
      <div class="cs-lucky-row">
        <div class="support-content">
          <div class="support__main">
            <div v-if="(currentTab === 'chats' && getWindowSize < 768) || getWindowSize >= 768" class="support__chats">
              <div @click="goToChat" class="supportChat supportChat_1">
                <div class="supportChat__img">
                  <PlusIcon class="icon-30 icon-30-w icon" />
                </div>
                <div class="supportChat__text">
                  <p class="supportChat__name">
                    Support Center
                  </p>
                  <p class="supportChat__desc">
                    dfcew wfw effqwf qfwf wfdfv dfdsfv
                  </p>
                </div>
                <RightArrowIcon class="supportChat__arrow" />
              </div>
              <div @click="goToChat" class="supportChat supportChat_2">
                <div class="supportChat__img">
                  <EmailIcon class="icon-30 icon-30-w icon" />
                </div>
                <div class="supportChat__text">
                  <p class="supportChat__name">
                    Support Center
                  </p>
                  <p class="supportChat__desc">
                    dfcew wfw effqwf qfwf wfdfv dfdsfv
                  </p>
                </div>
                <RightArrowIcon class="supportChat__arrow" />
              </div>
              <div @click="goToChat" class="supportChat supportChat_3">
                <div class="supportChat__img">
                  <ShieldIcon class="icon-30 icon-30-w icon" />
                </div>
                <div class="supportChat__text">
                  <p class="supportChat__name">
                    Support Center
                  </p>
                  <p class="supportChat__desc">
                    dfcew wfw effqwf qfwf wfdfv dfdsfv
                  </p>
                </div>
                <RightArrowIcon class="supportChat__arrow" />
              </div>
              <div @click="goToChat" class="supportChat supportChat_4">
                <div class="supportChat__img">
                  <LayerIcon class="icon-30 icon-30-w icon" />
                </div>
                <div class="supportChat__text">
                  <p class="supportChat__name">
                    Support Center
                  </p>
                  <p class="supportChat__desc">
                    dfcew wfw effqwf qfwf wfdfv dfdsfv
                  </p>
                </div>
              </div>
              <div @click="goToChat" class="supportChat supportChat_active">
                <div class="supportChat__img">
                  <UserIcon class="icon-30 icon-30-w icon" />
                </div>
                <div class="supportChat__text">
                  <p class="supportChat__name">
                    Support Center
                  </p>
                  <p class="supportChat__desc">
                    dfcew wfw effqwf qfwf wfdfv dfdsfv
                  </p>
                </div>
                <RightArrowIcon class="supportChat__arrow" />
              </div>
            </div>

            <div v-if="(currentTab === 'messages' && getWindowSize < 768) || getWindowSize >= 768" class="support__messages">
              <div class="messages__top">
                <div class="supportChat">
                  <div class="supportChat__img">
                    <EmailIcon />
                  </div>
                  <div class="supportChat__text">
                    <p class="supportChat__name">
                      Support Center
                    </p>
                    <p class="supportChat__online">
                      <span class="circle" /> <span class="supportChat__desc">Online</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="messages__messages">
                <div class="supportMessage">
                  <img src="" alt="" class="supportMessage__img">
                  <div class="supportMessage__wrapper">
                    <p class="supportMessage__marks">
                      Angela
                    </p>
                    <p class="supportMessage__text">
                      Your payment might be delayed for 5-10 minutes. If money didn’t get transferred within an hour, please contact the support, write details of payment to Security Support
                    </p>
                    <p class="supportMessage__marks">
                      3:54 PM
                    </p>
                  </div>
                </div>
                <div class="supportMessage">
                  <img src="" alt="" class="supportMessage__img">
                  <div class="supportMessage__wrapper">
                    <p class="supportMessage__marks">
                      Angela
                    </p>
                    <p class="supportMessage__text">
                      Your payment might be delayed for 5-10 minutes. If money didn’t get transferred within an hour, please contact the support, write details of payment to Security Support
                    </p>
                    <p class="supportMessage__marks">
                      3:54 PM
                    </p>
                  </div>
                </div>
                <div class="supportMessage">
                  <img src="" alt="" class="supportMessage__img">
                  <div class="supportMessage__wrapper">
                    <p class="supportMessage__marks">
                      Angela
                    </p>
                    <p class="supportMessage__text">
                      Your payment might be delayed for 5-10 minutes. If money didn’t get transferred within an hour, please contact the support, write details of payment to Security Support
                    </p>
                    <p class="supportMessage__marks">
                      3:54 PM
                    </p>
                  </div>
                </div>
              </div>

              <form class="messages__bottom sendForm">
                <label for="file" class="sendForm__file">
                  <input id="file" class="sendForm__fileInput" type="file" name="file">
                  <ClipIcon />
                </label>
                <textarea id="" name="" class="sendForm__text" placeholder="Your message" />
                <button class="sendForm__btn">
                  <ArrowIcon class="icon-30 icon-30-w" />
                </button>
              </form>
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
import { mapGetters } from 'vuex'
import ArrowIcon from 'vue-material-design-icons/ArrowUp.vue'
import EmailIcon from 'vue-material-design-icons/Email.vue'
import ClipIcon from 'vue-material-design-icons/Paperclip.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
import ShieldIcon from 'vue-material-design-icons/ShieldHalfFull.vue'
import LayerIcon from 'vue-material-design-icons/Layers.vue'
import UserIcon from 'vue-material-design-icons/Account.vue'
import RightArrowIcon from 'vue-material-design-icons/ChevronRight.vue'
import Chat from '../components/Chat'
import Footer from '../components/Footer'
export default {
  layout: 'default',
  components: {
    Chat,
    Footer,
    ArrowIcon,
    PlusIcon,
    EmailIcon,
    ShieldIcon,
    LayerIcon,
    UserIcon,
    RightArrowIcon,
    ClipIcon
  },
  data () {
    return {
      currentTab: 'chats'
    }
  },
  methods: {
    goToChat () {
      if (this.getWindowSize < 768) {
        this.currentTab = 'messages'
      }
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
.support
  &-content
    display: flex
    flex-direction: column
    justify-content: space-between
    width: 100%
    padding-right: 24px
    +md
      padding-right: 0
  &__main
    display: flex
  &__chats
    width: 243px
    margin-right: 24px
    flex-shrink: 0
    overflow-y: auto
    height: calc(100vh - 96px - 24px - 58px - 16px)
    +md
      margin-right: 0
      width: 100%
  &__messages
    width: 100%
    border-radius: 24px
    background-image: linear-gradient(129deg, #2d2f33 1%, #272a2e 52%, #222529)
    box-shadow: $dark-shadow
.supportChat
  display: flex
  align-items: center
  padding: 16px
  cursor: pointer
  margin-bottom: 8px
  &_1
    .supportChat__img
      background: #ff5e00
  &_2
    .supportChat__img
      background: #f54562
  &_3
    .supportChat__img
      background: #c32de1
  &_4
    .supportChat__img
      background: #9c42f5
  &_5
    .supportChat__img
      background: #5d2de1
  &_active
    box-shadow: inset 8px 8px 40px 0 rgba(9, 14, 20, 0.4), inset -4px -4px 8px 0 rgba(224, 224, 255, 0.04), inset 0 1px 1px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(to bottom, #090e14, #222529 60%, #2d2f33)
    border-radius: 48px 12px 12px 48px
  &__arrow
    display: none
    +md
      display: block
      color: rgba(224, 224, 255, 0.4)
      margin-left: 24px
  &__online
    display: flex
    align-items: center
    .circle
      width: 6px
      height: 6px
      border-radius: 50%
      background: #00ffaa
      flex-shrink: 0
      margin-right: 4px
  &__img
    width: 48px
    height: 48px
    border-radius: 50%
    flex-shrink: 0
    box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 14, 20, 0.4), inset 0 -2px 1px 0 rgba(9, 14, 20, 0.8)
    background-image: linear-gradient(to bottom, #383a3d, #2d2f33)
    display: flex
    align-items: center
    justify-content: center
    margin-right: 16px
    .icon
      height: 31px
  &__name
    font-size: 16px
    color: $white
    font-weight: 500
  &__text
    display: flex
    flex-direction: column
    +md
      width: 100%
  &__desc
    color: rgba(224, 224, 255, 0.6)
    @extend %font-13-16
    font-weight: 500
    max-width: 128px
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    +md
      width: 100%
      max-width: 100%
.messages
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 12px
    padding: 8px
  &__messages
    overflow-y: auto
    // height: calc(100vh - 96px - 20px - 48px - 24px - 20px)
    height: calc(100vh - 96px - 24px - 58px - 16px - 104px - 105px)
    padding: 0 24px
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    padding: 20px 24px 24px 24px
.supportMessage
  display: flex
  align-items: flex-start
  margin-bottom: 24px
  &__img
    width: 36px
    height: 36px
    border-radius: 12px
    flex-shrink: 0
    margin: 20px 16px 0 0
  &__text
    padding: 8px 12px
    background-color: rgba(224, 224, 255, 0.02)
    border-radius: 7px 24px 24px 24px
    font-weight: 500
    color: $white
    max-width: 490px
    margin: 4px 0
  &__marks
    margin-left: 12px
    font-size: 10px
    line-height: 16px
    color: rgba(224, 224, 255, 0.4)
    font-weight: 500

.sendForm
  display: flex
  align-items: center
  justify-content: space-between
  &__fileInput
    display: none
  &__file
    width: 48px
    height: 48px
    border-radius: 50%
    background-color: rgba(224, 224, 255, 0.02)
    cursor: pointer
    flex-shrink: 0
    display: flex
    align-items: center
    justify-content: center
    color: rgba(224, 224, 255, 0.6)
  &__text
    width: 100%
    padding: 12px 16px
    border-radius: 12px
    background: rgba(224, 224, 255, 0.02)
    color: $white
    max-height: 96px
    height: 48px
    font-size: 16px
    line-height: 24px
    margin: 0 16px
    border: none
    resize: none
    &::placeholder
      color: rgba(224, 224, 255, 0.6)
  &__btn
    @extend %btn-refresh
    width: 48px
    height: 48px
    border-radius: 50%
    background: $main-gradient
    box-shadow: $main-shadow
    flex-shrink: 0
</style>
