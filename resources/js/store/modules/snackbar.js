const state = {
    flashMessage: {},
    snackbar: false,
  }
  
  const getters = {
  }
  
  const mutations = {
    SET_FLASH_MESSAGE (state, data) {
      state.flashMessage = data
    },
    DESTROY_FLASH_MESSAGE (state) {
      state.flashMessage = {}
    },
    SHOW_FLASH_MESSAGE (state, data) {
      state.flashMessage = data
      state.snackbar = true
    },
  }
  
  const actions = {
    setFlashMessage ({ commit }, data) {
      commit('SET_FLASH_MESSAGE', data)
    },
    destroyFlashMessage ({ commit }) {
      commit('DESTROY_FLASH_MESSAGE')
    },
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  }
  