import React, { Component } from 'react'

export default class Show extends Component {
  state = {
    isShow:true
  }
  changeShow = () =>{
    this.setState(({isShow})=>({isShow:!isShow}))
  }
  render() {
    const {isShow} = this.state
    return (
        <>
            <div className="card" style={{width:'300px'}}>
                <div className="card-body">
                    {this.props.render(isShow)}
                </div>
                <button onClick={this.changeShow} type="button" className="btn btn-primary">是否显示</button>
            </div>        
        </>
    )
  }
}
