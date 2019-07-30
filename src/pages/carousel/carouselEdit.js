let that;
let list = {
  data() {
    return {
      fileList: [],
      formData: {
        sort: '',
        img: '',
      },
      formData2: {
        sort: '',
        img: '',
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
      this.formData.img = res.data.url
    },
   
    onSubmit() {
      this.loading = true
      let formData = this.formData
      let url = 'add'
      if (this.$route.query.id) {
        url = 'update'
        formData.id = this.formData.id
      }
      this.yzy.post('carousel/' + url, formData, function (res) {
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
