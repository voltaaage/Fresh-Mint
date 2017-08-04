import actions from './actions'

export const initialState = {
  fileUploaded: '#',
  errors: {
    errors: {}
  }
}

const reducerMap = {
  [actions.SET_FILE_UPLOADED](state, action) {
    return {
      ...state,
      fileUploaded: action.payload
    }
  },

  [actions.SET_ERRORS](state, action) {
    return {
      ...state,
      errors: {
        ...state.errors,
        ...action.payload
      }
    }
  },

  [actions.RESET_ERRORS](state) {
    return {
      ...state,
      errors: initialState.errors
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

