//store对象，核心数据管理对象
import Vue from 'vue'
import  Vuex  from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
Vue.use(Vuex)
//创建store
 export default new Vuex.Store({
   state,
   actions,
   mutations,
   getters
 })
