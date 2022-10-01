import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import Container from './container'
import { Provider } from 'react-redux' // Provider会给所有的容器组件自动注入store

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);

