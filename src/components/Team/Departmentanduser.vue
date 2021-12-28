<template>
  <div class="dep-box">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item>组织架构</el-breadcrumb-item>
      <el-breadcrumb-item>成员与部门</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tab-menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo bg"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ffffff"
      >
        <el-menu-item index="1">成员</el-menu-item>
        <el-menu-item index="2">部门</el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <member v-if="activeIndex === '1'" @select="handleSelect" />
      <group v-if="activeIndex === '2'" />
    </div>
  </div>
</template>

<script>
import group from "./group.vue";
import member from "./member";

export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  components: {
    member,
    group
  },
  methods: {
    handleSelect(key) {
      console.log(key);
      this.activeIndex = key;
    },
  }
}
</script>

<style lang="scss" scope>
.dep-box {
  width: 100%;
  height: 100%;
  .bread {
    margin-left: -20px;
    margin-top: -20px;
    background: #f6f6f7;
    padding: 20px;
  }

  .tab-menu {
    margin-left: -20px;
    .bg {
      background: #ffffff !important;
    }
  }
  .main {
    width: 100%;
    height: 100%;

  }
}
</style>