import api from '../../utils/api'

const state = {
  token: localStorage.getItem('access_token') || null,
  userName: localStorage.getItem('userName') || null,
  userEmail: localStorage.getItem('userEmail') || null,
  userID: localStorage.getItem('userID') || null,
  userTheme: localStorage.getItem('vuetify@user') || null,
}

const getters = {
  isAuthenticated (state) {
    return state.token !== null
  },
  getUserName (state) {
    return state.userName
  },
  getUserID (state) {
    return state.userID
  },
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },
  DESTROY_TOKEN (state) {
    state.token = null
    state.userName = null
    state.userMail = null
    state.userID = null
  },
  SET_USER_NAME (state, userName) {
    state.userName = userName
  },
  SET_USER_EMAIL (state, userEmail) {
    state.userEmail = userEmail
  },
  SET_USER_ID (state, userID) {
    state.userID = userID
  },
}

const actions = {
  register (context, data) {
    return new Promise((resolve, reject) => {
      api.post('register', data)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  clearToken ({ commit }) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userID')
    commit('DESTROY_TOKEN')
  },
  logout ({ state, dispatch, getters }) {
    if (getters.isAuthenticated) {
      return new Promise((resolve, reject) => {
        api.post('api/logout')
          .then((response) => {
            dispatch('clearToken')
            resolve(response)
          })
          .catch((error) => {
            dispatch('clearToken')
            reject(error)
          })
      })
    }
  },
  login ({ commit }, data) {
    return new Promise((resolve, reject) => {
      // console.log('login data', data)
      api.post('oauth/token', data)
        .then(response => {
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          commit('SET_TOKEN', token)
          resolve(response)
        })
        .catch(error => {
          console.log('auth.js login', error)
          reject(error)
        })
    })
  },
  // login ({ commit }, data) {
  //   return new Promise((resolve, reject) => {
  //     api.post('oauth/token', data, { baseURL: process.env.VUE_APP_BASE_URL })
  //       .then(response => {
  //         const token = response.data.access_token
  //         localStorage.setItem('access_token', token)
  //         commit('SET_TOKEN', token)
  //         resolve(response)
  //       })
  //       .catch(error => {
  //         console.log('auth.js login', error)
  //         reject(error)
  //       })
  //   })
  // },
  getUser ({ commit }) {
    return new Promise((resolve, reject) => {
      api.get('user')
        .then((response) => {
          localStorage.setItem('userName', response.data.name)
          localStorage.setItem('userEmail', response.data.email)
          localStorage.setItem('userID', response.data.id)
          commit('SET_USER_NAME', response.data.name)
          commit('SET_USER_EMAIL', response.data.email)
          commit('SET_USER_ID', response.data.id)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
