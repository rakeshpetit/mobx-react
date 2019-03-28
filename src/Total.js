import React, { Component } from 'react';
import {observer} from "mobx-react";

@observer
class Total extends Component {
  render() {
    console.log('Total component')
    return (
      <div style={{marginTop: 20}}>
      {this.props.itemCount}
      </div>
    );
  }
}

export default Total;
