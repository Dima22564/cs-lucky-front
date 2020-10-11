import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
    Cookies.remove('token')
    Cookies.set('token', token, { expires: 1 })
  },
  deleteToken (state) {
    state.token = null
  }
}

export const actions = {
  autoLogin ({ dispatch, commit }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies.token
    console.log(token)

    if (isJWTValid(token)) {
      commit('setToken', token)
    } else {
      // dispatch('logOut')
      console.log('invalid')
      commit('deleteToken')
    }
  }
}

export const getters = {
  getToken: state => state.token
}

function isJWTValid (token) {
  console.log(token)

  if (!token) {
    return false
  }

  const jwtData = jwt.decode(token) || {}
  const expires = jwtData.exp || 0

  return (new Date().getTime() / 1000) < expires
}
