import actions from './actions'

const today = new Date

export const initialState = {
  transactions: [],
  importId: '',
  months: [],
  month: today.getMonth() + 1,
  year: today.getFullYear()
}

const reducerMap = {
  [actions.SET_IMPORT_ID](state, action) {
    return {
      ...state,
      importId: action.payload
    }
  },

  [actions.SET_TRANSACTIONS](state, action) {
    return {
      ...state,
      transactions: action.payload
    }
  },

  [actions.SET_MONTHS](state, action) {
    return {
      ...state,
      months: action.payload
    }
  },

  [actions.SET_MONTH](state, action) {
    return {
      ...state,
      month: action.payload
    }
  },

  [actions.SET_YEAR](state, action) {
    return {
      ...state,
      year: action.payload
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
