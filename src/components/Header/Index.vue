<template>
  <div class="header-box">
    <div class="header-left">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="tabs">
        审批管理后台
      </div>
    </div>
    <div class="header-right">
      <div class="menu-box">
      </div>
      <div class="avatar-box">
        <span>{{ this.userInfo.c_name || "匿名用户" }}</span>
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  }
};
</script>


<style scope lang="scss">
@import "./index.scss";
</style>