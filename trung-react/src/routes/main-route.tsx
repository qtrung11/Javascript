import { createBrowserRouter } from "react-router";
import ReactJsx from "../pages/foundation/react-jsx";
import AppLayout from "../layouts/app-layout";
import Props from "../pages/foundation/props";
import { User } from "../pages/user";
import { UserDetail } from "../pages/user-detail";
import GenerateBox from "../pages/sample-app/generate-box/generateBox";

export const mainRoute = createBrowserRouter([
  // single route
  {
    path: '/',
    Component: AppLayout,
    children: [
      {
        path: "/react-jsx",
        Component: ReactJsx,
      },
      {
        path: "/props",
        Component: Props,
      },
      {
        path: "/user",
        children: [
          {
            index: true,
            Component: User,
          },
          {
            path: ':id',
            Component: UserDetail,
          },
        ]
      },
      {
        path: "/generate-box",
        Component: GenerateBox,
      },
    ]
  }
]);