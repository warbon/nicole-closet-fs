 import api from '../../utils/api'
// import axios from "axios"

const state = {
  categories: [],
  category: {},
}

const getters = {
    // clients: state => state.clients.map(c => ({
    //     ...c, fullName: c.first_name + ' ' + c.last_name,
    // })),
}

const mutations = {
    SET_CATEGORIES (state, categories) {
        state.categories = categories
    },
    SET_CATEGORY (state, category) {
        state.category = category
        },
    CLEAR_CATEGORY (state) {
      state.category = {}
    },
}

const actions = {
  async getCategories ({ commit }) {
    await api.get('api/categories')
            .then((response) => {
               commit('SET_CATEGORIES', response.data.data)
            })
            .catch((error) => {
              console.log(error)
            })
  },
  async getCategory ({ commit }, id) {
    await api.get('api/categories/' + id)
            .then((response) => {
               commit('SET_CATEGORY', response.data.data)
            })
            .catch((error) => {
              console.log(error)
            })
  },
  createCategory ({ commit }, category) {
    return new Promise((resolve, reject) => {
      api.post('api/categories', category)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateCategory ({ commit }, category) {
    return new Promise((resolve, reject) => {
      api.put('api/categories/' + category.id, category)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  deleteCategory ({ commit }, id) {
    return new Promise((resolve, reject) => {
      api.delete('api/categories/' + id)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  clearCategory ({ commit }) {
    commit('CLEAR_CATEGORY')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
