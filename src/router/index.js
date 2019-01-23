import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/index.vue'
//用户模块
import login from '../pages/user/login/login.vue'
import userList from '../pages/user/list/list.vue'
import updatepwd from '../pages/user/updatepwd/updatepwd.vue'
import userInfo from '../pages/user/info/info.vue'
import gly from '../pages/user/list/gl.vue'
import register from '../pages/user/register/register.vue'


// import agentEdit from '../pages/agent/agent_edit.vue'
import agent from '../pages/agent/agent.vue'

import wxuserList from '../pages/wxuser/list/list.vue'

import dayin from '../pages/order/dayin.vue'

import jdlist from '../pages/wxuser/jdlist/jdlist.vue'
import shlist from '../pages/wxuser/sh/jdlist.vue'

import orderInfo from '../pages/order/info.vue'




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
          path: '/register',
          name: '用户注册',
          component: register
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
          path: '/agent',
          name: '经纪人列表',
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
          path: '/order/detail',
          name: '项目详情',
          component: orderInfo
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
