import React, { Component } from "react";
class Keypad extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <button className="btn btn-outline-danger m-3 btn-size">C</button>
          <button className="btn btn-outline-info m-3 btn-size">/</button>
          <button className="btn btn-outline-info m-3 btn-size">X</button>
          <button className="btn btn-outline-danger m-3 btn-size">DEL</button>
        </div>
        <div className="row">
          <button
            onClick={() => this.props.onKey(this.props.calKey[7])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            7
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKey[8])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            8
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKey[9])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            9
          </button>
          <button className="btn btn-outline-info m-3 btn-size">-</button>
        </div>
        <div className="row">
          <button
            onClick={() => this.props.onKey(this.props.calKey[4])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            4
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKey[5])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            5
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKey[6])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            6
          </button>
          <button className="btn btn-outline-info m-3 btn-size">+</button>
        </div>
        <div className="row">
          <button
            onClick={() => this.props.onKey(this.props.calKey[1])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            1
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKey[2])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            2
          </button>
          <button
            onClick={() => this.props.onKey(this.props.calKey[3])}
            className="btn btn-outline-dark m-3 btn-size"
          >
            3
          </button>
          <button className="btn btn-outline-primary m-3 btn-size">=</button>
        </div>
        <div className="row">
          <button className="btn btn-outline-dark m-3 btn-size">0</button>
        </div>
      </div>
    );
  }
}

export default Keypad;
