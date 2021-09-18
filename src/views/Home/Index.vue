<template>
  <div class="home-box">
    <Header />
    <div class="context-box">
      <div class="left">
        <leftNavBar />
      </div>
      <div class="right">
        <appAdmin v-show="headTab === '1'" />
        <Authority v-show="headTab === '4'" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../../components/Header/Index.vue";
import leftNavBar from "../../components/leftNavBar/Index.vue";
import appAdmin from "../../components/appAdmin/Index.vue";
import Authority from "../../components/Authority/Index.vue";
export default {
  components: {
    Header,
    leftNavBar,
    appAdmin,
    Authority
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      headTab: (state) => state.home.headTab,
    }),
  }
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>