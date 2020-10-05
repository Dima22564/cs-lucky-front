export const state = () => ({
  user: null,
  inventory: []
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  setInventory (state, inventory) {
    state.inventory = inventory
  }
}

export const actions = {
  async loadUser ({ commit, rootGetters }) {
    try {
      if (rootGetters['auth/getToken']) {
        this.$axios.setToken(rootGetters['auth/getToken'], 'Bearer')
        const data = await this.$axios.$post(`${this.$axios.defaults.baseURL}/user`)
        commit('setUser', data)
      }
    } catch (error) {
      console.log(error)
    }
  },
  async logout ({ commit, rootGetters }) {
    try {
      this.$axios.setToken(rootGetters['auth/getToken'], 'Bearer')
      await this.$axios.$post(`${this.$axios.defaults.baseURL}/logout`)
      commit('setUser', null)
      commit('auth/setToken', null, { root: true })
    } catch (error) {
      console.log(error)
    }
  },
  async fetchInventory ({ commit, rootGetters }) {
    try {
      this.$axios.setToken(rootGetters['auth/getToken'], 'Bearer')
      const result = await this.$axios.$get(`${this.$axios.defaults.baseURL}/inventory`)
      commit('setInventory', result.data.inventory)
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getters = {
  getUser: state => state.user,
  getInventory: state => state.inventory
}
