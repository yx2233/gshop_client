<template>
	<div>
		<ShopHeader />
		<div class="tab">
			<div class="tab-item">
				<router-link to="/shop/goods" replace>点餐</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/shop/ratings" replace>评价</router-link>
			</div>
			<div class="tab-item">
				<router-link to="/shop/info" replace>商家</router-link>
			</div>
		</div>
		<!-- <keep-alive></keep-alive> 缓存路由组件  -->
		<keep-alive>
			<router-view />
		</keep-alive>
		
	</div>
</template>

<script>
	import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
	export default{
		mounted (){
			this.$store.dispatch('getShopInfo')
		},
		components:{
			ShopHeader
		}
	}
</script>

<style>
	.tab{
		height:40px;
		line-height:40px;
		background:#fff;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}
	.tab .tab-item{
		float: left;
		width:33.333%;
		text-align:center;
		font-size: 14px;
		color:rgb(77, 85, 93);
	}
	.tab .tab-item a{
		display: block;
		position: relative;
	}
	.tab .tab-item a.router-link-active{
		color:#02a774;
	}
	.tab .tab-item a.router-link-active::after{
		content: '';
		position: absolute;
		left:50%;
		bottom:1px;
		width:35px;
		height: 2px;
		background: #02a774;
		transform: translateX(-50%);
	}
</style>