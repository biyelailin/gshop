
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

new Vue({
  el: '#app',
  render:h => h(App),
   router //路由组件具有了$route 和$router的两个属性
})
