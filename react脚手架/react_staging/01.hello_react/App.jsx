import React, { Component } from "react";
import Footer from "../src/component/Footer";
import Header from "../src/component/Header";
import List from "../src/component/List";
//创建类式组件
class App extends Component{
  render(){
    return (
      <div>
          <Header/>
          <List/>
          <Footer/>
      </div>
    )
  }
}

export default App;
