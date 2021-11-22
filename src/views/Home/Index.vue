<template>
  <div class="home-box">
    <Header />
    <div class="context-box">
      <div class="left">
        <leftNavBar />
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../../components/Header/Index.vue";
import leftNavBar from "../../components/leftNavBar/Index.vue";

export default {
  components: {
    Header,
    leftNavBar,
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      headTab: (state) => state.home.headTab,
    }),
  },
  async mounted() {
    if(this.$route.path === "/admin/") {
      this.$router.push("/admin/appAdmin")
    }
    await this.$store.dispatch("user/getUserByToken");
  }
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>