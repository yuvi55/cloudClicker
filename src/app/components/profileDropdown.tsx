"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { signIn  ,signOut , useSession } from "next-auth/react"
import { useContext } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
const text = "Please Login to Continue"
export default function ProfileDropdown() {
  const { data: session, status }: any = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {session?.user ? (
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  session?.user?.avatar_url ||
                  session?.user?.image
                }
                alt={session?.user?.name as string}
              />
              <AvatarFallback>{session?.user?.name}</AvatarFallback>
            </Avatar>
          </Button>
        ) : (
          <Button
            variant="destructive"
            className="relative h-8 w-8 rounded-full"
          >
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={
                  session?.user?.avatar_url ||
                  session?.user?.image
                }
                alt={session?.user?.name as string}
              />
              <AvatarFallback>{session?.user?.name}</AvatarFallback>
            </Avatar>
          </Button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="flex justify-between font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session?.user?.name || text}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session?.user?.email || ""}
            </p>
          </div>
        </DropdownMenuLabel>

        {session?.user && <DropdownMenuSeparator />}
        {session?.user && (
          <DropdownMenuGroup>
            <Link href={`/people/${session?.user._id}`}>
            </Link>
          </DropdownMenuGroup>
        )}

        <DropdownMenuSeparator />

        {session?.user ? (
          <DropdownMenuItem
          onClick={() =>
            signOut({
              callbackUrl: "/"
            })
          }
          >
            Log out
          </DropdownMenuItem>
        ) : (
          <Button onClick={() => signIn("google", {redirect:true , callbackUrl:"/dashboard"})}>
            <DropdownMenuItem>Log In</DropdownMenuItem>
          </Button>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
