import React, { Component } from 'react'
//引入store用于获取redux中保存的状态
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from '../../redux/count_action'
import store from '../../redux/store'
export default class Count extends Component {
  //加法
  increment = () =>{
    store.dispatch(createIncrementAction(1))
  }
  //减法
  decrement = () =>{
    store.dispatch(createDecrementAction(1))
  }
  //异步加
  incrementAsync = () =>{
      store.dispatch(createIncrementAsyncAction(1,500))
  }
  render() {
    return (
      <div>
            <h2>当前求和为:{store.getState()}</h2>
            <div style={{display:'flex'}}>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger">当前求和为奇数再加</button>
                    <button onClick={this.incrementAsync} type="button" className="btn btn-warning">异步加</button>
                    <button onClick={this.increment} type="button" className="btn btn-success">+</button>
                    <button onClick={this.decrement} type="button" className="btn btn btn-info">-</button>
                </div>                
            </div>
      </div>
    )
  }
}
