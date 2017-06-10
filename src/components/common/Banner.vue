<template>
    <div class="banner">
        <div class="banner_text"></div>
        <div class="timer_user">
            <h1 class="pull-left">18:30:03</h1>
            <div class="pull-left user">
                <p>傍晚好，阿明</p>
                <p>2017-05-07</p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data () {
			return {
				open: true
			}
		},
		computed: {},
		methods: {}
	}
</script>

<style lang="less" scoped>
    @import "../../lib/style/global";
    .banner {
        background: url("../../imgs/banner_image.jpg") 0 0 no-repeat;
        background-size: cover;
        background-position: center center;
        height: 540px;
        margin-top: 60px;
        min-width: 640px;
        position: relative;
        .banner_text{
            background: url("../../imgs/motto_text.png")0 0 no-repeat;
            width: 600px;
            height: 268px;
            background-size: 600px;
            position: absolute;
            top: 120px;
            left: 50%;
            margin-left: -300px;
        }
        .timer_user{
            position: absolute;
            width: 340px;
            height: 75px;
            bottom: 60px;
            left: 50%;
            margin-left: -170px;
            background-color: @background-color350;
            border-radius: 999px;
            box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.15);
            h1{
                font-weight: lighter;
                font-size: 50px;
                padding: 0 20px 0 20px;
            }
            div{
                padding: 15px 0 0 0;
            }
        }
    }
</style>
