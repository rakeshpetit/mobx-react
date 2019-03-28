import React, { Component } from 'react';
import {observer} from "mobx-react";

@observer
class List extends Component {
  render() {
    console.log('List component')
    return (
      <div style={{marginTop: 20}}>
       <div>List of Todos</div>
       {
         this.props.todos.map(obj => {
               return <div key={obj.index}>{obj.item}</div>
           })
       }
      </div>
    );
  }
}

export default List;
