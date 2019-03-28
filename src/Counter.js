import React, { Component } from 'react';
import {observer} from "mobx-react";

@observer
class Counter extends Component {
  incCount = () => {
    console.log('incCount')
    this.props.appState.count += 1;
  }
  
  decCount = () => {
    console.log('decCount')
    this.props.appState.count -= 1;
  }
  render() {
    console.log('Counter component')
    return (
      <div>
        <button onClick={this.incCount}>Add</button>
        <button onClick={this.decCount}>Minus</button>
        <div>Count is {this.props.appState.count}</div>
      </div>
    );
  }
}

export default Counter;
