/*
	ajax请求函数模块
*/
import axios from 'axios'
export default function ajax(url, data={}, type='GET'){
	return new Promise(function (resolve, reject){
		// 执行异步ajax请求
		let promise
		if( type === 'GET'){
			// 准备url，请求参数数据
			let dataStr = ''
			Object.keys(data).forEach(key =>{
				dataStr += key + '=' + data[key] + '&'
			})
			if(dataStr !== ''){
				url = url + '?' + dataStr
			}
			promise = axios.get(url)
		}else{
			promise = axios.post(url, data)
		}
		promise.then( response =>{
			// 成功调用resolve()
			resolve(response.data)
		}).catch( error =>{
			// 失败调用reject()
			reject(error)
		})
	})

}



