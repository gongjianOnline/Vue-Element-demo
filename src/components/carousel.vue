<template>
  <div class="">
        <div class="block">
            <el-carousel height="400px">
                <el-carousel-item>
                    <div id="ech1" class="ech1"></div>
                </el-carousel-item>
                <el-carousel-item>
                    <div id="ech2" class="ech1"></div>
                </el-carousel-item>
                <el-carousel-item>
                    <div id="ech3" class="ech1"></div>
                </el-carousel-item>
            </el-carousel>
        </div>


  </div>
</template>

<script>
  var echarts = require('echarts/lib/echarts');
  require('echarts/lib/chart/line');
  require("echarts/lib/chart/radar");
  require('echarts/lib/component/title');
  require('echarts/lib/component/tooltip');
  require("echarts/lib/component/toolbox");
  require("echarts/lib/component/grid");
  require("echarts/lib/component/singleAxis");


export default {
  components:{},
  props:{},
  data(){
    return {
        option:{
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }] 
        }
    }
  },
  mounted(){
      setTimeout(()=>{
            this.testech()
      },3000)
  },
  methods:{
      testech(){
        let test = echarts.init(document.getElementById('ech1'));
        test.setOption(this.option)
        let ech2 = echarts.init(document.getElementById('ech2'));
        ech2.setOption(this.option)
        let ech3 = echarts.init(document.getElementById('ech3'));
        ech3.setOption(this.option)
      }
  },
  
}
</script>
<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.ech1{
    height: 100%;
    width: 100%;
}

</style>