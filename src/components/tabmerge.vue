<template>
    <div class="">
        <el-table
            :data="tableData"
            :span-method="objectSpanMethod"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="name"
                label="综合素质"
                width="180">
            </el-table-column>
            <el-table-column
                prop="label_type"
                label="核心素养">
            </el-table-column>
            <el-table-column
                prop="gradename"
                label="年级">
            </el-table-column>
            <el-table-column
                prop="sum"
                label="得分率">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            tableData:[],
            testData:[], //删选的次数
            testrowIndx:[] //合并的行数
        }
    },

    mounted(){
        this.$axios({
            methods:'get',
            url:'../../static/data/tabData.json'
        }).then((response)=>{
            console.log(response);
            this.tableData = response.data.data
            this. test()
        });
    },

    methods:{
        //数据遍历
        test(){
            var data= this.tableData;
            var testdata = this.testData;
            var sum = 0;
            for(let i=0;i<data.length;i++){
                if(this.testData.indexOf(data[i].name) == -1){
                    for(let j=0 ;j<data.length;j++){
                        if(data[i].name == data[j].name){
                            sum += 1
                        }
                    }
                    this.testData.push(data[i].name);
                    this.testrowIndx.push(sum);
                    sum = 0;
                }else{
                    this.testrowIndx.push(0);
                }
            }
        },

        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if(columnIndex === 0){
                const _row = this.testrowIndx[rowIndex]
                const _col = _row > 0 ? 1 : 0
                return {
                    rowspan: _row,
                    colspan: _col
                }
            }

        },


        


    },
 }
</script>

<style scoped>



</style>