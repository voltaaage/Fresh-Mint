import actions from './actions'

export const initialState = {
  title: 'Test'
}

const reducerMap = {
  [actions.SET_TITLE](state, action) {
    return {
      ...state,
      title: action.payload
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

