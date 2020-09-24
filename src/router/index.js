import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/pages/home/Home.vue')
const Search = () => import('@/pages/search/Search.vue')
const Order = () => import('@/pages/order/Order.vue')
const Profile = () => import('@/pages/profile/Profile.vue')
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component:Order
    },
    {
      path: '/profile',
      component: Profile
    },
    
  ],
  // mode: 'history',
})

