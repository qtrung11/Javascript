import type { SidebarProps } from "./sidebar"
import SidebarItem from "./sidebar-item"

function SidebarList({ menu }: SidebarProps) {
  return (
    <ul className="space-y-2 font-medium">
      {menu.map((item) => {
        return (
          <SidebarItem 
            key={item.id}
            title={item.title}
            icon={item.icon}
          />
        )
      })}
    </ul>
  )
}

export default SidebarList