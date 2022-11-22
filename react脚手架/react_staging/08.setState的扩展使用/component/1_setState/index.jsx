import React, { Component } from 'react'

export default class StateDemo extends Component {
  state = {
    count:0
  }
  increment = () =>{
    const {count} = this.state
    //对象式的setState的第一种写法
        // this.setState({
        //     count:count+1
        // })
    //对象式的setState第二种写法callback是可选的回调函数他在状态更新完毕和页面render后调用
    this.setState({count:count+1},() =>{
        console.log(this.state.count)//此时可以拿到最新的state
    })
  }
  Hanincrement = () =>{
    /**
     * 函数式setState
     * setState(updater,[callback]) ----函数式setState
     * 1.updater 可以接收到state,props
     * 2.callback是可选的回调函数,他在状态更新,界面也更新后的render调用后才调用
     */
    this.setState((state,props) =>({count:state.count+props.x}))
  }
  render() {
    return (
      <div>
        <h1>当前求和为:{this.state.count}</h1>
        <button onClick={this.increment} type="button" className="btn btn btn-info">对象式点我+1</button>
        <button onClick={this.Hanincrement} type="button" className="btn btn btn-info">函数式点我+1</button>
      </div>
    )
  }
}
