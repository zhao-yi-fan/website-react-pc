import { ADD_PERSON } from '../constant'
const initState = [{
  id: '001',
  name: '张三',
  age: 18
}]
export default function personReducer (preState = initState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      // preState.unshift(data) 不可以这样写，会导致preState被改写，reducer必须是纯函数
      // 纯函数：不得改写参数数据
      return [data, ...preState]
    default:
      return preState
  }
}