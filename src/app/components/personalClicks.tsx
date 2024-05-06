"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../../../helper/firebaseConfig";

const PersonalClicks = () => {
  const { data: session } = useSession();
  const [clicks, setClicks] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      const userRef = doc(db, "Users", session.user.email);
      const unsubscribe = onSnapshot(
        userRef,
        (doc) => {
          if (doc.exists()) {
            const data = doc.data();
            setClicks(data.clicks || 0);
          } else {
            console.log("No such document!");
          }
          setLoading(false);
        },
        (error) => {
          console.error("Error getting document:", error);
        }
      );
      return () => unsubscribe();
    }
  }, [session?.user?.email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center mt-10 font-semibold">
      {clicks > 0 ? <div>Your Total clicks are {clicks}</div> : ""}
    </div>
  );
};

export default PersonalClicks;
