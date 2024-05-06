import Button from "./components/button";
import { getServerSession } from "next-auth";
import PersonalClicks from "./components/personalClicks";
export default async function Home() {
  const session = await getServerSession();
  if (session) {
    return (
      <>
        <h1 className="text-center mt-10 text-2xl font-bold text-slate-500">
          Welcome to the Game
        </h1>
        <PersonalClicks />
        <div className="flex flex-col mt-10 lg:grid grid-cols-4 lg:mx-48 lg:mt-14 ">
          <div className="my-10 text-center">
            <h1 className="my-5">Button 1</h1>
            <Button id={"1"} />
          </div>
          <div className="my-10 text-center ">
            <h1 className="my-5">Button 2</h1>
            <Button id={"2"} />
          </div>
          <div className="my-10 text-center">
            <h1 className="my-5">Button 3</h1>
            <Button id={"3"} />
          </div>
          <div className="my-10 text-center">
            <h1 className="my-5">Button 4</h1>
            <Button id={"4"} />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-center my-10 text-xl font-bold">Instructions:</h1>
          <ul>
            <li>Click on the buttons to increase the number of clicks !</li>
            <li>
              Every Individual button represents the number of times it was
              clicked
            </li>
            <li>Press the reset button to set the score to 0</li>
          </ul>
        </div>
        <div className="text-center my-28 text-green-700 text-4xl">
          <p>Go Bonkers !!</p>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="text-center my-24">
        <h1>Welcome to Cloud Click !</h1>
      </div>

      <div className="text-center">
        <h2>Please sign In to continue</h2>
      </div>
    </>
  );
}
