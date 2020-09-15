<template>
	<div class="shop-header">
		<!-- 左箭头 返回 -->
		<nav class="shop-nav" :style="{backgroundImage:`url(${info.bgImg})`}">
			<a class="back" @click="$router.back()">
				<i class="iconfont icon-arrow_left"></i>
			</a>
		</nav>

		<!-- 品牌，店名，月售 -->
		<div class="shop-content" @click="toggleshopShow">
			<img class="content-image" :src="info.avatar">
			<div class="header-content">
				<h2 class="content-title">
					<span class="content-tag">
						<span class="mini-tag">品牌</span>
					</span>
					<span class="content-name">{{info.name}}</span>
					<i class="content-icon"></i>
				</h2>
				<div class="shop-message">
					<span class="shop-message-detail">{{info.score}}</span>
					<span class="shop-message-detail">月售 {{info.sellCount}} 单</span>
					<span class="shop-message-detail"> {{info.description}} <span>约 {{info.deliveryTime}} 分钟</span> </span>
					<span class="shop-message-detail">距离 {{info.distance}}</span>
				</div>
			</div>
		</div>

		<!-- 首单，优惠活动 -->
		<div class="shop-header-discounts" v-if="info.supports" @click="togglesupportShow">
			<div class="discounts-left">
				<div class="activity" :class="supportsClasses[info.supports[0].type]">
					<span class="content-tag">
						<span class="mini-tag">{{info.supports[0].name}}</span> </span>
					<span class="activity-content ellipsis">{{info.supports[0].content}}</span>
				</div>
			</div>
			<div class="discounts-right"> {{info.supports.length}} 个优惠 </div>
		</div>

		<!-- 点击店名的弹窗 -->
		<!-- <animation name="fade"> -->
			<div class="shop-brief-modal" v-show="shopShow">
				<div class="brief-modal-content">
					<h2 class="content-title">
						<span class="content-tag">
							<span class="mini-tag">品牌</span> </span>
						<span class="content-name">{{info.name}}</span>
					</h2>
					<ul class="brief-modal-msg">
						<li>
							<h3>{{info.score}}</h3>
							<p>评分</p>
						</li>
						<li>
							<h3>{{info.sellCount}} 单</h3>
							<p>月售</p>
						</li>
						<li>
							<h3>{{info.description}}</h3>
							<p>约 {{info.deliveryTime}} 分钟</p>
						</li>
						<li>
							<h3>{{info.deliveryPrice}} 元</h3>
							<p>配送费用</p>
						</li>
						<li>
							<h3>{{info.distance}}</h3>
							<p>距离</p>
						</li>
					</ul>
					<h3 class="brief-modal-title"><span>公告</span></h3>
					<div class="brief-modal-notice"> {{info.bulletin}}</div>
					<div class="mask-footer" @click="toggleshopShow">
						<span class="iconfont icon-close"></span>
					</div>
				</div>
				<div class="brief-modal-cover"></div>
			</div>
		<!-- </animation> -->
		

		<!-- 点击优惠活动的弹窗 -->
		<div class="activity-sheet" v-show="supportShow">
			<div class="activity-sheet-content">
				<h2 class="activity-sheet-title">优惠活动</h2>
				<ul class="list">
					<li class="activity-item activity-green">
						<span class="content-tag">
							<span class="mini-tag">首单</span>
						</span>
						<span class="activity-content">新用户下单立减 17 元(不与其它活动同享)</span>
					</li>
					<li class="activity-item activity-red">
						<span class="content-tag">
							<span class="mini-tag">满减</span>
						</span>
						<span class="activity-content">满 35 减 19，满 65 减 35</span>
					</li>
					<li class="activity-item activity-orange">
						<span class="content-tag">
							<span class="mini-tag">特价</span> </span>
						<span class="activity-content">【立减 19.5 元】欢乐小食餐</span>
					</li>
					<li class="activity-item activity-green">
						<span class="content-tag">
							<span class="mini-tag">首单</span> </span>
						<span class="activity-content">新用户下单立减 17 元(不与其它活动同享)</span>
					</li>
					<li class="activity-item activity-red">
						<span class="content-tag">
							<span class="mini-tag">满减</span> </span> <span class="activity-content">满 35 减 19，满 65 减 35</span>
					</li>
					<li class="activity-item activity-orange"> <span class="content-tag"> <span class="mini-tag">特价</span> </span>
						<span class="activity-content">【立减 19.5 元】欢乐小食餐</span>
					</li>
				</ul>
				<div class="activity-sheet-close" @click="togglesupportShow">
					<span class="iconfont icon-close"></span>
				</div>
			</div>
			<div class="activity-sheet-cover"></div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				supportsClasses: ['activity-green', 'activity-red', 'activity-orange'],
				shopShow: false,
				supportShow: false,
			}
		},
		methods: {
			toggleshopShow() {
				this.shopShow = !this.shopShow
			},
			togglesupportShow() {
				this.supportShow = !this.supportShow
			}
		},
		computed: {
			...mapState(['info'])
		}
	}
