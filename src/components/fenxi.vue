<template>
  <div>
        分析
        <button @click="btns" class="getcookieBtn">获取cookie</button>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        cookData:"数据测试12323"
    }
  },
  mounted(){
    var data ={
      name:"肖乐平",
      age:29,
      techer:"刘"
    }
    data = JSON.stringify(data);
    // console.log(data)
    this.$cookie.set("userName",'肖乐平');
    this.$cookie.set("userData",data);

    // console.log("测试数据");
    // console.log(this.$cookie.get("kData"))
  },

  //在页面销毁前执行
  beforeDestroy(){
      // var that = this;
       // console.log("销毁前");
       // console.log(this.cookData);
       this.$cookie.set("kData",this.cookData);
  },

  methods:{
    btns(){
      // console.log("获取cookie");
      // console.log(this.$cookie.get("userName"));
      // console.log(this.$cookie.get("userData"));
      // console.log($(".getcookieBtn"));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>