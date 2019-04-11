<template>
  <div>
	   <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
		<el-button type="primary" @click="submit()">测试按钮</el-button>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
	components:{
		quillEditor
	},
    data() { 
        return {
			content:'测试文档',
			editorOption:{}
		}
    },

    mounted(){
	},
        

    methods:{
		onEditorReady(editor) {
			console.log(editor)
		}, // 准备编辑器
    	onEditorBlur(){}, // 失去焦点事件
    	onEditorFocus(){}, // 获得焦点事件
		onEditorChange(){}, // 内容改变事件
		submit(){
			console.log("测试按钮");
			console.log(this.content)
		}
	},
	computed:{
		editor() {
            return this.$refs.myQuillEditor.quill;
        }
	}
 }
</script>

<style scoped>



</style>