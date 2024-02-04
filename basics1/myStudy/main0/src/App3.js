import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Decrmentcount() {
    setCount((prevCount) => prevCount - 1);
  }
  function Addcount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={Decrmentcount}>-</button>
      <span>{count}</span>
      <button onClick={Addcount}>+</button>
    </>
  );
}

export default App;
