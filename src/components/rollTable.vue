<template>
    <div class="" id="testMole">
        <!-- <el-table
            id="test"
            :data="tableData"
            style="width: 100%"
            height="300px">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table> -->
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>

            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
    </div>
</template>

<script>
export default {
    data() { 
        return {
            options:[],
            value:'',
            tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
    },

    mounted(){
        this.test()
    },

    methods:{
        test(){
            var child1 = document.getElementById('test');
            console.log(child1.scrollTop)
            child1.scrollTop = 20;
            console.log(child1.children[2].scrollHeight)
            // setInterval(function () {
            //    if(parent.scrollTop >= child1.scrollHeight) {
            //        parent.scrollTop = 0;
            //    } else {
            //        parent.scrollTop++;
            //        console.log(parent.scrollTop)
            //    }
            // }, 20);
 
        }
    },
}
</script>

<style scoped>
.test{
    width: 100%;
    height: 300px;
    background: red
}
</style>