<template>
	<div>
		<div class="shopcart">
			<div class="content">
				<div class="content-left">
					<div class="logo-wrapper">
						<div class="logo highlight">
							<i class="iconfont icon-shopping_cart highlight"></i>
						</div>
						<div class="num">1</div>
					</div>
					<div class="price highlight">￥10</div>
					<div class="desc">另需配送费￥4 元</div>
				</div>
				<div class="content-right">
					<div class="pay not-enough"> 还差￥10 元起送 </div>
				</div>
			</div>
			<div class="shopcart-list" style="display: none;">
				<div class="list-header">
					<h1 class="title">购物车</h1>
					<span class="empty">清空</span>
				</div>
				<div class="list-content">
					<ul>
						<li class="food">
							<span class="name">红枣山药糙米粥</span>
							<div class="price">
								<span>￥10</span>
							</div>
							<div class="cartcontrol-wrapper">
								<div class="cartcontrol">
									<div class="iconfont icon-remove_circle_outline"></div>
									<div class="cart-count">1</div>
									<div class="iconfont icon-add_circle"></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="list-mask" style="display: none;"></div>
	</div>
</template>

<script>
	import {mapState,mapGetters} from 'vuex'
	export default{
		computed:{
			...mapState(['cartFoods','info']),
			...mapGetters(['totalCount','totalPrice'])
		}
	}
</script>

<style>
	.shopcart {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 50;
		width: 100%;
		height: 48px;
	}

	.shopcart .content {
		display: flex;
		background-color: #141d27;
		font-size: 0;
		color: rgba(255, 255, 255, 0.4);
	}

	.shopcart .content .content-left {
		flex: 1;
	}

	.shopcart .content .content-left .logo-wrapper {
		display: inline-block;
		vertical-align: top;
		position: relative;
		top: -10px;
		margin: 0 12px;
		padding: 6px;
		width: 56px;
		height: 56px;
		box-sizing: border-box;
		border-radius: 50%;
		background: #141d27;
	}

	.shopcart .content .content-left .logo-wrapper .logo {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		text-align: center;
		background: #2b343c;
	}

	.shopcart .content .content-left .logo-wrapper .logo.highlight {
		background: green;
	}

	.shopcart .content .content-left .logo-wrapper .logo.highlight .icon-shopping_cart {
		line-height: 44px;
		font-size: 24px;
		color: #80858a;
	}

	.shopcart .content .content-left .logo-wrapper .logo.highlight .icon-shopping_cart.highlight {
		color: #fff;
	}

	.shopcart .content .content-left .logo-wrapper .num {
		position: absolute;
		top: 0;
		right: 0;
		width: 24px;
		height: 16px;
		line-height: 16px;
		text-align: center;
		border-radius: 16px;
		font-size: 9px;
		font-weight: 700;
		color: #ffffff;
		background: rgb(240, 20, 20);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
	}

	.shopcart .content .content-left .price {
		display: inline-block;
		vertical-align: top;
		margin-top: 5px;
		line-height: 24px;
		padding-right: 12px;
		box-sizing: border-box;
		font-size: 16px;
		font-weight: 700;
		color: #fff;
	}

	.shopcart .content .content-left .price.highlight {
		color: #fff;
	}

	.shopcart .content .content-left .desc {
		display: inline-block;
		vertical-align: bottom;
		margin-bottom: 15px;
		margin-left: -45px;
		font-size: 10px;
	}

	.shopcart .content .content-right {
		flex: 0 0 105px;
		width: 105px;
	}

	.shopcart .content .content-right .pay {
		height: 56px;
		line-height: 56px;
		text-align: center;
		font-size: 12px;
		font-weight: 700;
		color: #fff;
	}

	.shopcart .content .content-right .pay.not-enough {
		background: #2b333b;
	}

	.shopcart .content .content-right .pay.enough {
		background: #00b43c;
		color: #fff;
	}

	/* .ball-container .ball{
		position: fixed; 
		left: 32px ;
		bottom: 22px ;
		z-index: 200 ;
		transition: all 0.4s ;
	}
	.inner{
		width: 16px;
		height: 16px ;
		border-radius: 50% ;
		background: green ;
		transition: all 0.4s linear;
	} */
	.shopcart .shopcart-list {
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
		width: 100%;
		transform: translateY(-100%);
	}

	.shopcart-list.swipe-enter-active,
	.shopcart-list.swipe-leave-active {
		transition: transform .3s;
	}

	.shopcart-list.swipe-enter,
	.shopcart-list.swipe-leave-to {
		transform: translateY(0);
	}

	.shopcart .shopcart-list .list-header {
		height: 40px;
		line-height: 40px;
		padding: 0 18px;
		background: #f3f5f7;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}

	.shopcart .shopcart-list .list-header .title {
		float: left;
		font-size: 14px;
		color: rgb(7, 17, 27);
	}

	.shopcart .shopcart-list .list-header .empty {
		float: right;
		font-size: 12px;
		color: rgb(0, 160, 220);
	}

	.shopcart .shopcart-list .list-content {
		padding: 0 18px;
		max-height: 217px;
		overflow: hidden;
		background: #fff;
	}

	.shopcart .shopcart-list .list-content .food {
		position: relative;
		padding: 12px 0;
		box-sizing: border-box;
		/* bottom-border-1px(rgba(7, 17, 27, 0.1)) */
	}

	.shopcart .shopcart-list .list-content .food .name {
		line-height: 24px;
		font-size: 14px color rgb(7, 17, 27);
	}

	.shopcart .shopcart-list .list-content .food .price {
		position: absolute;
		right: 90px;
		bottom: 12px;
		line-height: 24px;
		font-size: 14px;
		font-weight: 700;
		color: rgb(240, 20, 20);
	}

	.shopcart .shopcart-list .list-content .food .cartcontrol-wrapper {
		position: absolute;
		right: 0;
		bottom: 6px;
	}

	.list-mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 40;
		backdrop-filter: blur(10px);
		opacity: 1;
		background: rgba(7, 17, 27, 0.6);
	}

	.list-mask.fade-enter-active,
	.list-mask.fade-leave-active {
		transition: all 0.5s;
	}

	.list-mask.fade-enter,
	.list-mask.fade-leave-to {
		opacity: 0;
		background: rgba(7, 17, 27, 0);
	}
</style>
