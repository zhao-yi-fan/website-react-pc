import * as actionTypes from '../action-types'

const intialState = {
  username: 'zhaoyifan',
  gender: 1
}

function counter1 (state = intialState, action) {
  switch (action.type) {
    case actionTypes.SET_NAME:
      return { ...state, username: state.username }
    default:
      return state;
  }
}

export default counter1;