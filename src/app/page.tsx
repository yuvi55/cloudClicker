import Button from "./components/button";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession() ;
  if (session){
    return(
      <div className="flex flex-col my-10">
        <div className="my-10">
          <Button id = {"1" + session?.user?.email}/>
        </div>
        <div className="my-10">
          <Button id = {"2" + session?.user?.email}/>
        </div>
        <div className="my-10">
          <Button id = {"3" + session?.user?.email}/>
        </div>
        <div className="my-10">
          <Button id = {"4" + session?.user?.email}/>
        </div>
      </div>
  )
  }
    return(
        <>
        <h1>Welcome to Cloud Click !</h1>
    
        <h2>Please sign In to continue</h2>
        </>
    )
  
}
