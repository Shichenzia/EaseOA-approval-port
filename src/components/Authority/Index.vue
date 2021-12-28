<template>
  <div class="authority-box">
    <div class="ApprovalList_breadcrumb">
      <span class="ant-breadcrumb-link">管理员</span>
      <el-button icon="el-icon-plus" type="primary">添加管理员</el-button>
    </div>
    <div class="authority-list">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="管理员" width="180">
        </el-table-column>
        <el-table-column prop="name" label="类型" width="180">
        </el-table-column>
        <el-table-column prop="address" label="审批管理范围"> </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <div class="menu">
              <i class="el-icon-edit"></i>
              <i class="el-icon-delete"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.authority-box {
  width: 935px;
  margin: 0 auto;
  .ApprovalList_breadcrumb {
    margin-bottom: 20px;
    span {
      font-size: 16px;
    }
    .el-button {
      float: right;
    }
  }
  .authority-list {
    margin-left: -10px;
  }
}
.menu {
  i {
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>