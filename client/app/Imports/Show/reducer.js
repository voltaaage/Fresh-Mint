import actions from './actions'

const today = new Date

export const initialState = {
  transactionsImport: {
    transactions: [],
    importId: '',
    yearsMonths: []
  },
  month: today.getMonth() + 1,
  year: today.getFullYear()
}

const reducerMap = {
  [actions.SET_TRANSACTIONS_IMPORT](state, action) {
    return {
      ...state,
      transactionsImport: action.payload
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
