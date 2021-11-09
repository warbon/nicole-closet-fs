import axios from 'axios'

const api = axios.create({
 // baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

api.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token')
  return config
})

export default api

// export default {
//   post (to, data, options) {
//     return new Promise((resolve, reject) => {
//       client.post(to, data, options)
//         .then((response) => {
//           resolve(response)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },
//   get (to, options) {
//     return new Promise((resolve, reject) => {
//       client.get(to, options)
//         .then((response) => {
//           resolve(response)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },
//   put (to, data, options) {
//     return new Promise((resolve, reject) => {
//       client.put(to, data, options)
//         .then((response) => {
//           resolve(response)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },
//   delete (to, data, options) {
//     return new Promise((resolve, reject) => {
//       client.delete(to, data, options)
//         .then((response) => {
//           resolve(response)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },
// }
