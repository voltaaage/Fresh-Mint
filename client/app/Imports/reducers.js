import { combineReducers } from 'redux'
import list from './List/reducer'
import show from './Show/reducer'
import importNew from './New/reducer'

const imports = combineReducers({
  list,
  show,
  importNew
})

export default imports
