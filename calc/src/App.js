import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Keys from "./components/Keys";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "C") {
      this.reset()
    }
    else if (button === "CE") {
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
      <div className="background">
        <div>
          <div className="title">
            <h1>Utah Instruments</h1>
          </div>
          <br />
          <br />
          <div className="calc-body">
            <div className="result-style">
              <Result result={this.state.result} />

            </div>
            <Keys onClick={this.onClick} />
          </div>

        </div>
      </div>

    );
  }
}

export default App;