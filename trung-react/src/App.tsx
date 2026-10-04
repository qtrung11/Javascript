import React from "react";
import Components from "./pages/foundation/component";
import ConditionalRendering from "./pages/foundation/conditional-rendering";
import List from "./pages/foundation/list";
import Props from "./pages/foundation/props";
import ReactJsx from "./pages/foundation/react-jsx";
import State from "./pages/foundation/state";
import ComposeComponent from "./pages/sample-app/compose-component/compose-component";
import Todo from "./pages/foundation/props-lifting/todo";
import Form from "./pages/foundation/form";
import PageGuestGreeting from "./pages/sample-app/guest-greeting.tsx/guest-greeting";
import GenerateBox from "./pages/sample-app/generate-box/generateBox";
import CommonConfirm from "./pages/foundation/common-confirm";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Header } from "./components/organisms/header";
import { Sidebar } from "./components/organisms/sidebar";
import { mainRoute } from "./routes/main-route";

function App() {

 
  return (
    <>
      <RouterProvider router={mainRoute} />

      {/* <Sidebar menu={menu} /> */}

      {/* <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold">React JSX</h1>
        <br />
        <br />
        <br />
        <br />
        <State />
        <br />
        <br />
        <PageGuestGreeting />
        <br />
        <br />
        <Components />
        <br /> <br />
        <ComposeComponent />
        <br />
        <br />
        <ConditionalRendering />
        <br />
        <br />
        <List />
        <br />
        <br />
        <Todo />
        <br />
        <br />
        <Form />
        <br />
        <br />
        <br />
        <PageGuestGreeting />
        <br />
        <br />
        <br />

        <br /><br />
        <CommonConfirm />
      </div>

      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </>
  );
}

export default App;
