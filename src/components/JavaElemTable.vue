<template>
    <div>
        <el-table
          :data="tableData"
          style="width: 100%">
            <el-table-column
                label="比例">
                <template slot-scope="scope">
                    <el-input
                        style="width:100px"
                        name="than1"
                        clearable>
                    </el-input>
                    <span>：</span>
                    <el-input
                        style="width:100px"
                        name="than2"
                        clearable>
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column
                label="兑换">
                <template slot-scope="scope">
                    <el-input
                        style="width:100px"
                        name="num"
                        clearable>
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                      <el-button type="danger" plain @click="deleBtn(scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 操作 -->
        <div>
            <el-button type="primary" plain @click="addBtn()">新增</el-button>
            <el-button type="success" plain @click="submit()">提交</el-button>
        </div>
  
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                tableData:[{},{},{},{}]
            }
        },
        mounted(){
        
        },
        //页面销毁前
        beforeDestroy(){
        
        },

        methods:{
            deleBtn(row){ 
                this.tableData.splice(row.$index,1)
            },
            addBtn(){
                this.tableData.push({})
            },
            submit(){
                var than1 = document.getElementsByName("than1");
                var than2 = document.getElementsByName("than2");
                var num = document.getElementsByName("num");
                var len = than1.length;
                var than1Data = [];
                var than2Data = [];
                var numData = [];
                for(let i=0;i<len;i++){
                    than1Data[i] = than1[i].value;
                    than2Data[i] = than2[i].value;
                    numData[i] = num[i].value
                }
                console.log(than1Data);
                console.log(than2Data);
                console.log(numData);

            }
        }

    }
</script>


<style scoped>




</style>