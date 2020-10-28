/*
	mutation和action交互的常量模块
	包含n个mutation的type名称常量
*/
export const RECEIVE_ADDRESS = 'receive_address'   //接收地址
export const RECEIVE_CATEGORYS = 'receive_categorys'   //接收食品分类数组
export const RECEIVE_SHOPS = 'receive_shops'   //接收商家数组
export const RECEIVE_USER_INFO = 'receive_user_info'  //接收用户信息
export const RESET_USER_INFO = 'reset_user_info'   //重置用户信息

export const RECEIVE_SHOP_GOODS = 'receive_shop_goods'  //接收商家数组(点餐)
export const RECEIVE_SHOP_RATINGS = 'receive_shop_ratings'  //接收用户信息
export const RECEIVE_SHOP_INFO = 'receive_shop_info'  //接收用户信息

export const INCREMENT_FOOD_COUNT = 'increment_food_count'  //接收用户信息
export const DECREMENT_FOOD_COUNT = 'decrement_food_count'  //接收用户信息

export const CLEAR_CART = 'clear_cart'  //清空购物车

export const RECEIVE_SEARCH_SHOP = 'receive_search_shop'  //接收搜索到的商家列表