<template>
  <div class="member-box">
    <div class="member-box-left">
      <el-input
        placeholder="搜索成员或部门"
        prefix-icon="el-icon-search"
        v-model="serch"
      >
      </el-input>
      <div class="btns">
        <el-button plain icon="el-icon-plus">新建部门</el-button>
        <el-button plain icon="el-icon-user">管理部门</el-button>
      </div>
    </div>
    <div class="member-box-right">
      <div class="member-menu">
        <div class="member-menu-left">
          <span>EaseOA</span>
          <i class="el-icon-user-solid"></i>
          <span>4</span>
        </div>
        <div class="member-menu-right">
          <el-button type="primary" icon="el-icon-plus">添加人员</el-button>
          <el-button plain>变更部门</el-button>
          <el-button plain type="danger">离职操作</el-button>
        </div>
      </div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column label="入职日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="电话" width="120"></el-table-column>
        <el-table-column prop="name" label="部门" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      serch: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      multipleSelection: [],
    };
  },
};
</script>

<style lang="scss" scope>
.member-box {
  height: 100%;
  display: flex;
  .member-box-left {
    width: 280px;
    height: 100%;
    border-right: 1px solid #e9eaf2;
    padding: 20px;
    padding-left: 0;
    .btns {
      background: #fff;
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      button {
        background: #fff;
        width: 48%;
        font-size: 16px;
        font-weight: 500;
        margin: 0;
      }
    }
  }
  .member-box-right {
    min-width: 685px;
    padding: 20px;
    .member-menu {
      display: flex;
      justify-content: space-between;
      height: 50px;
      align-items: center;
      .member-menu-left {
        font-size: 20px;
        :nth-child(1) {
          font-weight: 500;
          margin-right: 10px;
        }
        :nth-child(2) {
          margin-right: 5px;
        }
      }

      .member-menu-right{
        button{
          font-size: 14px;
        }
      }

    }
  }
}
</style>