import React, { Component } from "react";
import Keypad from "./components/keypad";
import Results from "./components/results";
import "./App.css";

class App extends Component {
  state = {
    calKey: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    displayValue: 0,
    prevVal: 0,
    signVal: ""
  };
  /**this function is used creating the a value you want to calculate */
  handleKey = val => {
    let displayVal = "" + this.state.displayValue;
    displayVal += val;
    this.setState({ displayValue: displayVal });
    console.log(displayVal);
  };

  render() {
    return (
      <React.Fragment>
        <Results val={this.state.displayValue} />
        <Keypad calKey={this.state.calKey} onKey={this.handleKey} />
      </React.Fragment>
    );
  }
}

export default App;
