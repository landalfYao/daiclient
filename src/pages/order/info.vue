<template>
  <div>
    <div id="printText">
      <!--startprint-->
      <el-steps finish-status="success" :active="active">
        <el-step title="审核中" :description="msg.create_time"></el-step>
        <el-step title="洽淡中" :description="msg.qt_time"></el-step>
        <el-step title="服务中" :description="msg.fw_time"></el-step>
        <el-step title="已完成" :description="msg.com_time"></el-step>
      </el-steps>
      <div style="margin-top:10px">
        <el-row :gutter="40">
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">项目名称</el-col>
              <el-col :span="14" class="bold">{{msg.title}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">客户姓名</el-col>
              <el-col :span="14" class="bold">{{msg.name}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">身份证号</el-col>
              <el-col :span="14" class="bold">{{msg.idcard}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">手机号</el-col>
              <el-col :span="14" class="bold">{{msg.phone}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">城市</el-col>
              <el-col :span="14" class="bold">{{msg.city}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">职业</el-col>
              <el-col :span="14" class="bold">{{msg.position}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">本地社保</el-col>
              <el-col :span="14" class="bold">{{msg.sb}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">本地公积金</el-col>
              <el-col :span="14" class="bold">{{msg.gjj}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">房屋类型</el-col>
              <el-col :span="14" class="bold">{{msg.housetype}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">装修情况</el-col>
              <el-col :span="14" class="bold">{{msg.zxqk}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">面积</el-col>
              <el-col :span="14" class="bold">{{msg.area}}㎡</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">是否有车</el-col>
              <el-col :span="14" class="bold">{{msg.hcar}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">贷款金额</el-col>
              <el-col :span="14" class="bold">{{msg.money}}万元</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">贷款期限</el-col>
              <el-col :span="14" class="bold">{{msg.date}}个月</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">信用情况</el-col>
              <el-col :span="14" class="bold">{{msg.xyqk}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">签约日期</el-col>
              <el-col :span="14" class="bold">{{msg.qdate}}</el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="border-b ma-t30"></div>
        <el-row :gutter="40">
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">订单状态</el-col>
              <el-col :span="14" class="bold">{{msg.state}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">创建时间</el-col>
              <el-col :span="14" class="bold">{{msg.create_time}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">洽谈时间</el-col>
              <el-col :span="14" class="bold">{{msg.qt_time}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">服务时间</el-col>
              <el-col :span="14" class="bold">{{msg.fw_time}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">完成时间</el-col>
              <el-col :span="14" class="bold">{{msg.com_time}}</el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="border-b ma-t30"></div>
        <el-row :gutter="40">
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">经纪人</el-col>
              <el-col :span="14" class="bold">{{msg.jjrname}}</el-col>
            </el-row>
          </el-col>
          <el-col :span="12" style="margin-top:20px">
            <el-row :gutter="20">
              <el-col :span="10">业务员</el-col>
              <el-col :span="14" class="bold">{{msg.ywyname}}</el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--endprint-->
    <div class="panel-end ma-t30">
      <el-button v-print="'#printText'">打印</el-button>
    </div>
  </div>
</template>
<script>
export default require("./info.js");
</script>
