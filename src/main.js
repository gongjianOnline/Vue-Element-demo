// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookie from 'vue-cookie'
import $ from 'jquery'

import axios from 'axios'
Vue.prototype.$axios= axios

import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.use(Element);
Vue.config.productionTip = false;

Vue.use(VueCookie);

//MD5加密
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

//3DES加密

//eacher
import echarts from 'echarts'
Vue.prototype.$echarts = echarts //引入组件

//图片放大插件
import vueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(vueDirectiveImagePreviewer)

//图片放大移动插件
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

//手机端圆环菜单
import CircleMenu from 'vue-circle-menu'
Vue.component('CircleMenu', CircleMenu)

//引入mock
require('./mock.js')

//vue富文本框
// import VueQuillEditor  from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css' 
// Vue.use(VueQuillEditor);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
