<template>
  <main class="cs-lucky-main">
    <div class="cs-lucky-container">
      <div class="cs-lucky-row">
        <div class="cs-lucky-main--left">
          <div v-if="(getCurrentTab === 'game' && getWindowSize < 1080) || getWindowSize >= 1080" class="graph">
            <div class="multiplier__wrapper">
              <div class="multiplier__num" v-if="timeToStart !== 0.00">{{ timeToStart }}s</div>
              <div class="multiplier__num" v-if="getMultiplier !== '0.00'">{{ getMultiplier }}x</div>
            </div>
            <apex-charts :options="chartOptions" :series="series" height="100%" />
          </div>

          <SmallCards />

          <ChooseItemsForBet />
        </div>

        <div class="cs-lucky-main--center">
          <div v-if="(getCurrentTab === 'game' && getWindowSize < 1080) || getWindowSize >= 1080" class="knife">
            <div class="knife__left">
              <img src="/images/knife.png" alt="">
            </div>
            <div class="knife__right">
              <div class="knife__line">
                <p class="text">
                  296<span class="emp">.72</span>
                </p>
                <RightIcon class="arrow" />
                <p class="text">
                  296<span class="emp">.72</span>
                </p>
              </div>

              <div class="knife__coeffs">
                <autoWithdrawBtn :coeff="1.1" />
                <autoWithdrawBtn :coeff="1.2" />
                <autoWithdrawBtn :coeff="1.5" />
                <autoWithdrawBtn :coeff="2.0" />
              </div>

              <div class="knife__btns">
                <button class="knife__btn-1">
                  {{ getAutoWithdraw }}
                </button>
                <button
                  class="knife__btn-2 btn_primary"
                  @click.prevent="makeBet"
                  v-if="getGameStatus === 0"
                  :disabled="getGameStatus !== 0"
                >
                  <span>Start</span>
                  <span>x1.5</span>
                </button>
                <button
                  class="knife__btn-2 btn_primary"
                  @click.prevent="makeBet"
                  v-if="getGameStatus !== 0"
                >
                  <span>Receive</span>
                  <span>x{{ getMultiplier }}</span>
                </button>
              </div>
            </div>
          </div>

          <Coeffs />

          <HistorySection />
        </div>

        <Chat v-if="(getCurrentTab === 'chat' && getWindowSize < 1080) || getWindowSize >= 1080" />
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import autoWithdrawBtn from '@/components/buttons/autoWithdrawBtn'
import RightIcon from 'vue-material-design-icons/ChevronDoubleRight.vue'
import HistorySection from '@/components/HistorySection'
import Chat from '../components/Chat'
import SmallCards from '~/components/SmallCards'
import ChooseItemsForBet from '~/components/ChooseItemsForBet'
import Coeffs from '~/components/Coeffs'

