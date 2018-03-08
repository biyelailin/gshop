# gshop

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

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
