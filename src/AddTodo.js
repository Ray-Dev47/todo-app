import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ' '
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Add Your Todo here</label>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content}/>
                    <button >Add Todo</button>
                </form>
            </div>
        )
    }
}

export default AddTodo