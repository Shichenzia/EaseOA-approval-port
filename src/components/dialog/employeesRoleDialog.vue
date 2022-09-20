<template>
  <el-dialog
    title="选择成员"
    :visible.sync="visibleDialog"
    width="600px"
    append-to-body
    class="promoter_person"
  >
    <div class="person_body clear">
      <div class="person_tree l">
        <input
          type="text"
          placeholder="搜索成员"
          v-model="searchVal"
          @input="getDebounceData($event, activeName)"
        />
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="组织架构" name="1"></el-tab-pane>
          <el-tab-pane label="角色列表" name="2"></el-tab-pane>
        </el-tabs>
        <p class="ellipsis tree_nav" v-if="activeName == 1 && !searchVal">
          <span class="ellipsis">EaseOA</span>
        </p>
        <el-tree
          :props="props"
          :load="loadNode"
          lazy
          ref="tree"
          show-checkbox
          node-key="c_id"
          @check-change="handleCheckChange"
        >
          <div slot-scope="{ node, data }">
            <i :class="data.icon"></i>
            <span>{{ node.label }}</span>
          </div>
        </el-tree>
        <!-- <ul style="height: 360px;" v-if="activeName==1">
                  <li v-for="(item,index) in departments.childDepartments" :key="index+'b'" class="check_box" :class="{not: !isDepartment}">
                      <a v-if="isDepartment" :class="$func.toggleClass(checkedDepartmentList,item)&&'active'" @click="$func.toChecked(checkedDepartmentList,item)">
                        <img src="@/assets/images/icon_file.png">{{item.departmentName}}</a>
                      <a v-else><img src="@/assets/images/icon_file.png">{{item.departmentName}}</a>
                      <i @click="getDepartmentList(item.id)">下级</i>
                  </li>
                  <li v-for="(item,index) in departments.employees" :key="index+'c'" class="check_box">
                      <a :class="$func.toggleClass(checkedEmployessList,item)&&'active'" @click="$func.toChecked(checkedEmployessList,item)" :title="item.departmentNames">
                          <img src="@/assets/images/icon_people.png">{{item.employeeName}}</a>
                  </li>
              </ul>
              <ul style="height: 360px;" v-if="activeName==2">
                  <li v-for="(item,index) in roles" :key="index+'c'" class="check_box">
                      <a :class="$func.toggleClass(checkedRoleList,item,'roleId')&&'active'" @click="$func.toChecked(checkedRoleList,item,'roleId')" :title="item.description">
                          <img src="@/assets/images/icon_role.png">{{item.roleName}}</a>
                  </li>
              </ul> -->
      </div>
      <div class="has_selected l">
        <p class="clear">
          已选（{{ total }}）
          <a @click="delList">清空</a>
        </p>
        <ul>
          <li v-for="(item, index) in checkedRoleList" :key="index + 'e'">
            <img src="@/assets/images/icon_role.png" />
            <span>{{ item.roleName }}</span>
            <img
              src="@/assets/images/cancel.png"
              @click="$func.removeEle(checkedRoleList, item, 'roleId')"
            />
          </li>
          <template v-if="isDepartment">
            <li
              v-for="(item, index) in checkedDepartmentList"
              :key="index + 'e1'"
            >
              <img src="@/assets/images/icon_file.png" />
              <span>{{ item.departmentName }}</span>
              <img
                src="@/assets/images/cancel.png"
                @click="$func.removeEle(checkedDepartmentList, item)"
              />
            </li>
          </template>
          <li v-for="(item, index) in checkedEmployessList" :key="index + 'e2'">
            <img src="@/assets/images/icon_people.png" />
            <span>{{ item.c_name }}</span>
            <img src="@/assets/images/cancel.png" @click="delEmploy(item)" />
          </li>
        </ul>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible', false)">取 消</el-button>
      <el-button type="primary" @click="saveDialog">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import mixins from "./mixins";
export default {
  mixins: [mixins],
  props: ["visible", "data", "isDepartment"],
  watch: {
    visible(val) {
      this.visibleDialog = this.visible;
      if (val) {
        this.activeName = "1";
        this.getDepartmentList();
        this.searchVal = "";
        this.checkedEmployessList = this.data
          .filter((item) => item.type === 1)
          .map(({ name, targetId }) => ({
            employeeName: name,
            id: targetId,
          }));
        this.checkedRoleList = this.data
          .filter((item) => item.type === 2)
          .map(({ name, targetId }) => ({
            roleName: name,
            roleId: targetId,
          }));
        this.checkedDepartmentList = this.data
          .filter((item) => item.type === 3)
          .map(({ name, targetId }) => ({
            departmentName: name,
            id: targetId,
          }));
      }
    },
    visibleDialog(val) {
      this.$emit("update:visible", val);
    },
  },
  computed: {
    total() {
      return (
        this.checkedEmployessList.length +
        this.checkedRoleList.length +
        this.checkedDepartmentList.length
      );
    },
  },
  data() {
    return {
      checkedRoleList: [],
      checkedEmployessList: [],
      checkedDepartmentList: [],
      props: {
        label: "c_name",
        children: "zones",
      },
    };
  },
  methods: {
    handleClick() {
      this.searchVal = "";
      this.conditionRoleSearchName = "";
      if (this.activeName == 1) {
        this.getDepartmentList();
      } else {
        this.getRoleList();
      }
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
      if(data.icon === 'el-icon-folder') {
        return;
      }
      if (checked) {
        this.$func.toChecked(this.checkedEmployessList, data);
      } else {
        this.$func.removeEle(this.checkedEmployessList, data);
      }
    },
    delEmploy(item) {
      let EmployessList = this.$refs.tree.getCheckedKeys();
      console.log(EmployessList);
      let newArray = [];
      EmployessList.forEach((em) => {
        if (em !== item.c_id) {
          newArray.push(em);
        }
      });
      console.log(newArray);

      this.$refs.tree.setCheckedKeys(newArray);

      this.$func.removeEle(this.checkedEmployessList, item);
    },
    saveDialog() {
      let checkedList = [
        ...this.checkedRoleList,
        ...this.checkedEmployessList,
        ...this.checkedDepartmentList,
      ].map((item) => ({
        type: item.employeeName ? 1 : item.roleName ? 2 : 3,
        targetId: item.c_uid || item.roleId,
        name: item.c_name || item.roleName || item.departmentName,
      }));
      this.$emit("change", checkedList);
    },
    delList() {
      this.checkedEmployessList = [];
      this.checkedRoleList = [];
      this.checkedDepartmentList = [];
    },
    async loadNode(node, resolve) {
      let groupList = [],
        userList = [];

      if (node.level === 0) {
        groupList = await this.$store.dispatch("user/getGroupListByGid", {
          gid: "0001",
        });
        userList = await this.$store.dispatch("user/listMemberByGid", {
          gid: "0001",
        });
      } else {
        groupList = await this.$store.dispatch("user/getGroupListByGid", {
          gid: node.data.c_id,
        });
        userList = await this.$store.dispatch("user/listMemberByGid", {
          gid: node.data.c_id,
        });
      }

      if (!groupList || !userList) {
        return resolve([]);
      }
      // 让部门部门不能被选中
      groupList = groupList.map((item) => {
        return {
          ...item,
          icon: "el-icon-folder",
          disabled: true,
        };
      });

      userList = userList.map((item) => {
        return {
          ...item,
          icon: "el-icon-user",
        };
      });
      return resolve([...groupList, ...userList]);
    },
  },
};
</script>

<style>
@import "../../css/dialog.css";
</style>