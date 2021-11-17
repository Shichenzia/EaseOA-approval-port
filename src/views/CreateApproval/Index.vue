<template>
  <div class="create-approval-box">
    <div class="heard">
      <div class="heard-left" @click="goBack">
        <i class="el-icon-back" :size="40"></i>
        返回
        <el-divider direction="vertical"></el-divider>
      </div>
      <div class="heard-content">
        <el-steps :active="stepsNum" align-center>
          <el-step title="基础信息"></el-step>
          <el-step title="表单设计"></el-step>
          <el-step title="流程设计"></el-step>
          <el-step title="更多设置"></el-step>
        </el-steps>
      </div>
      <div class="heard-right">
        <el-button
          type="primary"
          plain
          icon="el-icon-back"
          :disabled="stepsNum === 0"
          @click="setstepsNum('last')"
          >上一步</el-button
        >
        <el-button
          type="primary"
          plain
          icon="el-icon-right"
          :disabled="stepsNum === 3"
          @click="setstepsNum('next')"
          >下一步</el-button
        >
        <el-button type="primary" class="issue" @click="issueProcess" :disabled="stepsNum !== 3">发布</el-button>
      </div>
    </div>
    <BaseInfo v-show="stepsNum === 0" />
    <FromCreat v-show="stepsNum === 1" ref="designer" heigth="90%" />
    <setting v-show="stepsNum === 2" />
    <More v-show="stepsNum === 3" />
  </div>
</template>

<script>
import BaseInfo from "./BaseInfo.vue";
import FromCreat from "./FromCreat.vue";
import setting from "./workflow.vue";
import More from "./More.vue";
import { mapState } from "vuex";
import { getQueryVariable } from "../../common/util";
export default {
  data() {
    return {
      stepsNum: 0,
    };
  },
  components: {
    BaseInfo,
    FromCreat,
    setting,
    More,
  },
  computed: {
    ...mapState({
      approverIcon: (state) => state.approval.approverIcon,
      approvalName: (state) => state.approval.approvalName,
      approvalDesc: (state) => state.approval.approvalDesc,
      classify: (state) => state.approval.classify,
      starter: (state) => state.approval.starter,
      commitJson: (state) => state.approval.commitJson,
      FcDesignerRuleJson: (state) => state.approval.FcDesignerRuleJson,
      FcDesignerOptionsJson: (state) => state.approval.FcDesignerOptionsJson,
      processConfigJson: (state) => state.approval.processConfigJson,
      commitProcessConfigJson: (state) => state.approval.commitProcessConfigJson,
      userInfo: (state) => state.user.userInfo,
    }),
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
    async setstepsNum(fun) {
      if (fun === "last") {
        this.stepsNum--;
      } else if (fun === "next") {
        if (this.stepsNum === 0) {
          if (
            !this.approverIcon ||
            !this.approvalName ||
            !this.classify ||
            !this.starter
          ) {
            this.$message.error("请完善必选项信息！");
            // return;
          }
        } else if (this.stepsNum === 1) {
          await this.commitJson();
          if (this.FcDesignerRuleJson === "[]" || !this.FcDesignerOptionsJson === "[]") {
            this.$message.error("请完善必选项信息！");
            // return;
          }
        } else if (this.stepsNum === 2) {
          await this.commitProcessConfigJson();
          if (this.processConfigJson === "") {
            this.$message.error("请完善必选项信息！");
            // return;
          }
        }
        this.stepsNum++;
      }
    },
    async issueProcess() {
      const { approverIcon, approvalName, approvalDesc, classify, starter, FcDesignerRuleJson, FcDesignerOptionsJson, processConfigJson, userInfo } = this;

      const approvalId = getQueryVariable("c_id");
      if(approvalId) {
        await this.$store.dispatch('approval/setProcessById', {id: approvalId, approverIcon, approvalName, approvalDesc, classify, starter, FcDesignerRuleJson, FcDesignerOptionsJson, processConfigJson, createor: userInfo.c_id });
        // this.goBack();
        return;
      }

      await this.$store.dispatch('approval/issueProcess', { approverIcon, approvalName, approvalDesc, classify, starter, FcDesignerRuleJson, FcDesignerOptionsJson, processConfigJson, createor: userInfo.c_id });
      // this.goBack();
      return;
    }
  },
  async mounted(){
    this.$store.commit("approval/setAllBaseInfoInit");
    const approvalId = getQueryVariable("c_id");
    if(approvalId) {
      await this.$store.dispatch('approval/getProcessById', {id : approvalId});
    }
  }
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>