import { Component } from "react";
import "./index.scss";

export default class Item extends Component {
  onChange = (e) => {
    const { id, updateTodo } = this.props;
    updateTodo(id, e.target.checked);
  };

  delete = () => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(this.props.id);
    }
  };

  render() {
    const { checked, name } = this.props;
    return (
      <li className="item">
        <input
          type="checkbox"
          checked={checked}
          onChange={this.onChange}
          value={name}
        />
        <span>{name}</span>
        <button className="del-btn" onClick={this.delete}>
          删除
        </button>
      </li>
    );
  }
}
