import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    return (
      <div className="container results">
        <p>{this.props.val}</p>
      </div>
    );
  }
}

export default Results;
