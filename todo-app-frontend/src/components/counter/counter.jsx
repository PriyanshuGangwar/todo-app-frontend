import React from 'react'
import { Component } from 'react';

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count: 0        // Defining initial state
    }

    this.increment = this.increment.bind(this)   // Binding Functions to This
  }
  
  render() {
    return (
      <div>
        <button onClick = {this.increment}>+1</button>
        <span>{this.state.count}</span>
      </div>
    )
  }

  increment() {
   this.setState({
      count: this.state.count += 1     // Updating State
    })
  }

}


export default Counter;