<template>
  <el-form
    ref="form"
    :model="formData"
    label-width="100px"
    style="width:400px;margin:auto;margin-top:50px"
  >
    <el-form-item label="银行LOGO">
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
    <el-form-item label="银行名称">
      <el-input v-model="formData.bankname" placeholder="银行名称"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="formData.des" placeholder="描述"></el-input>
    </el-form-item>
    <el-form-item label="最小贷款金额">
      <el-input v-model="formData.p_min" placeholder="最小贷款金额(万元)"></el-input>
    </el-form-item>
    <el-form-item label="最大贷款金额">
      <el-input v-model="formData.p_max" placeholder="最大贷款金额(万元)"></el-input>
    </el-form-item>
    <el-form-item label="联系人">
      <el-input v-model="formData.contact" placeholder="联系人"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="formData.phone" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item label="银行电话">
      <el-input v-model="formData.tele" placeholder="银行电话"></el-input>
    </el-form-item>
    <el-form-item label="序号">
      <el-input v-model="formData.sort" placeholder="序号"></el-input>
    </el-form-item>
    <el-form-item label="是否显示">
      <el-switch
        v-model="formData.is_show"
        :active-value="1"
        :inactive-value="0"
        active-text="显示"
        inactive-text="不显示"
      ></el-switch>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">确认提交</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require("./bank_edit.js");
</script>
