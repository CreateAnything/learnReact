import React, { createContext, useContext, useState } from 'react'

//创建Contenxt对象
const MyContext = createContext()
const {Provider} = MyContext
export default function A(){
  const [user,setUser] = useState({username:'tom',age:18})
    return (
      <div>
        <h3>我是A组件</h3>
        <h4>我的用户名是{user.username}</h4>
        <Provider value={{...user}}>
            <B/>
        </Provider>
      </div>
    )
}

function B() {
    const {username,age} = useContext(MyContext)
    return (
      <div>
        <h3>我是B组件</h3>
        <h4>我从A组件接收的用户名是:{username}年龄为{age}</h4>
            <C/>
      </div>
    )
}
function C(){
    const {username,age} = useContext(MyContext)
      return (
        <div>
            <h3>我是C组件</h3>
            <h4>我从A组件接收的用户名是:{username}年龄为{age}</h4>         
        </div>
      )
  }
