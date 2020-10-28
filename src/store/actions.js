/*
通过mutation间接更新state多个方法的对象
操作mutation
*/ 
// 引入mutation-types中的三个方法名
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
	RECEIVE_SEARCH_SHOP,
} from './mutation-types'

import {
	reqAddress,
	reqFoodCategorys,
	reqShops,
	reqUserInfo,
	reqLogout,
	reqShopGoods,
	reqShopRatings,
	reqShopInfo,
	reqSearchShop,
} from '../api'

export default {
	// 异步获取地址
	async getAddress ({commit,state}){
		// 发送ajax请求
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqAddress(geohash)
		// 提交一个mutation
		if(result.code===0){
			const address = result.data
			commit(RECEIVE_ADDRESS,{address})
		}
	},
	
	// 异步获取食品分类列表
	async getCategorys ({commit}) {
		// 发送ajax请求
		const result = await reqFoodCategorys()
		// 提交一个mutation
		if(result.code===0){
			const categorys = result.data
			commit(RECEIVE_CATEGORYS,{categorys})
		}
	},
	
	
	// 异步获取商家列表
	async getShops ({commit,state}){
		// 发送ajax请求
		const {longitude,latitude} = state
		const result = await reqShops(longitude,latitude)
		// 提交一个mutation
		if(result.code===0){
			const shops = result.data
			commit(RECEIVE_SHOPS,{shops})
		}
	},
	
	// 同步记录用户信息(已经发送登录请求获取到用户信息)
	recordUser ({commit},userInfo) {  
		commit(RECEIVE_USER_INFO,{userInfo})
	},
	
	// 异步获取用户信息
	async getUserInfo ({commit}){
		const result = await reqUserInfo()
		if(result.code===0){
			const userInfo = result.data
			commit(RECEIVE_USER_INFO,{userInfo});
		}
	},
	
	// 退出登录(重置用户信息)
	async logout ({commit}){
		const result = await reqLogout()
		if(result.code===0){
			commit(RESET_USER_INFO);
		}
	},
	
	// 异步获取商家商品列表(点餐)
	async getShopGoods({commit},callback){
		const result = await reqShopGoods()
		if(result.code ===0){
			const goods = result.data
			commit(RECEIVE_SHOP_GOODS,{goods})
			callback && callback()
		}
	},
	
	// 异步获取商品评价列表
	async getShopRatings({commit},callback){
		const result = await reqShopRatings()
		if(result.code ===0){
			const ratings = result.data
			commit(RECEIVE_SHOP_RATINGS,{ratings})
			callback && callback()
		}
	},
	
	// 异步获取商家信息
	async getShopInfo({commit}){
		const result = await reqShopInfo()
		if(result.code===0){
			const info = result.data
			commit(RECEIVE_SHOP_INFO,{info});
		}
	},
	
	// 同步更新food中的count值
	updateFoodCount({commit},{isAdd,food}){
		if(isAdd){
			commit(INCREMENT_FOOD_COUNT,{food})
		}else{
			commit(DECREMENT_FOOD_COUNT,{food})
		}
	},
	
	// 同步清除购物车
	clearCart({commit}){
		commit(CLEAR_CART)
	},
	
	// 异步获取搜索到的商家列表
	async searchShops ({commit,state},keyword){
		// 发送ajax请求
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqSearchShop(geohash,keyword)
		// 提交一个mutation
		if(result.code===0){
			const searchShops = result.data
			commit(RECEIVE_SEARCH_SHOP,{searchShops})
		}
	},
	

}
