<template>	
		<div>
			圆环菜单
			<circle-menu type="bottom" :number="2" color="['rgb(255, 255, 102)','rgb(255, 255, 102)']" circle>
			    <!-- <el-button type="primary" icon="el-icon-plus" circle slot="item_btn"></el-button> -->
			    <a slot="item_1" class="fa fa-twitter fa-lg" herf="#" ></a>
			   <!--  <a slot="item_2" class="fa fa-weixin fa-lg" herf="#" ></a>
			    <a slot="item_3" class="fa fa-weibo fa-lg" herf="#" ></a> -->
			    <!-- <a slot="item_4" class="fa fa-github fa-lg" herf="#" ></a> -->
		  </circle-menu>

		</div>	
</template>

<script>
	
	export default {
		data(){
			return{

			}
		},
		methods:{}
	}
</script>