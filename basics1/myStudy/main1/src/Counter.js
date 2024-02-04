import React,{useState} from "react";

const Counter =()=>{
    const [count,setcount] = useState(0);

    function incremnet(){
        setcount(count+1);
    }
    function decrement(){
        setcount(count-1);
    }

    return(
        <>
        <p>This is the count {count} number right now </p>
        <button onClick={incremnet}>+1</button>
        <button onClick={decrement}>-1</button>
        </>
    );
};

export default Counter;