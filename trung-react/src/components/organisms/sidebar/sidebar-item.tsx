import React from 'react'

interface SidebarItemProps {
  title: string,
  icon: React.ReactNode
}

function SidebarItem({ title, icon }: SidebarItemProps) {
  return (
    <li>
      <a
        href="#"
        className="flex items-center px-2 py-1.5 text-body rounded-base hover:bg-neutral-tertiary hover:text-fg-brand group"
      >
        {icon}
        <span className="ms-3">{title}</span>
      </a>
    </li>
  )
}

export default SidebarItem