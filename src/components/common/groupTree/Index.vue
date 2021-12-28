<template>
  <el-cascader
    v-model="gid"
    :options="groupTree"
    :props="{ expandTrigger: 'hover' }"
    @change="handleChange"
  ></el-cascader>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      gid: ''
    }
  },
  computed: {
    ...mapState({
      groupTree: (state) => {
        return state.user.groupTree.children;
      },
    }),
  },
};
</script>
