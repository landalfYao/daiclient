<template>
  <div>
    <el-card shadow="always" style="width:33.33%;display:inline-block">
      <div>总佣金</div>
      <div class="ma-t20" style="font-size:30px">
        <span class="fo-32">￥</span>
        {{totalfr || 0}}
      </div>
    </el-card>
    <el-card shadow="always" style="width:33%;display:inline-block">
      <div>平台佣金</div>
      <div class="ma-t20" style="font-size:30px">
        <span class="fo-32">￥</span>
        {{(msg.wallets) || 0}}
      </div>
    </el-card>
    <el-card shadow="always" style="width:33%;display:inline-block">
      <div>员工佣金</div>
      <div class="ma-t20" style="font-size:30px">
        <span class="fo-32">￥</span>
        {{totalfr-msg.wallets || 0}}
      </div>
    </el-card>

    <div style="margin-top:15px">
      <div class="panel-between item-center">
        <el-button-group>
          <el-button type="primary" plain @click="exportExcel()">导出数据</el-button>
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
      id="out-table"
      :data="tableData"
      ref="multipleTable"
      tooltip-effect="dark"
      border
      size="small"
      style="width: 100%;margin-top:15px"
    >
      <el-table-column prop="order_id" label="单号"></el-table-column>
      <el-table-column prop="p_get" label="平台佣金"></el-table-column>
      <el-table-column prop="jjr_get" label="经纪人佣金"></el-table-column>
      <el-table-column prop="ywy_get" label="业务员佣金"></el-table-column>
      <el-table-column prop="jjr_id" label="经纪人ID"></el-table-column>
      <el-table-column prop="ywy_id" label="业务员ID"></el-table-column>
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
  </div>
</template>
<script>
export default require("./wallet.js");
</script>
