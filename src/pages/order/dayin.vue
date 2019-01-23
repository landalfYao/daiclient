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
          <!-- <el-button type="danger" plain icon="el-icon-delete"></el-button> -->
          <!-- <el-button type="primary" plain @click="plfenpei()">批量分配</el-button> -->
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
      <el-table-column prop="id" label="订单编号"></el-table-column>
      <el-table-column prop="title" label="项目名"></el-table-column>
      <el-table-column prop="name" label="客户名"></el-table-column>
      <el-table-column prop="phone" label="客户手机"></el-table-column>
      <el-table-column prop="position" label="职业"></el-table-column>
      <el-table-column prop="money" label="贷款金额">
        <template slot-scope="scope">
          <div>{{scope.row.money}}万元</div>
        </template>
      </el-table-column>
      <el-table-column label="期限">
        <template slot-scope="scope">
          <div>{{scope.row.date}}个月</div>
        </template>
      </el-table-column>

      <el-table-column prop="jjr" label="经纪人"></el-table-column>
      <el-table-column prop="ywy" label="业务员"></el-table-column>
      <el-table-column prop="qdate" label="签约时间"></el-table-column>
      <el-table-column label="状态" column-key="state">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            :type="scope.row.state == '已完成' ? 'success':scope.row.state == '服务中' ? 'primary':scope.row.state == '洽谈中' ? 'warning':'danger'"
          >{{scope.row.state}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown>
            <el-button class="el-dropdown-link" type="text">
              操作
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button
                  type="text"
                  class="w-100 text-center pa-10"
                  v-if="scope.ywy == ''"
                  @click="seevisable = true,tempId = scope.row.id,getYwy()"
                >分配项目</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button
                  type="text"
                  class="w-100 text-center pa-10"
                  style="margin:0;"
                  v-if="scope.jjr == ''"
                  @click="seevisable2 = true,tempId = scope.row.id,getJJR()"
                >添经纪人</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button
                  type="text"
                  class="w-100 text-center pa-10"
                  style="margin:0"
                  @click="jdclick(scope.row)"
                >更改</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button
                  type="text"
                  class="w-100 text-center pa-10"
                  style="margin:0"
                  @click="seevisable3 = true,tempId = scope.row.id"
                >查看详情</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
    <el-dialog title="分配至业务员" :visible.sync="seevisable" width="300px" center>
      <div>选择业务员</div>
      <el-select v-model="tempYid" filterable placeholder="请选择" style="width:100%">
        <el-option v-for="item in ywys" :key="item.pk_id" :label="item.name" :value="item.pk_id"></el-option>
      </el-select>
      <div class="panel-end ma-t30">
        <el-button type="default" @click="seevisable = false">取 消</el-button>
        <el-button type="primary" @click="ywydo()">确 认 选 择</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加经纪人" :visible.sync="seevisable2" width="300px" center>
      <div>选择经纪人</div>
      <el-select v-model="tempJid" filterable placeholder="请选择" style="width:100%">
        <el-option v-for="item in jjrs" :key="item.wx_id" :label="item.name" :value="item.wx_id"></el-option>
      </el-select>
      <div class="panel-end ma-t30">
        <el-button type="default" @click="seevisable2 = false">取 消</el-button>
        <el-button type="primary" @click="jjrdo()">确 认 选 择</el-button>
      </div>
    </el-dialog>
    <el-dialog title="项目详情" :visible.sync="seevisable3" width="1000px" center>
      <oinfo :oid="tempId"></oinfo>
    </el-dialog>
  </div>
</template>
<script>
import oinfo from "../order/info.vue";
let app = require("./dayin.js");
app.components = { oinfo };
export default app;
</script>
