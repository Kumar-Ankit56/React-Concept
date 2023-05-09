// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
//Create an active and inactive buttons
function App() {
  const [box1, setbox1] = useState(false);
  const [box2, setbox2] = useState(false);
  const CSSStyle = {
    color: "red",
    fontSize: "123px",
  };
  const CSSStyle1 = {
    color: "blue",
    fontSize: "163px",
  };

  const ClickBox1 = () => {
    setbox1(true);
    setbox2(false);
  };
  const ClickBox2 = () => {
    setbox1(false);
    setbox2(true);
  };
  return (
    <>
      <button style={box1 ? CSSStyle : CSSStyle1} onClick={ClickBox1}>
        Box1
      </button>
      <button style={box2 ? CSSStyle1 : CSSStyle} onClick={ClickBox2}>
        Box2
      </button>
    </>
  );
}
export default App;
