import React, { Component } from "react";

export default class Comment extends Component {
  state = {
    showComment: false
  };
  render() {
    const btnData = this.state.showComment ? "Close" : "Open";
    return (
      <div className="coment">
        <button onClick={this.toggleShow}>{btnData}</button>
        {this.showComment()}
      </div>
    );
  }

  toggleShow = () => {
    this.setState({ showComment: !this.state.showComment });
  };

  showComment = () => {
    if (!this.state.showComment) {
      return false;
    }
    if (!this.props.comments || !this.props.comments.length) {
      return (
        <div>
          <h1>No COMMENTS!!!</h1>
        </div>
      );
    } else {
      return (
        <ul>
          {this.props.comments.map(item => {
            return (
              <li key="item.id">
                <h2>{item.user}</h2>
                <p>{item.text}</p>
              </li>
            );
          })}
        </ul>
      );
    }
  };
}
