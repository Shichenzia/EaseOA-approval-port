<template>
  <el-card class="box-card" shadow="hover">
    <div class="heard">
      <div class="title">请假</div>
      <div><el-tag type="success" size="small">标签二</el-tag></div>
    </div>
    <div class="avatar-box">
      <el-avatar
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        :size="24"
      ></el-avatar>
      <span style="margin-left: 10px">屈君臣</span>
    </div>
    <div class="content">
      <div>请假类型：事假</div>
      <div>开始时间：事假</div>
    </div>
    <div class="time">
      处理时间：09-12 15:13
    </div>
  </el-card>
</template>

<style lang="scss" scope>
.box-card {
  margin-bottom: 10px;
  .el-card__body{
    padding: 10px;
  }
  .heard {
    display: flex;
    justify-content: space-between;
    height: 24px;
    margin-bottom: 10px;
    .title {
      font-weight: 500;
    }
  }
  .avatar-box {
    height: 24px;
    display: flex;
    align-items: center;
  }
  .content {
    div{
      font-size: 14px;
      margin: 10px 0;
    }
  }
  .time{
    font-size: 12px;
  }
}
</style>