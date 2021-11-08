//import api from '@/util/api'
import axios from "axios"

const state = {
  products: [],
  product: {},
}

const getters = {
    newArrivalProducts: state => state.products.filter((p) => {
      return p.new_arrival
    })
}

const mutations = {
    SET_PRODUCTS (state, products) {
    state.products = products
    },
    SET_PRODUCT (state, product) {
        state.product = product
        },
    CLEAR_PRODUCT (state) {
      state.product = {}
    },
}

const actions = {
  async getProducts ({ commit }) {
    await axios.get('api/products')
            .then((response) => {
               commit('SET_PRODUCTS', response.data.data)
            })
            .catch((error) => {
              console.log(error)
            })
  },
  getProduct ( { commit }, id) {
    return new Promise((resolve, reject) => {
      axios.get('api/products/' + id)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  createProduct ({ commit }, { formData, config }) {
    return new Promise((resolve, reject) => {
      axios.post('api/products', formData, config)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  updateProduct ({ commit },{ formData, config }) {
    //console.log('formData', formData)
    return new Promise((resolve, reject) => {
      axios.post('api/products/' + formData.get('id'), formData, config)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  deleteProduct ({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.delete('api/products/' + id)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  clearProduct ({ commit }) {
    commit('CLEAR_PRODUCT')
  },
//   async searchClients ({ commit }, searchCriteria) {
//     await api.post('search/clients', searchCriteria)
//       .then((response) => {
//         commit('SET_CLIENTS', response.data.data)
//       })
//       .catch((error) => {
//         commit('snackbars/SHOW_FLASH_MESSAGE', error, { root: true })
//       })
//   },
//   exportClients ({ commit }, searchCriteria) {
//     return new Promise((resolve, reject) => {
//       api.post('clients/export', searchCriteria)
//       .then((response) => {
//         resolve(response)
//       }).catch(function (error) {
//         reject(error)
//       })
//     })
//   },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
