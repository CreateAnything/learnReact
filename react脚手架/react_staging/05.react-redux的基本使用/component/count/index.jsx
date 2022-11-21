import React, { Component } from 'react'
export default class Count extends Component {
  //加法
  increment = () =>{
    this.props.increment(1)
  }
  //减法
  decrement = () =>{
    this.props.decrement(1)
  }
  //异步加
  incrementAsync = () =>{
    this.props.incrementAsync(2,500)
  }
  render() {
    const {count} = this.props
    return (
      <div>
            <h2>当前求和为:{count}</h2>
            <div style={{display:'flex'}}>
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button onClick={this.incrementAsync} type="button" className="btn btn-warning">异步加</button>
                    <button onClick={this.increment} type="button" className="btn btn-success">+</button>
                    <button onClick={this.decrement} type="button" className="btn btn btn-info">-</button>
                </div>                
            </div>
      </div>
    )
  }
}
