<template>
  <div class="group-box">
    <div class="member-menu">
      <div class="member-menu-left">
        <span>EaseOA</span>
      </div>
      <div class="member-menu-right">
        <el-button type="primary" icon="el-icon-plus" @click="addGroup">添加部门</el-button>
        <el-button plain>变更部门</el-button>
        <el-button plain type="danger">删除部门</el-button>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="tr-box">
      <el-tree
        :data="groupTree"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <span class="span-btn span-btn-primary" @click="() => setGroup(node, data)">编辑部门</span>
            <span class="span-btn span-btn-danger" @click="() => remove(node, data)">删除部门</span>
          </span>
        </span>
      </el-tree>
    </div>
    <GroupDialog
      :dialogFormVisible ="dialogFormVisible"
      @setDialogFormVisible = "setDialogFormVisible"
      :item = "item"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GroupDialog from "./GroupDialog.vue";

export default {
  data() {
    return {
      dialogFormVisible: false,
      item: {}
    };
  },
  components: {
    GroupDialog
  },
  computed: {
    ...mapState({
      groupTree: state => {
        console.log(state.user.groupTree.children);
        return state.user.groupTree.children;
      }
    })
  },

  async mounted() {
    await this.$store.dispatch('user/getAllGroupList');
    await this.$store.dispatch("user/getUserListByName", { name: "" });
  },

  methods: {
    setDialogFormVisible(visible) {
      this.dialogFormVisible = visible;
    },

    addGroup(){
      this.dialogFormVisible = true;
      this.item = {};
    },

    setGroup(node, data) {
      console.log(node, data);
      this.dialogFormVisible = true;
      this.item = data;
    },

    async remove(node, data) {
      console.log(node, data);
      await this.$store.dispatch("user/deleteGroup", {
        id: data.c_id
      });
    },
  },
};
</script>

<style lang="scss" scope>
.group-box {
  padding: 20px;
  min-width: 1200px;
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

  .tr-box {
    // padding-top: 10px;
    .el-tree {
      .el-tree-node {
        .el-tree-node__content {
          height: 52px;
          .el-tree-node__expand-icon {
            font-size: 20px;
          }
          .el-checkbox {
            font-size: 20px;
            .el-checkbox__input {
              .el-checkbox__inner {
                width: 16px;
                height: 16px;
              }
              .el-checkbox__inner::after {
                height: 8px;
                left: 6px;
                top: 1px;
              }
            }
          }
          .custom-tree-node {
            font-size: 16px;
          }
        }
      }
    }
    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      padding-right: 8px;

      .span-btn {
        font-size: 14px;
        padding: 5px;
        cursor: pointer;
      }

      .span-btn:hover {
        text-decoration:underline;
      }

      .span-btn-primary {
        color: #409eff;
      }

      .span-btn-danger {
        color: #F56C6C;
      }
    }
  }
}
</style>