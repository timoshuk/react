import React from "react";
import withData from "../../with-data";

const UserList = ({ data }) => {
  return (
    <div className="user-list container">
      <h3>Userss:</h3>
      {data.map((user) => (
        <div className="user" key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(UserList, "https://jsonplaceholder.typicode.com/users");
