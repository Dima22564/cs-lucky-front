import { eventBus } from '@/plugins/event-bus'

export const state = () => ({
  betItems: [],
  allBets: [],
  autoWithdraw: 1.1,
  betSum: 0.00,
  bet: null,
  betItemsImages: []
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
  },
  setBetSumCustom (state, sum) {
    state.betSum = sum
  },
  setBetSum (state, sum) {
    state.betSum += sum
    state.betSum = Number(state.betSum.toFixed(2))
  },
  setBet (state, bet) {
    state.bet = bet
  },
  addBetImage (state, image) {
    state.betItemsImages.push(image)
  },
  setBetImages (state, images) {
    state.betItemsImages = images
  },
  deleteItemImage (state, id) {
    state.betItemsImages = state.betItemsImages.filter(i => i.id !== id)
  }
}

export const actions = {
  async makeBet ({ getters, commit, rootGetters }) {
    try {
      const data = new FormData()
      data.append('betItems', JSON.stringify(getters.getBetItems))
      data.append('autoWithdraw', getters.getAutoWithdraw)
      const result = await this.$axios.$post(`${this.$axios.defaults.baseURL}/make-bet`, data)
      commit('setBetItems', [])
      eventBus.$emit('deselectAll')
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
  getAutoWithdraw: state => state.autoWithdraw,
  getBetSum: state => state.betSum,
  getBet: state => state.bet,
  getBetItemsImages: state => state.betItemsImages
}
