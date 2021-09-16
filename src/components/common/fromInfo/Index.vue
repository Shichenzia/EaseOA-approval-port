<template>
  <div class="property-box">
    <div class="property">{{ property }}</div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    property: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scope>
.property-box {
  margin: 10px 0;
  overflow: hidden;
  .property {
    font-size: 14px;
    color: rgb(158, 158, 158);
    margin: 5px 0;
  }
  .value {
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0;
  }
}
</style>