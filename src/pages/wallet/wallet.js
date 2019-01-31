let that;
let list = {
  data() {
    return {
      msg: '',
      tableData: [],
      total: 0,
      totalfr: 0,
      query: {
        sorts: 'create_time desc',
        wheres: '',
        pageIndex: 1,
        pageSize: 10,
      }
    }
  },
  mounted() {
    that = this;
    this.getMsg()
    this.getList()
  },
  methods: {
    handleSizeChange(e) {
      this.getList()
    },
    handleCurrentChange(e) {
      this.query.pageIndex = e
      this.getList()
    },
    getMsg() {
      this.yzy.post('user/get', {
        wheres: 'pk_id=' + sessionStorage.getItem("uid"),
      }, function (res) {
        if (res.code == 1) {
          that.msg = res.data.list[0]
        }
      })
      this.yzy.post('order/get/liu/total', {}, function (res) {
        if (res.code == 1) {
          that.totalfr = res.data.total
        }

      })
    },
    getList() {


      this.yzy.post('order/get/liu', this.query, function (res) {
        if (res.code == 1) {
          that.tableData = res.data.list
          that.total = res.data.total
        }
      })
    }
  }
}
module.exports = list
