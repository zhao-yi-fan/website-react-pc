import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension' // 浏览器插件的库
import reducer from './reducer'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))