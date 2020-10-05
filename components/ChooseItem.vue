<template>
  <div @click.prevent="cl" :class="isChecked ? 'choose__item_active' : ''" class="choose__item">
    <div class="choose__item-top">
      <span class="choose__item-title">
        {{ name }}
      </span>
      <span class="choose__item-circle" />
    </div>
    <img class="choose__item-img" :src="image" alt="">

    <div class="choose__item-bottom">
      <span class="text">{{ text }}</span>
      <span class="num">${{ price }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
    chooseForBet: {
      type: Boolean,
      default: false
    },
    chooseForExchange: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isChecked: false
    }
  },
  computed: {
    // isChecked: false
  },
  created () {
    // eventBus.$off('selectAll')
    // eventBus.$off('deselectAll')
    eventBus.$on('selectAll', () => {
      console.log(this.isChecked)
      this.$store.commit('bet/addItem', this.id)
      this.isChecked = true
    })
    eventBus.$on('deselectAll', () => {
      this.$store.commit('bet/deleteItem', this.id)
      this.isChecked = false
    })
  },
  methods: {
    ...mapMutations({
      addItem: 'bet/addItem',
      deleteItem: 'bet/deleteItem'
    }),
    cl () {
      this.isChecked = !this.isChecked
      if (this.chooseForBet) {
        const item = this.id
        if (!this.isChecked) {
          this.deleteItem(item)
        } else {
          this.addItem(item)
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
    &-top
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 12px
      padding: 12px
    &-title
      @extend %font-10-12
    &-circle
      width: 12px
      height: 12px
      border-radius: 50%
      background: #c32de1
    &-bottom
      display: flex
      align-items: center
      justify-content: space-between
      padding: 12px
      @extend %font-10-12
      +white(0.4, 'c')
      .num
        margin-left: 12px
        @extend %font-13-16
        font-weight: bold
        color: $white
      .text
        overflow: hidden
        text-overflow: ellipsis
</style>
