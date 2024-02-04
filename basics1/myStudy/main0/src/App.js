import { useState } from "react";
import { ReactDOM } from "react";
function App() {
  const [car, setCar] = useState("red car");

  function carColor() {
    setCar("blue car");
  }
  function carNumber() {
    setCar("323422");
  }

  return (
    <>
      <h1>This is {car}</h1>
      <h1>This is the car's number {carNumber}</h1>
    </>
  );
}

export default App;