export default {
  layout: 'default',
  components: {
    Chat,
    RightIcon,
    SmallCards,
    ChooseItemsForBet,
    Coeffs,
    HistorySection,
    autoWithdrawBtn
  },
  methods: {
    ...mapMutations({
      setGameStatus: 'game/setGameStatus',
      setAutoWithdraw: 'bet/setAutoWithdraw'
    }),
    async makeBet () {
      try {
        const bet = await this.$store.dispatch('bet/makeBet')
        console.log(bet)
        this.$socket.emit('myNewBet', bet)
      } catch (e) {
        console.log(e)
      }
    }
  },
  async mounted () {
    try {
      await this.$store.dispatch('all/all')
    } catch (e) {

    }
  },
  sockets: {
    timerToStart (num) {
      this.setGameStatus(0)
      this.timeToStart = num
      this.timerToStartInterval = setInterval(() => {
        if (this.timeToStart !== 0.00) {
          this.timeToStart = Number((this.timeToStart - 0.1).toFixed(2))
          // this.m = Number(this.m.toFixed(2).substring(0, 3))
        } else {
          clearInterval(this.timerToStartInterval)
          this.timerToStartInterval = null
          this.timeToStart = 0.00
        }
      }, 100)
    },
    stopTimer () {
      clearInterval(this.timerToStartInterval)
      this.timerToStartInterval = null
      this.timeToStart = 0.00
    },
    gameCrashed (multiplier) {
      this.setGameStatus(2)
      clearInterval(this.startGameInterval)
      this.startGameInterval = null
      // this.multiplier = parseFloat(String(multiplier)).toFixed(2)
      setTimeout(() => {
        // this.multiplier = 0.00
        this.$store.commit('game/setMultiplier', 0.00)
        this.$store.commit('bet/setAllBets', [])
      }, 3000)
      console.log(multiplier)
    },
    startGame (data) {
      if (this.startGameInterval === null) {
        this.setGameStatus(1)
        let _nowOld = 0
        this.startGameInterval = setInterval(() => {
          data._i++
          data._now = parseFloat((Math.E) ** (0.00006 * data._i * 1000 / 20))

          if (Number(_nowOld.toFixed(2)) !== Number(data._now.toFixed(2))) {
            _nowOld = data._now

            // this.multiplier = Number(parseFloat(String(data._now)).toFixed(2))
            this.$store.commit('game/setMultiplier', Number(parseFloat(String(data._now)).toFixed(2)))
          }
        }, 50)
      }
    }
  },
  data () {
    return {
      timerToStartInterval: null,
      startGameInterval: null,
      timeToStart: 0.00,
      currentTab: 'game',
      multiplier: 0.00,
      tabs: [
        'game',
        'inventory',
        'bets',
        'chat'
      ],
      series: [{
        name: 'series1',
        data: [0, 3, 10, 15, 30, 78, 125, 150, 324, 524]
      }],
      chartOptions: {
        chart: {
          // height: 228,
          type: 'area',
          height: '100%',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false,
          style: {
            colors: ['rgba(224, 224, 255, 0.4)']
          }
        },
        stroke: {
          curve: 'smooth',
          colors: ['#ffaa00']
        },
        xaxis: {
          type: 'numeric',
          categories: [0, 3, 10, 15, 30, 78, 125, 150, 324, 524],
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          },
          labels: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: ['rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)', 'rgba(224, 224, 255, 0.4)']
            }
          }
        },
        markers: {
          size: 0,
          strokeColor: '#ffaa00',
          colors: 'rgba(224, 224, 255, 0.4)'
        },
        colors: ['#ffaa00'],
        fill: {
          type: 'gradient',
          colors: '#ffaa00',
          gradient: {
            opacityFrom: 0.8,
            opacityTo: 0.1
          }
        },
        grid: {
          row: {
            colors: ['rgba(224, 224, 255, 0.001)']
          },
          column: {
            colors: ['rgba(224, 224, 255, 0.001)']
          }
        },
        tooltip: {
          enabled: false
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      getWindowSize: 'common/getWindowSize',
      getCurrentTab: 'common/getCurrentTab',
      getAutoWithdraw: 'bet/getAutoWithdraw',
      getMultiplier: 'game/getMultiplier',
      getGameStatus: 'game/getGameStatus'
    })
  }
}
</script>

<style lang="sass">
@import '../theme/_var'
@import '../theme/_mix'
.multiplier
  &__wrapper
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
  &__num
    font-size: 36px
    line-height: 36px
    letter-spacing: -1px
    font-weight: bold
    color: $white
.cs-lucky-main
  padding: 24px 0 0
  +lg
    padding: 0
  &--left
    max-width: 356px
    width: 100%
    flex-shrink: 0
    +lg
      max-width: 100%
  &--center
    padding: 0 24px
    width: calc(100% - 356px - 352px)
    +lg
      max-width: 100%
      width: 100%
      padding: 0
.apexcharts-toolbar
  display: none !important
.players
  display: flex
  justify-content: space-between
  margin-bottom: 24px
  +lg
    margin-bottom: 32px
  .num
    @extend %font-18-24
    letter-spacing: -0.4px
    font-weight: bold
  .text
    @xtend %font-13-16
    color: $dark-white
  &__item
    width: calc(50% - 12px)
    color: $white
    padding: 12px 30px 12px 16px
    border-radius: 24px
    display: flex
    align-items: center
    justify-content: space-between
    &_yellow
      background: $main-gradient
      box-shadow: $main-shadow
    &_pink
      box-shadow: $secondary-shadow
      background: $secondary-gradient
  &__text
    margin-left: 16px
  &__icon
    width: 40px
    height: 40px
    flex-shrink: 0
    display: flex
    align-items: center
    justify-content: center
    border-radius: 12px
    +white(0.06, 'bg')

