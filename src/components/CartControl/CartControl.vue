<template>
	<div class="cartcontrol">
		<!-- 当数量＜1时，'-'和数量不显示 -->
		<div class="iconfont icon-remove_circle_outline" v-if="food.count"></div>
		<div class="cart-count" v-if="food.count">{{food.count}}</div>
		<div class="iconfont icon-add_circle"></div>
	</div>
</template>
<script>
	/*
		点击'+'号，'-'号和数量出现，count是1，再次点击'+'号，只有count自增
		点击'-'号，count自减，count为1时，再点'-'号，count和'-'号隐藏
	*/
	export default{
		props:{
			food:Object
		}
	}
</script>

<style>
	.cartcontrol{
		font-size: 0;
	}
	.cartcontrol .cart-decrease{
		display: inline-block;
		padding: 6px;
		line-height: 24px;
		font-size: 24px;
		color: rgb(0,160,220);
	}
	.cartcontrol .icon-remove_circle_outline{
		display: inline-block;
		padding: 6px;
		line-height: 24px;
		font-size: 24px;
		color: green;
	}
	.cartcontrol .cart-count{
		display: inline-block;
		vertical-align: top;
		width: 12px;
		padding-top: 6px;
		line-height: 24px;
		text-align: center;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.cartcontrol .icon-add_circle{
		display: inline-block;
		padding: 6px;
		line-height: 24px;
		font-size: 24px;
		color: green;
	}
	
</style>
