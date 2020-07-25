export const state = () => ({
  notifications: [{
    type: 'success',
    blueText: 'jelena',
    whiteText: 'request',
    id: 'not1'
  },
  {
    type: 'message',
    blueText: 'jelena',
    whiteText: 'request',
    id: 'not2'
  },
  {
    type: 'financial',
    blueText: 'jelena',
    whiteText: 'request',
    id: 'not3'
  },
  {
    type: 'warning',
    blueText: 'jelena',
    whiteText: 'request',
    id: 'not4'
  }
  ]
})

export const mutations = {
  deleteNotification (state, id) {
    state.notifications = state.notifications.filter(item => item.id !== id)
  }
}

export const actions = {

}

export const getters = {
  getNotifications (state) {
    return state.notifications
  }
}
