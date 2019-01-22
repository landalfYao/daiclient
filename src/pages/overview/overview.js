let that;
let list = {
  data() {
    return {
      totalData: [],
      newData: [],
      newData2: [],
      msg: {},
      orderData: [],
      orderData2: []
    }
  },
  mounted() {
    that = this
    this.getAnalysisData()
  },
  methods: {
    initTotalData() {
      this.totalData = [{
          label: '用户总数',
          value: that.msg.wxuserTotal,
          icon: 'md-people',
          style: 'obg1',
          color: '#009933'
        },
        {
          label: '学校总数',
          value: that.msg.areaTotal,
          icon: 'ios-book',
          style: 'obg2',
          color: '#0066CC'
        },
        {
          label: '接单人总数',
          value: this.msg.userPass ? this.msg.userPass : 0,
          icon: 'md-school',
          style: 'obg3',
          color: '#663399'
        },
        {
          label: '订单总数',
          value: this.msg.orderTotal,
          icon: 'ios-paper',
          style: 'obg4',
          color: '#ffffff'
        }
      ];

      this.newData = [{
          label: '营业总额(RMB)',
          value: this.msg.turnover,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '今日营业额(RMB)',
          value: this.msg.turnoverDaily,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '月度营业额(RMB)',
          value: this.msg.turnoverMonth,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '年度营业额(RMB)',
          value: this.msg.turnoverYear,
          icon: 'logo-yen',
          color: '#0099CC'
        },
      ]
      this.newData2 = [{
          label: '退款总额(RMB)',
          value: this.msg.refund,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '今日退款额(RMB)',
          value: this.msg.refundDaily,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '月度退款额(RMB)',
          value: this.msg.refundMonth,
          icon: 'logo-yen',
          color: '#0099CC'
        },
        {
          label: '年度退款额(RMB)',
          value: this.msg.refundYear,
          icon: 'logo-yen',
          color: '#0099CC'
        },
      ]

      this.orderData = [{
          label: '今日用户数',
          value: this.msg.wxuserTotalDaily,
          icon: 'ios-calendar',
          color: '#0099CC'
        },
        {
          label: '待审用户数',
          value: this.msg.userWating ? this.msg.userWating : 0,
          icon: 'ios-calendar',
          color: '#0099CC'
        },
        {
          label: '驳回用户数',
          value: this.msg.userBack ? this.msg.userBack : 0,
          icon: 'ios-calendar',
          color: '#0099CC'
        },
        {
          label: '联系站长',
          value: '18267173607',
          icon: 'ios-calendar',
          color: '#0099CC'
        },
      ]


    },
    getAnalysisData() {

      this.yzy.post('anlysis/get', {}, function (res) {
        if (res.code == 1) {
          that.msg = res.data
          that.initTotalData()
        }
      })

    }
  },

}
module.exports = list
