
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
//mock的引用形式,引用一次全局使用
 import  './mock/MockServer'

new Vue({
  el: '#app',
  render:h => h(App),
   router,//每个组件具有了$route 和$router的两个属性
   store //每个组件都具有了$store属性
})
