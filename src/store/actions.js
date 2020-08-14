/*
通过mutation间接更新state多个方法的对象
操作mutation
*/
// 引入mutation-types中的三个方法名
import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS
} from './mutation-types.js'

import {
	reqAddress,
	reqFoodCategorys,
	reqShops
} from '../api'

export default {
	// 异步获取地址
	// getAddress ()
	// 异步获取食品分类列表
	// 异步获取商家列表
}
