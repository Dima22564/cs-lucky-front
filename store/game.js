import { eventBus } from '@/plugins/event-bus'

export const state = () => ({
  multiplier: 0.00,
  status: 0,
  lastGames: []
})

export const mutations = {
  setGameStatus (state, status) {
    state.status = status
  },
  setMultiplier (state, multiplier) {
    state.multiplier = multiplier.toFixed(2)
  },
  setLastGames (state, games) {
    state.lastGames = games
    eventBus.$emit('loadSlider', true)
  }
}

export const actions = {
  async gameStart ({ commit }) {
    commit('gameChangeState')
    await this.$axios.post('/game-start')
  },
  async gamePrepare () {
    await this.$axios.get('/game-prepare')
  },
  async index (ctx, hash) {
    try {
      return await this.$axios.$get(`${this.$axios.defaults.baseURL}/game/${hash}`)
    } catch (e) {
      throw e.response
    }
  }
}

export const getters = {
  getMultiplier: state => state.multiplier,
  getLastGames: state => state.lastGames,
  getGameStatus: state => state.status
}
