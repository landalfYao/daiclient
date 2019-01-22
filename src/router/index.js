import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/index.vue'
//用户模块
import login from '../pages/user/login/login.vue'
import userList from '../pages/user/list/list.vue'
import updatepwd from '../pages/user/updatepwd/updatepwd.vue'
import userInfo from '../pages/user/info/info.vue'
import gly from '../pages/user/list/gl.vue'



import agentEdit from '../pages/agent/agent_edit.vue'
import agent from '../pages/agent/agent.vue'

import wxuserList from '../pages/wxuser/list/list.vue'

import dayin from '../pages/order/dayin.vue'

import jdlist from '../pages/wxuser/jdlist/jdlist.vue'
import shlist from '../pages/wxuser/sh/jdlist.vue'




Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    
    {
      path: '/',
      name: 'main',
      component: main,
      children: [{
          path: '/user/list',
          name: '业务员列表',
          component: userList
        },
        {
          path: '/user/gl',
          name: '管理员列表',
          component: gly
        },
        {
          path: '/user/info',
          name: '用户信息',
          component: userInfo
        },
        
        {
          path: '/updatepwd',
          name: '修改密码',
          component: updatepwd
        },

        {
          path: '/agent_edit',
          name: '新增代理商',
          component: agentEdit
        },
        {
          path: '/agent',
          name: '代理商列表',
          component: agent
        },
        
        {
          path: '/wxuser_list',
          name: '微信用户',
          component: wxuserList
        },

        {
          path: '/dayin',
          name: '项目列表',
          component: dayin
        },

        {
          path: '/jdlist',
          name: '接单员列表',
          component: jdlist
        },
        {
          path: '/shlist',
          name: '审核列表',
          component: shlist
        },
        
      ]
    }
  ]
})
