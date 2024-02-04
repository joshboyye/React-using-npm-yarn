import React,{useState} from "react";

const Counter =()=>{
    const[count,setCount] =useState(0);

    function dicrement(){
        setCount(prevCount=>prevCount-1);
    }
    function increment(){
        setCount(prevCount=>prevCount+1)
    }

    return(
        <div>
            <button onClick={dicrement}>-1</button>
            <span>{count}</span>
            <button onClick={increment}>+1</button>
        </div>
    )
}

export default Counter;