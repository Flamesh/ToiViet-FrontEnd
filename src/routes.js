import { lazy } from "react";

// @material-ui/icons
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: lazy(() => import("views/Dashboard/Dashboard")),
  },
  {
    path: "/bai-viet",
    name: "Bai viet",

    component: lazy(() => import("views/Detail/DetailArticle")),
  },
  {
    path: "/nguoi-dung",
    name: "Nguoi dung",
    component: lazy(() => import("views/Profile/Profile")),
  },
  {
    path: "/top-tac-gia",
    name: "Top tac gia",
    component: lazy(() => import("views/TopUser/TopUser")),
  },
  {
    path: "/the-loai",
    name: "The Loai",
    component: lazy(() => import("views/TypeArticle/TypeArticle")),
  },
];

export default dashboardRoutes;
