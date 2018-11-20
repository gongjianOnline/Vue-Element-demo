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

//转换为pdf



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
