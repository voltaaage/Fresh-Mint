import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// Reducers
import home from './Home/reducer'

const reducers = combineReducers({
  home
})

const middleware = [thunk]

if (window.env.environment === 'development') {
  middleware.push(logger())
}

export default createStore(reducers, applyMiddleware(...middleware))
