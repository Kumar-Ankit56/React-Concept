/* eslint-disable react/prop-types */
/* Use of ternary operator */
//import { useEffect, useState } from "react";
import "./App.css";
function DataMap() {
  const isLoggedIn = false;
  const profile = [
    { Name: "Ak", skills: "FullStack Developer" },
    {
      Name: "PK",
      skills: "Frontend Developer",
    },
  ];
  console.log(profile);
  return (
    <>
      {isLoggedIn ? (
        "Back"
      ) : (
        <>
          {profile.map((data) => {
            console.log(data);
            (<p>{data.Name}</p>),
              (
                <div>
                  <p>{data.skills}</p>
                </div>
              );
          })}
        </>
      )}
    </>
  );
}
function App() {
  return (
    <>
      <DataMap />
    </>
  );
}
export default App;
