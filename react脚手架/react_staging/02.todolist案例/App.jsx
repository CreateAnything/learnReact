import React, { Component } from "react";
import app from './App.module.css';
import Footer from "./component/Footer";
import Header from "./component/Header";
import List from "./component/List";
//创建类式组件
class App extends Component{
  state = {
    todos:[
      {id:'001',name:'吃饭',done:true},
      {id:'002',name:'睡觉',done:true},
      {id:'003',name:'打代码',done:false}
    ]
  }
  addTodo = (todoobj) =>{
    const {todos} = this.state
    const newTodos = [todoobj,...todos]
    this.setState({
      todos:newTodos
    })
  }
  updateTodo = (id,done) =>{
    const {todos} = this.state
    const newTodos =  todos.map(todo =>{
          if(todo.id === id)
          return {...todo,done}
          else return todo
    })
    this.setState({
      todos:newTodos
    })
  }
  deleteTodo = (id) =>{
    const {todos} = this.state
    const newTods = todos.filter(todo =>todo.id !== id)
    this.setState({
      todos:newTods
    })
  }
  clearFinlsh = () =>{
    const {todos} = this.state
    const newTodos = todos.filter(todo =>todo.done === false)
    this.setState({
      todos:newTodos
    })
  }
  toggleChecked = (checked) =>{
     const {todos} = this.state
     const newTodos = todos.map(todo =>{
      return {...todo,done:checked}
     })
     console.log(newTodos)
     this.setState({
      todos:[...newTodos]
     })
  }
  render(){
    const {todos} = this.state
    return (
      <div className={app.container}>
          <Header addTodo={this.addTodo}/>
          <List deleteTodo={this.deleteTodo} updateTodo={this.updateTodo}  todos={todos}/>
          <Footer toggleChecked={this.toggleChecked} clearFinlsh={this.clearFinlsh} todos={todos}/>
      </div>
    )
  }
}

export default App;
