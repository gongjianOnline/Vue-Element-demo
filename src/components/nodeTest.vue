<template>
    <div class="">
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
        }
    },
}
</script>

<style scoped>



</style>