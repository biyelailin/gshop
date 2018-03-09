// 接间更新数据，给mutation更新函数commit
import {reqGeohash,reqFootTypes,reqShopList} from '../api/index'
import  { RECIEVE_ADDRESS,RECIEVE_FOOTTYPES,RECIEVE_SHOPS} from './mutation-types'

export default {

//发送异步请求获取address
    async getaddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude
  //  发送异步请求
         const result = await reqGeohash(geohash)
  // 通过commit函数更新mutation
        commit(RECIEVE_ADDRESS,{address:result.data})
  }
}
