import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './detail'
export default class Message extends Component {
  state = {
    messageArr:[
      {
        id:'01',
        title:'消息1'
      },
      {
        id:'02',
        title:'消息2'
      },
      {
        id:'03',
        title:'消息3'
      },
      {
        id:'04',
        title:'消息4'
      }
    ]
  }
  replaceShow = (id,title) =>{
    //replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

     //replace跳转+携带search参数
    //  this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

     //replace跳转+携带state参数
     this.props.history.replace({pathname:'/home/message/detail',state:{id,title}})
  }
  pushShow = (id,title) =>{
     //push+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    //push+携带search参数
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    //push+携带state参数
    this.props.history.push({pathname:'/home/message/detail',state:{id,title}})
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul className="list-group">
          {
            messageArr.map(msg =>{
              return (
                <div  key={msg.id} style={{display:'flex',marginTop:'5px'}}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`} className="list-group-item">{msg.title}</Link> */}

                  {/* 像路由传递search参数 */}
                  {/* <Link key={msg.id} to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`} className="list-group-item">{msg.title}</Link> */}

                  {/* 向路由传递state参数 */}
                  <Link replace={true} key={msg.id} to={{pathname:'/home/message/detail',state:msg}} className="list-group-item">{msg.title}</Link>                    
                  
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                      <button onClick={() =>this.pushShow(msg.id,msg.title)} type="button" className="btn btn-danger" style={{marginLeft:'5px'}}>push查看</button>
                      <button onClick={() =>this.replaceShow(msg.id,msg.title)} type="button" className="btn btn-warning" style={{marginLeft:'5px'}} >replace查看</button>
                  </div>              
                </div>
              )
            })
          }
        </ul>
        <hr/>
        {/* {声明接受params参数} */}
        {/* <Route  path="/home/message/detail/:id/:title" component={Detail}/>  */}

        {/* {声明接收search参数(search参数无须声明接收)} */}
        {/* <Route  path="/home/message/detail" component={Detail}/>    */}
        
        {/* {state参数无需接收}   */}
        <Route  path="/home/message/detail" component={Detail}/>   
      </div>
    )
  }
}
