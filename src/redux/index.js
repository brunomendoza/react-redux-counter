import countReducer from './counter'

const redux = require('redux')
const { combineReducers } = redux

const rootReducer = combineReducers({
  countReducer
})

const store = redux.createStore(countReducer)
store.subscribe(() => console.log(store.state))

export default store
