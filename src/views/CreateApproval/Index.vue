<template>
  <div class="create-approval-box">
    <div class="heard">
      <div class="heard-left">
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
        >上一步</el-button>
        <el-button
          type="primary"
          plain
          icon="el-icon-right"
          :disabled="stepsNum === 3"
          @click="setstepsNum('next')"
        >下一步</el-button>
        <el-button type="primary" class="issue">发布</el-button>
      </div>
    </div>
    <BaseInfo v-show="stepsNum === 0" />
    <FromCreat
      v-show="stepsNum === 1"
      ref="designer"
      heigth="90%"
    />
    <setting v-show="stepsNum === 2" />
    <More v-show="stepsNum === 3" />
  </div>
</template>

<script>
import BaseInfo from "./BaseInfo.vue";
import FromCreat from "./FromCreat.vue";
import setting from "./setting.vue";
import More from "./More.vue";
export default {
  data() {
    return {
      stepsNum: 0
    };
  },
  components: {
    BaseInfo,
    FromCreat,
    setting,
    More
  },
  methods: {
    goBack() {
      console.log("go back");
    },
    setstepsNum(fun) {
      if(fun === "last") {
        this.stepsNum--;
      }else if(fun === "next"){
        this.stepsNum++;
      }
    }
  },
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>