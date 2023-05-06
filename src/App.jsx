import { useState } from "react";

//Handling Basic form
function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  const handleName = (e) => {
    setname(e.target.value);
  };
  const handleAge = (e) => {
    setage(e.target.value);
  };
  const handleEmail = (e) => {
    setemail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDafault();
    console.log(name, age, email);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            onChange={handleName}
          />{" "}
          <br />
          <input
            type="text"
            value={age}
            placeholder="Enter Your Age"
            onChange={handleAge}
          />{" "}
          <br />
          <input
            type="text"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleEmail}
          />{" "}
          <br />
          <button type="submit">Submit Data</button>
        </form>
      </div>
    </>
  );
}
export default App;
