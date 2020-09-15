#1.import引入node_modules中的包为什么不用写 ../node_modules/...
#2.import导入同目录文件时为什么要加上./,否则报错
#3.main.js中的router引入为什么用小写 import router from './router'
	new Vue({
	  el: '#app',
	  router: router, //简写：router 
	  components: { App },
	  template: '<App/>'
	})
	前一个router是Vue.prototype.$router，后一个router才是上面import进来的。
	可以写成import Router from './router'，router: Router。
	这个时候key和value不一致，不能省略，就比较麻烦了。为了书写简单，上面import的时候就import router
#4.点餐评价时的小星星怎么实现
#5.computed 和 methods的区别
#6.computed是怎么做缓存处理的


### 轮播的实现
	1.确定请求回来的数据是一维还是二维数组，轮播循环显示的是一个个数组，外边再包裹一个大数组
	2.使用 Vue.nextTick(function(){}) DOM更新之后立即调用这个函数
	3.new一个swiper实例对象，实现轮播，前提是下载好swiper，并在本页面引入

### vue全家桶 
### 模块化
### 组件化
### 工程化
	


###生命周期
	mounted:页面已经渲染完成
		1.发送异步请求，进行DOM操作
	computed:在模板字符串中不建议使用过于复杂的表达式，计算属性应用而生。
			当依赖的属性值发生变化时，触发更改；没发生变化，使用缓存中的属性。
		1.读数据，并在模板中显示
		
		
		
### flex:1;弹性布局