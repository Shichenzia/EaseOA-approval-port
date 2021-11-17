<template>
  <div class="home-box">
    <Header />
    <div class="context-box">
      <div class="left">
        <leftNavBar />
      </div>
      <div class="right">
        <appAdmin v-if="headTab === '1'" />
        <Authority v-if="headTab === '4'" />
        <Departmentanduser v-if="headTab === '5-1'" />
        <Role v-if="headTab === '5-2'" />
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
import Departmentanduser from "../../components/Team/Departmentanduser.vue";
import Role from "../../components/Team/Role.vue";
export default {
  components: {
    Header,
    leftNavBar,
    appAdmin,
    Authority,
    Departmentanduser,
    Role
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
    await this.$store.dispatch("user/getUserByToken");
  }
};
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>