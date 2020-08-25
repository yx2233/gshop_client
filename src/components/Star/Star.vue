<template>
	<div class="star" :class="'star-'+size">
		<span class="star-item" v-for="(sc,index) in starClasses" :class="sc" :key='index'></span>
										<!-- sc:starClasses的缩写 -->
		<!-- <span class="star-item on"></span>
		<span class="star-item on"></span>
		<span class="star-item half"></span>
		<span class="star-item off"></span> -->
	</div>
</template>

<script>
	const CLASS_ON = 'on'
	const CLASS_HALF = 'half'
	const CLASS_OFF = 'off'
	export default{
		props:{
			score:Number,  //星星分数
			size: Number   //星星尺寸
		},
		computed:{
			// 星星的样式显示是根据score(分数)属性计算的
			starClasses () {
				const {score} = this;
				const sc = [];
				/*
					3.2  3个满星 + 0个半星 + 2个灰星
					3.5  3个满星 + 1个半星 + 1个灰星
					星星的个数总共是5个，小数部分 <0.5 灰星； >=0.5 半星;   
				*/
				// 先往sc中添加 n个'on'满星  CLASS_ON 
				var scoreInteger = Math.floor(score);  //取整
				for(let i = 0; i < scoreInteger; i++ ){
					sc.push(CLASS_ON)
				}
				// 再往sc中添加 0/1个'half'半星 CLASS_HALF
				if(score*10 - scoreInteger*10 >= 5){
					sc.push(CLASS_HALF)
				}
				// 最后再加 n个'off'灰星 CLASS_OFF
				while(sc.length < 5){     
					//只要星星类名数组的长度<5,就一直添加，先添加的是on和half，剩下的就是off
					sc.push(CLASS_OFF)
				}
				return sc
			}
		}
	}
</script>

<style>
	.star .star-item {
		display: inline-block;
		background-repeat: no-repeat;
	}
	
	.star.star-48 .star-item {
		width: 20px;
		height: 20px;
		margin-right: 22px;
		background-size: 20px 20px;
	}
	
	.star.star-48 .star-item:last-child {
		margin-right: 0;
	}
	
	.star.star-48 .star-item.on {
		background-image: url("./images/star48_on@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-48 .star-item.on {
			background-image: url("./images/star48_on@3x.png");
		}
	}
	
	.star.star-48 .star-item.half {
		background-image: url("./images/star48_half@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-48 .star-item.half {
			background-image: url("./images/star48_half@3x.png");
		}
	}
	
	.star.star-48 .star-item.off {
		background-image: url("./images/star48_off@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-48 .star-item.off {
			background-image: url("./images/star48_off@3x.png");
		}
	}
	
	.star.star-36 .star-item {
		width: 15px;
		height: 15px;
		margin-right: 6px;
		background-size: 15px 15px;
	}
	
	.star.star-36 .star-item:last-child {
		margin-right: 0;
	}
	
	.star.star-36 .star-item.on {
		background-image: url("./images/star36_on@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-36 .star-item.on {
			background-image: url("./images/star36_on@3x.png");
		}
	}
	
	.star.star-36 .star-item.half {
		background-image: url("./images/star36_half@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-36 .star-item.half {
			background-image: url("./images/star36_half@3x.png");
		}
	}
	
	.star.star-36 .star-item.off {
		background-image: url("./images/star36_off@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-36 .star-item.off {
			background-image: url("./images/star36_off@3x.png");
		}
	}
	
	.star.star-24 .star-item {
		width: 10px;
		height: 10px;
		margin-right: 3px;
		background-size: 10px 10px;
	}
	
	.star.star-24 .star-item:last-child {
		margin-right: 0;
	}
	
	.star.star-24 .star-item.on {
		background-image: url("./images/star24_on@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-24 .star-item.on {
			background-image: url("./images/star24_on@3x.png");
		}
	}
	
	.star.star-24 .star-item.half {
		background-image: url("./images/star24_half@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-24 .star-item.half {
			background-image: url("./images/star24_half@3x.png");
		}
	}
	
	.star.star-24 .star-item.off {
		background-image: url("./images/star24_off@2x.png");
	}
	
	@media (-webkit-min-device-pixel-ratio: 3),
	(min-device-pixel-ratio: 3) {
		.star.star-24 .star-item.off {
			background-image: url("./images/star24_off@3x.png");
		}
	}
</style>
