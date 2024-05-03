"use client"
import React, { useEffect, useState } from 'react';

const Button = (props: any) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const storedCount = window.localStorage.getItem("count" + props.id);
        if (storedCount) {
            setCounter(Number(storedCount));
        }
    }, [props.id]); 

    function incrementClick() {
        const newCount = counter + 1;
        setCounter(newCount);
        window.localStorage.setItem("count" + props.id, String(newCount));
    }

    function reset() {
        setCounter(0);
        window.localStorage.removeItem("count" + props.id);
    }

    return (
        <>
            <button onClick={incrementClick} className="bg-black h-16 w-24 text-white">
                {counter}
            </button>
            {counter > 0 && (
                <button className="h-8 w-16 mx-16 bg-black text-white" onClick={reset}>
                    Reset
                </button>
            )}
        </>
    );
}

export default Button;
