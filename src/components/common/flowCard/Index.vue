<template>
  <div class="flow-card-box">
    <div class="flow-icon">
      <el-avatar
        shape="square"
        :size="35"
        src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      ></el-avatar>
    </div>
    <div class="flow-card-detail">
      <div>请假</div>
      <div class="desc">发起各类请假申请</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.flow-card-box {
  cursor: pointer;
  border: 1px solid rgb(222, 224, 227);
  width: 32.5rem;
  padding: 10px;
  height: 55px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  .flow-icon {
    height: 35px;
  }
  .flow-card-detail {
    margin-left: 5px;
    height: 35px;
    font-size: 14px;
    .desc {
      font-size: 12px;
      color: #9e9e9e;;
    }
  }
}
.flow-card-box:hover{
  background: rgb(239, 240, 241);
}
</style>