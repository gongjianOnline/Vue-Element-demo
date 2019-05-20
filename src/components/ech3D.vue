<template>
    <div class="test" id="test">
        
    </div>
</template>
<script>
import bmap from "../../static/map/bmap.js";
import echartsGl from "../../static/map/echarts-gl.js"
var echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/chart/radar");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
    require("echarts/src/config.js");
export default {
    data() { 
        return {
        }
    },

    mounted(){
    var myChart = echarts.init(document.getElementById('test'));    
    // 
    var option = {
            geo3D: {
            map: 'world',
            shading: 'realistic',
            silent: true,
            environment: '#333',
            realisticMaterial: {
                roughness: 0.8,
                metalness: 0
            },
            postEffect: {
                enable: true
            },
            groundPlane: {
                show: false
            },
            light: {
                main: {
                    intensity: 1,
                    alpha: 30
                },
                ambient: {
                    intensity: 0
                }
            },
            viewControl: {
                distance: 70,
                alpha: 89,

                panMouseButton: 'left',
                rotateMouseButton: 'right'
            },

            itemStyle: {
                areaColor: '#000'
            },

            regionHeight: 0.5
        }

        };
        myChart.setOption(option);

    },

    methods:{
        test(){
            console.log("asasad")
        }
    },
 }
</script>

<style scoped>
.test{
    width: 100%;
    height: 1000px;
}


</style>