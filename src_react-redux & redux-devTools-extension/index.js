import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App from './App'
import { Provider } from 'react-redux' // Provider会给所有的容器组件自动注入store
/**
 * react-redux功能
 * - 无需在每个容器组件传递store，给App组件包裹一个<Provider store={store}>即可
 * - 使用了react-redux后也不用再自己监测redux中的状态改变了，容器组件可以自动完成这个工作
 * - mapDispatchToProps可以简写成一个对象
 * - 组件和redux连接的步骤
 *    1 定义好UI组件--不进行export
 *    2 引入connect生成一个容器组件
 *    3 在UI组件中通过this.props.xx读取和操作状态
 */


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

