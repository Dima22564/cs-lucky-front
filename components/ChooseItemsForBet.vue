<template>
  <div v-if="(getCurrentTab === 'inventory' && getWindowSize < 1080) || getWindowSize >= 1080" class="choose">
    <ExchangeItemsPopup />
    <button
      @click.prevent="openExchangePopup"
      :class="{ choose__change_disabled: !getToken }"
      :disabled="!getToken"
      class="choose__change choose__actionBtn"
    >
      <img src="/images/change.svg" alt="">
    </button>
    <button
      :class="{ choose__bet_disabled: !getToken }"
      :disabled="!getToken"
      class="choose__bet choose__actionBtn"
    >
      <ArrowDoubleDown />
    </button>
    <div class="choose__top">
      <span v-if="getUser" class="choose__num">${{ getBetSum }}</span>
      <div class="choose__toggler">
        <span class="choose__label">All</span>
        <div :class="all ? 'toggler_active' : ''" class="toggler">
          <label for="all" class="toggler__label">
            <div class="toggler__circle" />
            <div class="toggler__way" />
          </label>
          <input id="all" v-model="all" type="checkbox" name="sound" class="toggler__input">
        </div>
      </div>
    </div>

    <div v-bar="{preventParentScroll: true}" class="choose__items">
      <div class="choose__items-3">
        <div v-if="getInventory.length > 0 && getUser" class="choose__items-2">
          <ChooseItem
            v-for="item in getInventory"
            :key="item.id"
            :name="item.name"
            :image="item.image"
            :price="item.price"
            :id="item.id"
            :itemId="item.itemId"
            text="dfghj"
            choose-for-bet
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { eventBus } from '@/plugins/event-bus'
import ChooseItem from '@/components/ChooseItem'
import ArrowDoubleDown from 'vue-material-design-icons/ChevronDoubleDown.vue'

export default {
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize',
      getCurrentTab: 'common/getCurrentTab',
      getBetItems: 'bet/getBetItems',
      getInventory: 'user/getInventory',
      getUser: 'user/getUser',
      getToken: 'auth/getToken',
      getBetSum: 'bet/getBetSum'
    })
  },
  components: {
    ChooseItem,
    ArrowDoubleDown,
    ExchangeItemsPopup: () => import('@/components/ExchangeItemsPopup')
  },
  watch: {
    all () {
      if (this.all) {
        eventBus.$emit('selectAll')
        console.log('select')
      } else {
        eventBus.$emit('deselectAll')
        this.setBetSum(this.getBetSum * -1)
      }
    }
  },
  async mounted () {
    try {
      if (this.getToken) {
        await this.$store.dispatch('user/fetchInventory')
      }
    } catch (e) {
      console.log(e)
    }
  },
  data () {
    return {
      all: false,
      checkedItems: []
    }
  },
  methods: {
    ...mapMutations({
      setBetSum: 'bet/setBetSum',
      getUser: 'user/getUser'
    }),
    openExchangePopup () {
      if (this.getUser) {
        eventBus.$emit('openExchangePopup')
      }
    }
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
@import '../theme/_mix'
.choose
  padding: 24px 0 24px 24px
  background-image: $dark-gradient
  box-shadow: $dark-shadow
  border-radius: 24px
  height: calc(100vh - 482px)
  position: relative
  +lg
    height: calc(100vh - 54px - 82px - 16px)
  .toggler__way
    width: 40px
  &__actionBtn
    position: absolute
    bottom: 24px
    z-index: 55
    width: 36px
    height: 36px
    border-radius: 50%
    box-shadow: 0 8px 8px -4px rgba(238, 255, 0, 0.12), 0 2px 4px -1px rgba(10, 70, 82, 0.12), 0 0 1px 0 rgba(238, 255, 0, 0.24)
    display: flex
    align-items: center
    justify-content: center
    border: none
    cursor: pointer
  &__bet
    right: 24px
    background: $main-color
    color: $white
    transition: all 0.2s
    &:hover
      box-shadow: 0 12px 12px -4px rgba(255, 170, 0, 0.12), 0 4px 4px -1px rgba(10, 70, 82, 0.12), 0 1px 1px 0 rgba(255, 170, 0, 0.24)
    &:active
      box-shadow: 0 8px 8px -4px rgba(255, 170, 0, 0.12), 0 1px 4px -1px rgba(10, 70, 82, 0.12), 0 1px 1px 0 rgba(255, 170, 0, 0.24)
    &_disabled
      box-shadow: 0 0 8px -4px rgba(255, 170, 0, 0.12), 0 0 4px -1px rgba(10, 70, 82, 0.12), 0 0 1px 0 rgba(255, 170, 0, 0.24) !important
      opacity: 0.7
      cursor: initial
  &__change
    right: 84px
    background-color: #eeff00
    transition: all 0.2s
    &:hover
      box-shadow: 0 12px 12px -4px rgba(238, 255, 0, 0.12), 0 4px 4px -1px rgba(10, 70, 82, 0.12), 0 1px 1px 0 rgba(238, 255, 0, 0.24)
    &:active
      box-shadow: 0 8px 8px -4px rgba(238, 255, 0, 0.12), 0 1px 4px -1px rgba(10, 70, 82, 0.12), 0 1px 1px 0 rgba(238, 255, 0, 0.24)
    &_disabled
      box-shadow: 0 0 8px -4px rgba(238, 255, 0, 0.12), 0 0 4px -1px rgba(10, 70, 82, 0.12), 0 0 1px 0 rgba(238, 255, 0, 0.24) !important
      opacity: 0.7
      cursor: initial
  &__label
    margin-right: 16px
    font-size: 13px
    line-height: 16px
    color: rgba(224, 224, 255, 0.6)
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 24px
    padding-right: 24px
  &__num
    @extend %font-18-24
    letter-spacing: -0.4px
    font-weight: bold
  &__toggler
    display: flex
    align-items: center
  &__items
    overflow-y: hidden
    height: calc(100% - 45px)
    background: $dark-gradient
    &-2
      display: flex
      justify-content: space-between
      flex-wrap: wrap
      overflow: hidden
      padding-right: 12px
      +lg
        padding-right: 24px
    &-3
      padding-right: 24px !important
</style>
