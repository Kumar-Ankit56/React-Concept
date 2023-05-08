// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./Home";
//Passing inline css as props
function App() {
  const CSSStyle = {
    color: "red",
    fontSize: "123px",
  };
  return (
    <>
      <Home style={CSSStyle} />
    </>
  );
}
export default App;
