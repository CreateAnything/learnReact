import React, { PureComponent } from 'react'

export default class Car extends PureComponent {
  state = {
    carName:'法拉利'
  }
  changeCar = () =>{
    this.setState({carName:'劳斯莱斯'})
  }
  render() {
    const {carName} = this.state
    console.log('Car--render')
    return (
      <>
          <span>我的车为:{carName}</span>
          <br/>
          <button onClick={this.changeCar}>点击换车</button>
          <hr />
          <Child/>
      </>
    )
  }
}
class Child extends PureComponent{
  render(){
    //使用PureComponent以后父组件render若子组件不发生改变则不会调用子组件render
    console.log('child--render')
    return (
      <>
        <span>我的车为劳斯莱斯</span>
      </>
    )
  }
}
