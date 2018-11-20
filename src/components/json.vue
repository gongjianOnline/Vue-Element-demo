<template>
	<div>
		<h1>json请求(动态加载表格数据)</h1>
		<div>
			<button @click="testBtns(2)">测试按钮</button>
			<button @click="testBtns(4)">测试按钮2</button>
		</div>
		
		<!-- 表格 -->
		<div>
			<el-table
			      :data="tableData"
			      align="center"
			      style="width: 100%">
			      <el-table-column
			        prop="date"
			        align="center"
			        label="知识板块">
			      </el-table-column>
			      <el-table-column
			        prop="name"
			        label="知识点">
			      </el-table-column>
			      <el-table-column
			 
			      	align="center"
			      	v-for="(time,index) in namedata"
			      	:key="index"
			        :prop="time.props"
			        :label="time.name">
			      </el-table-column>
    		</el-table>
		</div>



	</div>

</template>




<script>
	export default{
		data(){
			return{
				tableData:[],
				namedata:null
			}
		},
		methods:{
			testBtns(val){
				this.$axios({
					method:'get',
                    url:'',
                    params:{
                        subjectid:val
                    }
				}).then((response)=>{
					//释放表格
					this.tableData = [];

					console.log(response);
					//老师姓名处理
					var name = response.data.data.teacher;
					var namearr = [];
					for(let i=0;i<name.length;i++){
						var nameobj = {};
						nameobj.name = name[i].name;
						nameobj.props = "props"+i;
						nameobj.val = i 
						namearr[i] = nameobj;
					};
					this.namedata = namearr;
					console.log(namearr);

					//表格数据设置
					var table = response.data.data.rs;
					var tableInit = [];
					for(var key in table){
						tableInit.push(table[key])
					};
					console.log("初始化表格数据")
					console.log(tableInit);
					for(let i=0;i<tableInit.length;i++){
						if(i == 0){
							for(let j=0;j<tableInit[i].length;j++){
								var tbObj = {};
								tbObj.date = tableInit[i][j].pla_nam;
								tbObj.name = tableInit[i][j].kon_nam;
								tbObj["props"+0] = tableInit[i][j].proportion;
								this.tableData.push(tbObj);
							}
						}else{
							var tableData = this.tableData;
							for(let j=0;j<tableInit[i].length;j++){
								tableData[j]["props"+this.namedata[i].val] = tableInit[i][j].proportion;
							}
						}
					}
					//最终渲染
					console.log(this.tableData);
				})
			}



		}
	}
</script>

<style scoped>
	

</style>