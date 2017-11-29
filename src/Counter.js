import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter : 0
    };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
    this.reset = this.reset.bind(this);
  }

  inc() {
    console.log('hi');
    this.setState({
      counter: this.state.counter + 1
    });
  }

  dec() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  reset() {
    this.setState({
      counter: 0
    });
  }
  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.counter}</h1>
        <button onClick={this.inc} className="full-width">Increment</button>
        <button onClick={this.dec} className="full-width">Decrement</button>
        <button onClick={this.reset} className="full-width">Reset</button>
      </section>
    );
  }
}
