import React from 'react';
import store from './redux/store'
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction
} from './redux/count_action'

class App extends React.Component {
  // 检测redux数据变化，变化就重新render
  // componentDidMount () {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }
  increment = () => {
    const { value } = this.selectRef
    store.dispatch(incrementAction(+value))
  }
  decrement = () => {
    const { value } = this.selectRef
    store.dispatch(decrementAction(+value))
  }
  // 奇数加
  incrementIfOdd = () => {
    const { value } = this.selectRef
    const sum = store.getState()
    if (sum % 2 !== 0) {
      store.dispatch(incrementAction(+value))
    }
  }
  incrementAsync = () => {
    const { value } = this.selectRef
    // setTimeout(() => {
      store.dispatch(incrementAsyncAction(+value, 500))
    // }, 500);
  }
  render () {
    return (
      <>
        <p>总和为:{store.getState()}</p>
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
