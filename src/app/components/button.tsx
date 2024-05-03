"use client"
import React from 'react'
import { useState } from 'react';

const Button = (props:any) => {
    const [counter,setCounter] = useState(Number(localStorage.getItem("count" + props.id)) || 0) ; 

    function incrementClick(){
      setCounter(counter + 1) ; 
      localStorage.setItem("count"+ props.id,String(counter))
    }
  
    function reset(){
      setCounter(0) ; 
      localStorage.removeItem("count" + props.id)
    }
  
  return (
    <>
    <button onClick={incrementClick} className="bg-black h-16 w-24 text-white">
      {Number(localStorage.getItem("count" + props.id)) ? Number(localStorage.getItem("count"+ props.id) ) : counter}
    </button>
  
    {counter > 0 ? <button className = "h-8 w-16 mx-16 bg-black text-white"onClick={reset}>Reset</button> : ""}
    </>
   
  );
}

export default Button