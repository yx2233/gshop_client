import Vue from 'vue'
// import moment from 'moment'	//内存占用太大，换成了date-fns
import format from 'date-fns/format'	//只引用里边的format，date-fns与moment差不多大小


// 自定义过滤器
Vue.filter('date-format',function(value,formatStr="YYYY-MM-DD HH:mm:ss"){
	return format(value,formatStr)
})
