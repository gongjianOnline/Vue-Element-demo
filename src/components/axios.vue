<template>	
		<div>
			<h1>该axios已经设置本地API代理</h1>
			<button @click="btns()">click</button>
		</div>	
</template>

<script>
	
	export default {
		data(){
			return{

			}
		},
		methods:{
			btns(){
				this.$axios({
					methods:"get",
					url:'jurisdiction/page_permissions.php',
					params:{
						id:1
					}
				}).then((response)=>{
					console.log(response)
				})
			}
		}
	}
</script>