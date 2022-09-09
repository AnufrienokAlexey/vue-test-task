import Vue from "vue";
import VueRouter from "vue-router";
import CreateUserPage from "@/pages/CreateUserPage";
import MainPage from "@/pages/MainPage";
import UpdateUserPage from "@/pages/UpdateUserPage";
import NotFoundPage from "@/pages/NotFoundPage";
import LogoutUserPage from "@/pages/LogoutUserPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/createuser",
    name: "create",
    component: CreateUserPage,
  },
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  {
    path: "/updateuser",
    name: "update",
    component: UpdateUserPage,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutUserPage,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFoundPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
