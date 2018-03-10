<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <span :class="{on:onLogin}" @click="showLogin(true)">短信登录</span>
          <span  :class="{on:!onLogin}" @click="showLogin(false)">密码登录</span>
        </div>
      </div>
      <div class="login_content">
        <form @submit.prevent="login">
          <div :class="{on:onLogin}">
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="手机号" v-model="phone" >
              <button  class="get_verification" :class="{on:showTel}" @click.prevent="getMsg" v-show="!showTime">获取验证码</button>
              <button disabled="disabled" class="get_verification" v-show="showTime" >{{showTime}}s</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!onLogin}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="密码" v-model="pwd" v-if="showCode">
                <input type="password" maxlength="8" placeholder="密码" v-model="pwd" v-if="!showCode">
                <div class="switch_button" :class="showCode ? 'on': 'off'"  @click="swithCircle">
                  <div class="switch_circle" :class="{Move:showCode}"></div>
                  <span class="switch_text" v-show="showCode">abc</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:3000/captcha" alt="captcha" @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span  class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </span>
    </div>
    <!--要引入提示框，在输入错误时，提示信息-->
    <!--在信息输入错的时候显示，默认的情况下是不显示的，绑定自定义事件监听，来控制提示框-->
    <!--在各种信息输入正确或者错误来判断提示框的内容，和是否出现提示框-->
    <!--在处理完提示框以后，
       1.对手机号 和短信验证码的验证
         1.要发送验证码，在一点击获取就要发送
    -->
    <!--在验证码判断后，如果获取正确，就要去提交登陆
     在form表单中绑定提交按钮
    -->
    <AlertTip v-show="alertTip" @alertTips ='alertTips' :alertText ='alertText'/>
  </div>
</template>
<script>
  /*1.输入手机号，然后按钮字体颜色变黑
    2.要判断手机号，是十一位，然后字体变黑，变化的属性是一个计算属性
  * */
  /*1.点击获取短信按钮，出现倒计时按钮
    2.所以是两个按钮的切换
    3.当手机号输入为11位可以点击，
    4.
  * */
  /*1.实现密码显示与隐藏
    2.切换按钮，同步使密码显示与隐藏
    3.
  * */
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {msmCode,phoneCode,LoginCode} from '../../api/index'
  export default {
         data(){
           return{
             onLogin:true, //手机登录的是true ，邮箱登录的是false
             phone:'',//输入的手机号
             code:'',//输入的验证码

             name:'',//用户名
             pwd:'', //密码登陆
             captcha:'',//图片验证码

             showTime : 0 ,//计时时间

             showCode :false ,//密码显示 与隐藏
             alertTip:false  ,  // 提示框默认是不显示的
             alertText:'' //初始化提示的内容
           }
         },
        components:{
          AlertTip
        },
        computed:{
             showTel(){
//             用正则表达式，判断输入的电话
               let  {phone} = this
               return /^1\d{10}$/.test(phone)
             }

        },
        methods:{
          showLogin(onLogin){
            this.onLogin = onLogin
          },
          async  getMsg(){
            let timerId
         // 1.当手机号为11位才可以点击
             let {showTel,phone} = this
             if(showTel){
                this.showTime = 60
         //  要开启循环计时器
                timerId =setInterval(()=>{
                   this.showTime--
         // 如果时间归为0，就要清除定时器，改变显示的按钮
                 if(this.showTime === 0){
                   clearInterval(timerId)
                 }

               },1000)
             }

        // 发送异步请求，获取短信验证码
             let result = await msmCode(phone)
             if(result.code === 1){
                clearInterval(timerId)
                this.alertTip = true
                this.alertText = result.msg
             }

          },
          // 自定义事件，绑定监听事件，关闭提示框
          alertTips(){
             this.alertTip =false
          },
          //登陆进行判断
         async login(){
             let result
          //有用户登录和手机登录两种
             let {code,name,captcha,pwd,phone,showTel} = this
              if(this.onLogin){//这里判断的是手机登录
                //1.要验证登陆的各输入框内容是否合法
                 if(!showTel){
                   this.alertTip =true
                   this.alertText ='请输入正确的手机号'
                   return
                 }else if(!/^\d{6}$/.test(code)){
                   this.alertTip =true
                   this.alertText ='请输入正确的验证码'
                   return
                }
              // 2.发送ajax请求,
                   result  =  await phoneCode({phone,code})

              // 3.处理登陆成功后返回页面

              }else{
                 if(!name){
                   this.alertTip =true
                   this.alertText ='请输入用户名'

                   return
                 }else if(!pwd){
                   this.alertTip =true
                   this.alertText ='请输入用户名'

                   return
                 }else if(!captcha){
                   this.alertTip =true
                   this.alertText ='请输入用户名'

                   return
                 }
                //在这里发送用户登录ajax请求
                 result = await LoginCode({name,pwd,captcha})
              }
             // 在所有的最后进行userInfo 储存到state中
                  if(result.code === 0){
              //这里发送dispatch
                     let userInfo =result.data
                    this.$store.dispatch('recordUserInfo',userInfo)
              //在调转到上一页
                     this.$router.back()

                  }else{
                    this.alertTip =true
                    this.alertText =result.msg
                  }


          },
        //切换小圆点，变化显示密码格式
          swithCircle(){
               this.showCode = !this.showCode

          },
          getCaptcha(event){
            event.target.src ='http://localhost:3000/captcha?time='+ new Date()
          }
        }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >span
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.on
                 color:#000000
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.Move
                    transform  translateX(27px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
