import { lazy } from "react";

export const RouteList = [
  {
    path: "/",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Card Services",
    // icon: UploadOutlined,
  },
  {
    path: "/request-foreign-currency",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Request Foreign Currency",
    // icon: UploadOutlined,
  },
  {
    path: "/account-block-unblock",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Account Block Unblock",
    // icon: UploadOutlined,
  },
  {
    path: "/qr-request",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "QR Request",
    // icon: UploadOutlined,
  },
  {
    path: "/register-merchant-qr",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Register Merchant QR",
    // icon: UploadOutlined,
  },
  {
    path: "/dispute-request",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Dispute Request",
    // icon: UploadOutlined,
  }, {
    path: "/mobile-banking",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Mobile Banking",
    // icon: UploadOutlined,
  },
  // {
  //   path: "/media",
  //   pathname: "Media",
  //   icon: VideoCameraOutlined,
  //   children: [
  //     {
  //       path: "/media/videos",
  //       component: lazy(() => import("../pages/All/Video")),
  //       pathname: "Videos",
  //       icon: VideoCameraOutlined,
  //       exact: true,
  //     },
  //     {
  //       path: "/media/images",
  //       component: lazy(() => import("../pages/All/Image")),
  //       pathname: "Images",
  //       icon: UploadOutlined,
  //       exact: true,
  //     },
  //   ],
  // },

];
