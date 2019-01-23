let that;
let list = {
  props: {
    oid: {
      type: Number
    }
  },
  data() {
    return {
      msg: {},
      active: 0
    }
  },
  watch: {
    oid() {
      this.getMsg()
    }
  },
  mounted() {
    that = this;
    this.getMsg()
  },
  methods: {
    getMsg() {

      this.yzy.post('order/get/id', {
        id: this.oid
      }, function (res) {
        if (res.code == 1) {

          that.msg = res.data
          that.setActive()
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    setActive() {
      if (this.msg.state == '审核中') {
        this.active = 0
      } else if (this.msg.state == '洽谈中') {
        this.active = 1
      } else if (this.msg.state == '服务中') {
        this.active = 2
      } else if (this.msg.state == '已完成') {
        this.active = 4
      }
    }
  }
}
module.exports = list
