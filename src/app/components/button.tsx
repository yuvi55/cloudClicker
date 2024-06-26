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
  const userRef = doc(db, "Users", session?.user?.email || "");
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      },
      (error) => {
        console.log("Error getting document:", error);
      }
    );

    return () => unsubscribe();
  }, [props.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const incrementClick = async () => {
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

  async function clickButton() {
    incrementClick();
    try {
      const response = await fetch("/api/clickResponse/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buttonId: props.id,
          user: session?.user?.name,
          email: session?.user?.email,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <button
        onClick={clickButton}
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
