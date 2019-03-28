import React, { Component } from 'react';
import {observer} from "mobx-react";

@observer
class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.appState.incCount}>Add</button>
        <button onClick={this.props.appState.decCount}>Minus</button>
        <div>Count is {this.props.appState.count}</div>
      </div>
    );
  }
}

export default Counter;