.coeffs
  background-image: linear-gradient(96deg, #2d2f33 1%, #272a2e 52%, #222529)
  border-radius: 24px
  padding: 12px
  margin-bottom: 24px
  box-shadow: $dark-shadow
  .slick-slide
    margin-right: 12px
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
    &_red
      border: solid 2px #ff00aa
      background-color: rgba(255, 0, 170, 0.06)
    &_green
      border: solid 2px #00ffaa
      background-color: rgba(0, 255, 170, 0.06)
    &_blue
      border: solid 2px #00bbff
      background-color: rgba(0, 187, 255, 0.06)

.history
  height: calc(100vh - 72px - 72px - 120px - 228px)
  overflow-y: auto
  margin: 0 0 0 -43px
  padding: 0 0 0 43px
  position: relative
  +lg
    height: calc(100vh - 48px - 32px - 82px - 72px - 16px)
    margin-right: -6px
  &__con
    position: relative
  &__bg
    background-image: linear-gradient(to bottom, rgba(33, 36, 41, 0), #212429)
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 50px
    z-index: 5
    +lg
      height: 80px

.graph
  background-image: linear-gradient(124deg, #2d2f33 1%, #272a2e 52%, #222529 100%)
  border-radius: 24px
  margin-bottom: 24px
  box-shadow: $dark-shadow
  height: 228px
  position: relative
  +lg
    margin-bottom: 16px

.knife
  border-radius: 24px
  box-shadow: 8px 8px 24px 0 rgba(9, 14, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 14, 20, 0.4)
  background-image: linear-gradient(108deg, #2d2f33 1%, #272a2e 52%, #222529)
  margin-bottom: 24px
  overflow: hidden
  display: flex
  &__left
    position: relative
    height: 100%
    margin-right: 25px
    +media(1400)
      display: none
  &__right
    padding: 24px
    width: 100%
  &__coeffs
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    margin-bottom: 24px
  &__btn-1
    padding: 12px 36px 12px 16px
    color: $white
    box-shadow: inset 8px 8px 40px 0 rgba(9, 14, 20, 0.4), inset -4px -4px 8px 0 rgba(224, 224, 255, 0.04), inset 0 1px 1px 0 rgba(9, 14, 20, 0.4)
    background: linear-gradient(to bottom, #090e14, #222529 58%, #2d2f33)
    border: none
    font-size: 16px
    line-height: 24px
    font-weight: bold
    border-radius: 24px 12px 12px 24px
    margin-right: 4px
  &__btn-2
    padding: 12px 16px
    border: none
    font-size: 16px
    line-height: 24px
    font-weight: bold
    border-radius: 12px 24px 24px 12px
    margin-right: 4px
    display: flex
    align-items: center
    justify-content: space-between
    max-width: 229px
    width: 100%
  &__btns
    display: flex
    align-items: center
  &__line
    display: flex
    align-items: center
    margin-bottom: 24px
    .text
      color: $white
      letter-spacing: -1px
      font-size: 36px
      line-height: 36px
      font-weight: bold
    .emp
      font-size: 16px
    .arrow
      color: rgba(224, 224, 255, 0.4)
      margin: 0 24px
  &__bgElem-1
    box-shadow: inset 8px 8px 40px 0 rgba(9, 14, 20, 0.4), inset -4px -4px 8px 0 rgba(224, 224, 255, 0.04), inset 0 1px 1px 0 rgba(9, 14, 20, 0.4)
    background-image: linear-gradient(to bottom, #090e14 -6%, #222529 56%, #2d2f33)
    left: 0
    top: 0
    height: 100%
    width: 310px
    border-radius: 24px 1000px 0 24px
  &__bgElem-2
    border-radius: 128px 0 128px 0
    width: 264px
    height: 100%
    position: absolute
    left: 44px
    top: 0
    background-image: linear-gradient(131deg, #eeff00, #ffaa00 51%, #f54562)
</style>
