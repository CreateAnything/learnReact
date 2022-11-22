import React, { Component } from 'react'
import StateDemo from './component/1_setState/index'
export default class App extends Component {
  render() {
    return (
      <div>
        <StateDemo x={101}/>
      </div>
    )
  }
}
