// 直接更新state
import  { RECIEVE_ADDRESS,RECIEVE_FOOTTYPES,RECIEVE_SHOPS,RECIEVE_USER_INFO,SHOP_INFO,SHOP_GOODS,SHOP_RATINGS} from './mutation-types'
export default {
   [RECIEVE_ADDRESS](state,{address}){
       state.address = address
   },
   [RECIEVE_FOOTTYPES](state,{foottypes}){
        state.foottypes = foottypes
   },
  [RECIEVE_SHOPS](state,{shopslist}){
      state.shopslist = shopslist
  },
  [RECIEVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },
  [SHOP_INFO](state,{ShopInfo}){
      state.shopInfo = ShopInfo
  },
  [SHOP_GOODS](state,{ShopGoods}){
    state.shopGoods= ShopGoods
  },
  [SHOP_RATINGS](state,{shopRatings}){
    state.shopRatings= shopRatings
  },





}
