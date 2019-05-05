<template> 	
	<div>
		<div>进度条</div>
		<div>
			<el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="label"
		        label="日期">
		      </el-table-column>
		      <el-table-column
		        label="操作">
		        	<template slot-scope="scope">
				        <el-button
				          size="mini"
				          @click="test(scope.$index, scope.row)">立即处理</el-button>
				          <i	class="el-icon-loading" 
				          				v-show="scope.row.show"
				          				style="border:none" 
				          				circle></i>
				          <span style="color:#a0a1a4" v-show="scope.row.show">正在处理中...</span>
				          <el-progress  :percentage="scope.row.percentage"
				          				:text-inside="true"
				          				:stroke-width="18"
				          				:status="scope.row.percentage>94?'success':'text'" 
				          				v-show="scope.row.show"></el-progress>
			      </template>
		      </el-table-column>
		    </el-table>
		</div>
		<div>
			<el-table
			    ref="multipleTable"
			    :data="tableData"
			    tooltip-effect="dark"

			    style="width: 100%">
			    <el-table-column
			      selected='true'
			      type="selection"
			      width="55">
			    </el-table-column>
			    <el-table-column
			    	prop="label"
			      	label="日期"
			      	width="120">
			    </el-table-column>
			 </el-table>
		</div>

	</div>




</template> 

<script> 
export default { 
	name: '', 
	data(){ 
		return { 
			tableData:[
				{
					label:'测试一',
					show:false,
					percentage:0
				},
				{
					label:'测试er',
					show:false,
					percentage:0
				},
				{
					label:'测试san',
					show:false,
					percentage:0
				}
			],
		    multipleSelection: [
		    	{
					label:'测试er',
					show:false,
					percentage:0
				},
				{
					label:'测试san',
					show:false,
					percentage:0
				}
		    ]
		}; 
	}, 
	mounted(){
		for(let i =0;i<this.multipleSelection.length;i++){
			for(let j=0;j<this.tableData.length;j++){
				if(this.multipleSelection[i].label == this.tableData[j].label){
					this.$refs.multipleTable.toggleRowSelection(this.tableData[j])
				}
			}
		}
		
	},
	methods: { 
		test(index,row){
			row.show = true;
			var timer = setInterval(()=>{
				if(row.percentage >94){
					clearInterval(timer)
				}else{
					let num = parseInt(Math.random()*(3-0+1)+0);
					row.percentage += num
				}	
			},3000);
		},

		//测试


	} 
}
</script> 

<style scoped> 

</style> 



