<template>
  <transition name="fade">
    <div v-if="isShow && getUser" class="exchangeItemsPopup">
      <div class="exchangeItemsPopup__top">
        <div class="exchangeItemsPopup__text">
          <span class="common">You give</span>
          <span class="emp">${{ Number((totalSum).toFixed(2)) }}</span>
        </div>
        <div class="exchangeItemsPopup__text">
          <span class="common">You get</span>
          <span class="emp">${{ Number((totalSum - getSumToReceive).toFixed(2)) }}</span>
        </div>
        <CloseIcon @click="close" class="icon-30 icon" />
      </div>

      <div class="exchangeItemsPopup__inputs">
        <input type="text" class="inputRefresh exchangeItemsPopup__input_w50" placeholder="Name">
        <input type="text" class="inputRefresh exchangeItemsPopup__input_w25" placeholder="Min">
        <input type="text" class="inputRefresh exchangeItemsPopup__input_w25" placeholder="Max">
      </div>

      <div v-bar="{preventParentScroll: true}" class="exchangeItemsPopup__items">
        <div class="">
          <div v-if="getExchangeItems.length > 0" class="exchangeItemsPopup__items-2">
            <ChooseItem
              v-for="item in getExchangeItems"
              :name="item.name"
              :image="item.image"
              :price="item.price"
              :id="item.id"
              :itemId="item.id"
              class="exchangeItemsPopup__item"
              text="dfghj"
              choose-for-exchange
              small
            />
          </div>
        </div>
      </div>

      <button @click.prevent="changeItems" class="exchangeItemsPopup__btn btn btn_w100 btn_primary">
        Confirm
      </button>
    </div>
  </transition>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close.vue'
import { mapGetters, mapMutations } from 'vuex'
import { eventBus } from '@/plugins/event-bus'

export default {
  name: 'ExchangeItemsPopup',
  components: {
    CloseIcon,
    ChooseItem: () => import('@/components/ChooseItem')
  },
  data () {
    return {
      isShow: false
    }
  },
  async mounted () {
    eventBus.$on('openExchangePopup', () => {
      this.isShow = true
    })
    try {
      await this.$store.dispatch('change/getExchangeItems')
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    ...mapMutations({
      clearSumAfterChange: 'change/clearSumAfterChange',
      changeSumToChange: 'change/changeSumToChange',
      setSumToReceive: 'change/setSumToReceive'
    }),
    close () {
      this.isShow = !this.isShow
      this.setSumToReceive(0)
    },
    async changeItems () {
      try {
        const result = await this.$store.dispatch('change/changeItems')
        if (result.success) {
          eventBus.$emit('deselectChangeItem')
          eventBus.$emit('deselectAll')
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize',
      getUser: 'user/getUser',
      getSumToChange: 'change/getSumToChange',
      getSumToReceive: 'change/getSumToReceive',
      getExchangeItems: 'change/getExchangeItems',
      getBetSum: 'bet/getBetSum'
    }),
    totalSum () {
      return this.getUser.balance + this.getSumToChange
    }
  }
}
</script>

<style lang="sass">
@import '@/theme/_var'
@import '@/theme/_mix'
.exchangeItemsPopup
  border-radius: 24px
  box-shadow: 32px 32px 96px 0 rgba(9, 14, 20, 0.4), -16px -16px 32px 0 rgba(224, 224, 255, 0.04), 0 16px 16px 0 rgba(9, 14, 20, 0.4)
  background-image: linear-gradient(151deg, #2d2f33, #222529)
  padding: 24px
  width: 332px
  position: absolute
  z-index: 66
  bottom: 0
  right: 0
  transform: translateX(calc(100% + 24px))
  &__btn
    margin-top: 16px
  &__items
    height: 382px
    margin-right: -24px
    &-2
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      align-items: center
      padding-right: 24px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 26px
    .icon
      cursor: pointer
  &__text
    display: flex
    flex-direction: column
    align-items: flex-start
    .common
      font-size: 13px
      line-height: 16px
      color: rgba(224, 224, 255, 0.4)
      margin-bottom: 4px
    .emp
      letter-spacing: -0.4px
      font-size: 18px
      line-height: 24px
      font-weight: bold
      color: $white
  &__inputs
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 16px
  &__input
    &_w50
      width: calc(50% - 8px)
    &_w25
      width: calc(25% - 8px)
</style>
