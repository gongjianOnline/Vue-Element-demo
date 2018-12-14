import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Shouye from '@/components/shouye'
import Baogao from '@/components/baogao'
import Fenxi from '@/components/fenxi'
import Axios from '@/components/axios'
import Json from '@/components/json'
import From from '@/components/from'
import Ele_Table from '@/components/Ele_Table'
import Ele_TableDome from '@/components/ele_tabDome'
import TurnPDF from "@/components/turnPDF"
import Button from "@/components/button"
import Menu from "@/components/menu"
import JavaElementTable from "@/components/JavaElemTable"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
      	{
      		path:'/',
      		name: 'Shouye',
      		component: Shouye,
          meta:{title:'首页'},
      	},
      	{
      		path:'/index/baogao',
      		name: 'Baogao',
      		component: Baogao,
          meta:{title:'Element'},
      	},
      	{
      		path:'/index/fenxi',
      		name: 'Fenxi',
      		component: Fenxi,
          meta:{title:'cookie'},
      	},
        {
          path:'/index/axios',
          name: 'Axios',
          component: Axios,
          meta:{title:'接口请求'},
        },
        {
          path:'/index/json',
          name: 'Json',
          component: Json,
          meta:{title:'动态加载表头数据'},
        },
        {
          path:'/index/from',
          name: 'from',
          component: From,
          meta:{title:'表单请求'},
        },
        {
          path:'/index/Ele_Table',
          name: 'Ele_Table',
          component: Ele_Table,
          meta:{title:'ELemt表格合并'},
        },
        {
          path:'/index/ele_tabDome',
          name: 'ele_tabDome',
          component: Ele_TableDome,
          meta:{title:'ELemt表格合并深入'},
        },
        {
          path:'/index/turnPDF',
          name:'turnPDF',
          component:TurnPDF,
          meta:{title:'转换为PDF'}
        },
        {
          path:'/index/button',
          name:'button',
          component:Button,
          meta:{title:'按钮切换'}
        },
        {
          path:'/index/menu',
          name:'menu',
          component:Menu,
          meta:{title:'测试菜单'}
        },
        {
          path:'/index/java',
          name:'Java',
          component:JavaElementTable,
          meta:{title:'Java项目表格demo'}
        }
      ]
    }
  ]
})
