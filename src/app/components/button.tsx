"use client"
import React, { useEffect, useState } from 'react';
import { CollectionReference, collection, doc, getDoc, setDoc , onSnapshot } from 'firebase/firestore';
import db from '../../../helper/firebaseConfig';

const Button = (props:any) => {
    const [counter, setCounter] = useState(0);
    const buttonCollection = collection(db, 'buttonClicks');

    // Fetch current counter from Firestore
    useEffect(() => {
        const docRef = doc(db, 'buttonClicks', props.id);
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                setCounter(doc.data().clicks);
            } else {
                // Initialize with a new document if it does not exist
                setDoc(docRef, { clicks: 0 });
            }
        }, (error) => {
            console.log("Error getting document:", error);
        });

        // Clean up the subscription on unmount
        return () => unsubscribe();
    }, [props.id]);

    // Increment click handler
    const incrementClick = async () => {
        const newCount = counter + 1;
        setCounter(newCount);
        const docRef = doc(buttonCollection, props.id);
        await setDoc(docRef, { clicks: newCount }, { merge: true });
    };

    // Reset the counter and delete Firestore document
    const reset = async () => {
        const docRef = doc(buttonCollection, props.id);
        setCounter(0);
        await setDoc(docRef, { clicks: 0 }, { merge: true });
    };

    return (
        <>
            <button onClick={incrementClick} className="bg-black h-14 w-24 text-white">
                {counter}
            </button>
            {counter > 0 && (
                <button className="h-8 w-16 mx-16 bg-black text-white hover:bg-red-500" onClick={reset}>
                    Reset
                </button>
            )}
        </>
    );
};

export default Button;

