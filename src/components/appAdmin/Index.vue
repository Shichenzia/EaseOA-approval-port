<template>
  <div class="app-admin-box">
    <div class="ApprovalList_breadcrumb">
      <span class="ant-breadcrumb-link">审批管理后台</span>
    </div>
    <div class="ApprovalList_menu">
      <el-button plain @click="dialogAddClassVisible = true">添加分组</el-button>
      <el-button
        type="primary"
        plain
        icon="el-icon-plus"
        @click="this.goCreateApproval"
      >
        创建审批
      </el-button>
    </div>
    <el-dialog title="添加分组" :visible.sync="dialogAddClassVisible">
      <div class="from-input">
        <div class="lable">分组名称:
        </div>
        <el-input v-model="className" autocomplete="off" placeholder="请输入分组名称"></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddClassVisible = false">取 消</el-button>
        <el-button type="primary" @click="addClass">确 定</el-button>
      </div>
    </el-dialog>
    
    <ApprovalClassCard v-for="item in approvalAllList" :key="item.c_id" :item="item" />

  </div>
</template>

<script>
import { mapState } from 'vuex';
import ApprovalClassCard from "./ApprovalClassCard.vue";
export default {
  components: {
    ApprovalClassCard,
  },
  data() {
    return {
      dialogAddClassVisible: false,
      className: ''
    };
  },
  computed: {
    ...mapState({
      approvalAllList: state => state.approval.approvalAllList
    })
  },
  methods: {
    goCreateApproval() {
      this.$router.push({
        path: "/createApproval",
      });
    },
    async addClass() {
      await this.$store.dispatch('approval/addClass', { className: this.className });
      this.dialogAddClassVisible = false;
    }
  },
  async mounted(){
    await this.$store.dispatch("approval/getAllClass");
    await this.$store.dispatch("approval/getAllProcess");
  }
};
</script>

<style lang="scss" scope>
.app-admin-box {
  width: 935px;
  margin: 0 auto;
  .ApprovalList_breadcrumb {
    margin-bottom: 20px;
    span {
      font-size: 14px;
    }
  }
  .ApprovalList_menu {
    width: 100%;
    margin-bottom: 10px;
    height: 32px;
    .el-button {
      height: 32px;
      font-size: 14px;
    }
  }

  .from-input{
    .lable{
      font-size: 14px;
      color: #606266;
      margin-bottom: 10px;
    }
  }
}
</style>