<template>
	<view v-if="visiable" class="check-img-taost">
			<image src="../../static/car-img.jpeg" mode="" class="car-image"></image>
			<text class="close-btn" @click="handleClose">x</text>
	</view>
</template>

<script>
	export default{
		props :{
			visiable: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleClose() {
				this.$emit('close')
			}
		}
	}
</script>

<style>
	.check-img-taost {
		position: absolute;
		left: 10vw;
		right: 10vw;
		top: 20vh;
		background-color: #fff;
		padding: 20px;
		box-shadow: 2px 2px 2px #dfdfdf;
		width: 80vw;
		box-sizing: border-box;
	}
	.car-image {
		width: 100%;
	}
	.close-btn {
		position: absolute;
		right: 10px;
		top: 10px;
		border-radius: 50%;
		border: 1px solid #666;
		height: 20px;
		line-height: 20px;
		width: 20px;
		text-align: center;
		display: inline-block;
	}
</style>