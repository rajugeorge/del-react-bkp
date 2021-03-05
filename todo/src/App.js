import "./App.css";
import React, { Component } from "react";
import todoData from "./data/todosData";
import TodoItem from "./components/TodoItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
  }
  itemChecked(todoPassed) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === todoPassed.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }
  render() {
    let todos = this.state.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        itemChecked={this.itemChecked.bind(this)}
      />
    ));
    return <div className="todo-list">{todos}</div>;
  }
}

export default App;
