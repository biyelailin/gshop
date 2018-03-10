<template>
  <div class="msite">
    <HeadTop :title="address.name">
       <span class="header_search" slot="search" >
            <i class="iconfont icon-sousuo"></i>
          </span>
      <span class="header_login" slot="login">
            <span class="header_login_text">登录|注册</span>
          </span>

    </HeadTop>
      <!--首页导航-->
      <nav class="msite_nav border-1px">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!--遍历数组的最外层，得到有几页-->
            <div class="swiper-slide" v-for="(types,index) in footListArr" :key="index" >
              <a href="javascript:" class="link_to_food" v-for="(type,index) in types " :key="index">
                <div class="food_container">
                  <img :src="imgBaseUrl+type.image_url">
                </div>
                <span>{{type.title}}</span>
              </a>
             <!-- <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/2.jpg">
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/3.jpg">
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/4.jpg">
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/5.jpg">
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/6.jpg">
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/7.jpg">
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/8.jpg">
                </div>
                <span>土豪推荐</span>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/9.jpg">
                </div>
                <span>甜品饮品</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/10.jpg">
                </div>
                <span>商超便利</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/11.jpg">
                </div>
                <span>美食</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/12.jpg">
                </div>
                <span>简餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/13.jpg">
                </div>
                <span>新店特惠</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/14.jpg">
                </div>
                <span>准时达</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/1.jpg">
                </div>
                <span>预订早餐</span>
              </a>
              <a href="javascript:" class="link_to_food">
                <div class="food_container">
                  <img src="./images/nav/2.jpg">
                </div>
                <span>土豪推荐</span>
              </a>-->
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </nav>
      <!--首页附近商家-->
      <div class="msite_shop_list border-1px">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
          <ShopList/>
      </div>
    </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import HeadTop from '../../components/HeadTop/HeadTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'
  export default {
    data () {
      return {
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    computed: {
      ...mapState(['address','foottypes']),
    // 在这里一维数组变为二维数组
       footListArr(){
       //1.创建一个大数组
         let footListArrs =[]
       //2.创建一个小数组
         let footList=[]
       // 获取数据
          let {foottypes} = this
       //  3.遍历 foottypes数组，放进大数组和小数组中
         foottypes.forEach(type=>{
       // 4.先把小数组放进大数组
            if(footList.length === 0){
              footListArrs.push(footList)
            }
      // 5.在往小数组中放入foottypes的列表（type）
            if(footList.length < 8){
              footList.push(type)
            }else{
      // 6.放满后要在创建一个新的小数组
              footList = []
       //  7.把新的数组放进到大数组内部
              footListArrs.push(footList)
        //  8.在往小数组内部放type
              footList.push(type)
            }
         })
        // 9.最后返回大数组
          return footListArrs
       }

    },
    components:{
       HeadTop,
       ShopList
    },
    mounted(){
      //    一上来就要显示食品的列表
      this.$store.dispatch('getfoottypes',()=>{
        // 回调函数调用调用是在数据更新完以后
        this.$nextTick(()=>{
          let swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })

        })
      })

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
