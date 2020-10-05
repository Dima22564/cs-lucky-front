export const actions = {
  async all ({ commit }) {
    try {
      const result = await this.$axios.$get(`${this.$axios.defaults.baseURL}/all`)
      commit('bet/setAllBets', result.data.bets, { root: true })
      console.log(result)
    } catch (e) {

    }
  }
}
