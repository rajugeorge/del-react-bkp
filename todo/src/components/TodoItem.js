import React, { Component } from "react";

// function TodoItem(props) {
//   return (
//     <div className="todo-item">
//       <input type="checkbox" checked={props.todo.completed} />
//       <p>{props.todo.text}</p>
//     </div>
//   );
// }

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onChange={() => {
            this.props.itemChecked(this.props.todo);
          }}
          checked={this.props.todo.completed}
        />
        <p>{this.props.todo.text}</p>
      </div>
    );
  }
}

export default TodoItem;
