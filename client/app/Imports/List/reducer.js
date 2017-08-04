import actions from './actions'

export const initialState = {
  imports: [],
}

const reducerMap = {
  [actions.SET_IMPORTS](state, action) {
    return {
      ...state,
      imports: action.payload
    }
  }
}

const reducer = (state = initialState, action) => {
  const handler = reducerMap[action.type]
  if (typeof handler === 'function') {
    return handler(state, action)
  }
  return state
}

export default reducer
