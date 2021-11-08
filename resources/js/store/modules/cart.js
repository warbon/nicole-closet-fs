const state = {
    cart: []
  }
  
  const getters = {
  }
  
  const mutations = {
    SET_FLASH_MESSAGE (state, data) {
      state.flashMessage = data
    },
    DESTROY_FLASH_MESSAGE (state) {
      state.flashMessage = {}
      state.snackbarShow = false
    },
    SHOW_FLASH_MESSAGE (state, data) {
      state.flashMessage = data
      state.snackbarShow = true
    },
  }
  
  const actions = {
    setFlashMessage ({ commit }, data) {
      commit('SET_FLASH_MESSAGE', data)
    },
    destroyFlashMessage ({ commit }) {
      commit('DESTROY_FLASH_MESSAGE')
    },
    setShowFlashMessage ({ commit }, data ) {
      commit('SHOW_FLASH_MESSAGE', data )
    }
  }
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
  }
  