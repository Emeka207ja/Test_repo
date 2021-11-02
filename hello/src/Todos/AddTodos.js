import React, { Component } from 'react'
import './AddTodos.css'

export class AddTodos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        Task: '' ,
          Time: '',
          color : ''  
        }
    }
    HandleTask = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addTodos(this.state)
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                    <label htmlFor='name'>Task</label>
                    <input id='Task' onChange= {this.HandleTask} />

                    <label htmlFor='name'>Time</label>
                    <input id='Time' onChange= {this.HandleTask} />

                    <label htmlFor='name'>Color</label>
                    <input id='color' onChange= {this.HandleTask} />
                    <button>Add Todos</button>
                </form>
            </div>
        )
    }
}

export default AddTodos
