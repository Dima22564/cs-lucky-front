<template>
  <div v-if="(getCurrentTab === 'game' && getWindowSize < 1080) || getWindowSize >= 1080" class="coeffs">
    <!--    <slick ref="slick" :options="sliderOptions">-->
    <!--      <div-->
    <!--        v-for="item in getLastGames"-->
    <!--        :key="item.id"-->
    <!--        class="coeffs__item"-->
    <!--      >-->
    <!--        <nuxt-link :to="`/stats/${item.hash}`" tag="button" class="coeffs__coeff">-->
    <!--          {{ item.multiplier.toFixed(2) }}x-->
    <!--        </nuxt-link>-->
    <!--      </div>-->
    <!--    </slick>-->
    <Swiper
      :options="options"
    >
      <SwiperSlide
        v-for="item in getLastGames"
        :key="item.id"
      >
        <div class="coeffs__item">
          <nuxt-link
            :to="`/game/${item.hash}`"
            :style="{ 'border-color': item.color }"
            :class="item.color ? `coeffs__coeff_${item.color.slice(1)}` : ''"
            tag="button"
            class="coeffs__coeff"
          >
            {{ item.multiplier.toFixed(2) }}x
          </nuxt-link>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { eventBus } from '@/plugins/event-bus'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize',
      getCurrentTab: 'common/getCurrentTab',
      getLastGames: 'game/getLastGames'
    })
  },
  components: {
    Swiper,
    SwiperSlide
  },
  mounted () {
    eventBus.$on('loadSlider', (arg) => {
      if (arg) {
        this.dataReady = arg
      }
    })
  },
  methods: {
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
      },
      options: {
        slidesPerView: 12,
        spaceBetween: 12,
        breakpoints: {
          // when window width is >= 320px
          0: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          466: {
            slidesPerView: 4,
            spaceBetween: 12
          },
          575: {
            slidesPerView: 5,
            spaceBetween: 12
          },
          676: {
            slidesPerView: 7,
            spaceBetween: 12
          },
          820: {
            slidesPerView: 9,
            spaceBetween: 12
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 12
          },
          1130: {
            slidesPerView: 4,
            spaceBetween: 12
          },
          1230: {
            slidesPerView: 5,
            spaceBetween: 12
          },
          1350: {
            slidesPerView: 7,
            spaceBetween: 12
          },
          // when window width is >= 480px
          1500: {
            slidesPerView: 9,
            spaceBetween: 12
          },
          // when window width is >= 640px
          1800: {
            slidesPerView: 12,
            spaceBetween: 12
          }
        }
      }
    }
  }
}
</script>

<style lang="sass">
@import '@/theme/_var'
@import '@/theme/_mix'
.coeffs
  &__coeff
    @extend %btn-refresh
    font-size: 16px
    line-height: 24px
    padding: 10px 16px
    border-radius: 12px
    border: solid 2px #c32de1
    background-color: rgba(195, 45, 225, 0.06)
    color: $white
    font-weight: bold
    transition: all 0.2s
    &_5d2de1
      &:hover
        background: #5d2de1
    &_c32de1
      &:hover
        background: #c32de1
    &_00ffaa
      &:hover
        background: #00ffaa
    &_eeff00
      &:hover
        background: #eeff00
    &_00bbff
      &:hover
        background: #00bbff
</style>
