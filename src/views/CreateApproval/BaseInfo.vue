<template>
  <div class="base-info-box">
    <div class="info">
      <div class="app-icon-box">
        <div class="form-item-label">
          <span class="must">图标</span>
        </div>
        <div class="form-item-context">
          <el-avatar :size="48" :src="approverIcon"></el-avatar>
          <div class="base-info-icon-modify-btn" @click="setIsIconList">
            修改
          </div>
          <div class="s" v-show="isIconList"></div>
          <el-card class="box-card" v-show="isIconList">
            <span
              v-for="item in APPROVAL_ICON"
              @click="setIcon(item)"
              :key="item"
            >
              <el-avatar :size="48" :src="item"></el-avatar>
            </span>
          </el-card>
        </div>
      </div>
      <div class="app-ipt-box">
        <div class="form-item-label">
          <span class="must">名称</span>
        </div>
        <div class="form-item-context">
          <el-input
            placeholder="请输入名称"
            v-bind:value="approvalName"
            v-on:input="approvalName = $event"
            clearable
          >
          </el-input>
        </div>
      </div>
      <div class="app-ipt-box">
        <div class="form-item-label">
          <span>说明</span>
        </div>
        <div class="form-item-context">
          <el-input
            placeholder="请输入名称"
            v-bind:value="approvalDesc"
            v-on:input="approvalDesc = $event"
            clearable
          >
          </el-input>
        </div>
      </div>
      <div class="app-ipt-box">
        <div class="form-item-label">
          <span class="must">分组</span>
        </div>
        <div class="form-item-context">
          <el-select
            class="sel"
            v-model="classify"
            placeholder="请选择"
          >
            <el-option
              v-for="item in classOptions"
              :key="item.c_id"
              :label="item.c_name"
              :value="item.c_id"
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
          <el-select class="sel" v-model="starter" placeholder="请选择">
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
import { mapState } from "vuex";
import { APPROVAL_ICON } from "../../common/constants";
export default {
  data() {
    return {
      APPROVAL_ICON,
      isIconList: false,
      options: [
        {
          value: "1",
          label: "全体成员",
        },
        {
          value: "2",
          label: "指定人员",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      classOptions: (state) => state.approval.classList,
      approverIcon: (state) => state.approval.approverIcon,
    }),
    approvalName: {
      get() {
        return this.$store.state.approval.approvalName;
      },
      set(val) {
        this.$store.commit("approval/setBaseInfo", {
          property: "approvalName",
          data: val,
        });
      },
    },
    approvalDesc: {
      get() {
        return this.$store.state.approval.approvalDesc;
      },
      set(val) {
        this.$store.commit("approval/setBaseInfo", {
          property: "approvalDesc",
          data: val,
        });
      },
    },
    classify: {
      get() {
        return this.$store.state.approval.classify;
      },
      set(val) {
        this.$store.commit("approval/setBaseInfo", {
          property: "classify",
          data: val,
        });
      },
    },
    starter: {
      get() {
        return this.$store.state.approval.starter;
      },
      set(val) {
        this.$store.commit("approval/setBaseInfo", {
          property: "starter",
          data: val,
        });
      },
    },
  },
  methods: {
    setIsIconList() {
      this.isIconList = !this.isIconList;
    },
    setIcon(item) {
      this.$store.commit("approval/setBaseInfo", {
        property: "approverIcon",
        data: item,
      });
      this.isIconList = false;
    },
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
        position: relative;
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
        .s {
          position: absolute;
          top: 40px;
          left: 15px;
          z-index: 20;
          width: 0px;
          height: 0px;
          border-top: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #ebeef5;
          border-left: 10px solid transparent;
        }
        .el-card {
          position: absolute;
          top: 60px;
          z-index: 20;
          width: 200px;
          padding: 10px;
          .el-avatar {
            margin: 5px;
          }
        }
      }
    }
    .app-ipt-box {
      margin-bottom: 24px;
      .form-item-context {
        .sel {
          width: 100%;
        }
      }
    }
  }
}
</style>