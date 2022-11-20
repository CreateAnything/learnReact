import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Message from '../message/index'
import MyNavLink from '../mylink/index'
import News from '../news/index'
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
              <div className="btn-group" role="group" aria-label="Basic mixed styles example" style={{marginBottom:'10px'}}>
                  <MyNavLink to='/home/news'>news</MyNavLink>
                  <MyNavLink to='/home/message' style={{marginLeft:'3px'}}>message</MyNavLink>
              </div>
              <div>
                <Switch>
                   <Route path='/home/news' component={News}/>
                   <Route path='/home/message' component={Message}/>
                   <Redirect to='/home/news'/>
                </Switch>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
