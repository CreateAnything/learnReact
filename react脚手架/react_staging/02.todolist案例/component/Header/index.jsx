import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import header from './index.module.css'
export default class Header extends Component {
  handleKeyUp = (event) =>{
    const {keyCode,target} = event
    if(keyCode!==13) return
    const todoObj = {
      id:uuidv4(),
      name:target.value,
      done:false
    }
    this.props.addTodo(todoObj)
  }
  render() {
    return (
      <div className={header.search}>
        <input onKeyUp={this.handleKeyUp} type="text" placeholder='请输入你得任务名称,按回车键确认' />
      </div>
    )
  }
}
