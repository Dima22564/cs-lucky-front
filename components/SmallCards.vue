<template>
  <div v-if="(getCurrentTab === 'bets' && getWindowSize < 1080) || getWindowSize >= 1080" class="players">
    <div class="players__item players__item_yellow">
      <div class="players__icon">
        <LayerIcon class="icon icon-30-w" />
      </div>
      <div class="players__text">
        <p class="num">
          238.55
        </p>
        <p class="text">
          Value
        </p>
      </div>
    </div>
    <div class="players__item players__item_pink">
      <div class="players__icon">
        <UserIcon class="icon icon-30-w" />
      </div>
      <div class="players__text">
        <p class="num">
          238.55
        </p>
        <p class="text">
          Value
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LayerIcon from 'vue-material-design-icons/Layers.vue'
import UserIcon from 'vue-material-design-icons/Account.vue'
export default {
  components: {
    LayerIcon,
    UserIcon
  },
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize',
      getCurrentTab: 'common/getCurrentTab'
    })
  }
}
</script>
