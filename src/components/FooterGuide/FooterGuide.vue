<template>
	<div class="footer_guide">
		<span class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
			<span class="item_icon">
				<i class="iconfont icon-waimai"></i>
			</span>
			<span>外卖</span>
		</span>
		<span class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
			<span class="item_icon">
				<i class="iconfont icon-search"></i>
			</span>
			<span>搜索</span>
		</span>
		<span class="guide_item" :class="{on:'/order'===$route.path}" @click="goTo('/order')">
			<span class="item_icon">
				<i class="iconfont icon-dingdan"></i>
			</span>
			<span>订单</span>
		</span>
		<span class="guide_item" :class="{on:'/profile'===$route.path}" @click="goTo('/profile')">
			<span class="item_icon">
				<i class="iconfont icon-geren"></i>
			</span>
			<span>我的</span>
		</span>
	</div>
</template>
<script>
	export default {
		// $router 控制路由的跳转
		methods:{
			goTo (path){
				this.$router.replace(path);
			}
		}
	}
</script>

<style>
	.footer_guide {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		background-color: #fff;
		width: 100%;
		height: 50px;
		display: flex;
	}

	.footer_guide::before {
		content: '';
		width: 100%;
		height: 1px;
		background-color: #e4e4e4;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 200;
	}

	.guide_item {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		text-align: center;
		margin: 5px;
		color: #999999;
		text-decoration: none;
	}

	.on {
		color: #02a774;
	}

	.item_icon {
		font-size: 12px;
		margin-top: 2px;
		margin-bottom: 2px;
	}

	.iconfont {
		font-size: 22px;
	}
</style>
