
## 前置知识

https://ssr.vuejs.org/zh/

server side render

  客户端渲染
  js 动态填充
  缺点
  1. 白屏时间 spa js资源加载完毕 页面内容才能呈现出来 异步获取白屏时间会更长
  2. SEO不友好
  优点
  控制局部渲染
  1. 切页面非常流畅 通过js对显示内容进行替换
  2. 可见即可操作
  3. 服务器压力比较小

  服务端渲染 koa返回html片段
  优点
  1. 直接返回html 白屏时间短 
  2. SEO友好
  缺点
  1. 可见不一定可操作 html加载回来了 js不一定加载完毕
  2. 服务器压力比较大 因为所有请求都要通过服务端 重复资源加载

  ssr 结合了两者的优点 摒弃了缺点
  首屏直出 由服务端直接返回 seo友好
  切页面 由js控制 非常流畅 解决了服务器压力大的问题
  缺点 可见不一定可操作

  要不要使用ssr
  仅仅为了解决seo 使用预渲染就可以
  对性能有极致的要求 可以采用ssr
  配置复杂 有局限性 服务端没有dom

  
  无法使用destory钩子销毁 内存泄漏

  注水 脱水

  客户端搭建 
    vuex
    vue-router
  webpack配置
    loader
      vue-loader
      css-loader
      css 提取
    plugin
      html-webpack-plugin
    entry
    output
    devServer
      webpack 5 serve
  服务端搭建 
    koa
    router
    static 静态资源服务器
  ssr处理
    路由处理
    请求处理


## 初始化目录

├── build
├── output.txt
├── package.json
├── readme.md
└── src
   ├── client
   |  ├── App.vue
   |  ├── app.js
   |  ├── components
   |  ├── entry.client.js
   |  ├── entry.server.js
   |  ├── router
   |  ├── store
   |  └── views
   └── server
      ├── app.js
      └── router

  安装依赖 
  webpack webpack-cli vue-loader@next vue@next babel-loader @babel/core @babel/preset-env css-loader mini-css-extract-plugin webpack-merge html-webpack-plugin webpack-node-externals ignore-loader nodemon webpack-dev-server vuex@next

  @next表示安装的是3.x版本 不加默认安装2.x

  mini-css-extract-plugin 用来提取css

  编写views页面 
  编写client/App.vue
  编写client/app.js
  编写client/entry.client.js

  browerRouter 需要后端配合 请求真实地址

  服务端配置要注意
  * target指定node环境
  * 指定libraryTarget编译规则 commonjs2
  * 而且要注意一些第三方模块不需要打包进bundlejs文件 去node_modules里面找就可以了 webpack-node-externals
  * css处理 null-loader ignore-loader等 因为已经注入到html模板中了 所以不需要处理

  ```json package.json 线上用pm2 不用nodemon
    "client:server": "webpack serve --config ./build/webpack.client.dev.js",
    "client:dev": "webpack --config ./build/webpack.client.dev.js",
    "server:dev": "webpack --config ./build/webpack.server.dev.js",
    "dev:build": "yarn run client:dev && yarn run server:dev",
    "dev:server": "nodemon './src/server/app.js'"
  ```

  配置结束之后 yarn client:dev 验证一下是否能打包成功 

  报错 vue-loader requires @vue/compiler-sfc to be present in the dependency tree.

  vue-loader 需要依赖 @vue/compiler-sfc 安装 @vue/compiler-sfc
  
  又报错 vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.

  需要引入VueLoaderPlugin

  引入之后 成功打包

  执行yarn run client:server 因为使用了webpack-dev-server 如果没有安装 会自动提示安装

  安装 vue-router@next 控制路由跳转

  ```vue vue3支持不用根元素包裹
  <template>
    <div id="app-box">首页</div>
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view />
  </template>
  ```

  服务端
  koa @koa/router koa-static @vue/server-renderer axios

  * 前后端路由处理
  * 数据预获取
  * 客户端激活

  报错 Uncaught error in serverPrefetch:  ReferenceError: regeneratorRuntime is not defined
  因为使用了es7的 async/await 语法 要使用 @babel/plugin-transform-runtime 并且配置到 .babelrc

  可以看到数据变了 但是网页源代码显示的还是之前的数据 所以要把获取到的数据注入到页面上




