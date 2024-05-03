import Button from "./components/button";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession() ; 
  return(
    <>
    getServerSession Result
    {session?.user?.name}
    <div className="flex flex-col">
      <div>
        <Button id = "1"/>
      </div>
      <div>
        <Button id = "2"/>
      </div>
      <div>
        <Button id = "3"/>
      </div>
      <div>
        <Button id = "4"/>
      </div>
    </div>
    
    </>
    
  )
  
}
