import SidebarList from "./sidebar-list"

export interface Menu {
  id: number,
  title: string,
  icon: React.ReactNode
}

export interface SidebarProps {
  menu: Menu[]
}

function Sidebar({ menu }: SidebarProps) {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-full transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-primary-soft border-e border-default">
        <SidebarList menu={menu} />
      </div>
    </aside>
  )
}

export default Sidebar