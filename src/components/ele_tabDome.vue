<template>
	<div class="DIV_box">

		<el-table
		      	:data="tableData"
		      	:span-method="objectSpanMethod"
		      	style="width: 100%">
      			
      			<el-table-column
      				align="center"
			        prop="daName"
			        label="板块">
      			</el-table-column>
			    
			    <el-table-column
			    	align="center"
			        prop="knowledge"
			        label="知识点">
			    </el-table-column>

			    <el-table-column
			    	align="center"
			        prop="alls"
			        label="得分">
			    </el-table-column>

    	</el-table>	
	
	</div>
</template>

<script>
	export default {
		data (){
			return{
				//测试数据
				response:{},
        		tableData:[], //表格数据
        		tableIndex:0, //表格行数计数器
        		tablearr:[],//表格数组查找下标
        		tableAddArr:[]//表格数组储存行数
			}
		},

		//钩子函数
		created(){

			var data = this.response.data.plate;
			var table = [];

      console.log("数据测试");
			console.log(data);

			for(var i=0 ;i<data.length;i++){
				this.tablearr.push(this.tableIndex);
				this.tableIndex += data[i].plate_info.length;
				this.tableAddArr.push(data[i].plate_info.length)

				for(var j=0;j<data[i].plate_info.length;j++){
					data[i].plate_info[j].daName = data[i].plate_name;
					table.push(data[i].plate_info[j])
				}
			}

			console.log("初始化数据");
			console.log(table);
			this.tableData = table;
		
    },

		//事件绑定
		methods:{
				
			objectSpanMethod({row, column, rowIndex, columnIndex}){
				if(columnIndex === 0){
					if(rowIndex>-1){
						if(this.tablearr.indexOf(rowIndex) != -1){
								return{
									rowspan:this.tableAddArr[this.tablearr.indexOf(rowIndex)],
									colspan:1
								}
						}else{
							return {
								rowspan:0,
								colspan:0
							}
						}
					}else{
						return {
							rowspan:0,
							colspan:0
						}
					}
				}

			}


		}

	}

</script>

typeScript  

<style scoped>

	.DIV_box{
		margin-top: 20px;
	}




</style>