import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import AppStyle from './App.module.css'
import About from './component/abount/index'
import Header from './component/header/index'
import Home from './component/home/index'
import MyNavLink from './component/mylink'
export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{marginLeft:'100px',marginTop:'40px'}}>
          <Header/>
        </div>
        <div style={{display:'flex',padding:'100px'}}>
          <div className={AppStyle.left}>
            <MyNavLink  to='/home/aaa'>Home</MyNavLink>
            <MyNavLink  style={{marginTop:'10px'}} to='/about'>About</MyNavLink>
          </div>
          <div className={AppStyle.right}>
                <Switch>
                    <Route  path='/home' component={Home}/>
                    <Route  path='/about' component={About}/>
                    <Redirect to='/home'/>
                </Switch>
          </div>
        </div>
      </div>
    )
  }
}
