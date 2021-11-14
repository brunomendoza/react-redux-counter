import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './redux/counter'

function App (props) {
  return (
    <div>
      <h1>{ props.count }</h1>
      <button onClick={ props.increment }>+</button>
      <button onClick={ props.decrement }>-</button>
    </div>
  )
}

const mapsStateToProps = state => ({ count: state })
const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapsStateToProps, mapDispatchToProps)(App)
