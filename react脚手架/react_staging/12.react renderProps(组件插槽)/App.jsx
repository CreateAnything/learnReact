import React, { Component } from 'react'
import List from './component/List'
import Show from './component/show'
export default class App extends Component {
  render() {
    return (
        <>
           <Show render={isShow =><List isShow={isShow}/>}/>
        </>
    )
  }
}
