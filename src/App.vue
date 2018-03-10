<template>
  <div id="app">
      <router-view></router-view>

      <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
 import Footer from './components/FooterGuide/FooterGuide.vue'

export default {
   mounted(){
//  一上来就要显示地址
     this.$store.dispatch('getaddress')
//     一上来就要获取当前的用户信息
      this.$store.dispatch('getUserInfo')
   },
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative

</style>
