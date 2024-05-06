import {
  CollectionReference,
  collection,
  doc,
  getDocs,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import db from "../../../helper/firebaseConfig";
import Recharts from "../components/recharts";
import AreaCharts from "../components/areaChart";
import PieCharts from "../components/pieChart";
const page = async () => {
  async function fetchAllData() {
    const collectionRef = collection(db, "buttonClicks"); // Reference to the collection
    try {
      const snapshot = await getDocs(collectionRef);
      const dataList = snapshot.docs.map((doc) => ({
        id: doc.id, // Get document ID
        data: doc.data(), // Get document data
      }));
      return dataList; // Returns an array of objects where each object contains a document's ID and data
    } catch (error) {
      console.error("Error fetching documents: ", error);
      return []; // Return an empty array in case of error
    }
  }

  const data: Object = await fetchAllData();

  return (
    <div>
      <h1 className="text-6xl text-center my-14">Bar chart</h1>
      <Recharts data={data} />
      <h1 className="text-6xl text-center my-14">Area chart</h1>
      <AreaCharts data={data} />
    </div>
  );
};

export default page;
