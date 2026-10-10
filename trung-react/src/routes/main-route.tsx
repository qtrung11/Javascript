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

export const mainRoute = createBrowserRouter([
  // single route
  {
    path: "/",
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
        path: "/page-guest-greeting",
        Component: PageGuestGreeting,
      },

      {
        path: "/components",
        Component: Components,
      },
      {
        path: "/compose-component",
        Component: ComposeComponent,
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
        Component: SampleApp
      },
      {
        path: "/lifting-state-up",
        Component: LiftingStateUp
      },
      {
        path: "/generate-box",
        Component: GenerateBox
      }
    ],
  },
]);
