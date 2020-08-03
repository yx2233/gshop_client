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






