
let that ;
let list = {
  data(){
    return {
      formData:{
        oldPwd:'',
        newPwd:'',
        confirmPwd:'',
        type:''
      },
      formData2:{
        oldPwd:'',
        newPwd:'',
        confirmPwd:'',
        type:''
      },
      loading:false
    }
  },
  mounted(){
    that = this;

  },
  methods:{
    onSubmit(){
      this.loading = true
      let formData = {
        oldPwd:sessionStorage.getItem('username') == 'admin' ? this.yzy.encrypt(this.formData.oldPwd):this.formData.oldPwd,
        newPwd:sessionStorage.getItem('username') == 'admin' ? this.yzy.encrypt(this.formData.newPwd):this.formData.newPwd,
        confirmPwd:sessionStorage.getItem('username') == 'admin' ? this.yzy.encrypt(this.formData.confirmPwd):this.formData.confirmPwd,
        type:sessionStorage.getItem('username') == 'admin' ? 'ak':'jjr',
        uid:sessionStorage.getItem('uid')
      }
      this.yzy.post('user/update/pwd',formData,function(res){
        that.loading = false
        if(res.code == 1){
          that.$message.success(res.msg)
          that.formData = that.formData2

        }else{
          that.$message.error(res.msg)
        }
      })
    }
  }
}
module.exports = list
