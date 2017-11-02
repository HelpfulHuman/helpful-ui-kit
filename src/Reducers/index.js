import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function number(state = { value: 0 }, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case 'ADD_NUMBER':
      newState.value++;
      break;
    case 'SUBTRACT_NUMBER':
      --newState.value;
      break;
    default:
      return state;
  }

  return newState;
}

export default combineReducers({
  number,
  routing: routerReducer,
});
