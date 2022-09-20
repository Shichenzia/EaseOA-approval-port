<template>
  <el-menu
    :default-active="active"
    :value="active"
    class="el-menu-vertical-demo"
    @select="handleSelect"
  >
  <el-menu-item index="/admin/appAdmin">审批管理</el-menu-item>
  <el-menu-item index="/admin/dataEduce">数据导出</el-menu-item>
  <el-menu-item index="/admin/feature">特色功能</el-menu-item>
  <el-menu-item index="/admin/authority">权限管理</el-menu-item>
  <el-submenu index="/admin/team">
    <template slot="title">组织架构</template>
    <el-menu-item index="/admin/team/Departmentanduser">成员与部门</el-menu-item>
    <el-menu-item index="/admin/team/Role">角色管理</el-menu-item>
  </el-submenu>
  </el-menu>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      // active: "/admin/appAdmin",
    };
  },
  methods: {
    handleSelect(key) {
      if(key === this.$route.path) {
        return;
      }
      this.$router.push(key);
      this.$store.commit("home/setHeadTab", key);
    }
  },
  computed: {
    ...mapState({
      active: state => state.home.headTab
    })
  },
  watch: {
    $route: function(newval) {
      if(newval.path === "/admin/" || newval.path === "/admin") {
        this.$router.push("/admin/appAdmin")
        return;
      }
      this.$store.commit("home/setHeadTab", newval.path);
    }
  },
  mounted() {
    this.$store.commit("home/setHeadTab", this.$route.path);
  }
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