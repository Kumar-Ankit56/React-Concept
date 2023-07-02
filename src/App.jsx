<<<<<<< HEAD
import { Component } from "react";

class App extends Component{
  render(){
    return(
       <h1 className="text-blue-50 font-semibold">Hello world</h1>
    )
  }
}
export default App
=======
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
>>>>>>> 8c28a5e88861ed7a98890e88fd76def2bff04d42
