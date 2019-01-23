let that;
let list = {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        checkPwd: '',
        dtype: 2,
        name: '',
        phone: '',
        price: '',
        msg: ''
      },
      formData2: {
        username: '',
        password: '',
        checkPwd: '',
        dtype: 2,
        name: '',
        phone: '',
        price: '',
        msg: ''
      },

      loading: false
    }
  },
  mounted() {
    that = this
  },
  methods: {
    onSubmit() {
      this.loading = true
      let formData = {
        username: this.formData.username,
        password: this.formData.password,
        checkPwd: this.formData.checkPwd,
        name: this.formData.name,
        dtype: this.formData.dtype,
        phone: this.formData.phone,
        price: this.formData.price,
        msg: this.formData.msg
      }
      formData.password = this.yzy.encrypt(formData.password)
      formData.checkPwd = this.yzy.encrypt(formData.checkPwd)
      this.yzy.post('user/register', formData, function (res) {
        that.loading = false
        if (res.code == 1) {
          that.$message.success(res.msg)
          that.formData = that.formData2
        } else {
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
