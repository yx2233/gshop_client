/*
	使用mockjs提供数据接口
*/
import Mock from 'mockjs'
import data from './data.json'

// 提供goods接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 提供ratings接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 提供info接口
Mock.mock('/info', {code: 0, data: data.info})

// 不需要向外暴露任何数据，保存即可执行