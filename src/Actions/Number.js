export function addNumber () {
  return dispatch => {
    dispatch({ type: 'ADD_NUMBER' })
  }
}

export function subtractNumber () {
  return dispatch => {
    dispatch({ type: 'SUBTRACT_NUMBER' })
  }
}
