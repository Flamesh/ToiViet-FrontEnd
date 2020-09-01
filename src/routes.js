import { lazy } from "react";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";

// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: lazy(() => import("views/Dashboard/Dashboard")),
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: lazy(() => import("views/UserProfile/UserProfile")),
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: lazy(() => import("views/TableList/TableList")),
  },
  {
    path: "/login",
    name: "Login",
    icon: Notifications,
    component: lazy(() => import("views/Auth/login")),
  },
  {
    path: "/bai-viet",
    name: "Bài viết",
    icon: Notifications,
    component: lazy(() => import("views/Detail/DetailArticle")),
  },
];

export default dashboardRoutes;
