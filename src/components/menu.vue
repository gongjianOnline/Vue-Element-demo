<template>
   <div>
       <h3>菜单栏</h3>
        <div class="Outer">
            <el-carousel    height="500px" 
                            indicator-position="none"
                            arrow="never">
            <div class="test">sadasd</div>
                <el-carousel-item v-for="(item,index) in WheelPlanting" :key="index">
                    <img :src="item.bg" alt="" style="width:100%;height:100%">
                </el-carousel-item>
            </el-carousel>
            <div class='Modular' @mouseleave="leaveto()">
                <div class="menu">
                    <div class="menuChild" @mouseenter="enter(0)" @mouseleave="leave(0)">手机&nbsp;&nbsp;电话卡 </div>
                    <div class="menuChild" @mouseenter="enter(1)" @mouseleave="leave(1)">电视&nbsp;&nbsp;盒子 </div>
                    <div class="menuChild" @mouseenter="enter(2)" @mouseleave="leave(2)">笔记本&nbsp;&nbsp;平板 </div>
                    <div class="menuChild" @mouseenter="enter(3)" @mouseleave="leave(3)">家电&nbsp;&nbsp;插线板 </div>
                    <div class="menuChild" @mouseenter="enter(4)" @mouseleave="leave(4)">出行&nbsp;&nbsp;穿戴 </div>
                </div>
                <div class="details" v-show="disappear" @mouseenter="enterto" @mouseleave="leaveto">
                    <div class="details_title">
                        {{title}}  
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    data(){
        return{
           disappear:false,
           WheelPlanting:[
                {bg:require("../assets/1.jpg")},
                {bg:require("../assets/2.jpg")},
                {bg:require("../assets/3.jpg")},
                {bg:require("../assets/4.jpg")}
           ],
           index:null,
           title:null
        }
    },
    mounted(){

    },
    methods:{
        enter(index){
            console.log("鼠标进入");
            this.disappear = true;
            switch (index) {
                case 0:
                    this.title = "手机电话卡"
                    break;
                case 1:
                    this.title = "电视盒子"
                    break;
                case 2:
                    this.title = "笔记本 平板"
                    break;
                case 3:
                    this.title = "家电 插线排"
                    break;
                default:
                    this.title = "出行 穿戴"
                    break;
            }
        },
        leave(index){
            console.log("鼠标移出");
            this.disappear = false;
            this.index = index
        },
        enterto(index){
            console.log("鼠标进入to");
            this.disappear = true;
            var a = $(".menuChild")[this.index];
            a.style.background = "rgb(240, 101, 9)"
            
        },
        leaveto(){
            var a = $(".menuChild")[this.index];
            a.style.background = ""
            this.disappear = false;

        }
    }
}
</script>

<style scoped>
.menu{
    width: 20%;
    height: 500px;
    background: rgba(59, 59, 59,0.7);
    display: flex;
    flex-direction:column 
}
.menuChild{
    width: 70%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
    padding-left: 30%;
    text-align: left
}
.menuChild:hover{
    background: rgb(240, 101, 9)
}
.details{
    width: 40%;
    height: 500px;
    background: #fff;
}
.details_title{
    padding: 10px;
    border-bottom: 1px rgb(80, 79, 79) solid;
}

/* test */
.Outer{
    position:relative
    
}
.Modular{
    width: 100%;
    height: 500px;
    /* opacity: 0; */
    position: absolute;
    top:0px;
    left: 0px;
    z-index: 50;
    display: flex
}

</style>

