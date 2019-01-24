let that;
let list = {
  data() {
    return {
      fileList: [],
      formData: {
        icon: '',
        des: '',
        bankname: '',
        sort: '',
        p_min: '',
        p_max: '',
        contact: '',
        phone: '',
        tele: '',
        is_show: 1
      },
      formData2: {
        icon: '',
        des: '',
        bankname: '',
        sort: '',
        p_min: '',
        p_max: '',
        contact: '',
        phone: '',
        tele: '',
        is_show: true
      },
      loading: false,
      api: this.yzy.NODE_API
    }
  },
  mounted() {
    that = this;
    if (this.$route.query.id) {
      this.getMsg()
    }
  },
  methods: {
    uploadIt(res) {
      this.formData.icon = res.data.url
    },
    getMsg() {
      this.yzy.post('bank/get/id', {
        id: this.$route.query.id
      }, function (res) {
        if (res.code == 1) {
          that.formData = res.data
        }
      })
    },
    onSubmit() {
      this.loading = true
      let formData = this.formData
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('bank/' + url, formData, function (res) {
        that.loading = false
        if (res.code == 1) {
          that.$message.success(res.msg)
          if (that.$route.query.id) {
            that.$router.go(-1)
          } else {
            that.formData = that.formData2
          }

        } else {
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
