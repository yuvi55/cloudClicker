"use client";
import React, { useEffect, useState } from "react";
import {
  CollectionReference,
  collection,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  updateDoc,
  increment,
} from "firebase/firestore";
import db from "../../../helper/firebaseConfig";
import { useSession } from "next-auth/react";

const Button = (props: any) => {
  const { data: session } = useSession();
  const [counter, setCounter] = useState(0);
  const buttonCollection = collection(db, "buttonClicks");
  const userCollection = collection(db, "Users");
  const userRef = doc(db, "Users", session?.user?.email || "");

  useEffect(() => {
    const docRef = doc(db, "buttonClicks", props.id);
    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (doc.exists()) {
          setCounter(doc.data().clicks);
        } else {
          setDoc(docRef, { clicks: 0 });
        }
      },
      (error) => {
        console.log("Error getting document:", error);
      }
    );

    return () => unsubscribe();
  }, [props.id]);

  const incrementClick = async () => {
    console.log({ session });
    const newCount = counter + 1;
    setCounter(newCount);
    const docRef = doc(buttonCollection, props.id);

    await updateDoc(userRef, { clicks: increment(1) });
    await setDoc(docRef, { clicks: newCount }, { merge: true });
  };

  const reset = async () => {
    const docRef = doc(buttonCollection, props.id);
    setCounter(0);
    await setDoc(docRef, { clicks: 0 }, { merge: true });
  };

  return (
    <>
      <button
        onClick={incrementClick}
        className="bg-slate-600 h-14 w-24 text-white"
      >
        {counter}
      </button>
      {counter > 0 && (
        <button
          className="h-8 w-16 mx-16 bg-blue-900 text-white hover:bg-red-500"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </>
  );
};

export default Button;
