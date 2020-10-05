import { eventBus } from '@/plugins/event-bus'

export const actions = {
  SOCKET_newMessage (ctx, data) {
    console.log(data)
  },
  SOCKET_newBetClient ({ commit }, bet) {
    commit('bet/addAllBets', bet, { root: true })
  },
  SOCKET_successAutoTake ({ commit }, data) {
    commit('bet/setAllBets', data.data.bets, { root: true })
  },
  SOCKET_crashBets ({ commit }, data) {
    commit('bet/setAllBets', data.bets, { root: true })
    commit('game/setLastGames', data.games, { root: true })
    eventBus.$emit('loadSlider', true)
  },
  nuxtServerInit ({ dispatch }) {
    dispatch('auth/autoLogin')
  }
}
