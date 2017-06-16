<template>
    <div class="discover_box">
        <banner></banner>
        <div class="container">
            <div class="row">
                <div class="col-md-12 item_box">
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                    <single-item></single-item>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from '../components/discoverer/Banner.vue'
    import SingleItem from '../components/common/SingleItem.vue'
	export default {
		name: 'comment',
			components: {
			Banner,
			SingleItem
			},
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

<style lang="less">
    @import "../lib/style/color";
    .discover_box{
        margin-top: 60px;
        .item_box{
            background-color: @white100;
            padding: 10px 0;
            margin: 20px 0;
            border-radius: @border-radius6;
        }
    }
</style>
