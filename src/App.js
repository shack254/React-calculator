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
  };

  handleSignKey = sign => {
    this.setState({
      prevVal: this.state.displayValue,
      displayValue: 0,
      signVal: sign
    });
  };
  handleCKey = () => {
    this.setState({ displayValue: 0 });
  };

  handleEqualsKey = () => {
    let result = 0;
    switch (this.state.signVal) {
      case "+":
        result =
          parseFloat(this.state.prevVal) + parseFloat(this.state.displayValue);
        break;
      case "-":
        result =
          parseFloat(this.state.prevVal) - parseFloat(this.state.displayValue);
        break;
      case "*":
        result =
          parseFloat(this.state.prevVal) * parseFloat(this.state.displayValue);
        break;
      case "/":
        result =
          parseFloat(this.state.prevVal) / parseFloat(this.state.displayValue);
        break;
      default:
        break;
    }

    this.setState({ displayValue: result });
  };

  render() {
    return (
      <React.Fragment>
        <Results val={this.state.displayValue} />
        <Keypad
          calKey={this.state.calKey}
          onKey={this.handleKey}
          onSignKey={this.handleSignKey}
          onEqualsKey={this.handleEqualsKey}
          onC={this.handleCKey}
        />
      </React.Fragment>
    );
  }
}

export default App;
