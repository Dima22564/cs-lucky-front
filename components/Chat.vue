<template>
  <div class="chat">
    <div class="chat__messages">
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
        :my="true"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
        :my="true"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
        :my="true"
      />
      <Message
        :avatar="'dsdf'"
        :time="'7:55 AM'"
        :message="'wow haha'"
        :name="'William'"
        :my="true"
      />
    </div>

    <form class="chat__input">
      <input type="text" placeholder="Write your message…">
      <button>
        <ArrowUpIcon class="icon-30" />
      </button>
    </form>
  </div>
</template>

<script>
import ArrowUpIcon from 'vue-material-design-icons/ArrowUp.vue'
import Message from './Message'
export default {
  components: {
    Message,
    ArrowUpIcon
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
@import '../theme/_mix'
.chat
  max-width: 352px
  width: 100%
  background: #272a2e
  border-bottom-left-radius: 40px
  height: 100%
  flex-shrink: 0
  margin-top: -24px
  padding: 24px
  height: calc(100vh - 98px)
  display: flex
  flex-direction: column
  justify-content: space-between
  +lg
    height: calc(100vh - 48px - 82px - 24px)
    max-width: 100%
    margin-top: 0
    padding: 0
    background: transparent
    position: relative
  &__messages
    overflow-y: scroll
    height: calc(100% - 40px)
    margin-right: -24px
    padding-right: 24px
  &__input
    display: flex
    align-items: center
    margin-top: auto
    input
      border: none
      background: transparent
      color: $white
      font-size: 14px
      line-height: 20px
      width: 100%
      margin-right: 16px
    button
      color: $white
      font-weight: 500
      @extend %btn-refresh
      &::placeholder
        color: rgba(224, 224, 255, 0.6)
</style>
