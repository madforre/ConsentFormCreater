import Vue from 'vue'
import App from './App.vue'

/* Vue Signature */
import VueSignature from "vue-signature"
Vue.use(VueSignature)

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMarker, faBus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faMarker)
library.add(faTrashAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* Event Bus */
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App),
})