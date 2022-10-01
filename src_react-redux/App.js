import React from 'react';

class App extends React.Component {
  increment = () => {
    const { value } = this.selectRef
    this.props.jia(+value)
  }
  decrement = () => {
    const { value } = this.selectRef
    this.props.jian(+value)
  }
  // 奇数加
  incrementIfOdd = () => {
    const { value } = this.selectRef
    if (this.props.count % 2 !== 0) {
      this.props.jia(+value)
    }
  }
  incrementAsync = () => {
    const { value } = this.selectRef
    this.props.jiaAsync(+value, 500)

  }
  render () {
    console.log(this.props);
    return (
      <>
        <p>总和为:{this.props.count}</p>
        <select ref={c => this.selectRef = c}>
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

export default App;
