<template>
  <el-dialog
    :title='title'
    :visible="dialogFormVisible"
    :show-close="false"
    destroy-on-close
  >
    <el-form :model="form">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-select v-model="form.name" filterable placeholder="请选择">
          <el-option
            :disabled="disabled"
            v-for="item in userList"
            :key="item.c_id"
            :label="item.c_name"
            :value="item.c_id"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="部门" :label-width="formLabelWidth">
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
      <el-button type="primary" @click="createMember">确 定</el-button>
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
    }
  },
  computed: {
    ...mapState({
      groupTree: (state) => {
        return state.user.groupTree.children;
      },
      userList: (state) => {
        let userList = [];
        state.user.userList.map((item) => {
          if(item.c_name) {
            userList.push(item)
          }
          return;
        })

        return userList;
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
      disabled: false,
      title: "添加人员"
    };
  },
  watch: {
    item: function(){
      this.form.name = this.item.c_uid || '';
      this.disabled = this.item.c_uid ? true : false;
      this.title = this.item.c_uid ? "变更部门" : "添加成员";
    }
  },
  methods: {
    close() {
      this.form = {
        name: "",
        gid: "",
      };
      this.$emit("setDialogFormVisible", false);
    },
    open() {
      this.$emit("setDialogFormVisible", true);
    },
    handleChange(value) {
      console.log(value);
    },
    async createMember() {
      const { name, gid } = this.form;
      if (!name || !gid[gid.length - 1]) {
        this.$message.error("请按要求输入！");
        return;
      }

      console.log(this.item);

      if (this.item.c_id) {
        await this.$store.dispatch("user/updateMember", {
          c_id: this.item.c_id,
          uid: this.item.c_uid,
          gid: gid[gid.length - 1],
        });
        this.close();
        return;
      }

      await this.$store.dispatch("user/createMember", {
        uid: name,
        gid: gid[gid.length - 1],
      });
      this.close();
      return;
    },
  },
};
</script>
