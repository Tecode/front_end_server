<template>
    <div class="mask_box" :style = {visibility:boxStatus,opacity:boxOpacity}>
        <div class="mask"></div>
        <div class="login">
            <div class="box_header">
                <div class="close" @click="closePopup"></div>
            </div>
            <div class="box_body">
                <ul>
                    <li class="user_input">
                        <label for="user"></label>
                        <input id="user" placeholder="邮箱账号"/>
                        <p class="error_tips">用户名错误</p>
                    </li>
                    <li class="user_password">
                        <label for="password"></label>
                        <input id="password" type="password" placeholder="输入登录密码"/>
                        <p class="error_tips">用户名错误</p>
                    </li>
                    <li class="submit">
                        <label for="submit"></label>
                        <input type="button" value="立即登录" id="submit"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import {mapState} from 'vuex'
	export default {
		name: 'comment',
		props: ['id'],
		data () {
			return {
                isHiden: true
			}
		},
		mounted(){
//			document.body.style.overflow = 'hidden';
//			setTimeout( () => {
//			    document.body.style.overflow = null;
//            },3000)
        },
		computed: {
        ...mapState({
            boxStatus: state => state.LoginRegistration.boxStatus,
			boxOpacity: state => state.LoginRegistration.boxOpacity,
        }),
		},
		methods: {
		...mapMutations({
		    closePopup: 'closePopup',
		}),
        }
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/color";
    .mask_box{
        /*transition: all .4s;*/
    }
    .mask{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        z-index: 1000;
    }
    .login{
        border-radius: @border-radius6;
        overflow: hidden;
        position: fixed;
        top: 60px;
        left: 50%;
        margin-left: -160px;
        z-index: 1000;
        box-shadow: 0 6px 38px 3px rgba(0, 0, 0, 0.4);
        .box_header{
            width: 320px;
            height: 50px;
            background: url("../../imgs/logo_lage.png")center center no-repeat;
            background-size: 100px;
            background-color: @background-color50;
            .close{
                position: absolute;
                top: 16px;
                right: 10px;
                background: url("../../imgs/close_button.png")0 0 no-repeat;
                background-size: 15px;
                width: 15px;
                height: 15px;
                transition: all .4s ease-out;
                cursor: pointer;
                &:hover{
                    transform:rotate(-180deg);
                }
            }
        }
        .box_body{
            background-color: @white;
            padding: 20px 0 40px 0;
            li{
                width: 260px;
                margin: 0 auto;
                input{
                    border: 1px solid @background-color50;
                    outline: none;
                    border-radius: @border-radius6;
                    padding: 7px 5px 3px 35px;
                    width: 218px;
                    height: 25px;
                    color: @background-color50;
                    font-size: 16px;
                    line-height: 1.4em;
                    transition: all .4s;
                    &:focus{
                        color: @text100;
                    }
                }
                .error_tips{
                    background: url("../../imgs/icon_remind.png")0 1px no-repeat;
                    background-size: 16px;
                    font-size: 14px;
                    padding-left: 18px;
                    color: @error;
                    margin: 8px 0 10px 0;
                }
            }
            .submit{
                input{
                    border: none;
                    background-color: @background-color50;
                    width: 260px;
                    height: 38px;
                    padding: 0;
                    color: @text100;
                    cursor: pointer;
                    transition: all .2s;
                    &:hover{
                        background-color: #fee14c;
                    }
                }
            }
            .user_input{
                input{
                    background: url("../../imgs/icon_user.png")10px center no-repeat;
                    background-size: 16px;
                }
            }
            .user_password{
                input{
                    background: url("../../imgs/icon_lock.png")10px center no-repeat;
                    background-size: 16px;
                }
            }
        }
    }
</style>
