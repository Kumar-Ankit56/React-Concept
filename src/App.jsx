// eslint-disable-next-line no-unused-vars
import { React, useEffect, useState } from "react";

//Giving days between dates
function App() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setcount(count + 1);
    }, 5000);
  });
  return (
    <>
      <div>{count}</div>
    </>
  );
}
export default App;
