import React, { Component } from 'react';
import {observer} from "mobx-react";
import Total from "./Total";

@observer
class List extends Component {
  render() {
    console.log('List component')
    return (
      <div style={{marginTop: 20}}>
       <div>List of Todos</div>
       {
         this.props.appState.todos.map(obj => {
               return <div key={obj.index}>{obj.item}</div>
           })
       }
       <Total itemCount={this.props.appState.itemCount}/>
      </div>
    );
  }
}

export default List;
