import { createBrowserRouter } from "react-router";
import ReactJsx from "../pages/foundation/react-jsx";
import AppLayout from "../layouts/app-layout";
import Props from "../pages/foundation/props";
import { User } from "../pages/user";
import { UserDetail } from "../pages/user-detail";
import GenerateBox from "../pages/sample-app/generate-box/generateBox";
import LiftingStateUp from "../pages/sample-app/lifting-state-up/LifttingStateUp";
import State from "../pages/foundation/state";
import PageGuestGreeting from "../pages/sample-app/guest-greeting.tsx/guest-greeting";
import Components from "../pages/foundation/component";
import ComposeComponent from "../pages/sample-app/compose-component/compose-component";
import ConditionalRendering from "../pages/foundation/conditional-rendering";
import List from "../pages/foundation/list";
import Todo from "../pages/foundation/props-lifting/todo";

import CommonConfirm from "../pages/foundation/common-confirm";
import Form from "../pages/foundation/form";
import { SampleApp } from "../pages/sample-app";
import TodoDetail from "../pages/sample-app/lifting-state-up/components/TodoDetail";
import { Login } from "../pages/login";
import AuthRoute from "./auth-route";
import GuestRoute from "./guest-route";
import ContactUs from "../pages/contact-us/contact-us";
import Error401 from "../pages/error-401/error-401";

export const mainRoute = createBrowserRouter([
  // single route
  {
    path: "/",
    element: <AuthRoute><AppLayout /></AuthRoute>,
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
            path: ":id",
            Component: UserDetail,
          },
        ],
      },
      {
        path: "/state",
        Component: State,
      },
      {
        path: "/components",
        Component: Components,
      },
     
      {
        path: "/conditional-rendering",
        Component: ConditionalRendering,
      },
      {
        path: "/list",
        Component: List,
      },
      {
        path: "/todo",
        Component: Todo,
      },
      {
        path: "/form",
        Component: Form,
      },
      {
        path: "/common-confirm",
        Component: CommonConfirm,
      },
      {
        path: "/sample-app",
        Component: SampleApp,
        children: [
          {
            path: "compose-component",
            Component: ComposeComponent,
          },
          {
            path: "generate-box",
            Component: GenerateBox
          },
          {
            path: "lifting-state-up",
            Component: LiftingStateUp,
            children: [
              {
                path: ":id",
                Component: TodoDetail,
              }
            ]
          },
          {
            path: "page-guest-greeting",
            Component: PageGuestGreeting,
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    element: <GuestRoute><Login /></GuestRoute>,
  },
  {
    path: "contact-us",
    Component: ContactUs
  },
  {
    path: "/error-401",
    Component: Error401
  }
]);
