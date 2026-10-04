import { Link } from "react-router"

export interface Menu {
  name: string,
  path: string,
  icon: React.ReactNode
}

export interface SidebarProps {
  menu: Menu[]
}

// ${index === 0 ? "border-r-4 md:border-r-[6px] bg-indigo-500/10 border-indigo-500 text-indigo-500"
//                       : "hover:bg-gray-100/90 border-white text-gray-700"
//                   }
function Sidebar({ menu }: SidebarProps) {
  return (
    <div className="md:w-64 w-16 border-r h-137.5 text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {menu.map((item, index) => (
          <Link to={item.path} key={index}
              className={`flex items-center py-3 px-4 gap-3 
                  `
              }
          >
              {item.icon}
              <p className="md:block hidden text-center">{item.name}</p>
          </Link>
      ))}
    </div>
  )
}

export default Sidebar