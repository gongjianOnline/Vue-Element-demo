<template>
		<div class="Div">

			python
			<h3>图片放大</h3>
			<div class="imgDiv">
				<img :src="img" alt="" v-image-preview style >
			</div>
			<h3>可拖动图片放大</h3>
			<div class="imgDiv">
				<img :src="img" alt="" preview="0" preview-text="">
				<img :src="img" alt="" preview="1" preview-text="">
				<img :src="img" alt="" preview="2" preview-text="">
				<img :src="img" alt="" preview="3" preview-text="">
				<img :src="img" alt="" preview="4" preview-text="">
			</div>
			
		</div>

</template>

<script>
		export default {
			data(){
				return {
					img:require('../assets/1.jpg')
				}
			},
			mounted(){},
			beforeDestroy(){},
			methods:{
				
			}
		}
</script>

<style scoped>

.Div{
	min-height:620px;
}
.imgDiv{
	width:80%;
	height:400px;
	background:red
}
img{
	width:100%;
	height:100%;
}

</style>