import { Component } from "react";

//Here App is class that is extending the functionalty of component that is givien by react
class App extends Component {
  //Render is the method from component]
  constructor() {
    super();
    this.state = {
      Monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (User) =>
          this.setState(() => {
            return { Monsters: User };
          },
        () => {
          console.log(this.state);
        }
      ));
  }

  render() {
    return (
      <>
        <h1 className="text-red-700 font-semibold">Hello world</h1>
        {this.state.Monsters.map((Monster) => {
          return (
            <div key={Monster.id}>
              <h2>{Monster.name}</h2>
            </div>
          );
        })}
      </>
    );
  }
}
export default App;
