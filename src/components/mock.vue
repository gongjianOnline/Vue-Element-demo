<template>
		<div>
			<h3>mock数据自动化</h3>
			<button @click="test">test</button>
		</div>

</template>

<script>
		export default {
			data(){
				return {

				}
			},
			mounted(){},
			beforeDestroy(){},
			methods:{
				test(){
					this.$axios({
					method:'post',
					url:'/news/index'
					}).then((res)=>{
						console.log(res)
					})
				}
			}
		}
</script>

<style scoped>



</style>