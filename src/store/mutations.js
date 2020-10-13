/*
直接更新state的多个方法的对象
操作state状态
*/
// 引入所有的mutation-type
	// RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS是三个方法名
import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO,
	RECEIVE_SHOP_GOODS,
	RECEIVE_SHOP_RATINGS,
	RECEIVE_SHOP_INFO,
	INCREMENT_FOOD_COUNT,
	DECREMENT_FOOD_COUNT
} from './mutation-types'

export default{
	[RECEIVE_ADDRESS] (state, {address}) {
		state.address = address
	},
	[RECEIVE_CATEGORYS] (state, {categorys}) {
		state.categorys = categorys
	},
	[RECEIVE_SHOPS] (state, {shops}) {
		state.shops = shops
	},
	[RECEIVE_USER_INFO] (state, {userInfo}) {
		state.userInfo = userInfo
	},
	[RESET_USER_INFO] (state) {
		state.userInfo = {}
	},
	[RECEIVE_SHOP_GOODS] (state, {goods}) {
		state.goods = goods
	},
	[RECEIVE_SHOP_RATINGS] (state, {ratings}) {
		state.ratings = ratings
	},
	[RECEIVE_SHOP_INFO] (state, {info}) {
		state.info = info
	},
	[INCREMENT_FOOD_COUNT](state, {food}){
		
	},
	[DECREMENT_FOOD_COUNT](state, {food}){
		
	},
	
	
}


