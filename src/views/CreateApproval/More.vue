<template>
  <div class="move-info-box">
    <div class="info">
      <div class="repeal mb-8">
        <div class="lable">撤销设置</div>
        <div class="context">
          <el-checkbox v-model="checked" label="允许撤销"></el-checkbox>
        </div>
        <div class="sub">
          勾选后，员工可申请撤销已通过的审批（配置前已通过的审批不可撤销）
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  },
}
</script>

<style lang="scss" scope>
.mb-8 {
  margin-bottom: 32px;
}
.move-info-box {
  width: 100%;
  .info {
    min-width: 1200px;
    width: 1200px;
    background: #fff;
    padding: 20px 235px;
    margin: 0 auto;
    margin-top: 20px;
    min-height: 100px;
    .repeal {
      .lable {
        color: #1f2329;
        font-size: 14px;
        line-height: 22px;
        font-weight: 550;
        margin-bottom: 8px;
      }
      .context {
        color: #1f2329;
        display: inline-flex;
        align-items: center;
        margin-bottom: 8px;
        font-weight: 500px;
        .el-radio__label,
        .el-checkbox__label {
          font-size: 14px;
        }
      }
      .sub {
        color: #646a73;
        margin-top: 8px;
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}
</style>