import React, { Component } from 'react';
import logo from './logo.svg';
import { observable, computed } from 'mobx';
import { observer } from "mobx-react";
import Counter from "./Counter";
import Input from "./Input";
import List from "./List";

//modules
import cssStyles from './First.module.css';
import sassStyles from './Second.module.scss';
import lessStyles from './Third.module.less';
import stylusStyles from './Fourth.module.styl';

class AppState {
  @observable count = 0
  @observable todos = [
    {
      index: 0,
      item: 'Buy milk'
    }
    ]
  @computed get itemCount() {
      return this.todos.length
    }
}

const appState = new AppState();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>My App</div>
        <Counter appState={appState}/>
        <Input todos={appState.todos}/>
        <List appState={appState}/>
      </div>
    );
  }
}

export default App;
