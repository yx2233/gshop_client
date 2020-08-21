/*
  入口js
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.devtools = true;

new Vue({
	el:'#app',
	render: h => h(App),
	router,
	store
})


