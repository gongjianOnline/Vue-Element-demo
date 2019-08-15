<template>
  <div>
        报告

        <!-- 上传 -->
        <div class="margin">
            <h2>上传</h2>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
              :on-change="uploadChange"
              :onSuccess="uploadSuccess"
              :onError="uploadError"
              :on-progress="uploadProgress"
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>

        <!-- 表格分页 -->
        <div class="margin">
            <h2>表格分页</h2>
            <el-table
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                style="width: 100%">
                    <el-table-column
                      prop="date"
                      align="center"
                      label="日期">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      align="center"
                      label="姓名">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      align="center"
                      label="地址">
                    </el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-pagination
                layout="total, sizes, prev, pager, next, jumper"
                :page-sizes="[2, 5, 6, 10]"
                :page-size="pagesize"
                :current-page="currentPage"
                @current-change="currentFy"
                @size-change="handleSizeChange"
                :total="tableData.length">
            </el-pagination>
        </div>

<!-- 表格动态加载表头数据 -->
        <div class="margin">
            <h2>表格动态加载表头数据</h2>
            <el-table
                :data="dynamicTable"
                style="width: 100%">
                  <el-table-column
                    prop="date"
                    align="center"
                    label="时间">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    align="center"
                    label="姓名">
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    align="center"
                    label="地址">
                  </el-table-column>
            </el-table>
        </div>

        <!-- 多级联动 -->
        <div>
          <h3>多级联动测试</h3>  
          <el-cascader
            :options="options"
            :props="props"
            @change="handleChange">
          </el-cascader>
        </div>

        <div>
          <h3>按钮模仿验证限制请求时长</h3>
          <el-button type="success" @click="verificationFun()" :disabled="verdis">
            获取验证码 
            <span v-show="count!==0">({{count}})</span>
          </el-button>
        </div>

        

        
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
     fileList:[],//上传

     currentPage:1,//显示当前页页数
     pagesize:2,//显示的条数
     tableData:[ //表格数据
        {
          date:'2018-7-17',
          name:'aaa',
          address:'aaa'
        },
        {
          date:'2018-7-18',
          name:'bbb',
          address:'bbb'
        },
        {
          date:'2018-7-18',
          name:'ccc',
          address:'ccc'
        },
        {
          date:'2018-7-18',
          name:'ddd',
          address:'ddd'
        },{
          date:'2018-7-18',
          name:'fff',
          address:'fff'
        },
        {
          date:'2018-7-18',
          name:'zzz',
          address:'zzz'
        }
     ],

     //表格动态生成
     dynamicTable:[],//表格数据
     teacher:[
            {
                "teacherid": "1",
                "classid": "3",
                "name": "666"
            },
            {
                "teacherid": "7",
                "classid": "2",
                "name": "曹伟谦"
            },
            {
                "teacherid": "13",
                "classid": "3",
                "name": "黄兴华"
            },
            {
                "teacherid": "123",
                "classid": "2",
                "name": "666"
            }
     ],

     rs:[
          [
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                }
              ],
              [
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                }
        ],
              [
              {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
              },
              {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
              },
              {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
              },
              {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
              }
        ],
            [
            {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                },
                {
                    "pla_nam": "test",
                    "kon_nam": "test",
                    "proportion": "test",
                    "claid": "test",
                    "teacherid": "test"
                }
        ]      
     ],

    //多级联动
    options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
        }]
    }],
    selectedOptions: [],
    //将所有需要的字段都改成
    props:{
        label:"label",
        value:"label",
        children:'children'
    },

    //验证限制参数
    count:0,
    verdis:false


    }
  },

  mounted(){
      // 表格初始化数据
      var data = this.rs
      var rsData = new Array();
     
    for(var i=0;i<data.length;i++){
         if(i == 0){
            for(var j=0 ;j<data[i].length;j++){
                var interimObj = new Object();
                interimObj.pla_nam = data[i][j].pla_nam;
                interimObj.kon_nam = data[i][j].kon_nam;
                interimObj.proportion0 = data[i][j].proportion;
                rsData.push(interimObj)
            }
        }else{
          var num = 1
          var name = "proportion" + num;
          for(var k=0 ;k<data[i].length;k++){
             rsData[k][name] = data[i][k].proportion;
          };
          num ++
          name = name.substr(0,9);
          name = name+num;
        }
         
    }
    // console.log(rsData)
        
      

      

  },


  methods:{
    // 上传事件
    uploadSuccess(response, file, fileList){
        console.log("上传成功的回调");
        console.log(response);
        console.log(file);
        console.log(fileList);
    },
    uploadError(esponse, file, fileList){
        console.log("上传失败的回调")
    },
    uploadProgress(event, file, fileList){
      console.log("上传时的回调");
      console.log(event);
      console.log(file);
      console.log(fileList);
    },
    uploadChange(file, fileList){
      console.log("文件更改状态是触发")
      console.log(file);
      console.log(fileList)
    },

    //表格分页事件
    currentFy(currentPage){
      console.log("currentPage 当前页改变时会触发");
      this.currentPage = currentPage;
    },
    handleSizeChange(size){
      console.log("pageSize 每页条数改变时会触发");
       this.pagesize = size;
    },

    //多级联动
    handleChange(label) {
        console.log(label);
        this.selectedOptions = label;
        console.log("得到的联动Value");
        console.log(this.selectedOptions);
    },

    //验证码限制时间
    verificationFun(){
      this.count = 30;
      this.verdis = true;
      var timers = setInterval(()=>{
        if(this.count<=1){
          console.log("定时器停止");
          this.verdis = false;
          this.count = 0;
          clearInterval(timers);
        }else{
          this.count --
          console.log(this.count)
        }
      },1000)
    }



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.margin{
  margin-top: 20px
}



</style>
 