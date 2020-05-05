import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../pages/layout/Home.vue";
//import UserStay from "../pages/flow-monitor/flow-brief/user-stay.vue";
//import UserShare from "../pages/flow-monitor/share/user-share.vue";
//import SpreadRelation from "../pages/flow-monitor/share/spread-relation.vue";

Vue.use(VueRouter);

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/flow-monitor",
//     component: resolve =>
//       require(["../pages/flow-monitor/flow-brief/user-stay.vue"], resolve),
//     meta: { title: "基本表单" }
//   },
//   {
//     path: "/flow-monitor/user-share",
//     name: "user-share",
//     component: UserShare
//   },
//   {
//     path: "/flow-monitor/spread-relation",
//     name: "user-share",
//     component: SpreadRelation
//   }

// ];
const routes = [
  {
    path: "/",
    component: resolve => require(["../pages/layout/Home.vue"], resolve),
    meta: { title: "自述文件" },
    children: [
      {
        path: "/flow-monitor",
        component: resolve =>
          require(["../pages/flow-monitor/flow-brief/user-stay.vue"], resolve),
        meta: { title: "基本表单" }
      }
    ]
  }
];
const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
