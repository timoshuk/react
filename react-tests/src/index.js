import React from "react";
import ReactDOM from "react-dom";
import PersonList from "./components/person-list";
import UserForm from "./components/user-form";

const RootApp = () => {
  return (
    <div>
      <UserForm />
      <PersonList />
    </div>
  );
};

ReactDOM.render(<RootApp />, document.getElementById("root"));
