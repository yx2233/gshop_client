<template>
	<section class="msite">
		<!--首页头部-->
		<!-- <header class="msite_header">
			<span class="header_search">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span class="header_title">
				<span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
			</span>
			<span class="header_login">
				<span class="header_login_text">登录|注册</span>
			</span>
		</header> -->
		<HeaderTop :title="address.name">
			<span class="header_search" slot="left">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span class="header_login" slot="right">
				<span class="header_login_text">登录|注册</span>
			</span>
		</HeaderTop>

		<!--首页导航-->
		<nav class="msite_nav">
			<div class="swiper-container" v-if="categorys.length">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
						<a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
							<div class="food_container">
								<img :src="baseImageUrl+category.image_url">
							</div>
							<span>{{category.title}}</span>
						</a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
			<img src="./images/msite_back.svg" alt="back" v-else>
		</nav>
		
		<!--首页附近商家-->
		<div class="msite_shop_list">
			<div class="shop_header">
				<i class="iconfont icon-xuanxiang"></i>
				<span class="shop_header_title">附近商家</span>
			</div>
			<ShopList/>
		</div>
	</section>
</template>

<script>
	import {mapState} from 'vuex'
	// swiper用的是6.0以上的版本
	import Swiper from 'swiper/swiper-bundle.js'
	import "swiper/swiper-bundle.css"
	
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import ShopList from '../../components/ShopList/ShopList.vue'
	
	export default {
		data (){
			return {
				baseImageUrl:'https://fuss10.elemecdn.com'
			}
		},
		mounted() {  // 页面已经渲染完成
			// 发送请求
			this.$store.dispatch('getCategorys')
			this.$store.dispatch('getShops')
			
			
		},
		computed:{
			// 读数据
			...mapState(['address','categorys']),
			
			/*
				根据categorys一维数组生成一个二维数组
				小数组中的元素个数最大为8
			*/
			categorysArr () {
				const {categorys} = this;
				// 准备空的二维数组
				let arr = [];  //大数组
				let minArr = [];  //小数组
			   
			   // 遍历categorys
				categorys.forEach( item => {
					// 如果小数组已经满了，新建一个
					if(minArr.length===8){
						minArr = [];
					}
					// 如果小数组为空，将小数组添加到大数组中
					if(minArr.length===0){
						arr.push(minArr)
					}
					// 将当前分类添加到小数组中
					minArr.push(item)
				})
				return arr
		   }
		},
		watch :{
			// categorys 开始是个空数组，有数据之后才显示的列表。监视categorys，
			categorys (value) {
				// Vue.nextTick(function () {})  DOM更新之后立即调用
				this.$nextTick(()=>{   //要写在数据更新之后
					// new一个swiper实例对象，实现轮播
					new Swiper('.swiper-container', {
						//循环轮播
						loop: true,
						// 如果需要分页器
						pagination: {
							el: '.swiper-pagination',
						}
					})
				})
			}
		},
		components: {
			HeaderTop,
			ShopList
		}
	}
</script>

<style>
	.msite {
		width: 100%;
	}

	.msite_nav {
		position: relative;
		margin-top: 45px;
		height: 200px;
		background: #fff;
	}

	.msite_nav::before {
		content: '';
		position: absolute;
		z-index: 200;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: #e4e4e4;
		transform: scaleY(0.5);
	}

	.msite_nav .swiper-container {
		width: 100%;
		height: 100%;
	}

	.msite_nav .swiper-container .swiper-wrapper {
		width: 100%;
		height: 100%;
	}

	.msite_nav .swiper-container .swiper-wrapper .swiper-slide {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
	}

	.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food {
		width: 25%;
	}

	.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container {
		display: block;
		width: 100%;
		text-align: center;
		padding-bottom: 10px;
		font-size: 0;
	}

	.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food .food_container img {
		display: inline-block;
		width: 50px;
		height: 50px;
	}

	.msite_nav .swiper-container .swiper-wrapper .swiper-slide .link_to_food span {
		display: block;
		width: 100%;
		text-align: center;
		font-size: 13px;
		color: #666;
	}

	.msite_nav .swiper-container .swiper-pagination>span.swiper-pagination-bullet-active {
		background: #02a774;
	}

	.msite_shop_list {
		position: relative;
		margin-top: 10px;
		background: #fff;
	}

	.msite_shop_list::before {
		content: '';
		position: absolute;
		z-index: 200;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		background-color: #e4e4e4;
	}

	.msite_shop_list .shop_header {
		padding: 10px 10px 0;
	}

	.msite_shop_list .shop_header .shop_icon {
		margin-left: 5px;
		color: #999;
	}

	.msite_shop_list .shop_header .shop_header_title {
		color: #999;
		font-size: 14px;
		line-height: 20px;
	}

	
</style>
