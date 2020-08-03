<template>
	<section class="order">
		<!-- <header class="header">
			<a class="header_title">
				<span class="header_title_text">订单列表</span>
			</a>
		</header> -->
		<HeaderTop title="订单列表"></HeaderTop>
		<section class="order_no_login">
			<img src="./images/order/person.png">
			<h3>登录后查看外卖订单</h3>
			<button>立即登陆</button>
		</section>
	</section>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	export default {
		components:{
			HeaderTop
		}
	}
</script>

<style>
	/* .header {
		background-color: #02a774;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 45px;
	}

	.header .header_title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30%;
		color: #fff;
		font-size: 22px;
		text-align: center;
	}
 */
	section.order {
		width: 100%;
	}

	section.order .order_no_login {
		padding-top: 140px;
		width: 60%;
		margin: 0 auto;
		text-align: center;
	}

	section.order .order_no_login>img {
		display: block;
		width: 100%;
		height: 30%;
	}

	section.order .order_no_login>h3 {
		padding: 10px 0;
		font-size: 17px;
		color: #6a6a6a;
	}

	section.order .order_no_login>button {
		display: inline-block;
		background: #02a774;
		font-size: 14px;
		color: #fff;
		border: 0;
		outline: none;
		border-radius: 5px;
		padding: 10px 20px;
	}
</style>
