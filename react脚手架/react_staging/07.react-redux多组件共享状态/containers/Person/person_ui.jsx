import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
export default class Person extends Component {
    state = {
        FormData:{
            name:'',
            age:''
        }
    }
    handleNameChange = (event) =>{
        const {value:name} = event.target
        const {FormData} = this.state
        this.setState({
            FormData:{...FormData,name}
        })
    }
    handleAgeChange = (event) =>{
        const {value:age} = event.target
        const {FormData} = this.state
        this.setState({
            FormData:{...FormData,age}
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault()
        const id = uuidv4()
        const person = {id,...this.state.FormData}
        this.props.addPerson(person)
    }
  render() {
    const {person,count} = this.props
    return (
        <div>
            <h2>当前求和为:{count}</h2>
            <div className="card" style={{width:'300px'}}>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label  className="form-label">Name</label>
                            <input onChange={this.handleNameChange} placeholder='Please enter your name' type="text" id='NameInput' className="form-control" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Age</label>
                            <input onChange={this.handleAgeChange} placeholder='Please enter your age' type="text" className="form-control" id="AgeInput"/>
                        </div>
                        <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>  
            <hr/>
            <table className="table table-striped" style={{width:'700px'}}>
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        person.map(item =>{
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>                      
        </div>
    )
  }
}
