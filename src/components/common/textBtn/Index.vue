<template>
  <el-button
    class="btn"
    type="text"
    :icon="icon"
  >{{ text }}</el-button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#606266",
    },
    text: {
      type: String,
      default: "点击",
    },
    icon: {
      type: String,
      default: "el-icon-share",
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>