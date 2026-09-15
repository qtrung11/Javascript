import Components from "./pages/foundation/component"
import ConditionalRendering from "./pages/foundation/conditional-rendering"
import List from "./pages/foundation/list"
import Props from "./pages/foundation/props"
import ReactJsx from "./pages/foundation/react-jsx"
import State from "./pages/foundation/state"
import ComposeComponent from "./pages/sample-app/compose-component/compose-component"
import PageGuestGreeting from "./pages/sample-app/guest-greeting.tsx/guest-greeting"

function App() {
  
  return (
    <>
      <h1 className="text-2xl font-bold">React JSX</h1>
      <ReactJsx />

      <br /><br />
      <Props />

      <br /><br />
      <State />

      <br />
      <br />
      <Components />

      <br/> <br/>
      <ComposeComponent />
      <br /><br />
      <PageGuestGreeting/>

      <br /><br />
      <ConditionalRendering />


      <br /><br />
      <List />

      <br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
    </>
  )
}

export default App
