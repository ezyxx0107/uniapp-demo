<template>
	<view class="content">
		<view class="search">
			<input v-model="searchValue" class="search-input" placeholder="请输入车牌号" @confirm="handleSearch" />
			<text class="search-btn" @click="handleSearch">搜索</text>
		</view>
		<view class="list">
			<view v-for="(item,index) in list" :key="index" class="item">
				<view>
					<text class="label">施工单位：</text>{{item.companey}}
				</view>
				<view>
					<text class="label">车牌号码：</text>{{item.license}}
				</view>
				<view>
					<text class="label">免费区间：</text>{{item.entire}} - {{item.destination}}
				</view>
				<view>
					<text class="label">免费时间：</text>{{item.startTime}} - {{item.endTime}}
				</view>
				<view>
					<text class="label">下发时间：</text>{{item.publicTime}}
				</view>
			</view>
		</view>

		<navigator url="/pages/add-free-car/add-free-car" hover-class="other-navigator-hover">
			<view class="add-btn">
				+
			</view>
		</navigator>
	</view>
</template>

<script>
	import {
		defaultList
	} from './constant.js'
	export default {
		data() {
			return {
				list: defaultList,
				searchValue: ''
			}
		},
		onLoad() {

		},
		methods: {
			handleSearch() {
				const {
					searchValue
				} = this;
				this.list = defaultList.filter((e) => e.license.indexOf((searchValue)) > -1)
			}
		}
	}
</script>

<style>
	.content {
		padding: 15px;
		position: relative;
		margin-bottom: 20px;
	}

	.search {
		position: fixed;
		left: 15px;
		right: 15px;
		top: 0;
		background-color: #fff;
		border: 1px orange solid;
		border-radius: 50px;
		height: 36px;
		line-height: 36px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 12px;
		box-shadow: 0 2px 2px #dfdfdf;
	}

	.search-btn {
		background-color: orange;
		border-radius: 0 50px 50px 0;
		color: #fff;
		padding: 0 10px;
	}

	.list {
		margin-top: 30px;
	}

	.item {
		background-color: #fff;
		border-radius: 10px;
		margin: 10px 0;
		padding: 15px;
	}

	.label {
		color: #666;
	}

	.add-btn {
		border-radius: 50%;
		background-color: darkorange;
		font-weight: bolder;
		font-size: 30px;
		position: fixed;
		right: 10px;
		bottom: 20px;
		color: #fff;
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
</style>