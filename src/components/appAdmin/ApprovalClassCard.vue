<template>
  <el-card class="box-card">
    <div class="heard-box">
      <div>{{this.item.c_name}}</div>
      <div class="title-menu">
        <i class="el-icon-edit" @click="dialogSetClassVisible = true"></i>
        <i class="el-icon-delete" @click="openDelMes" ></i>
      </div>
    </div>

    <el-empty description="暂无数据" v-if="this.item.approvalList.length === 0" :image-size="100"></el-empty>
    <div v-else v-for="item in this.item.approvalList" :key="item.c_id" class="text item">
      <approvalCard :item="item" />
    </div>

    <el-dialog title="编辑分组" :visible.sync="dialogSetClassVisible">
      <div class="from-input">
        <div class="lable">分组名称:</div>
        <el-input v-model="className" autocomplete="off" placeholder="请输入分组名称"></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSetClassVisible = false">取 消</el-button>
        <el-button type="primary" @click="setClass">确 定</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>

<script>
import approvalCard from "../common/approvalCard/Index.vue";
export default {
  props: {
    item: {
      typeof: Object,
      default: {}
    }
  },
  components: {
    approvalCard
  },
  data() {
    return {
      dialogSetClassVisible: false,
      className: this.item.c_name
    }
  },
  methods: {
    async setClass(){
      await this.$store.dispatch('approval/setClassById', {id: this.item.c_id, className: this.className});
      this.dialogSetClassVisible = false;
    },

    // 打开删除确认弹窗
    openDelMes(){
      this.$confirm('此操作将永久删除该分类,及其下所有流程！ 是否继续?', '危险', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(async () => {
        await this.$store.dispatch("approval/delClassById", {id: this.item.c_id});
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  }

}
</script>

<style lang="scss" scope>
  .box-card {
    width: 100%;
    margin-bottom: 30px;
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