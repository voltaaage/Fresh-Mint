import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// Reducers
import home from './Home/reducer'
import layout from './Layout/reducer'
import imports from './Imports/reducers'

const reducers = combineReducers({
  home,
  layout,
  imports
})

const middleware = [thunk]

if (window.env.environment === 'development') {
  middleware.push(logger())
}

export default createStore(reducers, applyMiddleware(...middleware))
