<template>
  <el-form
    ref="form"
    :model="formData"
    label-width="80px"
    style="width:400px;margin:auto;margin-top:50px"
  >
    <el-form-item label="用户名">
      <el-input v-model="formData.username" placeholder="不小于4位"></el-input>
    </el-form-item>
    <!-- <el-form-item label="密码">
      <el-input v-model="formData.password" type="password" placeholder="不小于8位"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="formData.checkPwd" type="password" placeholder="确认密码"></el-input>
    </el-form-item>-->
    <el-form-item label="姓名">
      <el-input v-model="formData.name" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="formData.phone" placeholder="手机号"></el-input>
    </el-form-item>
    <el-form-item label="佣金">
      <el-input v-model="formData.price" placeholder="佣金"></el-input>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="formData.msg" placeholder="描述"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="loading">立即注册</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default require("./register.js");
</script>
