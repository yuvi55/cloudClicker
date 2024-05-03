"use client"

import { signIn  ,signOut , useSession } from "next-auth/react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

function AuthButton() {
    const {data:session} = useSession() ; 

    if(session){
        return(
            <NavigationMenu className="border-b- fixed top-0 flex w-full items-center justify-between border-b-2 bg-white px-8 py-2 dark:bg-black">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button onClick={() => signIn()}>Sign Out</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>



            // <div>
            //     <nav>
            //     Welcome {session?.user?.name} <br/>   
            //     <button onClick={() => signOut()}>Sign Out</button>
            //     </nav>
                
                
            // </div>

            
        )
    }

    return(
    // <>
    //     Not signed in <br/>
    //     <button onClick={() => signIn()}>Sign In</button>
    // </>

<NavigationMenu className="border-b- fixed top-0 flex w-full items-center justify-between border-b-2 bg-white px-8 py-2 dark:bg-black">
  <NavigationMenuList>
    <NavigationMenuItem>
      <Button onClick={() => signIn()}>Sign In</Button>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

    )
}

export default function NavMenu(){
    return(
        <div>
            <AuthButton/>
        </div>
    )
}
