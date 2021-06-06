import React, { Component } from 'react';
import { render } from 'react-dom';
import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends Component {
  state = {
    todos: [
       {id: 1, content: 'Get a Job'},
       {id: 2, content: 'Buy a House'}
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
       todos: todos
    })
  }
  deleteTodo = (id) => {
      let todos = this.state.todos.filter(todo => {
          return todo.id !== id
      }); 
      this.setState({
        todos: todos
     })
  }
   render(){
      return (
         <div className="todo-app container">
           <h1 className="center blue-text">Todo's</h1>
             <AddTodo addTodo={this.addTodo}/>
             <Todos  todos={this.state.todos}  deleteTodo={this.deleteTodo}/>
         </div>
      )
   }
}

export default App;
