/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [datalist, setdatalist] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setdatalist(data));
  }, []);
  return (
    <>
      {datalist &&
        datalist.map((obj) => {
          return (
            <ul key={obj.id}>
              <li>{obj.id}</li>
              <li>{obj.body}</li>
              <li>{obj.title}</li>
            </ul>
          );
        })}
    </>
  );
}
export default App;
