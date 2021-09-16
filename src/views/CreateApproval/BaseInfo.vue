<template>
  <div class="base-info-box">
    <div class="info">
      <div class="app-icon-box">
        <div class="form-item-label">
          <span class="must">图标</span>
        </div>
        <div class="form-item-context">
          <el-avatar
            :size="48"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
          <div class="base-info-icon-modify-btn">修改</div>
        </div>
      </div>
      <div class="app-ipt-box">
        <div class="form-item-label">
          <span class="must">名称</span>
        </div>
        <div class="form-item-context">
          <el-input placeholder="请输入名称" v-model="input" clearable>
          </el-input>
        </div>
      </div>
      <div class="app-ipt-box">
        <div class="form-item-label">
          <span>说明</span>
        </div>
        <div class="form-item-context">
          <el-input placeholder="说明" v-model="input" clearable> </el-input>
        </div>
      </div>
      <div class="app-ipt-box">
        <div class="form-item-label">
          <span class="must">分组</span>
        </div>
        <div class="form-item-context">
          <el-select class="sel" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="app-ipt-box">
        <div class="form-item-label">
          <span class="must">谁可以发起这个审批</span>
        </div>
        <div class="form-item-context">
          <el-select class="sel" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "出勤",
        },
        {
          value: "选项2",
          label: "财务",
        },
        {
          value: "选项3",
          label: "行政",
        },
        {
          value: "选项4",
          label: "人事",
        }
      ],
      value: "",
      input: "",
    };
  },
};
</script>

<style lang="scss" scope>
.base-info-box {
  width: 100%;
  .info {
    min-width: 1200px;
    width: 1200px;
    background: #fff;
    padding: 20px 235px;
    margin: 0 auto;
    margin-top: 20px;
    .form-item-label {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 20px;
      color: #1f2329;
      .must {
        position: relative;
      }
      .must::after {
        content: "*";
        position: absolute;
        top: 0;
        left: 100%;
        padding: 2px;
        color: #f54a45;
      }
    }
    .app-icon-box {
      margin-bottom: 24px;
      .form-item-context {
        display: flex;
        .el-avatar {
          cursor: pointer;
        }
        .base-info-icon-modify-btn {
          color: #3370ff;
          display: flex;
          align-items: center;
          margin-left: 16px;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }
    .app-ipt-box {
      margin-bottom: 24px;
      .form-item-context{
        .sel{
          width: 100%;
        }
      }
    }
  }
}
</style>