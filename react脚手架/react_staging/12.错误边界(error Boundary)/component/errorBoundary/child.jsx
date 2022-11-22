import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    users:[
        {id:'001',name:'tom',age:18},
        {id:'002',name:'jack',age:19},
        {id:'003',name:'sery',age:20}
    ]
  }
  render() {
    const {users} = this.state
    return (
        <>
            <h2>我是child组件</h2>
            <ul className="list-group" style={{width:'300px'}}>
                {
                    users.map(user =>{
                        return <li key={user.id} className="list-group-item">{user.name+'-----'+user.age}</li>
                    })
                }
            </ul>       
        </>
    )
  }
}
