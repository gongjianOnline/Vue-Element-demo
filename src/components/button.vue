<template>
  <div>
      <div>
          <el-button 
            v-for="(item,index) in arr"
            :key="index"
            :style="{'border-color':border[index],'background':idx==index?border[index]:''}"
            @click="isActive(index)">{{item}}</el-button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      border:['red','#000',"#eee"],
      arr:['数学','语文','英语'],
      idx:0
    }
  },
  methods:{
        isActive(index){
            console.log(index)
            this.idx = index;
        }
  }
}
</script>

<style scoped>
.active{
            background-color: pink;
        }
</style>
