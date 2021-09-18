<template>
  <div class="approval-card-box">
    <div class="avatar-box">
      <div class="flow-icon">
        <el-avatar
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          :size="42"
        ></el-avatar>
      </div>
      <div class="flow-card-detail">
        <div>请假</div>
        <div class="desc">发起各类请假申请</div>
      </div>
    </div>
    <div class="Power">全员可见</div>
    <div class="menu">
      <el-tooltip
        class="item"
        effect="dark"
        content="编辑"
        placement="top"
      >
        <i class="el-icon-edit"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="复制"
        placement="top"
      >
        <i class="el-icon-copy-document"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="禁用"
        placement="top"
      >
        <i class="el-icon-circle-close"></i>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="删除"
        placement="top"
      >
        <i class="el-icon-delete"></i>
      </el-tooltip>
    </div>
  </div>
</template>

<style lang="scss" scope>
.approval-card-box {
  padding: 20px;
  height: 82px;
  display: flex;
  justify-content: space-between;
  .avatar-box {
    width: 470px;
    display: flex;
    overflow: hidden;
    align-items: center;
    .flow-icon {
      height: 42px;
    }
    .flow-card-detail {
      margin-left: 10px;
      .desc {
        font-size: 12px;
        color: #9e9e9e;
      }
    }
  }
  .Power {
    display: flex;
    align-items: center;
    width: 300px;
    padding: 0 32px 0 10px;
  }
  .menu {
    font-size: 16px;
    display: flex;
    align-items: center;
    i{
      margin-left: 10px;
    }
  }
}
.approval-card-box:hover {
  background-color: #eff0f1;
}
</style>