<template>
	<view class="add-free-car">
		<form @submit="handleSubmit">
			<view class="uni-form-item uni-column">
				<text class="label">施工单位：</text>
				<input v-model="form.companey" class="uni-input" name="input" placeholder="请输入" />
			</view>
			<view class="uni-form-item uni-column">
				<text class="label">车牌号码：</text>
				<input v-model="form.license" class="uni-input" name="input" placeholder="请输入" />
			</view>
			<view class="uni-form-item uni-column">
				<text class="label">免费开始区间：</text>
				<input v-model="form.entire" class="uni-input" name="input" placeholder="请输入" />
			</view>
			<view class="uni-form-item uni-column">
				<text class="label">免费结束区间：</text>
				<input v-model="form.destination" class="uni-input" name="input" placeholder="请输入" />
			</view>
			<view class="uni-form-item uni-column">
				<text class="label">免费开始时间：</text>
				<input v-model="form.startTime" class="uni-input" name="input" placeholder="请输入" />
			</view>
			<view class="uni-form-item uni-column">
				<text class="label">免费结束时间：</text>
				<input v-model="form.endTime" class="uni-input" name="input" placeholder="请输入" />
			</view>
			<view class="uni-form-item uni-column">
				<text class="label">下发时间：</text>
				<input v-model="form.publicTime" class="uni-input" name="input" placeholder="请输入" />
			</view>
			<button form-type="submit" class="create-btn">创建</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					companey: '中心',
					license: '鄂B8R713',
					startTime: '2024年6月1',
					endTime: '2024年6月30',
					entire: '黄石',
					destination: '散花',
					publicTime: '2024年5月10'
				}
			}
		},
		methods: {
			handleSubmit() {
				uni.showToast({
					title: '创建成功',
					mask: true,
					success: () => {
						setTimeout(()=> {
							uni.navigateBack()
						},1000)
					}
				})
			},
		}
	}
</script>

<style>
	.add-free-car {
		/* padding: 15px; */
	}

	.uni-column {
		border-bottom: 1px solid #dfdfdf;
		margin-bottom: 6px;
	}

	.label {
		margin: 0 15px;
		color: #666;
	}

	.uni-input {
		padding: 4px 15px;
		background-color: #fff;
		height: 30px;
		line-height: 30px;
	}

	.create-btn {
		margin: 20px 15px;
		background-color: darkorange;
		color: #fff;
	}
</style>