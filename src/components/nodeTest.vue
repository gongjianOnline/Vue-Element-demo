<template>
    <div class="margin">
        <div>
            <p>post数据上传测试</p>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="审批人">
                    <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>

        <div>
            <p>post文件上传测试</p>
            <el-upload
                class="upload-demo"
                action="./reg"
                :on-preview="handlePreview">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
             </el-upload>
        </div>

        <div>
            <p>post文件加数据上传测试</p>
            <el-upload
            class="upload-demo"
            :data="formInline"
            ref="upload"
            action="./reg"
            :on-success="joinSuccess"
            :on-error="joinError"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>

        </div>
        
    </div>
</template>

<script>
import qs from "qs"
export default {
    data() { 
        return {
            formInline: {
                user: '',
                region: ''
            }
        }
    },

    mounted(){},

    methods:{
        onSubmit(){
            this.$axios({
                method:'post',
                url:'./a',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'charset':'utf-8'
                },
                transformRequest:[function(data){ //在axios提交到后台前将data数据重新封装成from数据
                        return qs.stringify(data)
                }],
                data:this.formInline
            })
        },
        handlePreview(file) {
            console.log(file);
        },

        submitUpload() {
            this.$refs.upload.submit();
        },
        joinSuccess(){
            console.log("上传成功")
        },
        joinError(){
            console.log("上传失败")
        }
    },
}
</script>

<style scoped>
.margin{
    margin-top: 10px;
}


</style>