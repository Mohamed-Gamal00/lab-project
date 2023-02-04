import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import HomeView from "../views/HomeView.vue";
import DoctorsView from "../views/DoctorsView.vue";
import MembersView from "../views/MembersView.vue";
import OrdersView from "../views/OrdersView.vue";
import AddorderView from "../views/AddorderView.vue";
import EditorderView from "../views/EditorderView.vue";
import ProvidersView from "../views/ProvidersView.vue";
import PurchasesView from "../views/PurchasesView.vue";
import ReportsView from "../views/ReportsView.vue";
import SettingView from "@/views/SettingView.vue";
import ErrorView from "@/views/erroepage/ErrorView";
import ServerView from "@/views/erroepage/ServerView";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/doctors",
    name: "doctors",
    component: DoctorsView,
  },
  {
    path: "/members",
    name: "members",
    component: MembersView,
  },
  {
    path: "/orders",
    name: "orders",
    component: OrdersView,
  },
  {
    path: "/add_order",
    name: "addorder",
    component: AddorderView,
  },
  {
    path: "/edit_order",
    name: "editorder",
    component: EditorderView,
  },
  {
    path: "/providers",
    name: "providers",
    component: ProvidersView,
  },
  {
    path: "/purchases",
    name: "purchases",
    component: PurchasesView,
  },
  {
    path: "/reports",
    name: "reports",
    component: ReportsView,
  },
  {
    path: "/setting",
    name: "setting",
    component: SettingView,
  },
  {
    path: "/serve_rerror",
    name: "servererror",
    component: ServerView,
  },
  {
    path: "/:catchAll(.*)*",
    name: "errorpage",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
