//封装请求
import ajax from './ajax'
/*根据经纬度获取位置详情
* */
export const reqGeohash =(geohash) =>ajax('/api/position/'+geohash)

/*获取食品分类列表
* */
export  const reqFootTypes = ()=>ajax('/api/index_category')
/*根据经纬度获取商铺列表
* */
export  const reqShopList =({latitude,longitude})=>ajax('/api/shops',{latitude,longitude})

/*获取一次性验证码
* */
export  const reqCaptcha = ()=>ajax('/api/captcha')

/*用户名密码登陆
* */
export const LoginCode =({name,pwd,captcha})=>ajax('/api/login_pwd',{name,pwd,captcha},'POST')

/*发送短信验证码
* */
export const msmCode =(phone)=>ajax('/api/sendcode',{phone})
//7、手机号验证码登陆
export  const  phoneCode =({phone,code})=>ajax('/api/login_sms',{phone,code},'POST')
//根据会话获取用户信息
export const userInfo = ()=>ajax('/api/userinfo')

//获取商家产品
export  const  shopGoods =()=>ajax('/goods')

//获取商家评价
export  const  shopRatings =()=>ajax('/ratings')


//获取商家信息
export  const  shopInfos =()=>ajax('/info')

