import { Header } from '../components/organisms/header'
import { Sidebar } from '../components/organisms/sidebar'
import { Outlet } from 'react-router';

function AppLayout() {
  const dashboardicon = (
      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
      </svg>
  );

  const overviewicon = (
      <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z" />
      </svg>
  );

  const sidebarLinks = [
    { name: "react-jsx", path: "/react-jsx", icon: dashboardicon },
    { name: "props", path: "/props", icon: overviewicon },
    { name: "User", path: "/user", icon: overviewicon },
    { name: "State", path: "/state", icon: overviewicon },
    { name: "Components", path: "/components", icon: overviewicon },
    { name: "ConditionalRendering", path: "/conditional-rendering", icon: overviewicon },
    { name: "List", path: "/list", icon: overviewicon },
    { name: "Todo", path: "/todo", icon: overviewicon },
    { name: "Form", path: "/form", icon: overviewicon },
    { name: "CommonConfirm", path: "/common-confirm", icon: overviewicon },
    { name: "SampleApp", path: "/sample-app", icon: overviewicon },
  ];

  return (
    <>
      <Header />

      <div className="flex">
        <Sidebar menu={sidebarLinks}/>
        <main className="p-4">
          <Outlet />
        </main>
      </div>

    </>
  )
}

export default AppLayout