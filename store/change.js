import FormData from 'form-data'

export const state = () => ({
  sumToChange: 0,
  sumToReceive: 0,
  itemsToReceive: [],
  exchangeItems: []
})

export const mutations = {
  changeSumToChange (state, sum) {
    state.sumToChange += sum
    state.sumToChange = Number(state.sumToChange.toFixed(2))
  },
  changeSumToReceive (state, sum) {
    state.sumToReceive += sum
    state.sumToReceive = Number(state.sumToReceive.toFixed(2))
  },
  addItemsToReceive (state, itemId) {
    state.itemsToReceive.push(itemId)
  },
  deleteItemToReceive (state, itemId) {
    state.itemsToReceive = state.itemsToReceive.filter(i => i !== itemId)
  },
  setReceiveItems (state, items) {
    state.itemsToReceive = items
  },
  setExchangeItems (state, items) {
    state.exchangeItems = items
  },
  clearSumAfterChange (state) {
    state.sumToReceive = 0
    state.sumToChange = 0
  },
  setSumToReceive (state, sum) {
    state.sumToReceive = sum
  }
}

export const actions = {
  async changeItems ({ getters, rootGetters, commit }) {
    try {
      const data = new FormData()
      data.append('itemsToReceive', JSON.stringify(getters.getItemsToReceive))
      data.append('itemsToChange', JSON.stringify(rootGetters['bet/getBetItems']))
      this.$axios.setToken(rootGetters['auth/getToken'], 'Bearer')
      const result = await this.$axios.$post(`${this.$axios.defaults.baseURL}/change-items`, data)
      if (result.success) {
        commit('bet/setBetItems', [], { root: true })
        commit('setReceiveItems', [])
        commit('clearSumAfterChange')
        commit('user/setInventory', result.data.inventory, { root: true })
      }
      return result
    } catch (e) {
      throw e.response
    }
  },
  async getExchangeItems ({ commit }) {
    try {
      const result = await this.$axios.$get(`${this.$axios.defaults.baseURL}/exchange-items`)
      commit('setExchangeItems', result.data.exchangeItems)
      console.log(result)
    } catch (e) {
      throw e.response
    }
  }
}

export const getters = {
  getSumToChange: state => state.sumToChange,
  getSumToReceive: state => state.sumToReceive,
  getItemsToReceive: state => state.itemsToReceive,
  getExchangeItems: state => state.exchangeItems
}
