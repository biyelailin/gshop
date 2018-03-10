//设置路由router
  import  Vue from  'vue'
  import  VueRouter from 'vue-router'

  import Misite from '../pages/Miste/Misite.vue'
  import Order from '../pages/Order/Order.vue'
  import Profile from '../pages/Profile/Profile.vue'
  import Search from '../pages/Search/Search.vue'
  import Login from '../pages/Login/Login.vue'
  import  Shop from '../pages/Shop/Shop.vue'
  import  ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
  import  ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
  import  ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'

  Vue.use(VueRouter)
  //创建路由
   export  default new VueRouter({
     routes:[
       {
         path:'/misite',
         component:Misite,
         meta:{
           showFooter:true
         }
       },
       {
         path:'/order',
         component:Order,
         meta:{
           showFooter:true
         }
       },
       {
         path:'/profile',
         component:Profile,
         meta:{
           showFooter:true
         }
       },
       {
         path:'/search',
         component:Search,
         meta:{
           showFooter:true
         }
       },
       {
         path:'/login',
         component:Login
       },
       {
         path:'/',
         redirect:'/misite'
       },
       {
         path:'/shop',
         component:Shop,
         children:[
           {
             path:'/shop/goods',
             component:ShopGoods
           },
           {
             path:'/shop/info',
             component:ShopInfo
           },
           {
             path:'/shop/ratings',
             component:ShopRatings
           },
           {
             path:'',//代表的是shop路径
             redirect:'goods'
           },
         ]
       },
     ]
   })
