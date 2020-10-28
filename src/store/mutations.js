/*
直接更新state的多个方法的对象
操作state状态
*/
// 引入所有的mutation-type
	// RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS是三个方法名
import Vue from 'vue'
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
	DECREMENT_FOOD_COUNT,
	CLEAR_CART,
	RECEIVE_SEARCH_SHOP
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
		if(!food.count){  
			// food.count = 1;
			/*
				对象，属性名，属性值
			*/
			Vue.set(food,'count',1);
			// 将food添加到cartFoods中
			state.cartFoods.push(food);	//更新底部的购物车
		}else{
			food.count++;
		}
	},
	[DECREMENT_FOOD_COUNT](state, {food}){
		if(food.count){
			food.count--;
			// 当数量为0时，底部的购物车也为0
			if(food.count===0){
				state.cartFoods.splice(state.cartFoods.indexOf(food),1)	//将数量移出
			}
		}
	},
	[CLEAR_CART](state){
		// 清除food中的count
		state.cartFoods.forEach( food => food.count = 0 )
		// 清楚购物车中的count
		state.cartFoods = [];
	},
	
	[RECEIVE_SEARCH_SHOP](state,{searchShops}){
		state.searchShops = searchShops;
	}
	
	
}


