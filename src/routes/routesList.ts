import { lazy } from "react";

export const RouteList = [
  {
    path: "/",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Card Services",
  },
  {
    path: "/request-foreign-currency",
    component: lazy(() => import("../pages/requestForeignCurrency/index")),
    exact: true,
    pathname: "Request Foreign Currency",
  },
  {
    path: "/account-block-unblock",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Account Block Unblock",
  },
  {
    path: "/qr-request",
    component: lazy(() => import("../pages/qrPayment/index")),
    exact: true,
    pathname: "QR Request",
  },
  {
    path: "/register-merchant-qr",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Register Merchant QR",
  },
  {
    path: "/dispute-request",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Dispute Request",
  },
  {
    path: "/mobile-banking",
    component: lazy(() => import("../pages/dashboard/index")),
    exact: true,
    pathname: "Mobile Banking",
  },
  {
    path: "/profile",
    component: lazy(() => import("../pages/profile/index")),
    exact: true,
    pathname: "Profile",
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
