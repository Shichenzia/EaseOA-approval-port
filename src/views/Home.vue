<template>
  <div class="home">
    主页面
    <div>
      <el-button type="primary">element-button</el-button>
      <div>{{ this.list }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      list: state => state.index.list
    })
  },
  async mounted() {
    this.$store.dispatch('index/Test');
  }
};
</script>
