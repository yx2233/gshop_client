<template>
	<div class="ratings" ref="ratings">
		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{info.score}}</h1>
					<div class="title">综合评分</div>
					<div class="rank">高于周边商家 99%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrapper">
						<span class="title">服务态度</span>
						<Star :score="info.serviceScore" :size="36" />
						<span class="score">{{info.serviceScore}}</span>
					</div>
					<div class="score-wrapper">
						<span class="title">商品评分</span>
						<Star :score="info.foodScore" :size="36" />
						<span class="score">{{info.foodScore}}</span>
					</div>
					<div class="delivery-wrapper">
						<span class="title">送达时间</span>
						<span class="delivery">{{info.deliveryTime}} 分钟</span>
					</div>
				</div>
			</div>
			<div class="split"></div>
			<div class="ratingselect">
				<div class="rating-type border-1px">
					<span class="block positive active" @click="setSelectType(2)"> 全部
						<span class="count">{{ratings.length}}</span>
					</span>
					<span class="block positive" @click="setSelectType(0)"> 满意
						<span class="count">{{positiveSize}}</span>
					</span>
					<span class="block negative" @click="setSelectType(1)"> 不满意
						<span class="count">{{ratings.length-positiveSize}}</span>
					</span>
				</div>
				<div class="switch" :class="{on:onlyShowText}" @click="toggleOnlyShowText">
					<span class="iconfont icon-check_circle"></span>
					<span class="text">只看有内容的评价</span>
				</div>
			</div>
			<div class="rating-wrapper">
				<ul>
					<li class="rating-item" v-for="(rating, index) in filterRatings" :key="index">
						<div class="avatar">
							<img width="28" height="28" :src="rating.avatar">
						</div>
						<div class="content">
							<h1 class="name">{{rating.username}}</h1>
							<div class="star-wrapper">
								<Star :score="rating.score" :size="24" />
								<span class="delivery">{{rating.deliveryTime}}</span>
							</div>
							<p class="text">{{rating.text}}</p>
							<div class="recommend"> 
								<span class="iconfont" :class="rating.rateType === 0 ? 'icon-thumb_up':'icon-thumb_down' "></span>
								<span class="item" v-for="(item,index) in rating.recommend" :key="index">
								{{item}}
								</span>
							</div>
							<div class="time">{{rating.rateTime}}</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from "better-scroll"
	import {mapState,mapGetters} from 'vuex'
	import Star from "../../../components/Star/Star.vue"
	export default {
		data(){
			return {
				onlyShowText:true,	//勾选只看有内容的评价
				selectType:2,	//满意0	不满意1	全部2
			}
		},
		methods:{
			setSelectType(type){
				this.selectType	= type;
			},
			toggleOnlyShowText(){
				this.onlyShowText =! this.onlyShowText
			},
		},
		mounted() {
			this.$store.dispatch("getShopRatings",()=>{
				this.$nextTick(()=>{
					new BScroll(this.$refs.ratings,{
						click:true
					})
				})
			})
		},
		computed:{
			...mapState(['info',"ratings"]),
			...mapGetters(['positiveSize']),
			filterRatings(){
				
			},
		},
		components: {
			Star
		}
	}
</script>

