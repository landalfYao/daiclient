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
      <el-table-column label="图片">
        <template slot-scope="scope">
          <div>
            {{scope.row.img ? '':'未授权'}}
            <img
              v-if="scope.row.img"
              :src="scope.row.img"
              height="50px"
            >
          </div>
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
let app = require("./carousel.js");
app.components = {};
export default app;
</script>
