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
    path: "/bai-viet",
    name: "Bai viet",
    icon: Notifications,
    component: lazy(() => import("views/Detail/DetailArticle")),
  },
  {
    path: "/nguoi-dung",
    name: "Nguoi dung",
    icon: Notifications,
    component: lazy(() => import("views/Profile/Profile"))

  },
  {
    path: "/top-tac-gia",
    name: "Top tac gia",
    icon: Notifications,
    component: lazy(() => import("views/TopUser/TopUser"))
  }
];

export default dashboardRoutes;
