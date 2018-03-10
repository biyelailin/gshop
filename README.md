
#笔记
  #1.要知道项目需求
  #2.创建文件结构
    api : ajax模块 ，与后台交互模块文件
    common：通用文件入stylus less font img
    components:一般的组件
    router：路由文件夹
     index.js : 是配置路由
        引入vue-router 在通过vue.use(router)
        在new router（{
         routes：[{path: component:},{},{}
         ]
        }）
     在main.js中引入router，注册路由
     App.vue : 是主页面 用来引入路由标签和组件
     filter ：自定义过滤器文件夹
     mock :模拟数据接口文件夹
     pages:放置路由组件
     store :是放置vuex的文件夹
  #3.流程
      拆分组件
      实现静态页面
      初始化数据显示
      数据实现交互
  #4.切换路由组件
     1.通过<route-link  to='path'> 在要点击的标签上设置路由的连接
     2.编程实现路由切换， 在注册路由以后，组件具备了属性$route 和$router的属性
       可以通过$router.push(path) $rputer.replace(path)
     3.组件的$route{}中的$route.path 可以获得当前路径的参数 就是变化的url部分
     4.记住路由的路径前不加点 和path的值也不加点
  #5.小图标的是在阿里矢量图库找的
      1.把要用的图标添加到图标库，然后在复制生成的连接，生成的是css  连接要用<link>标签引入
        值的是通过class属性来控制
  #6 静态页面实现
      1.组件的抽取：图片路径，就近原则，把使用的图片放在自己组件images中，更改组件的路径
      2.用stylus 要引入stylus的文件
      3.相同的样式要命名相同便于抽取
      4.swiper是第三方的库，用途是轮播的使用， 要在模板编译完后，要进行加载
        使用方法是下载npm i swiper --save 后引入的是构造函数Swiper ，创建对象，在配置
        要注意选择器的命名要是swiper提供的名字，在引入swiper的css样式
  #7 在router路由中，自动跳转时path‘/’ redirect "/要跳转的路径"
  #8 在每一个style样式表中，加入scoped,这样不影响其他的页面的样式
  #9 slot 传递共同的部分
     共同的代码块抽取出来做一个组件，用<slot>标签抽离,name 命名书写名字，
     通过slot = name的名称来传递给别的组件，每一个组件都有的地方不进行slot标签传递
  ###  10. 组件是否在路由组件显示，在配置路由时，配置meta：{} 中，属性名：true 或者false ，
      在对应是否要显示的组件上 绑定执行v-show=‘$route.meta.属性名’
      所以在路由上的配置属性都是添加到$route上
  ###  11.静态页面登录页面如果有两种登录形式：手机登录 邮箱登录，写在一个页面上，
       用class=‘on'的css代码来控制，可以实现单页面局部切换，例如本项目的登录页面的静态页面的设计
  ### 12.stylus样式是一层层的，所以不要样式跨层，就不会显示了
  ### 13.箭头返回上一级 直接用$router.back()
  ### 14. 有正反两面的话，用数据存储数据，确定一个方向为true ，然后用事件进行更改方向，更改数据内的方向
          实现切换
  ### 15.封装axios，发送ajax请求的思路
       ### axios 请求，如果是get方式，直接传路径 ，post方式：路径，对象（是post的请求体），发送的方式
           ### 1.是暴露封装的函数，参数是url data对象 还有默认的请求方式为get
               2.判断类型，然后在进行对对象的遍历，拼接到url上，通过Object.key(data)
                在通过字符串拼接起来，传给url
               3.如果不是get请求的话，在通过axios（url，{data}）
               4.返回的是promise对象，然后通过axios.then 返回的是正确的信息 axios.catch() 返回的是错误的信息
               5.最终返回的还是promise对象
               6.在调用的时候也是.then 的方式，返回的直接是result=response.data
               7.anscy await是用同步的形式，调用异步的函数
  ### 16. $route.params 参数 在url上的变化的参数，
  ### 17  通过获取{mapState} from vuex
          在当前组件上获取属性通过computed：{...mapState(['传递state的属性名']) }
  ### 18   一维数组变为二维数组
          一维数组在不改变数据的情况下，变为二维数组，要先创建一个大数组，然后在创建小数组，
          在遍历原有数组时，先让小数组放入到大数组内部，然后在在小数组中放置遍历的个数，
          用小数组的长度进行限制，当满的时候在创建新的小数组，在放到大数组内部，在给小数组添加
          个数，等个数满员时，在进行小数组长度的判断，循环这样就会变成二维数组
 ### 19  两个数组或者对象当引用一个地址时，
          其中一个数组或者对象引用地址改变，不会影响另一个数组或者对象
 ### 20 回调函数监听使用
           当某个行为执行完后，要执行回调，被告知以后，在回调中执行某些行为，这个是以回调做到了监听的功能
 ### 21 在vue中做监听的方式为：
         watch：{ 监视的名字 } 如果更改，传的参数是vaule值，对对应的属性更新
        # watch: {
               foodTypes () {// 状态发生了改变, 界面还没有变化
                 this.$nextTick(() => { // 当前这次状态改变的界面更新一完成就调用
                   var swiper = new Swiper('.swiper-container', {
                     loop: true,
                     pagination: {
                       el: '.swiper-pagination'
                     }
                   })
                 })
               }
             }

 ### 通过数字转化为css样式，
 处理的思路是创建数组把次数变成css样式的属性，放入到数组中，在在标签中添加，通过遍历得到属性
 ### 计算属性可以通过函数来设置 aaa(){ return xxx}
 ###|| && 两边表达式判断结果
    表达式1 || 表达式2   如果表达式1 为true 直接返回 ，如果为false 看表达式二 为true返回true 为false 返回false
    表达式1 && 表达式2   如果表达式1 位true ，在看表达式2 ，如果为false，返回false ，为true返回true
                         如果表达式1 为 false，直接返回false
 ### 手机登录页面的原理
     在login.vue 中，有两种登录方式，先通过初始化显示，进入判断登录方式，知道登录的方式用if..else  方式为登录方式
     分好类，然后在每一中登录条件中，先验证输入的内容是否合法，在通过异步请求，存储到数据库，在返回用户的信息
     在另一种条件中，先进行内容是否合法，在发送异步请求，存储到数据库，在返回用户信息，在通过整合返回给vuex的管理
     状态中，
 ### 对多种 类名的管理
      多种类名放置到数组中，在通过遍历来获取响应要显示的类名来控制样式
 ### mock 模拟数据，并拦截ajax请求
     使用：先安装mockjs ，在通过导入数据，在mock.mock() 参数是url 和返回的数据
     url路径相对于服务器路由的路径，在请求中，要对应路径，返回数据是模板的数据
 ### vue中animation标签的用法

### 在vue中，<transition>标签的用法
    <transition name ='xxx'> <div></div> <transition>
   包裹目标标签，给transition 标签命名name ，用于css的操作样式名
    fade-enter-active,fade-leave-active
            transition opacity 1s
      fade-enter,fade-leave-to
            opacity 0
      fade-enter-active，fade-leave-action ： 表示是进入过程和离开的过程
             所以设置标签 transition 的样式
       fade-enter,fade-leave-to : 表示的是刚进入和刚离开的样式


 ### 在获得state中的数据是：如果是链式的调用 a.b.c.xxx 要在标签上加上v-if,来判断最外层的样式是否获得
     否则会报错


