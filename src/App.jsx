/* eslint-disable react/prop-types */
/* Functional component with props */
//import { useEffect, useState } from "react";
import "./App.css";
//Array of object
const profile = [
  { Name: "Ak", skills: "FullStack Developer" },
  {
    Name: "PK",
    skills: "Frontend Developer",
  },
];
function Home(props) {
  console.log("Home function", props);
  return (
    <>
      {props.Userpropfile.map((student) => {
        return (
          <div key={student.key}>
            <p>{student.Name}</p> <p>{student.skills}</p>
          </div>
        );
      })}
    </>
  );
}
function App() {
  return (
    <>
      <Home Userpropfile={profile} />
    </>
  );
}
export default App;
