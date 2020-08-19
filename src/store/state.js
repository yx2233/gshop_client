/*
状态对象
*/
// export default{
// 	// 1.确定有哪些状态需要管理 state.js
// 	// 2.接收后台返回的数据 mutation-types.js
// 	// 3.在mutations中引入所有的mutation-types, 配置方法
// 	// 4.在actions中引入mutation-types(同上)，还要引入接口函数api
	
// 	// 首页的经纬度值，即定位
// 	latitude: 40.10038 ,  //纬度
// 	longitude: 116.36867  ,//经度
	
// 	// 首页的地址信息对象
// 	address: {},
	
// 	// 首页的食品分类数组
// 	categorys:[],
	
// 	// 首页的商家数组
// 	shops:[],
	
// }


export default {
	latitude: 40.10038,  //纬度
	longitude: 116.36867,//经度
	address: {},  //地址信息
	categorys: [],  //食品分类数组
	shops: []     //商家数组
}