const nav = {
  topNav: [{
      label: "平台管理",
      path: "item1"
    },
    {
      label: "内部管理",
      path: "item2"
    }
  ],
  //dtype 1 仅管理管  2 仅城市代理  3仅校园代理  4 全部 -1 城市和校园
  item1: [{
    label: "项目管理",
    sub: [{
      label: "项目列表",
      path: "/dayin",
      icon: "ios-list-box-outline"
    }]
  }, {
    label: "轮播图管理",
    sub: [{
      label: "轮播图列表",
      path: "/carousel",
      icon: "ios-list-box-outline"
    }, {
      label: "新增轮播图",
      path: "/carouselEdit",
      icon: "ios-list-box-outline"
    }]
  },{
    label: "银行通讯录",
    sub: [{
      label: "银行列表",
      path: "/bank",
      icon: "ios-list-box-outline"
    }, {
      label: "新增银行",
      path: "/bank_edit",
      icon: "ios-list-box-outline"
    }]
  }, {
    label: "员工管理",
    sub: [{
        label: "经纪人",
        path: "/agent",
        icon: "ios-person-outline"
      },
      {
        label: "业务员",
        path: "/user/list",
        icon: "ios-person-add-outline"
      },
      // {
      //   label: "管理员",
      //   path: "/user/gl",
      //   icon: "ios-person-add-outline"
      // }
    ]
  }, {
    label: "微信用户",
    sub: [{
      label: "用户列表",
      path: "/wxuser_list",
      icon: "ios-person-add-outline"
    }]
  }, {
    label: "账户",
    sub: [{
      label: "我的账户",
      path: "/wallet",
      icon: "ios-person-add-outline"
    }]
  }, {
    label: "新闻管理",
    sub: [{
      label: "新闻列表",
      path: "/rich",
      icon: "ios-list-box-outline"
    }, {
      label: "新增新闻",
      path: "/richEdit",
      icon: "ios-list-box-outline"
    }]
  },],

  daili1: [{
      label: "总览",
      sub: [{
        label: "代理总览",
        path: "/agentview",
        icon: "ios-podium-outline"
      }]
    },
    {
      label: "接单员管理",
      sub: [{
          label: "接单员列表",
          path: "/jdlist",
          icon: "ios-list-box-outline"
        },
        {
          label: "审核列表",
          path: "/shlist",
          icon: "ios-list-box-outline"
        }
      ]
    },
    {
      label: "订单管理",
      sub: [{
          label: "快递代取订单",
          path: "/daiqu",
          icon: "ios-list-box-outline"
        },
        {
          label: "打印订单",
          path: "/dayin",
          icon: "ios-list-box-outline"
        },
        {
          label: "其他订单",
          path: "/other",
          icon: "ios-list-box-outline"
        }
      ]
    },
    {
      label: "地址管理",
      sub: [{
          label: "地址分组",
          path: "/address_cate",
          icon: "ios-list-box-outline"
        },
        {
          label: "新增分组",
          path: "/address_cate_edit",
          icon: "ios-list-box-outline"
        },
        {
          label: "地址列表",
          path: "/address",
          icon: "ios-list-box-outline"
        },
        {
          label: "新增地址",
          path: "/address_edit",
          icon: "ios-list-box-outline"
        }
      ]
    },

    {
      label: "设置",
      sub: [{
        label: "代理设置",
        path: "/user/info",
        icon: "ios-list-box-outline"
      }]
    },
    {
      label: "我的账户",
      sub: [{
        label: "我的账户",
        path: "/wallet",
        icon: "ios-list-box-outline"
      }]
    }
  ]
};
module.exports = nav;
