<template>
    <div id="app">
            <div class="inner">
                <router-link to="/" exact>
                    <div class="logo_lage"></div>
                </router-link>
                <router-link to="/">首页</router-link>
                <router-link to="/new">发现</router-link>
                <router-link to="/show">分享</router-link>
                <router-link to="/ask">留言</router-link>
                <router-link to="/job">更新日志</router-link>
                <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank" rel="noopener">
                    Built with Vue.js
                  </a>
            </div>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<style lang="less">
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    .logo_lage{
        background: url("imgs/logo_lage.png")0 0 no-repeat;
        width: 120px;
        height: 30px;
    }
</style>
