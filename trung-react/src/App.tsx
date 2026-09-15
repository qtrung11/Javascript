import React from "react"
import Sidebar from "./components/organisms/sidebar"
import Components from "./pages/foundation/component"
import ConditionalRendering from "./pages/foundation/conditional-rendering"
import List from "./pages/foundation/list"
import Props from "./pages/foundation/props"
import ReactJsx from "./pages/foundation/react-jsx"
import State from "./pages/foundation/state"
import ComposeComponent from "./pages/sample-app/compose-component/compose-component"
<<<<<<< HEAD
import PageGuestGreeting from "./pages/sample-app/guest-greeting.tsx/guest-greeting"
=======
import Todo from "./pages/foundation/props-lifting/todo"
>>>>>>> a279918e4f3a7a6e99d9084992149d9a446c4dba

function App() {
  const [menu, setMenu] = React.useState([
    {
      id: 1,
      title: 'Dashboard',
      icon: (
        <svg
          className="w-5 h-5 transition duration-75 group-hover:text-fg-brand"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
          />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Kanban',
      icon: (
        <svg
          className="shrink-0 w-5 h-5 transition duration-75 group-hover:text-fg-brand"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
          />
        </svg>
      )
    }
  ])
  
  return (
    <>
      <Sidebar menu={menu} />

      <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold">React JSX</h1>
        <ReactJsx />

        <br /><br />
        <Props />

        <br /><br />
        <State />

<<<<<<< HEAD
      <br/> <br/>
      <ComposeComponent />
      <br /><br />
      <PageGuestGreeting/>
=======
        <br />
        <br />
        <Components />
>>>>>>> a279918e4f3a7a6e99d9084992149d9a446c4dba

        <br/> <br/>
        <ComposeComponent />

        <br /><br />
        <ConditionalRendering />


        <br /><br />
        <List />

        <br /><br />
        <Todo />
      </div>

      

      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
    </>
  )
}

export default App
