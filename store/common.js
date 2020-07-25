export const state = () => ({
  windowSize: 0,
  currentTab: 'game'
})

export const mutations = {
  setWindowSize (state, windowsize) {
    state.windowSize = windowsize
  },
  changeTab (state, tab) {
    state.currentTab = tab
  }
}

export const getters = {
  getWindowSize: state => state.windowSize,
  getCurrentTab: state => state.currentTab
}
