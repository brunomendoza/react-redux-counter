import countReducer from './counter'

const redux = require('redux')
const { combineReducers, store } = redux

const rootReducer = combineReducers({
  countReducer
})

store.subscribe(() => console.log(store.state))

export default redux.createStore(rootReducer)
