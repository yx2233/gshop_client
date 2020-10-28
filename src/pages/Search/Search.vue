<template>
	<section class="search">
		<HeaderTop title="搜索"></HeaderTop>
		<form class="search_form" @click.prevent="search">
			<input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
			<input type="submit" class="search_submit">
		</form>
		<section class="list" v-if="searchShops.length">
			<ul class="list_container">
				<router-link :to="{path:'/shop',query:{id:item.id}}" tag="li" class="list_li" v-for="(item, index) in searchShops"
				 :key="index">
					<section class="item_left">
						<img :src="imgBaseUrl + item.image_path" class="restaurant_img">
					</section>
					<section class="item_right">
						<div class="item_right_text">
							<p>
								<span>{{item.name}}</span>
							</p>
							<p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
							<p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离 {{item.distance}}</p>
						</div>
					</section>
				</router-link>
			</ul>
		</section>
		<div class="search_none" v-if="emptyResult">很抱歉！无搜索结果</div>
	</section>
</template>

<script>
	import {
		mapState
	} from "vuex"
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	export default {
		data() {
			return {
				keyword: '',
				imgBaseUrl: 'http://cangdu.org:8001/img/',
				emptyResult:false
			}
		},
		methods: {
			search() {
				const keyword = this.keyword.trim(); //.trim() 去掉首尾空字符
				if (keyword) {
					this.emptyResult =false;	//有数据，就让提示隐藏起来
					this.$store.dispatch('searchShops', keyword)
				}
			}
		},
		computed: {
			...mapState(["searchShops"])
		},
		watch:{
			searchShops(val){
				// 如果搜索没有数据，就让提示显示出来
				if(!val.length){
					this.emptyResult = true
				}
			}
		},
		components: {
			HeaderTop
		}
	}
</script>

<style>
	.search {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.search .search_form {
		*zoom: 1;
		margin-top: 45px;
		background-color: #fff;
		padding: 12px 8px;
	}

	.search .search_form::after {
		content: '';
		display: block;
		clear: both;
	}

	.search .search_form input {
		height: 35px;
		padding: 0 4px;
		border-radius: 2px;
		font-weight: bold;
		outline: none;
	}

	.search .search_form .search_input {
		float: left;
		width: 79%;
		border: 4px solid #f2f2f2;
		font-size: 14px;
		color: #333;
		background-color: #f2f2f2;
	}

	.search .search_form .search_submit {
		float: right;
		width: 18%;
		border: 4px solid #02a774;
		font-size: 16px;
		color: #fff;
		background-color: #02a774;
	}

	.search .list .list_container {
		background-color: #fff;
	}

	.search .list .list_container .list_li {
		display: flex;
		justify-content: center;
		padding: 10px;
		border-bottom: 1px solid $bc;
	}

	.search .list .list_container .list_li .item_left {
		margin-right: 10px;
	}

	.search .list .list_container .list_li .item_left .restaurant_img {
		width: 50px;
		height: 50px;
		display: block;
	}

	.search .list .list_container .list_li .item_right {
		font-size: 12px;
		flex: 1;
	}

	.search .list .list_container .list_li .item_right .item_right_text p {
		line-height: 12px;
		margin-bottom: 6px;
	}

	.search .list .list_container .list_li .item_right .item_right_text p:last-child {
		margin-bottom: 0;
	}

	.search_none {
		margin: 0 auto;
		color: #333;
		background-color: #fff;
		text-align: center;
		margin-top: 0.125rem;
	}
</style>
