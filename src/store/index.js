/*
vuex最核心的管理对象store
store需要4个配置
	state:状态对象
	mutation:操作state   	mutation:变化
	action:操作mutation	
	getters:具有state的计算属性
*/
// 把整体收拢过来，是一个总的js文件
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 声明使用
Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})





