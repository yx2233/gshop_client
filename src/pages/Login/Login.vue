<template>
	<section class="loginContainer">
		<div class="loginInner">
			<div class="login_header">
				<h2 class="login_logo">硅谷外卖</h2>
				<div class="login_header_title">
					<a href="javascript:;" :class="{on: loginWay}" @click="loginWay = true">短信登录</a>
					<a href="javascript:;" :class="{on: !loginWay}" @click="loginWay = false">密码登录</a>
					<!-- <a href="javascript:;" class="on">短信登录</a>
					<a href="javascript:;">密码登录</a> -->
				</div>
			</div>
			<div class="login_content">
				<form @submit.prevent="login">
					<div :class="{on: loginWay}">
						<section class="login_message">
							<input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
							<button class="get_verification" :disabled="!rightPhone" :class="{right_phone:rightPhone}" @click.prevent="getCode">
								{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}
							</button>
							<!-- :disabled="!rightPhone" 当手机号格式输入正确，可以点击 获取验证码 -->
						</section>
						<section class="login_verification">
							<input type="tel" maxlength="8" placeholder="验证码" v-model="code">
						</section>
						<section class="login_hint">
							温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
							<a href="javascript:;">《用户服务协议》</a>
						</section>
					</div>
					<div :class="{on: !loginWay}">
						<section>
							<section class="login_message">
								<input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
							</section>
							<section class="login_verification">
								<input type="text" maxlength="8" placeholder="密码" v-if="showPwd" v-model="pwd"> <!-- false不显示 -->
								<input type="password" maxlength="8" placeholder="密码" v-else v-model="pwd"> <!-- true显示 -->
								<div class="switch_button" :class="showPwd ? 'on' : 'off' " @click="showPwd = !showPwd">
									<!-- :class="showPwd ? 'on' : 'off' "  解释：当密码显示时，class名为on ,否则为off -->
									<div class="switch_circle" :class="{right:showPwd}"></div>
									<span class="switch_text">
										{{showPwd ? 'abc' :'...'}}
										<!-- {{showPwd ? 'abc' :'...'}} 解释：当密码显示时显示abc，否则显示...或者空 -->
									</span>
								</div>
							</section>
							<section class="login_message">
								<input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
								<img class="get_verification" src="http://localhost:4000/captcha" alt="captcha"
								@click="getCaptcha">
							</section>
						</section>
					</div>
					<button class="login_submit">登录</button>
				</form>
				<a href="javascript:;" class="about_us">关于我们</a>
			</div>
			<a href="javascript:" class="go_back" @click="$router.back()">
				<i class="iconfont icon-jiantou2"></i>
			</a>
		</div>
		<AlertTip :alertText='alertText' v-show="showAlert" @closeTip="closeTip" />
	</section>
</template>

<script>
	import AlertTip from '../../components/AlertTip/AlertTip.vue'
	export default {
		data() {
			return {
				/*
					短信登录，密码登录两种登录方式切换
					两种样式切换，一般用布尔值
					可默认设置true为短信登录，false为密码登录
				*/
				loginWay: false,
				computeTime: 0, //计时时间
				showPwd: false, //默认不显示密码
				phone: '', //手机号
				code: '', //验证码
				name: '', //用户名
				pwd: '', //密码
				captcha: '', //图形验证码
				alertText:'',  //提示框内容
				showAlert:false, //是否显示提示框
			}
		},
		computed: {
			/*
				功能:输入正确格式的手机号，验证码字体颜色变为黑色
				实现:v-model绑定输入框，验证码绑定class属性(class是否显示以及显示的颜色),
					正则验证表达式，当手机号验证通过，class属性为true
			*/
			rightPhone() {
				return /^1\d{10}$/.test(this.phone);
			}

		},
		methods: {
			// 发送验证码
			getCode() {
				/* 
				短信登录：
					思路:
						手机号输入正确，“发送验证码” 变为 “倒计时()秒”，计时结束又变为“发送验证码”
						验证码发送倒计时过程中，不能被点击
					实现:
						启动倒计时
						发送ajax请求(向指定手机号发送验证码)
				*/

				// 测试当手机号输入正确，获取验证码字样是否可点击
				// alert('---');

				// 如果当前没有计时
				if (!this.computeTime) {
					this.computeTime = 30;
					const intervalId = setInterval(() => {
						// 启动倒计时
						this.computeTime--
						if (this.computeTime <= 0) {
							// 停止计时
							clearInterval(intervalId)
						}
					}, 1000)

					// 发送ajax请求(向指定手机号发送验证码)
				}

			},
			
			// 封装的提示框的显示函数
			alertTipShow (tip){
				this.showAlert = true;
				this.alertText = tip
			},
			
			// 登录
			login() {
				/*
					判断是哪种登录方式
				*/
				if (this.loginWay) { //短信登录
					const {phone, rightPhone, code} = this;
					if(!this.rightPhone){
						// 手机号不正确
						this.alertTipShow('手机号不正确')
					}else if( !/^\d{6}$/.test(code) ){
						// 请输入正确的验证码
						this.alertTipShow('请输入正确的验证码')
					}
				} else { //密码登录
					const {name, pwd, captcha} = this;
					if(!this.name){
						// 用户名不正确
						this.alertTipShow('用户名不正确')
					}else if(!this.pwd){
						// 请输入正确的验证码
						this.alertTipShow('请输入正确的验证码')
					}else if(!this.captcha){
						// 请输入正确的图形验证码
						this.alertTipShow('请输入正确的图形验证码')
					}
				}
			},
			
			// 关闭提示框
			closeTip (){
				this.showAlert = false;
				this.alertText = ''
			},
			
			// 一次性图形验证码
			getCaptcha(event){
				// console.log(event);
				event.target.src='http://localhost:4000/captcha?time=' + Date.now();
			},
			
			
		},
		components:{
			AlertTip
		}
	}
