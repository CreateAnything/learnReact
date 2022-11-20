import React, { Component } from 'react'
import ItemName from './index.module.css'
export default class ListItem extends Component {
  handleItemDelete = (id) =>{
    return () =>{
      this.props.deleteTodo(id)
    }
  }

  handleCheck = (id) =>{
    return (event) =>{
      const {checked} = event.target
      this.props.updateTodo(id,checked)
    }
  }
  render() {
    const {id,name,done} = this.props
    return (
      <div className={ItemName.wrapper}>
          <div>
            <input type="checkBox" checked={done} onChange={this.handleCheck(id)}/>
            <span className={ItemName.text}>{name}</span>
          </div>
          <div onClick={this.handleItemDelete(id)} className={ItemName.btn}>删除</div>
      </div>
    )
  }
}
