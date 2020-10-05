
export const state = () => ({
  betItems: [],
  allBets: [],
  autoWithdraw: 1.1
})

export const mutations = {
  addItem (state, item) {
    state.betItems.push(item)
  },
  deleteItem (state, itemId) {
    state.betItems = state.betItems.filter(i => i !== itemId)
  },
  setBetItems (state, items) {
    state.betItems = items
  },
  addAllBets (state, bet) {
    state.allBets.unshift(bet)
  },
  setAllBets (state, bets) {
    state.allBets = bets
  },
  setAutoWithdraw (state, coeff) {
    state.autoWithdraw = Number(coeff)
  }
}

export const actions = {
  async makeBet ({ getters, commit, rootGetters }) {
    try {
      const data = new FormData()
      data.append('betItems', JSON.stringify(getters.getBetItems))
      data.append('autoWithdraw', getters.getAutoWithdraw)
      const result = await this.$axios.$post(`${this.$axios.defaults.baseURL}/make-bet`, data)
      console.log(result)
      if (result.success) {
        commit('user/setInventory', result.data.inventory, { root: true })
        return result.data.bet
      }
    } catch (e) {
      throw e.response
    }
  }
}

export const getters = {
  getBetItems: state => state.betItems,
  getAllBetItems: state => state.allBets,
  getAutoWithdraw: state => state.autoWithdraw
}
