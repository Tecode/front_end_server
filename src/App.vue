<template>
    <div id="app">
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 clearfix">
                        <router-link to="/" exact>
                            <div class="logo_lage">
                                <span>Dev</span>
                            </div>
                        </router-link>
                        <router-link class="nav_link" :class="{active : activeNav === '/'}" to="/">首页</router-link>
                        <router-link class="nav_link" :class="{active : activeNav === '/discover'}" to="/discover">发现</router-link>
                        <router-link class="nav_link" :class="{active : activeNav === '/share'}" to="/share">分享</router-link>
                        <router-link class="nav_link" :class="{active : activeNav === '/message'}" to="/message">留言</router-link>
                        <router-link class="nav_link" :class="{active : activeNav === '/updatelog'}" to="/updatelog">更新日志</router-link>
                        <div class="pull-right">
                            <a @click="loginRegistration('login')" class="nav_link">登录</a>
                            <a @click="loginRegistration('registration')" class="nav_link">注册</a>
                        </div>
                        <!--<div class="pull-right">-->
                        <!--<a class="nav_link">欢迎你，aming!</a>-->
                        <!--</div>-->
                    </div>
                </div>
            </div>
        </div>
        <login-item></login-item>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>
<script>
	import LoginItem from './components/bombBox/LoginItem.vue'
	import {mapState} from 'vuex'
	import {mapActions} from 'vuex'
	import {mapGetters} from 'vuex'
    import {mapMutations} from 'vuex'

	export default {
		name: 'app',
		props: ['id'],
		components: {
			LoginItem
		},
		computed: {
			...mapState({
				activeNav: state => state.NavHeader.activeNav,
			}),
			...mapGetters({
				doneTodosCount: 'doneTodosCount'
			})
		},
		methods: {
			...mapActions({
//				changeName: 'changeName'
			}),
			...mapMutations({
				listenerRouting: 'listenerRouting', // 映射 this.listenerRouting() 为 this.$store.commit('listenerRouting')
			    loginRegistration: 'loginRegistration'
			}),
			fetchData(){
				this.listenerRouting(this.$route.fullPath);
			}
		},
		created: function () {
			this.listenerRouting(this.$route.fullPath);
//			console.log(this.name);
//			console.log(this.changeName(3662), 'changeName');
//			console.log(this.doneTodosCount, 'doneTodosCount');
//			console.log(this.fullPath, 'fullPath---------------');
		},
		data () {
			return {
				fullPath: this.$route.fullPath
			}
		},
		watch: {
			// 如果路由有变化，会再次执行该方法
			'$route': 'fetchData'
		},
	}
</script>
<style lang="less">
    @import "lib/style/global";
    @import "lib/style/color";

    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    .view {
        margin-top: 40px;
    }

    .header {
        border-bottom: 1px solid #ffcd19;
        background-color: @background-color50;
        position: fixed;
        z-index: 999;
        height: 40px;
        transition: all .1s ease;
        top: 0;
        left: 0;
        right: 0;
        .logo_lage {
            position: relative;
            background: url("imgs/logo_lage.png") 0 0 no-repeat;
            background-size: 120px;
            width: 120px;
            height: 30px;
            margin: 6px 31px 0 0;
            span {
                position: absolute;
                top: -2px;
                right: -2.2em;
                background-color: #f3401d;
                color: #ffffff;
                padding: 1px 5px;
                border-radius: 99px;
                font-size: 12px;
            }
        }
        a {
            font-size: 15px;
            float: left;
            color: @color400;
            text-decoration: none;
            transition: all .2s;
        }
        .nav_link {
            padding: 0 11px 0 11px;
            height: 40px;
            display: block;
            line-height: 3em;
            transition: all .2s;
            cursor: pointer;
            &:hover {
                //background-color: @background-color150;
                color: @white;
            }
        }
        .active {
            color: @white;
            background: url("imgs/icon_tag.png") center bottom no-repeat;
            background-size: 12px;
            background-color: @background-color150;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .2s ease-in;
    }

    .fade-enter, .fade-leave-active {
        transform: translateY(-10px);
        opacity: 0;
    }
</style>
