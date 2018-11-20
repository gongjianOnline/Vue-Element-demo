<template>
    <div id="pdf">
        <h3>转换为pdf</h3>
        <button @click="test">test</button>
        <div class="echar" id="EchLine">
            
        </div>
    </div>

</template>

<script>
import html2Canvas from "html2canvas"
import JsPDF from "jspdf"
export default {
    data(){
        return {
            Line:{
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    label:null,
                    areaStyle: {}
                }]
            }
        }
    },
    mounted(){
        var that = this;
        that.LineInit = function(){
            var Line = this.$echarts.init(document.getElementById("EchLine"));
            Line.setOption(that.Line); 
        }
        that.LineInit()
    },
    methods:{
        test(){
            var that = this;
            console.log("asasd");
            this.Line.series[0].label = {
                normal: {
                    show: true,
                    position: 'top'
                }
            };
            this.LineInit()
            html2Canvas(document.getElementById("pdf")).then(function(canvas){
                let contentWidth = canvas.width;
                let contentHeight = canvas.height;
                let imgWidth = 595.28;
                let imgHeight = 592.28 / contentWidth * contentHeight;
                let pageData = canvas.toDataURL(['image/jpeg', 0]);
                let PDF = new JsPDF('', 'pt', 'a4');
                PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                PDF.save( 'test'+'.pdf');
                that.Line.series[0].label = null;
                that.LineInit();
            });
        },
        // LineInit(){
        //     var Line = this.$echarts.init(document.getElementById("EchLine"));
        //     Line.setOption(this.Line); 
        // }


    }
}
</script>


<style scoped>
    .echar{
        width: 100%;
        height: 500px;
    }
</style>
