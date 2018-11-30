<template>
   <div>
       <h3>菜单栏</h3>
       <div class="Modular">
           <div class="menu">
               <div class="menuChild" @mouseenter="enter(1)" @mouseleave="leave(1)">菜单一</div>
           </div>
           <div class="details" v-show="disappear" @mouseenter="enter()" @mouseleave="leave()">
               <div class="details_title">
                    新旗舰   
               </div>
           </div>
       </div>


   </div>
</template>

<script>
export default {
    data(){
        return{
           disappear:false
        }
    },
    mounted(){

    },
    methods:{
        enter(){
            console.log("鼠标进入");
            this.disappear = true;
        },
        leave(){
            console.log("鼠标移出");
            this.disappear = false;
        },
    }
}
</script>

<style scoped>
.Modular{
    width: 100%;
    height: 500px;
    background: rgb(3, 174, 241);
    display: flex
}
.menu{
    width: 30%;
    height: 500px;
    background: rgb(59, 59, 59);
    display: flex;
    flex-direction:column 
}
.menuChild{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
}
.menuChild:hover{
    background: rgb(240, 101, 9)
}
.details{
    width: 70%;
    height: 500px;
    background: #fff;
    opacity:0.9;
}
.details_title{
    padding: 10px;
    border-bottom: 1px rgb(80, 79, 79) solid;
}


</style>

