<template>
  <div>
    <div class="panel-start wrap">
      <el-input
        v-for="(item,index) in searchList"
        v-model="item.value"
        :placeholder="item.label"
        @blur="searchInput(index)"
        :key="index"
        class="filter-input"
      ></el-input>
      <el-button-group>
        <el-button type="ghost" @click="clear()">清除</el-button>
        <el-button type="primary" @click="search()">搜索</el-button>
      </el-button-group>
    </div>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <el-button-group>
          <el-button type="danger" plain icon="el-icon-delete"  @click="del()"></el-button>
          <!-- <el-button type="success" plain @click="changeUserState('available')">启用用户</el-button>
          <el-button type="warning" plain @click="changeUserState('disable')">禁用用户</el-button>-->
        </el-button-group>
        <el-select
          v-model="query.pageSize"
          placeholder="请选择"
          style="width:150px"
          @change="handleSizeChange"
        >
          <el-option
            v-for="item in pageSize"
            :key="item.label"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>

    <el-table
      :data="tableData"
      ref="multipleTable"
      tooltip-effect="dark"
      border
      size="small"
      style="width: 100%;margin-top:15px"
      @selection-change="handleSelectionChange"
      @filter-change="filterChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="ID" width="55">
        <template slot-scope="scope">
          <div>
            {{scope.row.wx_id}}
           
          </div>
        </template>
      </el-table-column>

      <el-table-column label="头像">
        <template slot-scope="scope">
          <div>
            {{scope.row.avatar_url ? '':'未授权'}}
            <img
              v-if="scope.row.avatar_url"
              :src="scope.row.avatar_url"
              height="50px"
            >
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="price" label="固定佣金"></el-table-column>
      <el-table-column prop="msg" label="描述"></el-table-column>
      <el-table-column prop="wallet" label="获得佣金"></el-table-column>
      <!-- <el-table-column prop="cash" label="已取佣金"></el-table-column> -->
      <el-table-column prop="by_scan" label="二维码分享"></el-table-column>
      <!-- <el-table-column prop="by_share" label="好友分享"></el-table-column> -->
      <el-table-column label="操作"> 

        <template slot-scope="scope">
          <el-button type="text" @click="centerDialogVisible = true,formData = scope.row">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="panel-end">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="query.pageIndex"
        :page-size="query.pageSize"
        layout="total,prev, pager, next, jumper"
        :total="total"
        style="margin-top:15px"
      ></el-pagination>
    </div>
    <el-dialog title="信息" :visible.sync="seevisable" width="1000" center>
      <info :uid="tempUid"></info>
    </el-dialog>
    <el-dialog title="修改经纪人" :visible.sync="centerDialogVisible" width="400px" center>
      <el-form ref="form" :model="formData" label-position="top" style="margin:auto;">
        <el-form-item label="姓名">
          <el-input v-model="formData.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="固定佣金">
          <el-input v-model="formData.price" placeholder="固定佣金(元)"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="formData.msg" placeholder="描述"></el-input>
        </el-form-item>
        <el-form-item label="登录名">
          <el-input v-model="formData.username" placeholder="登录名"></el-input>
        </el-form-item>
        <el-form-item label="登录密码">
          <el-input v-model="formData.pwd" placeholder="登录密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button :loading="loading" type="primary" @click="submitAgents()">确 认 提 交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import info from "../user/info/info.vue";
// import ov from "../overview/agentview.vue";
let app = require("./agent.js");
app.components = { info };
export default app;
</script>