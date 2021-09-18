<template>
  <div class="app-admin-box">
    <div class="ApprovalList_breadcrumb">
      <span class="ant-breadcrumb-link">审批管理后台</span>
    </div>
    <div class="ApprovalList_menu">
      <el-button plain>添加分组</el-button>
      <el-button type="primary" plain icon="el-icon-plus" >创建审批</el-button>
    </div>
    <ApprovalClassCard />
    <ApprovalClassCard />
    <ApprovalClassCard />
  </div>
</template>

<script>
import ApprovalClassCard from "./ApprovalClassCard.vue";
export default {
  components: {
    ApprovalClassCard
  }
}
</script>

<style lang="scss" scope>
.app-admin-box{
  width: 935px;
  margin: 0 auto;
  .ApprovalList_breadcrumb{
    margin-bottom: 20px;
    span{
      font-size: 14px;
    }
  }
  .ApprovalList_menu{
    width: 100%;
    margin-bottom: 10px;
    height: 32px;
    .el-button {
      height: 32px;
      font-size: 14px;
    }
  }
}
</style>