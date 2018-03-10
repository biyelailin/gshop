// 接间更新数据，给mutation更新函数commit
import {reqGeohash,reqFootTypes,reqShopList,phoneCode,shopInfos,shopGoods,shopRatings,userInfo} from '../api/index'
import  { RECIEVE_ADDRESS,RECIEVE_FOOTTYPES,RECIEVE_SHOPS,RECIEVE_USER_INFO,SHOP_INFO,SHOP_GOODS,SHOP_RATINGS} from './mutation-types'

export default {

//发送异步请求获取address
    async getaddress({commit,state}){
    const geohash = state.latitude + ',' + state.longitude
  //  发送异步请求
         const result = await reqGeohash(geohash)
  // 通过commit函数更新mutation
        commit(RECIEVE_ADDRESS,{address:result.data})
  },

// 发送异步请求获取食物列表
    async  getfoottypes({commit},callback){
     // 发送异步请求
        const result = await reqFootTypes()
     // 提交给mutations,要以对象的形式进行数据传输
         commit(RECIEVE_FOOTTYPES,{foottypes:result.data})
     // 在数据更新完后，通知
       callback && callback()
     },
//  发送异步请求获取商铺列表
      async getshoplist({commit,state}){
       // 得到经度和纬度
         let {latitude,longitude} = state
       //发送异步请求
          let result = await reqShopList({latitude,longitude} )
       // 返回的传递给mutations
         commit(RECIEVE_SHOPS,{shopslist:result.data})
       },
//  储存用户信息
      recordUserInfo({commit},userInfo){
        commit(RECIEVE_USER_INFO,{userInfo})
  },
//  获取当前用户登录信息
     async getUserInfo({commit}){
        let result = await userInfo()
         // let  userInfo = result.data
        console.log(userInfo.data)
        commit(RECIEVE_USER_INFO,{userInfo:result.data})

    },
//  获取商家商品信息
      async receiveShopInfo({commit}){
      // 发送异步请求
         let result  = await shopInfos()
           if(result.code === 0){
             let  ShopInfo  = result.data
             console.log(ShopInfo)
             commit(SHOP_INFO,{ShopInfo})
           }

      },
  //  获取商家商品
  async receiveShopGoods({commit}){
    // 发送异步请求
    let result  = await shopGoods()
    if(result.code === 0){
      let  ShopGoods  = result.data
      commit(SHOP_GOODS,{ShopGoods})
    }

  },
//  获取商店评价
  async receiveShopRatings({commit}){
    // 发送异步请求
    let result  = await shopRatings()
    if(result.code === 0){
      let  shopRatings  = result.data
      commit(SHOP_RATINGS,{shopRatings})
    }

  },

}
