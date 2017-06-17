<template>
    <div class="message_item">
        <div class="clearfix title_box">
            <p class="bliuld">1楼</p>
        </div>
        <ul>
            <li>
                <div class="portrait_box clearfix">
                    <div class="box_image pull-left">
                        <img src="../../imgs/Demo_moudle.jpg" width="120px" />
                    </div>
                    <div class="user pull-left">
                        <p class="name">阿明</p>
                        <p class="date">2017-6-13 23：45
                            <span>回复</span>
                        </p>
                    </div>
                </div>
                <p class="content">
                    换不厌的春秋和一个等不到的人，错乱我的四季。 每段旅程都会有一个你爱的人，就像双手不会主动拒绝温暖的十指紧扣。
                </p>
            </li>
            <li>
                <div class="portrait_box clearfix">
                    <div class="box_image pull-left">
                        <img src="../../imgs/Demo_moudle.jpg" width="120px" />
                    </div>
                    <div class="user pull-left">
                        <p class="name">阿明</p>
                        <p class="date">2017-6-13 23：45
                            <span>回复</span>
                        </p>
                    </div>
                </div>
                <p class="content">
                    换不厌的春秋和一个等不到的人，错乱我的四季。 每段旅程都会有一个你爱的人，就像双手不会主动拒绝温暖的十指紧扣。
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
	export default {
		name: 'comment',
		props: ['id'],
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
    @import "../../lib/style/color";
    .message_item{
        .title_box{
            position: relative;
            .bliuld{
                position: absolute;
                left: -65px;
                top: .3em;
                color: #ff7300;
                font-size: 16px;
            }
            &:before{
                content: "";
                display: block;
                position: absolute;
                left: -32px;
                top: .5em;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                box-sizing: border-box;
                background-color: #fff;
                border: 4px solid #ff7300;
            }
        }
        .title{
            font-size: 22px;
            font-weight: 400;
        }
        ul li{
            font-size: 15px;
            margin-bottom: 25px;
        }
        .portrait_box{
            .box_image{
                width: 46px;
                height: 46px;
                border-radius: 50%;
                overflow: hidden;
            }
            .user{
                margin-left: 15px;
                p{
                    line-height: 1.5em;
                    color: @text100;
                }
                .name{
                    font-size: 16px;
                }
                .date{
                    span{
                        color: @color808;
                        cursor: pointer;
                    }
                }
            }
        }
        .content{
            color: @text100;
            line-height: 1.5em;
            padding: 10px 0 0 4px;
        }
    }
</style>
