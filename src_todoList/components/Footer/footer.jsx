import { Component } from "react";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    checkAllTodo: PropTypes.func.isRequired,
  };
  onChange = (e) => {
    this.props.checkAllTodo(e.nativeEvent.target.checked);
  };

  handleClearAllDone = ()=>{
    this.props.clearAllDone();
  }
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce(
      (pre, todo) => pre + (todo.checked ? 1 : 0),
      0
    );
    const total = todos.length;
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.onChange}
          checked={doneCount === total && total !== 0}
          readOnly
        />
        <span>已选{doneCount}</span>/<span>共{total}</span>
        <button onClick={this.handleClearAllDone}>清除已经完成的</button>
      </div>
    );
  }
}