</script>

<style>
	/* 短信登录和密码登录的字体颜色样式和显示内容都是通过 .on 来实现的 */
	.loginContainer {
		width: 100%;
		height: 100%;
		background: #fff;
	}

	.loginContainer .loginInner {
		padding-top: 60px;
		width: 80%;
		margin: 0 auto;
	}

	.loginContainer .loginInner .login_header .login_logo {
		font-size: 40px;
		font-weight: bold;
		color: #02a774;
		text-align: center;
	}

	.loginContainer .loginInner .login_header .login_header_title {
		padding-top: 40px;
		text-align: center;
	}

	.loginContainer .loginInner .login_header .login_header_title>a {
		color: #333;
		font-size: 14px;
		padding-bottom: 4px;
	}

	.loginContainer .loginInner .login_header .login_header_title>a:first-child {
		margin-right: 40px;
	}

	.loginContainer .loginInner .login_header .login_header_title>a.on {
		color: #02a774;
		font-weight: 700;
		border-bottom: 2px solid #02a774;
	}

	.loginContainer .loginInner .login_content>form>div {
		display: none;
	}

	.loginContainer .loginInner .login_content>form>div.on {
		display: block;
	}

	.loginContainer .loginInner .login_content>form>div input {
		width: 100%;
		height: 100%;
		padding-left: 10px;
		box-sizing: border-box;
		border: 1px solid #ddd;
		border-radius: 4px;
		outline: 0;
		font: 400 14px Arial;
	}

	.loginContainer .loginInner .login_content>form>div input:focus {
		border: 1px solid #02a774;
	}

	.loginContainer .loginInner .login_content>form>div .login_message {
		position: relative;
		margin-top: 16px;
		height: 48px;
		font-size: 14px;
		background: #fff;
	}

	.loginContainer .loginInner .login_content>form>div .login_message .get_verification {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		border: 0;
		color: #ccc;
		font-size: 14px;
		background: transparent;
	}

	.loginContainer .loginInner .login_content>form>div .login_message .right_phone {
		color: #000;
	}


	.loginContainer .loginInner .login_content>form>div .login_verification {
		position: relative;
		margin-top: 16px;
		height: 48px;
		font-size: 14px;
		background: #fff;
	}

	.loginContainer .loginInner .login_content>form>div .login_verification .switch_button {
		font-size: 12px;
		border: 1px solid #ddd;
		border-radius: 8px;
		transition: background-color 0.3s, border-color 0.3s;
		padding: 0 6px;
		width: 30px;
		height: 16px;
		line-height: 16px;
		color: #fff;
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
	}

	.loginContainer .loginInner .login_content>form>div .login_verification .switch_button.off {
		background: #fff;
	}

	.loginContainer .loginInner .login_content>form>div .login_verification .switch_button.off .switch_text {
		float: right;
		color: #ddd;
	}

	.loginContainer .loginInner .login_content>form>div .login_verification .switch_button.on {
		background: #02a774;
	}

	.loginContainer .loginInner .login_content>form>div .login_verification .switch_button>.switch_circle {
		position: absolute;
		top: -1px;
		left: -1px;
		width: 16px;
		height: 16px;
		border: 1px solid #ddd;
		border-radius: 50%;
		background: #fff;
		box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
		transition: transform 0.3s;
	}

	.loginContainer .loginInner .login_content>form>div .login_verification .switch_button>.right {
		transform: translateX(30px);
	}

	.loginContainer .loginInner .login_content>form>div .login_hint {
		margin-top: 12px;
		color: #999;
		font-size: 14px;
		line-height: 20px;
	}

	.loginContainer .loginInner .login_content>form>div .login_hint>a {
		color: #02a774;
	}

	.loginContainer .loginInner .login_content>form .login_submit {
		display: block;
		width: 100%;
		height: 42px;
		margin-top: 30px;
		border-radius: 4px;
		background: #4cd96f;
		color: #fff;
		text-align: center;
		font-size: 16px;
		line-height: 42px;
		border: 0;
	}

	.loginContainer .loginInner .login_content .about_us {
		display: block;
		font-size: 12px;
		margin-top: 20px;
		text-align: center;
		color: #999;
	}

	.loginContainer .loginInner .go_back {
		position: absolute;
		top: 5px;
		left: 5px;
		width: 30px;
		height: 30px;
	}

	.loginContainer .loginInner .go_back>.iconfont {
		font-size: 20px;
		color: #999;
	}
</style>
