import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Header extends Component {
    back = () =>{
        this.props.history.goBack()
    }
    forward = () =>{
        this.props.history.goForward()
    }
    go = () =>{
        this.props.history.go(-2)
    }
    render() {
        console.log(this.props)
        return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button onClick={this.back} type="button" className="btn btn-danger">回退</button>
                <button onClick={this.forward} type="button" className="btn btn-warning">前进</button>
                <button onClick={this.go} type="button" className="btn btn-success">go</button>
            </div>
        </div>
        )
    }
}
//withRouter可以加个一般组件，让一般组件具备路由组件特有的Api
//withRouter的返回值是一个新的组件
export default withRouter(Header)
