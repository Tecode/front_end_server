<template>
    <div class="login">
        44
        4
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
    .login{
        position: fixed;
        top: 60px;
        left: 50%;
        margin-left: -180px;
        z-index: 1000;
        width: 320px;
    }
    body{
        overflow: hidden;
    }
</style>
