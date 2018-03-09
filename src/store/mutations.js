// 直接更新state
import  { RECIEVE_ADDRESS,RECIEVE_FOOTTYPES,RECIEVE_SHOPS} from './mutation-types'
export default {
   [RECIEVE_ADDRESS](state,{address}){
       state.address = address
   }
}
