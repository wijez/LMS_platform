"use client"

import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith('/teacher')
  const isChapterPage = pathname?.includes('/chapter')
  return (
    <div className="flex gap-x-2 ml-auto">
      { isTeacherPage || isChapterPage ? (
        <Link href={"/"}>
        <Button size={"sm"} variant={"oppa"}>
          <LogOut className="h-4 w-4 mr-2"/>
          Exit
        </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size={"sm"} variant={"oppa"}>
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton/>
    </div>
  )
}
