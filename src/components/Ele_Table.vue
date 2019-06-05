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
            fadeJson:{},
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
