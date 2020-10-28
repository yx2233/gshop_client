/*
  入口js
*/
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'

import './mock/mockServer'
import loading from "./common/imgs/loading.gif"
import './filters'	//加载过滤器

Vue.config.devtools = true;
// 注册全局组件
Vue.component(Button.name, Button)
Vue.use(VueLazyload, {
	loading
})

new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store
})
