import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import element from "element-ui";
import formCreate from "@form-create/element-ui";
import FcDesigner from "@form-create/designer";
import "../mockjs/index";
import "element-ui/lib/theme-chalk/index.css";

import "./plugins/axios";
import "./plugins/element.js";
import "./css/override-element-ui.css";
import func from "./plugins/preload.js";
import nodeWrap from "@/components/nodeWrap";
Vue.use(nodeWrap);
Vue.component("nodeWrap", nodeWrap); //初始化组件
import addNode from "@/components/addNode";
Vue.use(addNode);
Vue.component("addNode", addNode); //初始化组件
Vue.prototype.$func = func;
Vue.config.productionTip = false;
Vue.directive("enterNumber", {
  bind: function(el, { value = 2 }) {
    el = el.nodeName == "INPUT" ? el : el.children[0];
    var RegStr =
      value == 0
        ? `^[\\+\\-]?\\d+\\d{0,0}`
        : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`;
    el.addEventListener("keyup", function() {
      el.value = el.value.match(new RegExp(RegStr, "g"));
      el.dispatchEvent(new Event("input"));
    });
  },
});

Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    el.focus();
  },
});

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(element);
Vue.use(formCreate);
Vue.use(FcDesigner);

new Vue({
  router,
  store,
  components: {
    nodeWrap,
    addNode,
  },
  render: (h) => h(App),
}).$mount("#app");
