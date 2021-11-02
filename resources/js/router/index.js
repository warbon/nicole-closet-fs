// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
   
  ],
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.requiresAuth) && !store.getters['auth/isAuthenticated']) {
//     next({ name: 'Login' })
//   } else if (to.matched.some(m => m.meta.requiresVisitor) && store.getters['auth/isAuthenticated']) {
//     next({ name: 'Dashboard' })
//   } else {
//     return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
//   }
// })

export default router
