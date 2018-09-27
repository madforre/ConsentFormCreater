import Vue from 'vue'
import App from './App.vue'
import router from './routes'

new Vue({
  el: '#app',
  render: h => h(App),

  // 라우터 객체
  router
})