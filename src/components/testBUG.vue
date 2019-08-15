<template>
    <div class="">
        <div>
            <el-radio-group v-model="classCity">
                <el-radio :label="7" @change="btns()">test1</el-radio>
                <el-radio :label="5" @change="btns()">test2</el-radio>
            </el-radio-group>
        </div>
        <div>
            <el-radio-group v-model="subjectId">
                <el-radio :label="6" @change="btns()">test一</el-radio>
                <el-radio :label="3" @change="btns()">test二</el-radio>
                <el-radio :label="5" @change="btns()">test三</el-radio>
            </el-radio-group>
        </div>
    
        <div id="barTest" class="echarts"></div>
    </div>
</template>


<script>
var echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/chart/radar");
    // 引入提示框和标题组件
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
var ecConfig = require('echarts/lib/config');
export default {
    data() { 
        return {
            classCity:7,
            subjectId:6,
            testEchar:{
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            
                        type : 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
                },
                xAxis:  {
                    type: 'category',
                    data: ['周一','周二','周三','周四','周五','周六','周日'] 
                },
                yAxis: {
                     type: 'value',
                },
                series: [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'联盟广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'视频广告',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            }

        }
    },

    mounted(){
        this.barGenerateFun()
    },

    methods:{
        barGenerateFun(){
            var that = this;
            var test = echarts.init(document.getElementById('barTest'));
            test.setOption(this.testEchar);
            /*给图例添加点击事件*/
            test.on('legendselectchanged', function(obj) {
                console.log(that.testEchar)
            })
        },
        btns(){
            /*清空echarts所用数据*/
            var test = echarts.init(document.getElementById('barTest'));
            test.clear(this.testEchar);
            this.barGenerateFun()
        },
        
    }
 }
</script>

<style scoped>
    .echarts{
        width:100%;
        height: 800px;
    }

</style>

/* 
    创建时间：2019-2-21;
    内容：测试项目中，出现的切换数据溢出
    解决：清空echarts图表中的缓存
    test.clear(this.testEchar);
*/