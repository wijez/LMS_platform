import { Logo } from "./logo"
import { SidebarRoutes } from "./sidebar-router"

export const Sidebar = () => {
  return (
    <div className=" h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo/>
      </div>

      <div className="pt-2 flex flex-col w-full">
        <SidebarRoutes/>
      </div>
    </div>
  )
}
