<template>
		<div>
			<h3>mock数据自动化</h3>
		</div>

</template>

<script>
		export default {
			data(){
				return {

				}
			},
			mounted(){
				this.$axios({
					method:'get',
					url:''
				}).then((res)=>{
					console.log(res)
				})
			},
			beforeDestroy(){},
			methods:{
				
			}
		}
</script>

<style scoped>



</style>