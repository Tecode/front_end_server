<template>
    <div id="app">
        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 clearfix">
                        <router-link to="/" exact>
                            <div class="logo_lage"></div>
                        </router-link>
                        <router-link class="nav_link active" to="/">首页</router-link>
                        <router-link class="nav_link" to="/new">发现</router-link>
                        <router-link class="nav_link" to="/show">分享</router-link>
                        <router-link class="nav_link" to="/ask">留言</router-link>
                        <router-link class="nav_link" to="/job">更新日志</router-link>
                        <div class="pull-right">
                        <a href="javascript:;" class="nav_link">登录</a>
                        <a href="javascript:;" class="nav_link">注册</a>
                        </div>
                        <!--<div class="pull-right">-->
                            <!--<a class="nav_link">欢迎你，aming!</a>-->
                        <!--</div>-->
                    </div>
                </div>
            </div>
        </div>
            <transition name="fade" mode="out-in">
                <router-view class="view"></router-view>
            </transition>
    </div>
</template>

<style lang="less">
    @import "lib/style/global";
    @import "lib/style/color";
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .header{
        background-color: @background-color50;
        position: fixed;
        z-index: 999;
        height: 60px;
        transition: all .2s ease;
        top: 0;
        left: 0;
        right: 0;
        .logo_lage{
            background: url("imgs/logo_lage.png")0 0 no-repeat;
            background-size: 120px;
            width: 120px;
            height: 30px;
            margin: 12px 31px 0 0
        }
        a{
            font-size: 15px;
            float: left;
            color: @color400;
            text-decoration: none;
        }
        .nav_link{
            padding: 0 11px 0 11px;
            height: 60px;
            display: block;
            line-height: 4em;
            &:hover{
                background-color: @background-color150;
                color: @white;
            }
        }
        .active{
            color: @white;
            background: url("imgs/icon_tag.png")center bottom no-repeat;
            background-size: 12px;
            background-color: @background-color150;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .2s ease
    }
</style>
