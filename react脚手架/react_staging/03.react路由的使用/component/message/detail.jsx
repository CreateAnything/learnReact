import React, { Component } from 'react'
const data = [
  {id:'01',content:'你好中国1'},
  {id:'02',content:'你好中国2'},
  {id:'03',content:'你好中国3'},
  {id:'04',content:'你好中国4'}
]
export default class Detail extends Component {
  render() {
    // {接收params参数}
    // const {id,title} = this.props.match.params

    // {接收search参数}
    // const {search} = this.props.location
    // const {id,title} = qs.parse(search.slice(1))

    // {接收state参数}
    const {id,title} = this.props.location.state
    const findRes = data.find(it =>it.id === id)

    return (
      <div>
         <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{findRes.content}</li>
         </ul>
      </div>
    )
  }
}
