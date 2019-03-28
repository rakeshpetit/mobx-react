import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addTodo(this.state.value)
    event.preventDefault();
    this.setState({value: ''})
  }
  
  render() {
    return (
      <div style={{marginTop: 20}}>
        <form onSubmit={this.handleSubmit}>
        <label>
          Item:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Input;
