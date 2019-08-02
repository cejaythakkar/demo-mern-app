import React, { Component } from "react";

export default class counter extends Component {
  state = {
    counter: 0
  };

  incrementCounter() {
    this.setState((prevState, props) => ({
      counter: prevState.counter + 1
    }));
  }
  render() {
    return (
      <div className="counter-wrapper" data-test="component-counter">
        <div className="count-wrapper">
          <span data-test="component-counter-display">{`the Count is ${
            this.state.counter
          }`}</span>
        </div>
        <div className="counter-button-wrapper">
          <button
            data-test="component-counter-button"
            className="bounter-buton"
            onClick={this.incrementCounter.bind(this)}
          >
            Increment
          </button>
        </div>
      </div>
    );
  }
}
