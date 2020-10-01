// This is HOC Component

import React, { Component } from "react";

const withData = (WrappedComponent, dataSource) => {
  class WithData extends Component {
    state = {
      data: [],
    };

    componentDidMount() {
      fetch(dataSource)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data.slice(0, 5) }));
    }

    render() {
      return this.state.data < 1 ? (
        <h1>Loading...</h1>
      ) : (
        <WrappedComponent data={this.state.data} {...this.props} />
      );
    }
  }

  return WithData;
};

export default withData;
