import { Component } from "react";

//Here App is class that is extending the functionalty of component that is givien by react
class App extends Component {
  //Render is the method from component]
  constructor() {
    super();
    this.state = {
      name: { firsname: "Ankit", lastName: "Kumar" },
      company: "Centelli",
    };
  }
  render() {
    return (
      <>
        <h1 className="text-red-700 font-semibold">Hello world</h1>
        <p className="ml-12 text-blue-500">
          Hello {this.state.name.firsname} {this.state.name.lastName} work at{" "}
          {this.state.company}
        </p>
        <button
          className="ml-6 w-40 h-10 rounded bg-blue-300 text-white"
          onClick={() => {
            this.setState(() => {
              return { name: { firsname: "Ankit", lastName: "Kumar" } };
            });
          }}
        >
          Click Me
        </button>
      </>
    );
  }
}
export default App;
