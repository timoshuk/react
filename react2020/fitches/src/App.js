import React from "react";
import UserProfile from "./components/user-profile/user-profile.component";
import UserList from "./components/user-list/user-list.component";
import "./App.css";

function App() {
  return (
    <div className="app">
      <UserList />
      <UserProfile name="Oleksandr" email="o.timoshuk@gmail.com" />
    </div>
  );
}

export default App;
