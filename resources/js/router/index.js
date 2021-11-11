// Imports
import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import { trailingSlash } from '../utils/helpers'
import Home from '../components/Home.vue'
import NewArrivals from '../components/NewArrivals.vue'
import Category from '../components/Category.vue'
import About from '../components/About.vue'
import Products from '../components/Products.vue'
import Product from '../components/ProductDetails.vue'
import Login from '../components/Login.vue'
import ErrorPage from '../components/Error.vue'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/NewArrivals',
      name: 'NewArrivals',
      component: NewArrivals
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products,
      meta: { requiresAuth: true }
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: Product,
     // props: true,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      component: ErrorPage
    },
    
  ],
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.requiresAuth) && !store.getters['auth/isAuthenticated']) {
//     next({ name: 'Login' })
//   } 
//   // else if (to.matched.some(m => m.meta.requiresVisitor) && store.getters['auth/isAuthenticated']) {
//   //   next({ name: 'Dashboard' })
//   // } 
//   else {
//     return to.path.endsWith('/') ? next() : next(trailingSlash(to.path))
//   }
// })

export default router
