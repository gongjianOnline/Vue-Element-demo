<template>
  <div class="hello">
    <el-table 
        :data="plateAll" 
        :span-method="objectSpanMethod" 
        border 
        style="width: 100%">

        <el-table-column 
            prop="mplate_name" 
            label="板块">
        </el-table-column>

        <el-table-column 
            prop="knowledge" 
            label="知识点">
        </el-table-column>

        <el-table-column 
            prop="alls" 
            label="得分">
        </el-table-column>

    </el-table>
  
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        tableIndex: 0, //表格下标
        tableArr: [], //表格的下标数组
        tableAddArr: [], //表格添加下标的数组



        plateAll: [], //表格数据

        fadeJson:{    
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
        }




      }
    },
    methods: {
      objectSpanMethod({row,column,rowIndex,columnIndex}){
        console.log("row");
        console.log(row);
        console.log("column");
        console.log(column);
        console.log("rowIndex");
        console.log(rowIndex);
        console.log("columnIndex");
        console.log(columnIndex);


        if (columnIndex === 0) {
          if (rowIndex > -1) {
            if (this.tableArr.indexOf(rowIndex)!=-1) {
              return {
                rowspan: this.tableAddArr[this.tableArr.indexOf(rowIndex)],
                colspan: 1
              }
            } else {
              return {
                rowspan: 0,
                colspan: 0
              }
            }
          } 
           
          else {
            return {
              rowspan: 0,
              colspan: 0
            }
          }

        }
      }
    },

    created() {
      let plate = this.fadeJson.data.plate;
      console.log("sadsadasdadas")
      console.log(plate);

      plate.forEach((item) => {
    
          this.tableArr.push(this.tableIndex);

          this.tableIndex += item.plate_info.length

          this.tableAddArr.push(item.plate_info.length)

          item.plate_info.forEach(it => {
            it.mplate_name = item.plate_name;
            this.plateAll.push(it);
          })

        }
      );

      // console.log("整理表格");
      console.log(this.tableArr);
      console.log(this.tableAddArr);

    }
  
  
  }
</script>

<style scoped>
  
</style>
