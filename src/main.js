import Vue from 'vue'
import App from './App.vue'
import router from './routes'

import VueSignature from "vue-signature"

// 이벤트 버스
// Vue.prototype.$EventBus = new Vue();

Vue.use(VueSignature)

// Vue.directive('resize', VueResize)

new Vue({
  el: '#app',
  render: h => h(App),

  // 라우터 객체
  router,
  
})