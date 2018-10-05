import Vue from 'vue'
import App from './App.vue'

/* Vue Router */
import router from './routes'

/* Vue Signature */
import VueSignature from "vue-signature"

Vue.use(VueSignature)

/* Vue Resize */
import 'vue-resize/dist/vue-resize.css'
import VueResize from 'vue-resize'

Vue.use(VueResize)


// 이벤트 버스
// Vue.prototype.$EventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),

  // 라우터 객체
  router,
  
})