import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const initialState = {
  count: 0
};

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return { count: state.count - action.amount };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}

function increment(amount) {
  return { type: "INCREMENT", amount };
}

function decrement(amount) {
  return { type: "DECREMENT", amount };
}

function reset() {
  return { type: "RESET" };
}

const store = createStore(reducer, initialState);

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  countIncrement = () => {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(increment(amount));
  };

  countDecrement = () => {
    let amount = parseInt(this.refs.amount.value || 1);
    store.dispatch(decrement(amount));
  };
  countReset = () => {
    store.dispatch(reset());
  };

  render() {
    const count = store.getState().count;
    return (
      <div className="counter">
        <h1>{count}</h1>

        <div className="buttons">
          <button onClick={this.countIncrement}>+</button>
          <button onClick={this.countReset}>R</button>
          <button onClick={this.countDecrement}>-</button>
        </div>

        <input type="text" ref="amount" defaultValue="1" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
