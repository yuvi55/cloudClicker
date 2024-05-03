"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import ProfileDropdown from "./profileDropdown";
import { Button } from "@/components/ui/button";

function AuthButton() {
  const { data: session } = useSession();

  return (
    <NavigationMenu className="w-full flex items-center justify-between bg-white dark:bg-black border-b border-gray-300 px-8 py-2 z-50">
      <NavigationMenuList className="flex items-center">
        {session ? (
          <>
            <NavigationMenuItem className="mx-10 text-sm text-gray-800 dark:text-gray-200">
              Hey! {session?.user?.name}
            </NavigationMenuItem>
            <NavigationMenuItem className=" mr-0">
              <ProfileDropdown />
            </NavigationMenuItem>
          </>
        ) : (
          <>
            <NavigationMenuItem className="mx-10 text-sm text-gray-800 dark:text-gray-200">
              Welcome, You are not logged in
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button onClick={() => signIn()} className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm">
                Sign In
              </Button>
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default function NavMenu() {
  return (
    <div>
      <AuthButton />
    </div>
  );
}
