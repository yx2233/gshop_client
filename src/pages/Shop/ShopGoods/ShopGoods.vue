<template>
	<div>
		<div class="goods">
			<div class="menu-wrapper" ref="menuWrapper">
				<ul>
					<!-- current -->
					<li class="menu-item" v-for="(good,index) in goods" :key="index" :class="{current:index===currentIndex}" @click="clickMenuItem(index)">
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
				<ul ref="foodsUl">
					<li class="food-list-hook" v-for="(good,index) in goods" :key="index">
						<h1 class="title">{{good.name}}</h1>
						<ul>
							<li class="food-item" v-for="(food,index) in good.foods" :key="index" 
							@click="showFood(food)">
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
									<div class="cartcontrol-wrapper">
										<CartControl :food="food" />
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<ShopCart />
		</div>
		<Food :food="food" ref="food" />
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import {mapState} from 'vuex'
	import CartControl from '../../../components/CartControl/CartControl.vue'
	import Food from '../../../components/Food/Food.vue'
	import ShopCart from '../../../components/ShopCart/ShopCart.vue'
	export default {
		data() {
			return {
				scrollY: 0, //右侧滑动的Y轴坐标(滑动过程中实时变化)
				tops: [], //所有右侧分类li的top组成的数组(列表第一次显示之后就不再变化)
				food:{},
			}
		},
		mounted() {
			this.$store.dispatch('getShopGoods', () => {
				this.$nextTick(() => { //列表数据更新显示之后执行
					this._initScroll();
					this._initTops();
				})
			})
		},
		computed: {
			...mapState(['goods']),

			currentIndex() {
				// 得到条件数据
				const {
					scrollY,
					tops
				} = this;
				// 根据条件计算产生一个结果
				const index = tops.findIndex((top, index) => {
					// 大于等于当前top，小于下一个top
					return scrollY >= top && scrollY < tops[index + 1]
				})
				// 返回结果
				return index;
			},
		},
		methods: {
			// 初始化滚动
			_initScroll() {
				new BScroll('.menu-wrapper', {
					click: true
				})
				this.foodsScroll = new BScroll('.foods-wrapper', {
					probeType: 2, //不会惯性滑动
				})

				// 给右侧绑定scroll监听
				this.foodsScroll.on('scroll', ({
					x,
					y
				}) => {
					console.log(x, y);
					this.scrollY = Math.abs(y);
					// Math.abs()  取绝对值
				})

				// 给右侧绑定scroll结束的监听
				this.foodsScroll.on('scrollEnd', ({
					x,
					y
				}) => {
					console.log('scrollEnd', x, y);
					this.scrollY = Math.abs(y);
					// Math.abs()  取绝对值
				})

			},

			// 初始化tops 
			_initTops() {
				// 1初始化tops
				const tops = [];
				let top = 0;
				tops.push(top);
				// 2收集——找到所有分类的li
				const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook');
				Array.prototype.slice.call(lis).forEach(li => {
					top += li.clientHeight;
					tops.push(top);
				});
				// 3更新数据
				this.tops = tops;
				console.log(this.tops);
			},

			clickMenuItem(index) {
				// console.log(index);
				// 使用右侧列表滑动到相应的位置
				// 得到目标位置的scrollY
				const scrollY = this.tops[index];
				// 立即更新scrollY(让点击的分类项成为当前分类)
				this.scrollY = scrollY;
				// 平滑滑动右侧列表
				this.foodsScroll.scrollTo(0, -scrollY, 300)
			},
			
			showFood(food){
				// 设置/更新food
				this.food = food
				// food显示(调用子组件的切换方法)
				this.$refs.food.toggleShow()
			},
		},
		components:{
			CartControl,
			Food,
			ShopCart
		},
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

	.goods .menu-wrapper .menu-item:last-child .text {
		border: none;
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

	.goods .foods-wrapper .food-item .content .price .old {
		text-decoration: line-through;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}

	.goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
		position: absolute;
		right: 0;
		bottom: -10px;
	}
</style>
