<template>
  <div class="from-creat-box">
    <fc-designer ref="designer" />
    <button @click="add">提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    add() {
      console.log("getRule", this.$refs.designer.getRule());
      console.log("getJson", this.$refs.designer.getJson());
      console.log("getOption", this.$refs.designer.getOption());
      
      this.$store.dispatch("home/addTemplate", {
        name: "模板一",
        creator_id: "dfsfsdfg555",
        json: this.$refs.designer.getJson(),
        class_id: "333"
      })
    }
  }
}
</script>

<style lang="scss" scope>
.from-creat-box {
  height: 90vh;
  min-width: 1200px;
}
</style>