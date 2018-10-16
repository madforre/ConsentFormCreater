import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'

import Template from '../components/Template.vue'

import Creater from '../components/Create/Creater'
import Tools from '../components/Create/Tools'

// Library

// Vue 애플리케이션에 라우터 플러그인 추가
Vue.use(VueRouter)

const NotFound = { template: '<div>Not Found</div>'}

// 해쉬뱅 모드를 history 모드로 변경하고 라우터 설정
const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/template', component: Template,
          children: [
            {
              path: 'creater',
              components: {
                default: Creater,
                tools: Tools,
              },
            },
          ]
        },
        { path: '*', component: NotFound },
    ]
})

export default router