<style>
	.ratings {
		position: absolute;
		top: 195px;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		background-color: #fff;
	}

	.ratings .overview {
		display: flex;
		padding: 18px 0;
	}

	.ratings .overview .overview-left {
		flex: 0 0 137px;
		padding: 6px 0;
		width: 137px;
		border-right: 1px solid rgba(7, 17, 27, 0.1);
		text-align: center;
	}

	.ratings .overview .overview-left @media only screen and (max-width:320px) {
		flex: 0 0 120px;
		width: 120px;
	}

	.ratings .overview .overview-left .score {
		margin-bottom: 6px;
		line-height: 28px;
		font-size: 24px;
		color: rgb(255, 153, 0);
	}

	.ratings .overview .overview-left .title {
		margin-bottom: 8px;
		line-height: 12px;
		font-size: 12px;
		color: rgb(7, 17, 27);
	}

	.ratings .overview .overview-left .rank {
		line-height: 10px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}

	.ratings .overview .overview-right {
		flex: 1;
		padding: 6px 0 6px 24px;
	}

	.ratings .overview .overview-right @media only screen and (max-width: 320px) {
		padding-left: 6px;
	}

	.ratings .overview .overview-right .score-wrapper {
		margin-bottom: 8px;
		font-size: 0;
	}

	.ratings .overview .overview-right .score-wrapper .title {
		display: inline-block;
		line-height: 18px;
		vertical-align: top;
		font-size: 12px;
		color: rgb(7, 17, 27);
	}

	.ratings .overview .overview-right .score-wrapper .star {
		display: inline-block;
		margin: 0 12px;
		vertical-align: top;
	}

	.ratings .overview .overview-right .score-wrapper .score {
		display: inline-block;
		line-height: 18px;
		vertical-align: top;
		font-size: 12px;
		color: rgb(255, 153, 0);
	}

	.ratings .overview .overview-right .delivery-wrapper {
		font-size: 0;
	}

	.ratings .overview .overview-right .delivery-wrapper .title {
		line-height: 18px;
		font-size: 12px;
		color: rgb(7, 17, 27);
	}

	.ratings .overview .overview-right .delivery-wrapper .delivery {
		margin-left: 12px;
		font-size: 12px;
		color: rgb(147, 153, 159);
	}

	.ratings .split {
		width: 100%;
		height: 16px;
		border-top: 1px solid rgba(7, 17, 27, 0.1);
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		background: #f3f5f7;
	}

	.ratings .ratingselect .rating-type {
		padding: 18px 0;
		margin: 0 18px;
	}
	/* .ratings .ratingselect .border-1px{
		border: 1px solid rgba(7, 17, 27, 0.1);
		font-size: 0;
	}
	 */

	.ratings .ratingselect .rating-type .block {
		display: inline-block;
		padding: 8px 12px;
		margin-right: 8px;
		line-height: 16px;
		border-radius: 1px;
		font-size: 12px;
		color: rgb(77, 85, 93);
		background: rgba(77, 85, 93, 0.2);
	}

	.ratings .ratingselect .rating-type .block.active {
		background: green;
		color: #fff;
	}

	.ratings .ratingselect .rating-type .block .count {
		margin-left: 2px;
		font-size: 8px;
	}

	.ratings .ratingselect .switch {
		padding: 12px 18px;
		line-height: 24px;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
		color: rgb(147, 153, 159);
		font-size: 0;
	}

	.ratings .ratingselect .switch.on .icon-check_circle {
		color: green;
	}

	.ratings .ratingselect .switch.on .icon-check_circle {
		display: inline-block;
		vertical-align: top;
		margin-right: 4px;
		font-size: 24px;
	}

	.ratings .ratingselect .switch.on .text {
		display: inline-block;
		vertical-align: top;
		font-size: 12px;
	}

	.ratings .rating-wrapper {
		padding: 0 18px;
	}

	.ratings .rating-wrapper .rating-item {
		display: flex;
		padding: 18px 0;
		border-bottom: 1px solid rgba(7, 17, 27, 0.1);
	}

	.ratings .rating-wrapper .rating-item .avatar {
		flex: 0 0 28px;
		width: 28px;
		margin-right: 12px;
	}

	.ratings .rating-wrapper .rating-item .avatar img{
		border-radius: 50%;
	}

	.ratings .rating-wrapper .rating-item .content {
		position: relative;
		flex: 1;
	}

	.ratings .rating-wrapper .rating-item .content .name {
		margin-bottom: 4px;
		line-height: 12px;
		font-size: 10px;
		color: rgb(7, 17, 27);
	}

	.ratings .rating-wrapper .rating-item .content .star-wrapper {
		margin-bottom: 6px;
		font-size: 0;
	}

	.ratings .rating-wrapper .rating-item .content .star-wrapper .star {
		display: inline-block;
		margin-right: 6px;
		vertical-align: top;
	}

	.ratings .rating-wrapper .rating-item .content .star-wrapper .delivery {
		display: inline-block;
		vertical-align: top;
		line-height: 12px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}

	.ratings .rating-wrapper .rating-item .content .text {
		margin-bottom: 8px;
		line-height: 18px;
		color: rgb(7, 17, 27);
		font-size: 12px;
	}

	.ratings .rating-wrapper .rating-item .content .recommend {
		line-height: 16px;
		font-size: 0;
	}

	.ratings .rating-wrapper .rating-item .content .recommend .icon-thumb_up,
	.ratings .rating-wrapper .rating-item .content .recommend .icon-thumb_down,
	.ratings .rating-wrapper .rating-item .content .recommend .item {
		display: inline-block;
		margin: 0 8px 4px 0;
		font-size: 9px;
	}

	.ratings .rating-wrapper .rating-item .content .recommend .icon-thumb_up {
		color: #ff8d00;
	}

	.ratings .rating-wrapper .rating-item .content .recommend .icon-thumb_down {
		color: rgb(147, 153, 159);
	}

	.ratings .rating-wrapper .rating-item .content .recommend .item {
		padding: 0 6px;
		border: 1px solid rgba(7, 17, 27, 0.1);
		border-radius: 1px;
		color: rgb(147, 153, 159);
		background: #fff;
	}

	.ratings .rating-wrapper .rating-item .content .time {
		position: absolute;
		top: 0;
		right: 0;
		line-height: 12px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
</style>
