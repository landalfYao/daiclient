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
        <el-button type="ghost" @click="getList()">刷新</el-button>
      </el-button-group>
    </div>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <el-button-group>
          <el-button type="danger" plain icon="el-icon-delete"></el-button>
          <el-button type="primary" plain @click="navTo('/bank_edit')">新增银行</el-button>
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
      @selection-change="handleSelectionChangeYid"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="sort" label="序号"></el-table-column>
      <el-table-column prop="icon" label="LOGO">
        <template slot-scope="scope">
          <img :src="scope.row.icon" height="50px" alt>
        </template>
      </el-table-column>
      <el-table-column prop="bankname" label="银行名称"></el-table-column>
      <el-table-column prop="des" label="描述"></el-table-column>
      <el-table-column prop="p_min" label="最小贷款金额"></el-table-column>
      <el-table-column prop="p_max" label="最大贷款金额"></el-table-column>
      <el-table-column prop="contact" label="银行联系人"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="tele" label="银行电话"></el-table-column>
      <el-table-column label="是否显示">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.is_show == 1 ? 'success':'warning'"
          >{{scope.row.is_show == 1 ? '显示':'不显示'}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="navTo('/bank_edit',scope.row.id)">修改</el-button>
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
    <!-- <el-dialog title="信息" :visible.sync="seevisable" width="1000" center>
      <info :uid="tempUid"></info>
    </el-dialog>
    -->
  </div>
</template>
<script>
// import info from "../user/info/info.vue";
let app = require("./bank.js");
app.components = {};
export default app;
</script>
