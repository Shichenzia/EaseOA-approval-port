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
        <el-button plain icon="el-icon-plus" @click="adminGroup"
          >新建部门</el-button
        >
        <el-button plain icon="el-icon-user" @click="adminGroup"
          >管理部门</el-button
        >
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
          <el-button type="primary" icon="el-icon-plus" @click="addMember"
            >添加人员</el-button
          >
          <el-button plain>变更部门</el-button>
          <el-button plain type="danger">离职操作</el-button>
        </div>
      </div>
      <el-table
        class="member-list"
        ref="multipleTable"
        :data="memberList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column
          prop="c_name"
          label="姓名"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="c_ctime"
          label="入职日期"
          width="220"
        ></el-table-column>
        <el-table-column
          prop="c_phone"
          label="电话"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="c_email"
          label="邮箱"
          width="250"
        ></el-table-column>
        <el-table-column label="部门" width="300">
          <template slot-scope="scope">
            <el-tag
              v-for="item in scope.row.groups"
              :key="item.gid"
              class="mr-3"
              closable
              @click="
                () => {
                  setGroup(item);
                }
              "
              @close="
                () => {
                  delGroup(item);
                }
              "
            >
              {{ item.gname }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="250"
          show-overflow-tooltip
        ></el-table-column>
      </el-table>
    </div>
    <MemberDialog
      :dialogFormVisible="dialogFormVisible"
      @setDialogFormVisible="setDialogFormVisible"
      :item="item"
    />
  </div>
</template>

<script>
import MemberDialog from "./MemberDialog";
import { mapState } from "vuex";

export default {
  components: {
    MemberDialog,
  },
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
      dialogFormVisible: false,
      item: {},
    };
  },
  computed: {
    ...mapState({
      memberList: (state) => state.user.memberList,
    }),
  },
  async mounted() {
    await this.$store.dispatch("user/listMember");
    await this.$store.dispatch("user/getAllGroupList");
    await this.$store.dispatch("user/getUserListByName", { name: "" });
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    adminGroup() {
      this.$emit("select", "2");
    },

    async addMember() {
      this.dialogFormVisible = true;
      this.item = {};
    },

    async setGroup(item) {
      this.item = item;
      this.dialogFormVisible = true;
    },

    async delGroup(item) {
      await this.$store.dispatch("user/deleteMember", {
        id: item.c_id,
      });
    },

    setDialogFormVisible(visible) {
      this.dialogFormVisible = visible;
    },
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
    width: 100%;
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

      .member-menu-right {
        button {
          font-size: 14px;
        }
      }
    }

    .member-list {
      .span-btn {
        font-size: 14px;
        padding: 5px;
        cursor: pointer;
      }

      .span-btn:hover {
        text-decoration: underline;
      }

      .span-btn-primary {
        color: #409eff;
      }

      .span-btn-danger {
        color: #f56c6c;
      }
    }
  }
  .mr-3 {
    margin: 10px;
    margin-left: 0;
    cursor: pointer;
  }
}
</style>