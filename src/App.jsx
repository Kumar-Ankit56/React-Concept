// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
//SetTimeout in react component using hook
function App() {
  const [hastime, sethastime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      sethastime(true);
    }, 5000);
  });
  return (
    <>
      <p>{hastime ? "5 sec passed" : "5 sec has init duration"}</p>
    </>
  );
}
export default App;
