<template>
  <div
    @click.prevent="cl"
    :class="{ 'choose__item_active': isChecked, 'choose__item_small': small }"
    class="choose__item"
  >
    <div
      class="choose__item-top"
      :class="{ 'choose__item-top_small': small }"
    >
      <span
        class="choose__item-title"
        :class="{ 'choose__item-title_small': small }"
      >
        {{ name }}
      </span>
      <span
        class="choose__item-circle"
        :class="{ 'choose__item-circle_small': small }"
      />
    </div>
    <img
      class="choose__item-img"
      :src="image"
      :class="{ 'choose__item-img_small': small }"
      alt=""
    >

    <div
      class="choose__item-bottom"
      :class="{ 'choose__item-bottom_small': small }"
    >
      <span class="text">{{ text }}</span>
      <span class="num">${{ price }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { eventBus } from '@/plugins/event-bus'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    itemId: {
      type: Number,
      required: true
    },
    chooseForBet: {
      type: Boolean,
      default: false
    },
    chooseForExchange: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isChecked: false
    }
  },
  created () {
    // eventBus.$off('selectAll')
    // eventBus.$off('deselectAll')
    if (this.chooseForBet) {
      eventBus.$on('selectAll', () => {
        this.addItem(this.id)
        this.setBetSum(this.price)
        this.changeSumToChange(this.price)
        this.isChecked = true
      })
      eventBus.$on('deselectAll', () => {
        this.deleteItem(this.id)
        this.setBetSumCustom(0)
        this.isChecked = false
      })
    } else if (this.chooseForExchange) {
      eventBus.$on('deselectChangeItem', () => {
        this.isChecked = false
      })
    }
  },
  computed: {
    ...mapGetters({
      getBetItemsImages: 'bet/getBetItemsImages'
    })
  },
  methods: {
    ...mapMutations({
      addItem: 'bet/addItem',
      deleteItem: 'bet/deleteItem',
      setBetSum: 'bet/setBetSum',
      changeSumToChange: 'change/changeSumToChange',
      changeSumToReceive: 'change/changeSumToReceive',
      addItemsToReceive: 'change/addItemsToReceive',
      deleteItemToReceive: 'change/deleteItemToReceive',
      setBetSumCustom: 'bet/setBetSumCustom',
      addBetImage: 'bet/addBetImage',
      deleteItemImage: 'bet/deleteItemImage'
    }),
    cl () {
      this.isChecked = !this.isChecked
      if (this.chooseForBet) {
        const item = this.itemId
        if (!this.isChecked) {
          this.deleteItem(item)
          this.setBetSum(this.price * -1)
          this.changeSumToChange(this.price * -1)
          this.deleteItemImage(this.id)
        } else {
          this.addItem(item)
          this.setBetSum(this.price)
          this.changeSumToChange(this.price)
          if (this.getBetItemsImages.length < 3) {
            const itemImage = {
              id: this.id,
              image: this.image
            }
            this.addBetImage(itemImage)
          }
        }
      } else if (this.chooseForExchange) {
        if (this.isChecked) {
          this.changeSumToReceive(this.price)
          this.addItemsToReceive(this.itemId)
        } else {
          this.changeSumToReceive(this.price * -1)
          this.deleteItemToReceive(this.itemId)
        }
      }
    }
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
@import '../theme/_mix'
.choose
  &__item
    user-select: none
    width: calc(50% - 12px)
    border-radius: 12px
    background-color: rgba(224, 224, 255, 0.02)
    margin-bottom: 24px
    display: flex
    flex-direction: column
    cursor: pointer
    &_small
      width: calc(33% - 8px)
      padding: 8px
      margin-bottom: 16px
    +lg
      width: calc(25% - 12px)
    +md
      width: calc(50% - 12px)
    &_active
      background: $main-gradient
      box-shadow: $main-shadow
    &-img
      width: 70%
      margin: 10px auto
      height: 80px
      &_small
        width: 68px
        height: 68px
    &-top
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 12px
      padding: 12px
      &_small
        padding: 0
    &-title
      @extend %font-10-12
      &_small
        text-overflow: ellipsis
        overflow: hidden
        max-width: calc(100% - 8px)
    &-circle
      width: 12px
      height: 12px
      border-radius: 50%
      background: #c32de1
      &_small
        width: 8px
        height: 8px
    &-bottom
      display: flex
      align-items: center
      justify-content: space-between
      padding: 12px
      @extend %font-10-12
      +white(0.4, 'c')
      &_small
        padding: 0
      .num
        margin-left: 12px
        @extend %font-13-16
        font-weight: bold
        color: $white
      .text
        overflow: hidden
        text-overflow: ellipsis
</style>
