<template>
  <el-form
    ref="form"
    :model="formData"
    label-width="100px"
    style="width:400px;margin:auto;margin-top:50px"
  >
    <el-form-item label="图片">
      <el-upload
        class="upload-demo"
        :action="api+'file/upload'"
        :file-list="fileList"
        :on-success="uploadIt"
        list-type="picture"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="序号">
      <el-input v-model="formData.sort" placeholder="序号"></el-input>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">确认提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require("./carouselEdit.js");
</script>
