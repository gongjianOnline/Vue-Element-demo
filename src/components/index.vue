<template>
  <div>
      <!-- 布局 -->
      <el-container>
        <el-header class="Header">
           <el-button
            @click="btnMold" 
            icon="el-icon-tickets" 
            circle 
            class="btnMold"></el-button>
            Header
            {{texts}}
        </el-header>
        
        <el-container>
          <el-aside width="200px" class="Aside" style="z-index=50; position: absolute;left: 8px;top: 70px;display: none">
              <div class="btns" @click="btns('Shouye')">首页</div>
              <div class="btns" @click="btns('Baogao')">Element</div>
              <div class="btns" @click="btns('Fenxi')">cookie</div>
              <div class="btns" @click="btns('Axios')">axios</div>
              <div class="btns" @click="btns('Json')">Json</div>
          </el-aside>

          <el-aside width="200px" class="Aside Response">
              <div class="btns" @click="btns('Shouye')">首页</div>
              <div class="btns" @click="btns('Baogao')">Element</div>
              <div class="btns" @click="btns('Fenxi')">cookie</div>
              <div class="btns" @click="btns('Axios')">axios</div>
              <div class="btns" @click="btns('Json')">Json</div>
              <div class="btns" @click="btns('from')">表单</div>
              <div class="btns" @click="btns('Ele_Table')">Elemt表格</div>
              <div class="btns" @click="btns('ele_tabDome')">Elemt表格dome</div>
              <div class="btns" @click="btns('turnPDF')">转换为PDF</div>
              <div class="btns" @click="btns('button')">按钮切换</div>
              <div class="btns" @click="btns('menu')">菜单栏测试</div>
              <div class="btns" @click="btns('Java')">Java测试表格</div>
              <div class="btns" @click="btns('pythontab')">python图片</div>
              <div class="btns" @click="btns('circle')">圆环菜单</div>
              <div class="btns" @click="btns('mock')">数据自动化</div>
              <div class="btns" @click="btns('testBUG')">测试BUG</div>
              <div class="btns" @click="btns('radar')">雷达图刻度测试</div>
              <div class="btns" @click="btns('echmap')">地图测试</div>
              <div class="btns" @click="btns('richtext')">富文本测试</div>
              <div class="btns" @click="btns('progress')">上传进度条测试</div>
              <div class="btns" @click="btns('baiduMap')">百度地图</div>
              <div class="btns" @click="btns('ech3D')">ech3D</div>
              <div class="btns" @click="btns('nodeTest')">nodeTest</div>
              <div class="btns" @click="btns('tabmerge')">表格合并</div>
              
          </el-aside>
          
          <!-- ele_tabDome -->

          <el-main>
            <div class="tagBox">
              <div v-for="(tag,index) in tags" @click="tagbtn(tag.routers)" :key="index"> 
                  <el-tag
                    class="tag"
                    :key="tag.name"
                    closable
                    :type="tag.type"
                    @close="handleClose(tag)">
                    {{tag.name}}
                  </el-tag>
              </div>
            
            </div>
            <router-view></router-view>  
          </el-main>
        
        </el-container>

      </el-container>

      <!-- 模拟移动端模态框 -->
    

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        texts:"sadsa",
        tags: [
            { name: '首页', type:''  ,routers:'Shouye'}
        ],
        dialogVisible: false
    }
  },
  mounted(){
      console.log("index页面函数");
      console.log(this.$cookie.get("tags"));
  },


  methods:{
    btns(name){
      this.$router.push({
        name:name
      })
    },
    tagbtn(name){
      // console.log(name)
      this.$router.push({
        name:name
      })
    },
    handleClose(tag){
      console.log(tag)
      for(let i = 0;i<this.tags.length;i++){
        if(this.tags[i].name==tag.name && i!=0){
              this.tags.splice(i,1);
              var name=this.tags[i-1].routers
              this.$router.push({
                name:name
              })
        }
      }
    },

    // 模态框事件
    btnMold(){
      // console.log("123")
      var elAside = document.getElementsByClassName("Aside")[0];
      if(elAside.style.display == "inline"){
        elAside.style.display = "none"
      }else{
        elAside.style.display = "inline"
      }

    }


  },
  watch:{
    $route(to,from){
      // console.log(to);
      var judge=[];
      for(let i=0;i<this.tags.length;i++){
          if(this.tags[i].name==to.meta.title){
            judge.push("true");
          }else{
            judge.push("false")
          }
      };
      if(judge.indexOf("true")==-1){
          var routeObj = new Object();
          routeObj.name = to.meta.title;
          routeObj.type = '';
          routeObj.routers =to.name;
          this.tags.push(routeObj);
      }
    }
  },

  //在页面销毁前执行
  updated(){
       // console.log("数据更新后");
       var tagjson = JSON.stringify(this.tags);
       // console.log(tagjson);
       this.$cookie.set("tags",tagjson);
  },





}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Header{
  background: #6A5ACD;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Aside{
  background:#5CACEE;
  color:#fff;
}
.btns{
  border-bottom: 1px #fff solid;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.tagBox{
  height: 44px;
  text-align: left;
  display:flex;
  align-items: center;
  box-shadow:1px 1px 5px rgba(0,0,0,0.2);
  padding-left: 2%
}
.tag{
  margin-right: 10px;
  cursor: pointer;
}


/*响应式操作*/
.btnMold{
  display: none;
}
@media(max-width: 960px){
  .Response{
    display: none
  }
  .btnMold{
    display: inline;
  }

}



</style>
