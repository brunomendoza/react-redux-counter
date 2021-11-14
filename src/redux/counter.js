function increment (value) {
  return {
    type: 'INCREMENT',
    payload: value
  }
}

function decrement (value) {
  return {
    type: 'DECREMENT',
    payload: value
  }
}

function countReducer (count = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return count + action.payload

    case 'DECREMENT':
      return count - action.payload

    default:
      return count
  }
}

export { countReducer as default, increment, decrement }