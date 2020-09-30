import React, { Component } from "react";
import "./user-profile.css";

export default class UserProfile extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data.slice(0, 5) }));
  }

  render() {
    return (
      <div className="user-profile">
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
        <h3>Posts:</h3>
        {this.state.posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
