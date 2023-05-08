import About from "./About";
import Home from "./Home";

//Handling Basic form
function App() {
  const Proiles = [
    { Name: "AK", skills: "Full Stack" },
    { Name: "Dean", skills: "Web Developer" },
  ];
  return (
    <>
      <Home data={Proiles} />
      <About name="Ankit" />
    </>
  );
}
export default App;
