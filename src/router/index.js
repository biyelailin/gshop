//设置路由router
  import  Vue from  'vue'
  import  VueRouter from 'vue-router'

  import Misite from '../pages/Miste/Misite.vue'
  import Order from '../pages/Order/Order.vue'
  import Profile from '../pages/Profile/Profile.vue'
  import Search from '../pages/Search/Search.vue'

  Vue.use(VueRouter)
  //创建路由
   export  default new VueRouter({
     routes:[
       {
         path:'/misite',
         component:Misite
       },
       {
         path:'/order',
         component:Order
       },
       {
         path:'/profile',
         component:Profile
       },
       {
         path:'/search',
         component:Search
       },
       {
         path:'/',
         redirect:'/misite'
       }
     ]
   })
