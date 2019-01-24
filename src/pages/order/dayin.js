let that;
let list = {

  data() {
    return {
      jdr: [],
      seevisable: false,
      seevisable2: false,
      seevisable3: false,
      seevisable4: false,
      seevisable5: false,
      multipleSelection: [],
      loading: false,
      tempDate: '',
      tempId: '',
      tempYid: '',
      tempJid: '',
      tempUrl: '',
      ywys: [],
      jjrs: [],
      state: [{
          label: '洽谈中',
          url: 'qt'
        },
        {
          label: '服务中',
          url: 'fw'
        },
        {
          label: '已完成',
          url: 'com'
        }
      ],
      query: {
        wheres: '',
        fields: 'orders.*,y_user.name ywyname,agents.name jjrname',
        sorts: 'orders.create_time desc',
        pageIndex: 1,
        pageSize: 10
      },
      wheres: [],
      pageSize: this.yzy.pageSize,
      total: 0,
      tableData: [],
      searchList: this.yzy.initFilterSearch(['订单编号'], ['id'])
    }
  },
  mounted() {
    that = this;
    that.getList()
    that.getJDUser()
  },
  methods: {
    navTo(path, id) {
      this.$router.push({
        path: path,
        query: {
          id: id
        }
      })
    },
    oupdateState() {
      this.loading = true
      this.yzy.post('order/update/state/' + this.tempUrl, {
        id: this.tempId,
      }, function (res) {
        that.loading = false
        that.seevisable5 = false
        if (res.code == 1) {
          that.$message({
            type: 'success',
            message: '添加成功'
          })
          that.getList()
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    //签约
    qydo() {
      this.loading = true
      this.yzy.post('order/update/qt', {
        id: this.tempId,
        qdate: this.tempDate
      }, function (res) {
        that.loading = false
        that.seevisable4 = false
        if (res.code == 1) {
          that.$message({
            type: 'success',
            message: '添加成功'
          })
          that.getList()
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    //获取经纪人
    getJJR() {
      if (this.jjrs.length == 0) {
        this.yzy.post('agent/get', {
          fields: 'agents.*',
          wheres: '',
          sorts: 'create_time desc',
          pageIndex: 1,
          pageSize: 1000,
        }, function (res) {
          if (res.code == 1) {

            that.jjrs = res.data.list
          } else {
            that.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }
    },
    getYwy() {
      if (this.ywys.length == 0) {
        this.yzy.post('user/get', {
          wheres: 'dtype = 2 and is_delete = 0',
          pageIndex: 1,
          pageSize: 1000,
        }, function (res) {
          if (res.code == 1) {

            that.ywys = res.data.list
          } else {
            that.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }

    },
    jjrdo() {
      if (this.tempJid == '') {
        that.$message({
          type: 'error',
          message: '请选择分配'
        })
      } else {
        this.loading = true
        this.yzy.post('order/update/jjr', {
          id: this.tempId,
          jid: this.tempJid
        }, function (res) {
          that.loading = false
          that.seevisable2 = false
          if (res.code == 1) {
            that.$message({
              type: 'success',
              message: '添加成功'
            })
            that.getList()
          } else {
            that.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }
    },
    ywydo() {
      if (this.tempYid == '') {
        that.$message({
          type: 'error',
          message: '请选择分配'
        })
      } else {
        this.loading = true
        this.yzy.post('order/update/ywy', {
          id: this.tempId,
          yid: this.tempYid
        }, function (res) {
          that.loading = false
          that.seevisable = false
          if (res.code == 1) {
            that.$message({
              type: 'success',
              message: '分配成功'
            })
            that.getList()
          } else {
            that.$message({
              type: 'error',
              message: res.msg
            })
          }
        })
      }

    },
    //批量分配
    plfenpei() {
      if (this.multipleSelection.length == 0) {
        that.$message({
          type: 'warning',
          message: '请先选择项目'
        })
      } else {
        this.tempId = this.filterIds().toString()
        this.seevisable = true
        this.getYwy()
      }
    },

    //获取接单用户信息
    getJDUser() {
      let server = global.dlserver;
      let temp = '';
      for (let i in server) {
        if (server[i].server_name == '打印服务') {
          temp = server[i].jdr
        }
      }
      if (temp != '') {
        this.jdr = temp
      }
    },
    getList() {

      this.yzy.post('order/get', this.query, function (res) {
        if (res.code == 1) {
          for (let i in res.data.list) {
            res.data.list[i].qdate = res.data.list[i].qdate.substring(0, 11)
          }
          that.tableData = res.data.list
          that.total = res.data.total
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    filterChange(e) {
      let temp = -1
      let arr = this.wheres
      let resArr = e['user_state']

      for (let i in resArr) {
        if (resArr[i].indexOf("'") < 0) {
          resArr[i] = "'" + resArr[i] + "'"
        }
      }

      let sq = 'user_state in (' + resArr + ')'
      for (let i in arr) {
        if (arr[i].label == 'user_state') {
          temp = i
        }
      }

      if (resArr.length == 0) {
        if (temp != -1) {
          this.wheres.splice(temp, 1)
        }
      } else {
        if (temp == -1) {
          this.wheres.push({
            label: 'user_state',
            value: sq
          })
        } else {
          this.wheres[temp].value = sq
        }
      }

      this.getList()
    },
    changeUserState(state) {

      if (state == 'disable') {
        this.$confirm('此操作将使用户被迫下线, 是否继续?', '提示', {
          confirmButtonText: '继续',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          that.update('user/state/' + state, {
            ids: that.filterIds().toString()
          })
        }).catch(() => {
          that.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      } else {
        that.update('user/state/' + state, {
          ids: that.filterIds().toString()
        })
      }
    },
    filterIds() {
      let arr = []
      for (let i in this.multipleSelection) {
        arr.push(this.multipleSelection[i].id)
      }
      return arr
    },
    update(url, data) {
      this.yzy.post(url, data, function (res) {
        if (res.code == 1) {
          that.$message({
            type: 'success',
            message: res.msg
          })
          that.getList()
        } else {
          that.$message({
            type: 'error',
            message: res.msg
          })
        }
      })
    },
    searchInput(index) {
      this.wheres = this.yzy.filterSearch(this.searchList[index], this.wheres)
    },
    search() {
      that.getList()
    },
    clear() {
      for (let i in this.wheres) {
        if (this.wheres[i].label != 'user_state') {
          this.wheres[i].value = ''
        }
      }
      that.getList()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(e) {
      this.getList()
    },
    handleCurrentChange(e) {
      this.query.pageIndex = e
      this.getList()
    },
  }
}
module.exports = list
