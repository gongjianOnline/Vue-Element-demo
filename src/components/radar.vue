<template>
  <div class="">
      雷达图刻度测试
    <div id="option" class="radar"></div>
  </div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/chart/radar");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
    require("echarts/src/config.js");
export default {
    data() { 
        return {
            option:{
                title: {
                    text: '基础雷达图'
                },
                tooltip: {},
                legend: {
                    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                },
                radar: {
                    name: {
                        textStyle: {
                            color: '#fff',
                            backgroundColor: '#999',
                            borderRadius: 3,
                            padding: [3, 5]
                        }
                    },
                    indicator: [
                        { name: '销售（sales）', max: 6500},
                        { name: '管理（Administration）', max: 16000},
                        { name: '信息技术（Information Techology）', max: 30000},
                        { name: '客服（Customer Support）', max: 38000},
                        { name: '研发（Development）', max: 52000},
                        { name: '市场（Marketing）', max: 25000}
                    ],
                   
                    axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
                        show:true,
                        color:'#333',
                        showMinLabel: false
                    },
                },
                series: [{      
                    name: '预算 vs 开销（Budget vs spending）',
                    type: 'radar',
                    data : [
                        {
                            value : [4300, 10000, 28000, 35000, 50000, 19000],
                            name : '预算分配（Allocated Budget）'
                        },
                        {
                            value : [5000, 14000, 28000, 31000, 42000, 21000],
                            name : '实际开销（Actual Spending）'
                        }
                    ]
                }]
            }
        }
    },

    mounted(){
        var myChart1 = echarts.init(document.getElementById('option'));
        myChart1.setOption(this.option);

    },

    methods:{},
 }
</script>

<style scoped>
.radar{
    width:100%;
    height:800px
}
</style>