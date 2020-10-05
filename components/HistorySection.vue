<template>
  <div v-if="(getCurrentTab === 'bets' && getWindowSize < 1080) || getWindowSize >= 1080" class="history__con">
    <div class="history__bg" />
    <div v-bar="{preventParentScroll: true}" class="history">
      <div>
        <History
          v-for="item in getAllBetItems"
          :key="item.id"
          :cost="item.bank"
          :cost2="item.winBank"
          :coeff="item.multiplier"
          :items="item.items"
          :avatar="item.user.avatar"
          :is-win="item.isWin"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import History from '@/components/History'

export default {
  components: {
    History
  },
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize',
      getCurrentTab: 'common/getCurrentTab',
      getAllBetItems: 'bet/getAllBetItems'
    })
  },
  methods: {
    ...mapMutations({
      addAllBets: 'bet/addAllBets'
    })
  }
}
</script>
