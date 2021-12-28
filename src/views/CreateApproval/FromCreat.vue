<template>
  <div class="from-creat-box">
    <fc-designer ref="designer" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      FcDesignerRuleJson: (state) => state.approval.FcDesignerRuleJson,
      FcDesignerOptionsJson: (state) => state.approval.FcDesignerOptionsJson,
    })
  },
  methods: {
    commitJson() {
      this.$store.commit("approval/setBaseInfo", {
        property: "FcDesignerOptionsJson",
        data: JSON.stringify(this.$refs.designer.getOption()),
      });
      this.$store.commit("approval/setBaseInfo", {
        property: "FcDesignerRuleJson",
        data: this.$refs.designer.getJson(),
      });
    },
  },
  watch:{
    FcDesignerRuleJson: function(){
      this.$refs.designer.setRule(this.FcDesignerRuleJson);
      this.$refs.designer.setOption(JSON.parse(this.FcDesignerOptionsJson));
    }
  },
  mounted() {
    this.$store.commit("approval/setBaseInfo", {
        property: "commitJson",
        data: this.commitJson,
    });
  },
};
</script>

<style lang="scss" scope>
.from-creat-box {
  height: 90vh;
  min-width: 1200px;
}
</style>