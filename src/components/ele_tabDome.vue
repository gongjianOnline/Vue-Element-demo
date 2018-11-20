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
					response:{    
  "data": {        
      "plate": [{                
              "plate_name": "常见有机物及其应用",
                              "plate_info": [                    {                        
                "knowledge": "苯的同系物",
                                        "alls": "10",
                                        "gets": "5",
                                        "bili": "10"                    
              },                      {                   
                "knowledge": "辨识简单有机化合物的同分异构体",
                                        "alls": null,
                                        "gets": null,
                                        "bili": null                    
              },                      {     
                "knowledge": "乙醇的工业制法",
                                        "alls": null,
                                        "gets": null,
                                        "bili": null                    
              }                ]            
            },              {                
              "plate_name": "化学综合计算",
                              "plate_info": [                    {                        
                "knowledge": "有关混合物反应的计算",
                                        "alls": "16",
                                        "gets": "8",
                                        "bili": "16"                    
              }                ]            
            },              {                
              "plate_name": "化学基本概念和基本理论",
                              "plate_info": [                    {                        
                "knowledge": "电极反应和电池反应方程式",
                                        "alls": null,
                                        "gets": null,
                                        "bili": null                    
              },                      {                        
                "knowledge": "离子方程式的有关计算",
                                        "alls": "26",
                                        "gets": "17",
                                        "bili": "26"                    
              }                ]            
            },              {                
              "plate_name": "化学实验",
                              "plate_info": [                    {                        
                "knowledge": "苯酚的显色反应",
                                        "alls": null,
                                        "gets": null,
                                        "bili": null                    
              },                      {                        
                "knowledge": "探究卤素单质间的置换反应",
                                        "alls": "9",
                                        "gets": "9",
                                        "bili": "9"                    
              }                ]            
            },              {                
              "plate_name": "物质结构与性质",
                              "plate_info": [                    {                        
                "knowledge": "元素周期律和元素周期表的综合应用",
                                        "alls": null,
                                        "gets": null,
                                        "bili": null                    
              },                      {                        
                "knowledge": "共价键的形成及共价键的主要类型",
                                        "alls": "27",
                                        "gets": "27",
                                        "bili": "27"                    
              }                ]            
            },              {                
              "plate_name": "金属的冶炼及物质的制取",
                              "plate_info": [                    {                        
                "knowledge": "铜的电解精炼",
                                        "alls": "9",
                                        "gets": "9",
                                        "bili": "9"                    
              }                ]            
            },              {                
              "plate_name": "有机化学基础",
                              "plate_info": [                    {                        
                "knowledge": "消去反应与水解反应",
                                        "alls": null,
                                        "gets": null,
                                        "bili": null                    
              }                ]            
            }]   
          }
        },



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