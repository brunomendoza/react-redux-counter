import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from './redux/counter'

function App (props) {
  const count = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ () => dispatch(increment()) }>+</button>
      <button onClick={ () => dispatch(decrement()) }>-</button>
    </div>
  )
}

// https://thoughtbot.com/blog/using-redux-with-react-hooks
// https://react-redux.js.org/api/hooks#usage-warnings

export default App
