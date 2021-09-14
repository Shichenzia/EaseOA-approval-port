<template>
  <div class="header-box">
    <div class="header-left">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="发起申请" name="1"></el-tab-pane>
          <el-tab-pane label="审批中心" name="2"></el-tab-pane>
          <el-tab-pane label="效率诊断" name="3"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="header-right">
      <div class="menu-box">
        <el-button class="btm" type="text" icon="el-icon-set-up">审批后台管理</el-button>
      </div>
      <div class="avatar-box">
        <span>屈君臣</span>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1"
    };
  },
  methods: {
    handleClick() {
      console.log(this.$store);
      this.$store.commit("home/setHeadTab", this.activeName);
    }
  }
};
</script>

<style scope lang="scss">
@import "./index.scss";
</style>