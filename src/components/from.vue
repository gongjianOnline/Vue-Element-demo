<template>
	<div>
			<h1>element表单提交</h1>
			<div class="bodyBox">
				<el-form ref="form" :model="form" label-width="80px" style="width: 30%">
					
				</style>
					<el-form-item label="产品名称">
						<el-input v-model="form.name"></el-input>
					</el-form-item>

					<el-form-item label="产品范围">
					    <el-select  v-model="form.region" 
					    		 	placeholder="请选择活动区域"
					    		 	style="text-align: left;">
					      <el-option label="区域一" value="shanghai"></el-option>
					      <el-option label="区域二" value="beijing"></el-option>
					    </el-select>
		  			</el-form-item>

		  			<el-form-item label="时间范围">
					    <el-col :span="11">
					      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
					    </el-col>
					    <el-col class="line" :span="2" style="text-align:center">-</el-col>
					    <el-col :span="11">
					      <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
					    </el-col>
		  			</el-form-item>

		  			<el-form-item label="待处理">
		    			<el-switch v-model="form.delivery"></el-switch>
		  			</el-form-item>

		  			 <el-form-item label="产品类别">
					    <el-checkbox-group v-model="form.type">
					      <el-checkbox label="办公" name="type"></el-checkbox>
					      <el-checkbox label="电商" name="type"></el-checkbox>
					      <el-checkbox label="活动" name="type"></el-checkbox>
					      <el-checkbox label="虚拟" name="type"></el-checkbox>
					    </el-checkbox-group>
		  			</el-form-item>

					 <el-form-item label="审批">
					    <el-radio-group v-model="form.resource">
						      <el-radio label="已审批"></el-radio>
						      <el-radio label="未审批"></el-radio>
					    </el-radio-group>
		  			</el-form-item>
					

					<el-form-item label="备注">
		    			<el-input type="textarea" v-model="form.desc"></el-input>
		  			</el-form-item>	


					<el-form-item>
					    <el-button type="primary" @click="onSubmit">立即创建</el-button>
					    <el-button>取消</el-button>
					</el-form-item>
					
				</el-form>	

			</div>


		<h1>原生表单提交</h1>
		<form action="http://localhost:8888/test/text.php" method="post" target="nm_iframe">
			<input type="text" name="contents" value="">
			<input type="submit" value="提交">
		</form>

		<iframe id="id_iframe" name="nm_iframe" style="display:none;"></iframe>



		<h1>原生自定义按钮提交</h1>
			<input type="text" name="contents" v-model="contents"  value="">
			<button @click="btns()">测试提交</button>


		<h1>java表单测试</h1>
		<div>
				<form   action="http://10.3.80.36:8080/diaowen2/login.jsp" 
					method="post"  
					enctype="content-type/x-www-form-urlencoded" 
					id="form">
					<div>
						<label for="username">用户名：</label>
						<input type="text" name="username" id="username">   
					</div>
					<div>
						<label for="password">密码：</label>
						<input type="password" name="password" id="password">
					</div>
					<div>
						<label for="role">角色：</label>
						<input type="text" name="role" id="role">
					</div>
					<!-- <div>
						<input type="submit" value="提交">
					</div> -->
				</form>
				<el-button type="primary" @click="test()">提交</el-button>
		</div>

		
		<h1>上传表单</h1>
		<div>
			<form id="uploadForm"  enctype="multipart/form-data">
				<input type="text" name="user" >
			</form>
			<el-button type="primary" @click="fileTest()">提交</el-button>
		</div>
		

		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				form:{
					name:'',
					region:'',
					date1:'',
					date2:'',
					delivery:'',
					type:[],
					resource:'',
					desc:''
				},
				contents:""




			}
		},

		mounted(){

		},

		methods:{
			onSubmit(){
				console.log(this.form)
			},

			btns(){
				console.log(this.contents);
				this.$axios({
					mathods:"post",
					url:'http://localhost:8888/test/text.php',
					params:{
						contents:this.contents
					}
				}).then((response)=>{
						console.log(response)
				})
			},

			test(){
				$("#form")[0].submit()
			},

			fileTest(){
				console.log("测试");
				console.log($("#uploadForm")[0]);
				let formData = new FormData($("#uploadForm")[0]);
				console.log(formData) 

			}



			
		}

	}



</script>

<style scoped>
	.bodyBox{
		margin-top: 20px;
	}
	

</style>

<style>
	.el-form-item__content{
		text-align: left !important;
	}

</style>