</script>

<style>
	.shop-header {
		height: 100%;
		overflow: hidden;
		position: relative;
		background: #fff;
	}

	.shop-header .shop-nav {
		height: 40px;
		padding: 5px 10px;
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.shop-header .shop-nav::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(119, 103, 137, .43);
	}

	.shop-header .shop-nav .back {
		position: absolute;
		top: 10px;
		left: 0;
	}

	.shop-header .shop-nav .back .icon-arrow_left {
		display: block;
		padding: 5px;
		color: #fff;
		font-size: 20px;
	}

	.shop-header .shop-content {
		padding: 30px 20px 5px 20px;
		position: relative;
		text-align: center;
		display: flex;
		background: #fff;
	}

	.shop-header .shop-content .content-image {
		width: 66px;
		height: 66px;
		border-radius: 2px;
		box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, .2);
		position: absolute;
		top: 0;
		left: 50%;
		margin-top: -40px;
		margin-left: -33px;
	}

	.shop-header .shop-content .header-content {
		flex: 1;
		width: 72%;
	}

	.shop-header .shop-content .header-content .content-title {
		color: #333;
		font-size: 20px;
		font-weight: 700;
		white-space: nowrap;

		display: flex;
		justify-content: center;
		align-items: center;

		position: relative;
		line-height: 24px;
	}

	.shop-header .shop-content .header-content .content-title .content-tag {
		width: 36px;
		height: 18px;
		border-radius: 2px;
		background-image: linear-gradient(90deg, #fff100, #ffe339);

		color: #6a3709;
		font-style: normal;
		font-weight: 700;

		position: relative;
		margin-right: 10px;
	}

	.shop-header .shop-content .header-content .content-title .content-tag .mini-tag {
		position: absolute;
		top: 0;
		left: 0;
		right: -100%;
		bottom: -100%;
		font-size: 24px;
		font-weight: 600;
		transform: scale(.5);
		transform-origin: 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shop-header .shop-content .header-content .content-title .content-name {
		font-weight: 700;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.shop-header .shop-content .header-content .content-title .content-name .content-icon {
		width: 20px;
		position: relative;
		height: 16px;
	}

	.shop-header .shop-content .header-content .content-title .content-name .content-icon::after {
		content: "";
		border-style: solid;
		border-width: 6px 0 6px 7px;
		border-color: transparent transparent transparent rgba(0, 0, 0, .67);
		position: absolute;
		left: 8px;
		top: 3px;
	}

	.shop-header .shop-content .header-content .shop-message {
		height: 12px;
		margin-top: 8px;

		color: #333;
		font-size: 11px;
		white-space: nowrap;
	}

	.shop-header .shop-content .header-content .shop-message .shop-message-detail:not(:last-child)::after {
		content: "\B7";
		opacity: .2;
	}

	.shop-header .shop-content .header-content .shop-notice {
		width: 63%;
		font-size: 11px;
		font-weight: 300;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 8px auto 10px;
		white-space: nowrap;
	}

	.shop-header .shop-header-discounts {
		display: flex;
		align-items: center;
		border: 1px solid #eee;
		border-radius: 1px;
		padding: 5px 7px;
		margin: 0 30px;
		color: #666;
		font-size: 11px;
		background: #fff;
	}

	.shop-header .shop-header-discounts .discounts-left {
		flex: 1;
		overflow: hidden;
	}

	.shop-header .shop-header-discounts .discounts-left .activity {
		display: flex;
		align-items: center;
	}

	.shop-header .shop-header-discounts .discounts-left .activity .content-tag {
		width: 25px;
		height: 13px;
		background-color: rgb(112, 188, 70);
		margin-right: 5px;
		position: relative;
		border-radius: 1px;

		color: #fff;
		font-style: normal;
		font-weight: 700;
	}

	.shop-header .shop-header-discounts .discounts-left .activity .content-tag .mini-tag {
		position: absolute;
		left: 0;
		top: 0;
		right: -100%;
		bottom: -100%;

		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 18px;
		font-weight: 600;
		transform: scale(.5);
		transform-origin: 0 0;
	}

	.shop-header .shop-header-discounts .discounts-right {
		width: 50px;
		flex-shrink: 0;
		position: relative;
		padding-right: 10px;
		text-align: right;
	}

	.shop-header .shop-header-discounts .discounts-right::after {
		content: '';
		display: block;
		border-style: solid;
		border-width: 4px 4px 0;
		border-color: rgba(0, 0, 0, .57) transparent transparent;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translateY(-50%);
	}

	.shop-header .shop-brief-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		color: #333;
		z-index: 52;
	}

	/* .shop-header .shop-brief-modal .fade-enter-active,
	.shop-header .shop-brief-modal .fade-leave-active {
		transition: opacity .5s;
	}

	.shop-header .shop-brief-modal .fade-enter,
	.shop-header .shop-brief-modal .fade-leave-to {
		opacity: 0;
	} */

	.brief-modal-cover {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .5);
		z-index: 1;
	}

	.shop-header .shop-brief-modal .brief-modal-content {
		position: relative;
		width: 80%;
		padding: 25px 20px;
		border-radius: 5px;
		background-color: #fff;
		z-index: 99;
		display: flex;
		flex-direction: column;
	}

	.shop-header .shop-brief-modal .brief-modal-content .content-title {
		font-size: 20px;
		line-height: 24px;
		font-weight: 700;
		white-space: nowrap;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shop-header .shop-brief-modal .brief-modal-content .content-title>span {
		font-weight: 600;
	}

	/* 写到这了 */
	.shop-header .shop-brief-modal .brief-modal-content .content-title .content-tag {
		width: 36px;
		height: 18px;
		background-image: linear-gradient(90deg, #fff100, #ffe339);
		position: relative;

		border-radius: 2px;
		margin-right: 10px;

		color: #6a3709;
		font-style: normal;
	}

	.shop-header .shop-brief-modal .brief-modal-content .content-title .mini-tag {
		position: absolute;
		left: 0;
		top: 0;
		right: -100%;
		bottom: -100%;

		font-size: 24px;
		transform: scale(.5);
		transform-origin: 0 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg {
		display: flex;
		margin: 20px -10px 0;
	}

	.shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg>li {
		flex: 1;
		text-align: center;
	}

	.shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg>li>h3 {
		color: #333;
		font-size: 15px;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.shop-header .shop-brief-modal .brief-modal-content .brief-modal-msg>li>p {
		font-size: 12px;
		color: #999;
	}

	.shop-header .shop-brief-modal .brief-modal-content .brief-modal-title {
		position: relative;
		text-align: center;
		margin: 15px auto 15px;
		width: 85px;
		background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
		background-size: 100% 1px;
		background-position: 50%;
		background-repeat: no-repeat;
	}

	.shop-header .shop-brief-modal .brief-modal-content .brief-modal-title>span {
		font-size: 12px;
		padding: 0 6px;
		color: #999;
		background-color: #fff;
	}

	.shop-header .shop-brief-modal .brief-modal-content .brief-modal-notice {
		font-size: 13px;
		line-height: 1.54;
		color: #333;
		overflow-y: auto;
	}

	.shop-header .shop-brief-modal .brief-modal-content .mask-footer {
		position: absolute;
		bottom: -60px;
		left: 50%;
		padding: 6px;
		border: 1px solid rgba(255, 255, 255, .7);
		border-radius: 50%;
		transform: translateX(-50%);
	}

	.shop-header .shop-brief-modal .brief-modal-content .mask-footer span {
		font-size: 16px;
		color: rgba(255, 255, 255, .7);
	}

	.shop-header .activity-sheet {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 99;
	}

	.shop-header .activity-sheet .activity-sheet-content {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;

		color: #333;
		background-color: #f5f5f5;
		padding: 20px 30px;
		box-sizing: border-box;
		box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, .4);

		z-index: 100;
		transition: transform .2s;
		will-change: transform;
	}

	.shop-header .activity-sheet .activity-sheet-content .activity-sheet-title {
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 20px;
	}

	.shop-header .activity-sheet .activity-sheet-content .list {
		font-size: 16px;
		height: 160px;
		overflow-y: auto;

	}

	.shop-header .activity-sheet .activity-sheet-content .list .activity-item {
		margin-bottom: 12px;
		display: flex;
		align-items: center;
		font-size: 13px;
	}
	.shop-header .activity-sheet .activity-sheet-content .list .activity-green .content-tag {
		background-color: rgb(112, 188, 70);
	}

	.shop-header .activity-sheet .activity-sheet-content .list .activity-red .content-tag {
		background-color: rgb(240, 115, 115);
	}

	.shop-header .activity-sheet .activity-sheet-content .list .activity-orange .content-tag {
		background-color: rgb(241, 136, 79);
	}

	.shop-header .activity-sheet .activity-sheet-content .list .activity-item .content-tag {
		width: 36px;
		height: 18px;
		margin-right: 10px;
		display: inline-block;
		border-radius: 2px;
		color: #fff;
		font-style: normal;
		position: relative;
	}

	.shop-header .activity-sheet .activity-sheet-content .list .activity-item .content-tag .mini-tag {
		position: absolute;
		left: 0;
		top: 0;
		right: -100%;
		bottom: -100%;
		font-size: 24px;
		transform: scale(.5);
		transform-origin: 0 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.shop-header .activity-sheet .activity-sheet-content .activity-sheet-close {
		position: absolute;
		right: 6px;
		top: 10px;
		width: 25px;
		height: 25px;
	}

	.shop-header .activity-sheet .activity-sheet-content .activity-sheet-close>span {
		font-size: 20px;
	}

	.shop-header .activity-sheet .activity-sheet-cover {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .5);
	}
</style>
