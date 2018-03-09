//设置路由router
  import  Vue from  'vue'
  import  VueRouter from 'vue-router'

  import Misite from '../pages/Miste/Misite.vue'
  import Order from '../pages/Order/Order.vue'
  import Profile from '../pages/Profile/Profile.vue'
  import Search from '../pages/Search/Search.vue'
  import Login from '../pages/Login/Login.vue'

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
       }
     ]
   })
