<template>
  <div v-if="(getCurrentTab === 'game' && getWindowSize < 1080) || getWindowSize >= 1080" class="coeffs">
    <slick ref="slick" :options="sliderOptions">
      <div
        v-for="item in getLastGames"
        :key="item.id"
        class="coeffs__item"
      >
        <nuxt-link :to="`/stats/${item.hash}`" tag="button" class="coeffs__coeff">
          {{ item.multiplier.toFixed(2) }}x
        </nuxt-link>
      </div>
    </slick>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '@/plugins/event-bus'

export default {
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize',
      getCurrentTab: 'common/getCurrentTab',
      getLastGames: 'game/getLastGames'
    })
  },
  mounted () {
    eventBus.$on('loadSlider', (arg) => {
      if (arg) {
        this.dataReady = arg
        this.reinitSlider()
      }
    })
  },
  methods: {
    reinitSlider () {
      this.$refs.slick.destroy()
      this.$nextTick(() => {
        this.$refs.slick.create()
      })
    }
  },
  data () {
    return {
      dataReady: false,
      sliderOptions: {
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        variableWidth: true,
        infinite: false
      }
    }
  }
}
</script>
