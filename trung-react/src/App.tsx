
import { RouterProvider } from "react-router/dom";

import { mainRoute } from "./routes/main-route";

function App() {

 
  return (
    <>
      <RouterProvider router={mainRoute} />

      {/* <Sidebar menu={menu} /> */}

      {/* <div className="p-4 sm:ml-64">
        <h1 className="text-2xl font-bold">React JSX</h1>
        
        
        
        
        
        
        
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
