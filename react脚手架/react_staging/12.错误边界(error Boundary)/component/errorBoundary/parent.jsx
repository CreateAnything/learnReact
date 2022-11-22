import React, { Component } from 'react'
import Child from './child'
export default class Parent extends Component {
  state = {
    hasError:''//用于标识子组件是否产生错误
  }
  static getDerivedStateFromError(error){
    console.log(error)
    //如果parent子组件出现任何错误都会调用这个钩子并会捕获误传进来
    return {hasError:error}
  }
  //如果渲染当中如果子组件出现错误会执行这个生命周期钩子
  componentDidCatch(){
    //一般统计错误次数发送给后台
    console.log('统计错误信息，反馈给服务器，通知编码人员解决bug')
  }
  render() {
    return (
      <>
        <h2>我是Parent组件</h2>
        {this.state.hasError ? <h2>当前网络不稳定,请稍后再试</h2> : <Child/>}
      </>
    )
  }
}
