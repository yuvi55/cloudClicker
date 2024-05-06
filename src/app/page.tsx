import Button from "./components/button";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    return (
      <>
        <div className="grid grid-cols-4 mx-48 mt-48">
          <div className="my-10">
            <Button id={"1"} />
          </div>
          <div className="my-10">
            <Button id={"2"} />
          </div>
          <div className="my-10">
            <Button id={"3"} />
          </div>
          <div className="my-10">
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
