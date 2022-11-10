import React, { Component } from "react";
import Hello from './component/Hello';
//创建类式组件
class App extends Component{
  render(){
    return (
      <div>
          <Hello/>
      </div>
    )
  }
}

export default App;
