import React, { Component } from 'react'
import ListItem from '../ListItem'
import listName from './index.module.css'
export default class List extends Component {

  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <div className={listName.wrapper}>
        {
          todos.map(todo =>{
            return <ListItem deleteTodo={deleteTodo} updateTodo={updateTodo} {...todo}  key={todo.id}/>
          })
        }
      </div>
    )
  }
}
