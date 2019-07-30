let that;
let list = {
  data() {
    return {
      formData: {
        img: '',
        content: '',
        title: '',
      },
      dialogTableVisible: false,
      content: '',
      clear: false,
      editorOption: {
        modules: {
          toolbar: "#toolbar"
        }
      },
      formData2: {
        img: '',
        content: '',
        title: '',
      },
      api: this.yzy.NODE_API,
      loading: false
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    that = this;
    if (this.$route.query.rich_id) {
      this.formData = this.$route.query
    }
  },
  methods: {

    onSubmit() {
      this.loading = true
      let formData = this.formData

      let url = 'add'
      if (this.$route.query.rich_id) {
        url = 'update'
        formData.rich_id = this.formData.rich_id
      }
      //   console.log(formData)
      this.yzy.post('news/' + url, formData, function (res) {
        that.loading = false
        if (res.code == 1) {
          that.$message.success(res.msg)
          if (that.$route.query.rich_id) {
            that.$router.go(-1)
          } else {
            that.formData = that.formData2
          }

        } else {
          that.$message.error(res.msg)
        }
      })
    },
    imgClick() {
      this.dialogTableVisible = true;
    },
    uploadIt(res) {
      this.editor.insertEmbed(this.formData.content.length, "image",  res.data.url);
    },
    uploadIt2(res) {
      this.formData.img = res.data.url
    },
    getModelImgs() {
      var li = global.cimgs;
      var gs = "";
      for (var i in li) {
        if (li[i].mimetype.indexOf('image') > -1) {
          console.log(this.yzy)
          this.editor.insertEmbed(this.formData.content.length, "image", this.yzy.uploadPath + li[i].file_name);
        } else {
          gs += li[i].mimetype + " ";
        }
      }
      if (gs != "") {
        this.$Modal.error({
          title: "格式错误",
          content: "富文本不支持" + gs
        });
      }
      this.formData.content = this.formData.content.replace('<img', '<img style="margin:auto;" ')
      this.dialogTableVisible = false;
      global.cimgs = []
      this.clear = !this.clear
    },
  }
}
export default list
