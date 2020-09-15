<template>
	<div>
		<div class="goods">
			<div class="menu-wrapper" ref="menuWrapper">
				<ul>
					<li class="menu-item current" v-for="(good,index) in goods" :key="index">
						<span class="text">
							<img class="icon" :src="good.icon" v-if="good.icon"> 
							<!-- 图片有就显示，没有就不现实 -->
							{{good.name}}
						</span>
					</li>
					<!-- <li class="menu-item">
						<span class="text">
							<img class="icon" src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">优惠
						</span>
					</li> -->
				</ul>
			</div>
			<div class="foods-wrapper" ref="foodsWrapper">
				<ul>
					<li class="food-list-hook" v-for="(good,index) in goods" :key="index">
						<h1 class="title">{{good.name}}</h1>
						<ul>
							<li class="food-item" v-for="(food,index) in good.foods">
								<div class="icon">
									<img width="57" height="57" :src="food.icon">
								</div>
								<div class="content">
									<h2 class="name">{{food.name}}</h2>
									<p class="desc">{{food.description}}</p>
									<div class="extra">
										<span class="count">月售 {{food.sellCount}} 份</span>
										<span>好评率 {{food.rating}}%</span>
									</div>
									<div class="price">
										<span class="now">￥{{food.price}}</span>
									</div>
									<div class="cartcontrol-wrapper"> CartControl </div>
								</div>
							</li>
							<!-- <li class="food-item ">
								<div class="icon">
									<img width="57" height="57" src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114">
								</div>
								<div class="content">
									<h2 class="name">红豆薏米美肤粥</h2>
									<p class="desc">甜粥</p>
									<div class="extra">
										<span class="count">月售 86 份</span>
										<span>好评率 100%</span>
									</div>
									<div class="price">
										<span class="now">￥12</span>
									</div>
									<div class="cartcontrol-wrapper"> CartControl </div>
								</div>
							</li> -->
						</ul>
					</li>
					<!-- <li class="food-list food-list-hook">
						<h1 class="title">香浓甜粥</h1>
						<ul>
							<li class="food-item ">
								<div class="icon"> <img width="57" height="57" src="http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114">
								</div>
								<div class="content">
									<h2 class="name">红枣山药粥</h2>
									<p class="desc">红枣山药糙米粥,素材包</p>
									<div class="extra">
										<span class="count">月售 17 份</span>
										<span>好评率 100%</span>
									</div>
									<div class="price">
										<span class="now">￥29</span>
										<span class="old">￥36</span>
									</div>
									<div class="cartcontrol-wrapper"> CartControl</div>
								</div>
							</li>
						</ul>
					</li> -->
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		mounted() {
			this.$store.dispatch('getShopGoods')
		},
		computed:{
			...mapState(['goods'])
		}
	}
</script>

<style>
	.goods {
		display: flex;
		position: absolute;
		top: 195px;
		bottom: 46px;
		width: 100%;
		background: #fff;
		overflow: hidden;
	}

	.goods .menu-wrapper {
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
	}

	.goods .menu-wrapper .menu-item {
		display: table;
		width: 56px;
		height: 54px;
		padding: 0 12px;
		line-height: 14px;
	}

	.goods .menu-wrapper .menu-item.current {
		position: relative;
		z-index: 10;
		margin-top: -1px;
		background-color: #fff;
		color: green;
		font-weight: 700;
	}

	.goods .menu-wrapper .menu-item.current .text {
		border: none;
	}

	.goods .menu-wrapper .menu-item .icon {
		display: inline-block;
		vertical-align: top;
		width: 12px;
		height: 12px;
		margin-right: 2px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
	}

	.goods .menu-wrapper .menu-item .text {
		display: table-cell;
		width: 56px;
		vertical-align: middle;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		font-size: 12px;
	}

	.goods .foods-wrapper {
		flex: 1;
	}

	.goods .foods-wrapper .title {
		padding-left: 14px;
		height: 26px;
		line-height: 26px;
		border-left: 2px solid #d9dde1;
		font-size: 12px;
		color: rgb(147, 153, 159);
		background-color: #f3f5f7;
	}

	.goods .foods-wrapper .food-item {
		display: flex;
		margin: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}

	.goods .foods-wrapper .food-item:last-child {
		border: none;
		margin-bottom: 0;
	}

	.goods .foods-wrapper .food-item .icon {
		flex: 0 0 57px;
		margin-right: 10px;
	}

	.goods .foods-wrapper .food-item .content {
		flex: 1;
		position: relative;
	}

	.goods .foods-wrapper .food-item .content .name {
		margin: 2px 0 8px 0;
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		color: rgb(7, 17, 27);
	}

	.goods .foods-wrapper .food-item .content .desc .goods .foods-wrapper .food-item .content .extra {
		line-height: 10px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}

	.goods .foods-wrapper .food-item .content .desc {
		line-height: 12px;
		margin-bottom: 8px;
	}

	.goods .foods-wrapper .food-item .content .extra .count {
		margin-right: 12px;
	}

	.goods .foods-wrapper .food-item .content .price {
		font-weight: 700;
		line-height: 24px;
	}

	.goods .foods-wrapper .food-item .content .price .now {
		margin-right: 8px;
		font-size: 14px;
		color: rgb(240, 20, 20);
	}
	.goods .foods-wrapper .food-item .content .price .old{
		text-decoration: line-through;
		font-size: 10px;
		color: rgb(147,153,159);
	}
	.goods .foods-wrapper .food-item .content .cartcontrol-wrapper{
		position: absolute;
		right: 0;
		bottom: 12px;
	}
</style>
