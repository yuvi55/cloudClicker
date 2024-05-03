import Button from "../components/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getServerSession(authOptions) ;

  if (session){
    return(
      <>
      <div className="flex flex-col">
        <div>
          <Button id = {"1" + session?.user?.email}/>
        </div>
        <div>
          <Button id = {"2" + session?.user?.email}/>
        </div>
        <div>
          <Button id = {"3" + session?.user?.email}/>
        </div>
        <div>
          <Button id = {"4" + session?.user?.email}/>
        </div>
      </div>
      
      </>
      
    )
  }

  else{
    redirect("/home")
  }
  
  
}
