<template>
    <div class="banner"></div>
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
    .banner {
        background: url("../../imgs/banner_image.jpg") 0 0 no-repeat;
        background-size: cover;
        background-position: center center;
        height: 540px;
        margin-top: 60px;
        min-width: 640px;
    }
</style>
