import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "../Item/item";

export default class List extends Component {
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
  };
  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul>
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              {...item}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
