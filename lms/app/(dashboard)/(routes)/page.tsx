import { Button } from "@/components/ui/button";
import Image from "next/image";
import {ModeToggle} from "@/components/mode_toggle"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
   
      <UserButton/>
  
    <p>Hi</p>
      <Button variant={"destructive"}>
        Read
      </Button>
      <ModeToggle>

      </ModeToggle>
    </>
  );
}
