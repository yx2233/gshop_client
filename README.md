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

开发项目的准备工作
1. npm install -g vue-cli
2. vue init webpack gshop
3. cd gshop
4. npm run dev 编译，打包，运行项目
	4.1 在config->index.js中修改autoOpenBrowser:true  自动在浏览器中打开
5. npm run build 打包发布项目(编写代码完成之后)，会生成一个dist文件夹

项目表述：
	1）此项目为外卖Web App(SPA)
	2）包括商家，商品，购物车，用户等多个子模块
	3）使用vue全家桶+ES6+Webpack等前端最新最热技术
	4）采用模块化，组件化，工程化的模块开发

项目源码目录设计
	src
		api 与后台交互模块文件夹
		common 通用资源文件夹 fonts/img/stylus
		components 非路由组件文件夹
		filters 自定义过滤器模块文件夹
		mock 模拟数据接口文件夹
		pages 路由组件文件夹
		store vuex相关模块文件夹
		App.vue 根组件
		main.js 入口文件

安装stylus依赖包
	npm install stylus stylus-loader --save-dev
	解释：	stylus 将stylus转为css
			stylus-loader 让webpack理解stylus

在index.html中引入移动端开发的几个文件
1.<!-- 移动端视口设置 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,maxinum-scale=1.0,mininum-scale=1.0,user-scalable=no">
2.<!-- 移动端浏览器样式重置 -->
<link rel="stylesheet" href="./static/css/reset.css">	
3.<!-- 阿里矢量图标库 -->
<link rel="stylesheet" href="http://at.alicdn.com/t/font_1971447_11js0l4vu58.css">
4.<!-- 解决点击响应0.3s的延迟 -->
<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
<script>
  if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
	  FastClick.attach(document.body);
	}, false);
  }
  if(!window.Promise) {
	document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
  }
</script>

<footerGuide>底部导航栏的实现
1.通过编程式导航实现路由的切换显示
2.通过动态class和$route.path来实现tab样式的改变
3.通过阿里图标库，显示导航图标





