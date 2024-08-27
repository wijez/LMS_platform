import {Menu} from "lucide-react"
import { 
  Sheet,
  SheetContent, 
  SheetTrigger
} from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"

export const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
      <Menu className="text-black"/>
      </SheetTrigger>
      <SheetContent side={"left"} className="p-0 bg-white text-black">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  )
}
