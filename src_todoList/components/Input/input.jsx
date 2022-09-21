import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export default class Input extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };
  onKeyUp = (e) => {
    const { target, keyCode } = e;
    const { addTodo } = this.props;
    if (keyCode === 13) {
      if (!target.value) {
        return;
      }
      console.log(target.value);
      addTodo({
        id: nanoid(),
        checked: false,
        name: target.value,
      });
      target.value = "";
    }
  };
  render() {
    console.log(this);
    return (
      <>
        <input type="text" onKeyUp={this.onKeyUp} />
      </>
    );
  }
}
