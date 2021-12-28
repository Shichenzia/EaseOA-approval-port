<template>
  <div>
    <div class="fd-nav-content">
      <section class="dingflow-design">
        <div class="zoom">
          <div
            :class="'zoom-out' + (nowVal == 50 ? ' disabled' : '')"
            @click="zoomSize(1)"
          ></div>
          <span>{{ nowVal }}%</span>
          <div
            :class="'zoom-in' + (nowVal == 300 ? ' disabled' : '')"
            @click="zoomSize(2)"
          ></div>
        </div>
        <div
          class="box-scale"
          id="box-scale"
          :style="
            'transform: scale(' +
            nowVal / 100 +
            '); transform-origin: 50% 0px 0px;'
          "
        >
          <nodeWrap
            :nodeConfig.sync="nodeConfig"
            :flowPermission.sync="flowPermission"
            :isTried.sync="isTried"
            :tableId="tableId"
          ></nodeWrap>
          <div class="end-node">
            <div class="end-node-circle"></div>
            <div class="end-node-text">流程结束</div>
          </div>
        </div>
      </section>
    </div>
    <errorDialog :visible.sync="tipVisible" :list="tipList" />
    <promoterDrawer />
    <approverDrawer :directorMaxLevel="directorMaxLevel" />
    <copyerDrawer />
    <conditionDrawer />
  </div>
</template>
<script>
import errorDialog from "@/components/dialog/errorDialog";
import promoterDrawer from "@/components/drawer/promoterDrawer";
import approverDrawer from "@/components/drawer/approverDrawer";
import copyerDrawer from "@/components/drawer/copyerDrawer";
import conditionDrawer from "@/components/drawer/conditionDrawer";
import { mapState } from "vuex";
export default {
  components: {
    errorDialog,
    promoterDrawer,
    approverDrawer,
    copyerDrawer,
    conditionDrawer,
  },
  data() {
    return {
      isTried: false,
      tipList: [],
      tipVisible: false,
      nowVal: 100,
      processConfig: {
        tableId: 1,
        workFlowDef: {
          name: "合同审批",
        },
        directorMaxLevel: 4,
        flowPermission: [],
        nodeConfig: {
          nodeName: "发起人",
          type: 0,
          priorityLevel: "",
          settype: "",
          selectMode: "",
          selectRange: "",
          directorLevel: "",
          examineMode: "",
          noHanderAction: "",
          examineEndDirectorLevel: "",
          ccSelfSelectFlag: "",
          conditionList: [],
          nodeUserList: [],
          childNode: null,
          conditionNodes: [],
        },
      },
      nodeConfig: {
        nodeName: "发起人",
        type: 0,
        priorityLevel: "",
        settype: "",
        selectMode: "",
        selectRange: "",
        directorLevel: "",
        examineMode: "",
        noHanderAction: "",
        examineEndDirectorLevel: "",
        ccSelfSelectFlag: "",
        conditionList: [],
        nodeUserList: [],
        childNode: null,
        conditionNodes: [],
      },
      workFlowDef: {
        name: "合同审批",
      },
      flowPermission: [],
      directorMaxLevel: 4,
      tableId: 1,
    };
  },
  computed: {
    ...mapState({
      processConfigJson: (state) => {
        return JSON.parse(state.approval.processConfigJson);
      },
    }),
  },
  watch: {
    processConfigJson: function () {
      console.log(
        this.processConfig.nodeConfig,
        this.processConfigJson.nodeConfig
      );
      if (this.processConfig == this.processConfigJson) {
        console.log(this.processConfig, this.processConfigJson);
        return;
      }

      this.processConfig = this.processConfigJson;
      let {
        nodeConfig,
        flowPermission,
        directorMaxLevel,
        workFlowDef,
        tableId,
      } = this.processConfig;
      this.nodeConfig = nodeConfig;
      this.flowPermission = flowPermission;
      this.directorMaxLevel = directorMaxLevel;
      this.workFlowDef = workFlowDef;
      this.tableId = tableId;
    },
  },
  mounted() {
    this.$store.commit("approval/setBaseInfo", {
      property: "commitProcessConfigJson",
      data: this.commitProcessConfigJson,
    });

    //TODO 我是傻逼，全是魔法
    if (this.processConfig == this.processConfigJson) {
      console.log(this.processConfig, this.processConfigJson);
      return;
    }

    this.processConfig = this.processConfigJson;
    let { nodeConfig, flowPermission, directorMaxLevel, workFlowDef, tableId } = this.processConfig;
    this.nodeConfig = nodeConfig;
    this.flowPermission = flowPermission;
    this.directorMaxLevel = directorMaxLevel;
    this.workFlowDef = workFlowDef;
    this.tableId = tableId;
  },
  methods: {
    commitProcessConfigJson() {
      this.$store.commit("approval/setBaseInfo", {
        property: "processConfigJson",
        data: this.saveSet(),
      });
    },
    reErr({ childNode }) {
      if (childNode) {
        let { type, error, nodeName, conditionNodes } = childNode;
        if (type == 1 || type == 2) {
          if (error) {
            this.tipList.push({
              name: nodeName,
              type: ["", "审核人", "抄送人"][type],
            });
          }
          this.reErr(childNode);
        } else if (type == 3) {
          this.reErr(childNode);
        } else if (type == 4) {
          this.reErr(childNode);
          for (var i = 0; i < conditionNodes.length; i++) {
            if (conditionNodes[i].error) {
              this.tipList.push({
                name: conditionNodes[i].nodeName,
                type: "条件",
              });
            }
            this.reErr(conditionNodes[i]);
          }
        }
      } else {
        childNode = null;
      }
    },
    saveSet() {
      this.isTried = true;
      this.tipList = [];
      this.reErr(this.nodeConfig);
      if (this.tipList.length != 0) {
        this.tipVisible = true;
        return;
      }
      this.processConfig.flowPermission = this.flowPermission;
      console.log(JSON.stringify(this.processConfig));

      return JSON.stringify(this.processConfig);
    },
    zoomSize(type) {
      if (type == 1) {
        if (this.nowVal == 50) {
          return;
        }
        this.nowVal -= 10;
      } else {
        if (this.nowVal == 300) {
          return;
        }
        this.nowVal += 10;
      }
    },
  },
};
</script>
<style>
@import "../../css/workflow.css";
.error-modal-list {
  width: 455px;
}
</style>