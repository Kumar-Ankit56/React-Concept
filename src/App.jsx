import { Component } from "react";

//Here App is class that is extending the functionalty of component that is givien by react
class App extends Component {
  //Render is the method from component]
  constructor() {
    super();
    this.state = {
      Monsters: [
        {
          name: "Linda",
        },
        {
          name: "Rafel",
        },
        {
          name: "Jacky",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <h1 className="text-red-700 font-semibold">Hello world</h1>
        {this.state.Monsters.map((Monster) => {
           return <h2>{Monster.name}</h2>
        })}
      </>
    );
  }
}
export default App;
