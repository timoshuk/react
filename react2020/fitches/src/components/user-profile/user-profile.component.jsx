import React from "react";
import withData from "../../with-data";
import "./user-profile.css";

const UserProfile = ({ data, name, email }) => {
  return (
    <div className="user-profile">
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>Posts:</h3>
      {data.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(
  UserProfile,
  "https://jsonplaceholder.typicode.com/posts"
);
