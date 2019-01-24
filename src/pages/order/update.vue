<template>
  <div>
    <div>
      <router-link to="/dayin">
        <el-button round icon="el-icon-arrow-left">返回</el-button>
      </router-link>
    </div>
    <div style="margin-top:30px;width:500px">
      <el-form ref="form" :model="formData" label-width="150px">
        <el-form-item label="项目名称">
          <el-input v-model="formData.title" placeholder="项目名称"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名">
          <el-input v-model="formData.name" placeholder="客户姓名"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formData.phone" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="省份证号">
          <el-input v-model="formData.idcard" placeholder="省份证号"></el-input>
        </el-form-item>
        <el-form-item label="工作城市">
          <el-input v-model="formData.city" placeholder="工作城市"></el-input>
        </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="formData.position" placeholder="职业"></el-input>
        </el-form-item>
        <el-form-item label="是否有本地公积金">
          <el-select v-model="formData.gjj" placeholder="是否有本地公积金">
            <el-option label="有" value="有"></el-option>
            <el-option label="没有" value="没有"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否有本地社保">
          <el-select v-model="formData.sb" placeholder="是否有本地社保">
            <el-option label="有" value="有"></el-option>
            <el-option label="没有" value="没有"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="房产类型">
          <el-select v-model="formData.housetype" placeholder="房产类型">
            <el-option v-for="(item,index) in houseType" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="装修情况">
          <el-select v-model="formData.zxqk" placeholder="装修情况">
            <el-option v-for="(item,index) in zx" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="面积">
          <el-input v-model="formData.area" placeholder="面积"></el-input>
        </el-form-item>
        <el-form-item label="是否有车">
          <el-select v-model="formData.hcar" placeholder="是否有车">
            <el-option label="有" value="有"></el-option>
            <el-option label="没有" value="没有"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="信用情况">
          <el-select v-model="formData.xyqk" placeholder="信用情况">
            <el-option v-for="(item,index) in xy" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="贷款金额">
          <el-input v-model="formData.money" placeholder="贷款金额(万元)"></el-input>
        </el-form-item>
        <el-form-item label="贷款期限">
          <el-input v-model="formData.date" placeholder="贷款期限(个月)"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="submit()">提交修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default require("./update.js");
</script>
