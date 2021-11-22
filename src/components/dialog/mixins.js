const url = 'https://stavinli.gitee.io/workflow/'

export default {
  data(){
    return {
      visibleDialog: false,
      searchVal: "",
      activeName: "1",
      departments: {},
      roles: [],
    }
  },
  methods:{
    getRoleList() {
      this.$axios.get(`${url}roles.json`).then(res => {
          this.roles = res.data.list;
      })
    },
    getDepartmentList(parentId = 0) {
        this.$axios.get(`${url}departments.json?parentId=${parentId}`).then(res => {
            this.departments = res.data;
        })
    },
    getDebounceData(event, type = 1) {
      this.$func.debounce(function () {
          if (event.target.value) {
              if (type == 1) {
                  this.departments.childDepartments = [];
                  this.$axios.get(`${url}employees.json?searchName=${event.target.value}&pageNum=1&pageSize=30`).then(res => {
                      this.departments.employees = res.data.list
                  })
              } else {
                  this.$axios.get(`${url}roles.json?searchName=${event.target.value}&pageNum=1&pageSize=30`).then(res => {
                      this.roles = res.data.list
                  })
              }
          } else {
              type == 1 ? this.getDepartmentList() : this.getRoleList();
          }
      }.bind(this))()
    },
  }
}