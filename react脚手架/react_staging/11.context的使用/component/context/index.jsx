import React, { Component, createContext } from 'react'

//创建Contenxt对象
const MyContext = createContext()
const {Provider} = MyContext
export default class A extends Component {
  state = {
    username:'tom',
    age:18
  }
  render() {
    const {username,age} = this.state
    return (
      <div>
        <h3>我是A组件</h3>
        <h4>我的用户名是{username}</h4>
        <Provider value={{username,age}}>
            <B/>
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  //声明接收context
  static contextType = MyContext
  render() {
    const {username,age} = this.context
    return (
      <div>
        <h3>我是B组件</h3>
        <h4>我从A组件接收的用户名是:{username}年龄是{age}</h4>
            <C/>
      </div>
    )
  }
}
class C extends Component {
    //声明接收context
    static contextType = MyContext
    render() {
      const {username,age} = this.context
      return (
        <div>
            <h3>我是C组件</h3>
            <h4>我从A组件接收的用户名是:{username}年龄是{age}</h4>         
        </div>
      )
    }
  }
