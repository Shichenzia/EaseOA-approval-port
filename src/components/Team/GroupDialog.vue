<template>
  <el-dialog title="新建部门" :visible="dialogFormVisible" :show-close="false" destroy-on-close>
    <el-form :model="form">
      <el-form-item label="部门名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="上级部门" :label-width="formLabelWidth">
        <el-cascader
          v-model="form.gid"
          :options="groupTree"
          :props="{ expandTrigger: 'hover', checkStrictly: true }"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="createGroup">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    dialogFormVisible: {
      typeof: Boolean,
      default: false,
    },
    item: {
      typeof: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    ...mapState({
      groupTree: (state) => {
        return state.user.groupTree.children;
      },
    }),
  },
  data() {
    return {
      form: {
        name: this.item.c_name,
        gid: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    close() {
      this.form = {
        name: "",
        gid: ""
      }
      this.$emit("setDialogFormVisible", false);
    },
    open() {
      this.$emit("setDialogFormVisible", true);
    },
    handleChange(value) {
      console.log(value);
    },
    async createGroup() {
      const { name, gid } = this.form;
      if (!name || !gid[gid.length - 1]) {
        this.$message.error("请按要求输入！");
        return;
      }

      console.log(this.item);

      if (this.item.c_id) {
        await this.$store.dispatch("user/updateGroup", {
          id: this.item.c_id,
          name,
          gid: gid[gid.length - 1],
        });
        this.close();
        return;
      }

      await this.$store.dispatch("user/createGroup", {
        name,
        gid: gid[gid.length - 1],
      });
      this.close();
      return;
    },
  },
};
</script>
