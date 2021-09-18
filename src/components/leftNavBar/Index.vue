<template>
  <el-menu
    :default-active="active"
    :value="active"
    class="el-menu-vertical-demo"
    @select="handleSelect"
  >
  <el-menu-item index="1">审批管理</el-menu-item>
  <el-menu-item index="2">数据导出</el-menu-item>
  <el-menu-item index="3">特色功能</el-menu-item>
  <el-menu-item index="4">权限管理</el-menu-item>
  <el-submenu index="5">
    <template slot="title">组织架构</template>
    <el-menu-item index="5-1">成员与部门</el-menu-item>
    <el-menu-item index="5-2">角色管理</el-menu-item>
  </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
    };
  },
  methods: {
    handleSelect(key) {
      this.$store.commit("home/setHeadTab", key);
    }
  },
};
</script>

<style lang="scss" scope>
.el-menu-vertical-demo {
  width: 235px;
  height: 100%;
  padding-top: 10px;
  .is-active {
    background-color: rgba(69,117,246,.1);
    border-left: #4575f6 5px solid;
  }
}
.el-menu {
  height: 100%;
  background-color: #f6f6f7 !important;
}
</style>