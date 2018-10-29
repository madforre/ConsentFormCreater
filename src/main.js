import Vue from 'vue'
import App from './App.vue'

/* Vue Axios */
import axios from 'axios'
Vue.prototype.$http = axios

/* Vue Signature */
import VueSignature from "vue-signature"
Vue.use(VueSignature)

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMarker } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMarker)
library.add(faPaperPlane)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* Event Bus */
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
})