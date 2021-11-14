function increment () {
  return {
    type: 'INCREMENT'
  }
}

function decrement () {
  return {
    type: 'DECREMENT'
  }
}

function countReducer (count = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1

    case 'DECREMENT':
      return count - 1

    default:
      return count
  }
}

export { countReducer as default, increment, decrement }
