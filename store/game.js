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
  }
}

export const actions = {
  async gameStart ({ commit }) {
    commit('gameChangeState')
    await this.$axios.post('/game-start')
  },
  async gamePrepare () {
    await this.$axios.get('/game-prepare')
  }
}

export const getters = {
  getMultiplier: state => state.multiplier,
  getLastGames: state => state.lastGames,
  getGameStatus: state => state.status
}
