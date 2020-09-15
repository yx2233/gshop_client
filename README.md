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
1. npm install -g @vue/cli
2. vue init webpack gshop
3. cd gshop
4. npm run dev 编译，打包，运行项目
	4.1 在config->index.js中修改autoOpenBrowser:true  自动在浏览器中打开
5. npm run build 打包发布项目(编写代码完成之后)，会生成一个dist文件夹

项目表述：
	1）此项目为外卖Web App(SPA)  
	2）包括商家，商品，购物车，用户等多个子模块(功能)
	3）使用vue全家桶+ES6+Webpack等前端最新最热技术(技术)
	4）采用模块化，组件化，工程化的模块开发(开发模式)

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
<!-- 
安装stylus依赖包
	npm install stylus stylus-loader --save-dev
	解释：	stylus 将stylus转为css
			stylus-loader 让webpack理解stylus -->

在index.html中引入移动端开发的几个文件
1.<!-- 移动端视口设置 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
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

#回退到上一个界面
	@click="$router.back()"   
#决定要不要显示底部导航条
	v-show="$route.mata" 
	{
		path:'/order',
		component:Order,
		mata:{
			showFooter:true
		}
	},

### 封装ajax请求  ai ke siou si(axios)
	下载axios  npm install --save axios

### 1.异步显示数据
	所有从后台获取的数据都要用vuex管理  
	下载vuex  npm install -S vuex
	配置vuex最核心的管理对象store(state,mutation,action,getter,mutation-types)
	个人感觉：
	state：更像是在初始化数据，确定数据是数组，对象还是字符串型的
	mutation-types:接收数据，赋值
	
	商品列表:
		请求回来的数据是一维数组，要做到分页循环显示，就要构造出二维数组
		一维数组的元素个数最大为8，pageSize=8
		
	Vue.nextTick(function () {})  DOM更新之后立即调用
	
	轮播的实现：
		1.根据一维数组生成二维数组
		2.延迟到更新界面之后执行
	
	页面骨架的实现： 增强用户体验感
		1.使用v-if判断返回的数据长度，存在的话显示正常的页面数据
		2.<img src="./images/shop_back.svg" alt="" v-else> 否则的话，显示页面的骨架图片
		3.可参考shopList.vue的写法
	
### 2.登录/注册
	1）登录界面相关效果
		切换登录方式
				两种登录方式的切换，字体颜色和内容，点击时切换(布尔值，绑定class属性，@click)
		手机号合法检查   
				当输入框输入正确的手机号，验证码字体颜色由灰色变为黑色（正则表达式，绑定class属性，v-model双向绑定）
				  
		倒计时效果(验证码发送倒计时)
		切换显示或隐藏密码
				显示密码用type='text'，隐藏密码用type='password'
				v-if='showPwd'，v-else 实现两者的切换   showPwd:false 默认不显示密码
				v-model='pwd' 同时绑定 type='text',type='password'
				在按钮上绑定 @click='showPwd = !showPwd' 实现隐藏或显示的切换
		前台验证提示
	2）前后台交互功能
		动态一次性图形验证码
		动态一次性短信验证码     容联·云通讯
		短信登录
		密码登录
		获取用户信息，实现自动登录
		退出登录
		
dispatch() 异步获取数据到xuex的state中
mapState() 从xuex的state中读数据
显示数据