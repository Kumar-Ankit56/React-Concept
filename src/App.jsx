/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";

function Square() {
  const [value, setvalue] = useState(null);
  function handleClick() {
    setvalue("X");
  }
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  );
}

function App() {
  return (
    <>
      <div className="boardrow">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardrow">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="boardrow">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
export default App;
