/*
入口JS
*/
import Vue from 'vue'
import App from './App'
import router from './router/index.js'


new Vue({
  el: '#app',
  render: h => h(App),
  router
})