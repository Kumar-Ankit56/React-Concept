import { Route, BrowserRouter, NavLink, Routes } from "react-router-dom";

function Home() {
  return <>Home</>;
}
function About() {
  return <>About Ankit</>;
}
function Contact() {
  return <>Contact</>;
}
function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
