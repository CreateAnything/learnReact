import React, { Component, lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import AppStyle from './App.module.css'
import Loading from './component/loading'
import MyNavLink from './component/mylink'
//懒加载
const Home = lazy(() =>import('./component/home'))
const About = lazy(() =>import('./component/abount'))
export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{display:'flex',padding:'100px'}}>
          <div className={AppStyle.left}>
            <MyNavLink  to='/home/aaa'>Home</MyNavLink>
            <MyNavLink  style={{marginTop:'10px'}} to='/about'>About</MyNavLink>
          </div>
          <div className={AppStyle.right}>
            <Suspense fallback={<Loading/>}>
              <Switch>
                      <Route  path='/home' component={Home}/>
                      <Route  path='/about' component={About}/>
                      <Redirect to='/home'/>
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    )
  }
}
