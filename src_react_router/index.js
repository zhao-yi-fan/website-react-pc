import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

/**
 * BrowserRouter、HashRouter的区别
 * 1、底层原理不同：
  * BrowserRouter是使用HTML5的 history api, 不兼容IE9及以下版本。
  * HashRouter使用URL的hash值
 * 2、path表现形式不一样
 *      BrowserRouter路径没有#
 *      HashRouter路径里有#
 * 3、刷新后对路由state的影响
 * （1）BrowserRouter没有任何影响 因为state保存在history对象中
 * （2）HashRouter 刷新后会导致路由state 
 * 4、备注：hashRouter可以用于解决一些路径错误相关的问题
 * 
 */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

