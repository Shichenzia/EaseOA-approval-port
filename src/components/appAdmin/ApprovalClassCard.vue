<template>
  <el-card class="box-card">
    <div class="heard-box">
      <div>卡片名称</div>
      <div class="title-menu">
        <i class="el-icon-edit"></i>
        <i class="el-icon-delete"></i>
      </div>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      <approvalCard />
    </div>
  </el-card>
</template>

<script>
import approvalCard from "../common/approvalCard/Index.vue";
export default {
  components: {
    approvalCard
  }
}
</script>

<style lang="scss" scope>
  .box-card {
    width: 100%;
    margin-bottom: 16px;
    .el-card__body{
      padding: 0;
    }
    .heard-box{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      height: 54px;
      font-size: 16px;
      background-color: #F9FAFA;
      padding: 10px 20px;
      color: #1f2329;
      .title-menu{
        i{
          margin-left: 20px;
          cursor: pointer;
        }
      }
    }
    
  }
</style>