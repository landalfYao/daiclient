let that;
let list = {
  data() {
    return {
      formData: {
        name: '',
        idcard: '',
        phone: '',
        position: '',
        city: '',
        gjj: '', //公积金
        sb: '', //社保
        housetype: '', //房产类型
        zxqk: '', //装修情况
        area: '',
        hcar: '', //是否有车
        xyqk: '', //信用情况
        money: '',
        date: '',
        title: ''
      },
      loading: false,
      houseType: ['有房，但不确认房产类型', '无房产', '小产权房', '经适/限价房', '房改/危改房', '商铺', '厂房', '商住两用房', '办公楼', '军产房', '商品住房', '宅基地/自建房'],
      zx: ['毛坯', '简装修', '精装修', '豪华装修'],
      xy: ['信用良好，无逾期', '无信用卡或贷款', '1年内逾期超过3次或超过90天', '1年内逾期少于3次或少于90天']
    }
  },
  mounted() {
    that = this;
    this.getMsg()
  },
  methods: {
    getMsg() {
      this.yzy.post('order/get/id', {
        id: this.$route.query.id
      }, function (res) {
        if (res.code == 1) {
          that.formData = res.data
        }
      })
    },
    submit() {
      this.loading = true
      this.yzy.post('order/update', this.formData, function (res) {
        that.loading = false
        if (res.code == 1) {
          that.$message({
            type: 'success',
            message: res.msg
          })
          that.$router.go(-1)
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    }
  }
}
module.exports = list
