import React, { Component } from 'react'
import footerName from './index.module.css'
export default class Footer extends Component {
  handleClear = () =>{
    this.props.clearFinlsh()
  }
  handleCheck = (event) =>{
    const {checked} = event.target
    this.props.toggleChecked(checked)

  }
  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,next) => (pre + (next.done ? 1 : 0)),0)
    return (
      <div className={footerName.wrapper}>
         <div className={footerName.leftFooter}>
            <input type="checkBox" checked={doneCount === todos.length && todos.length!==0 ? true : false} onChange={this.handleCheck} />
            <div className={footerName.box}>
              <span>已完成{doneCount}</span>
              <span className={footerName.split}>/</span>
              <span>全部{todos.length}</span>
            </div>
         </div>
         <div  onClick={this.handleClear} className={footerName.btn}>清除已完成任务</div>
      </div>
    )
  }
}
