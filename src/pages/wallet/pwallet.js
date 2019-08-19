let XLSX = require('xlsx');
let FileSaver = require('file-saver');
let that;
let list = {
  data() {
    return {
      msg: '',
      tableData: [],
      total: 0,
      totalfr: 0,
      pageSize: this.yzy.pageSize,
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
    exportExcel() {
      /* generate workbook object from table */
      var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
      /* get binary string as output */
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        FileSaver.saveAs(new Blob([wbout], {
          type: 'application/octet-stream'
        }), 'sheetjs.xlsx')
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    },
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
      this.yzy.post('order/get/jjr', {
          jjr_id: sessionStorage.getItem("uid")
      }, function (res) {
        if (res.code == 1) {
          that.totalfr = res.data.total
        }

      })
    },
    getList() {

      this.query.wheres = 'jjr_id='+sessionStorage.getItem('uid') 
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
