// eslint-disable-next-line no-unused-vars
import React from "react";
//Switch statement in React
function App() {
  const UserType = "Admin";
  switch (UserType) {
    case "Admin":
      return <h1>Welcome You are admin</h1>;
    case "User":
      return <h1>Welcome You are User</h1>;
    default:
      return <h1>No role permissiable</h1>;
  }
}
export default App;
