import { NavbarRoutes } from "@/components/navbar-routes";
import { MobileSideBar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div
      className=' p-6 border-b h-full flex items-center bg-white
    shadow-sm'
    >
      <MobileSideBar/>
      <NavbarRoutes/>
    </div>
  );
};
