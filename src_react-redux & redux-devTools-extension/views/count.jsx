import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  incrementAsync,
} from "../redux/action/count";

class Count extends React.Component {
  increment = () => {
    const { value } = this.selectRef;
    this.props.increment(+value);
  };
  decrement = () => {
    const { value } = this.selectRef;
    this.props.decrement(+value);
  };
  // 奇数加
  incrementIfOdd = () => {
    const { value } = this.selectRef;
    if (this.props.count % 2 !== 0) {
      this.props.increment(+value);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectRef;
    this.props.incrementAsync(+value, 500);
  };
  render() {
    console.log(this.props);
    return (
      <>
        <p>总人数为:{this.props.persons.length}</p>
        <p>总和为:{this.props.countStore}</p>
        <select ref={(c) => (this.selectRef = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>奇数+</button>
        <button onClick={this.incrementAsync}>异步+</button>
      </>
    );
  }
}

// mapDispatchToProps是方法
/* const mapStateToProps = (state) => {
  return { count: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => dispatch(increment(data)),
    decrement: (data) => dispatch(decrement(data)),
    incrementAsync: (data, time) => dispatch(incrementAsync(data, time)),
  };
}; */

// mapDispatchToProps简写
export default connect(
  (state) => ({
    count: state.count,
    persons: state.persons
  }),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Count);
