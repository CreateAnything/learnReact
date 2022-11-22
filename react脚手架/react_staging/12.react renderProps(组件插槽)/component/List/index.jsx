import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {isShow} = this.props
    return (
        <>
            {
            isShow ?
                <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
            : ''
        }      
        </>
    )
  }
}
