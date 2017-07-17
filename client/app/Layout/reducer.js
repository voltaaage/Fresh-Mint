import actions from './actions'

export const initialState = {
  layer: {},
  loading: false,
  redirect: null,
  toast: {},
  activeNavItem: window.location.pathname
}

const reducerMap = {
  [actions.SET_LAYER](state, action) {
    return {
      ...state,
      layer: action.payload
    }
  },

  [actions.SET_ACTIVE_NAV](state, action) {
    return {
      ...state,
      activeNavItem: action.payload
    }
  },

  [actions.RESET_LAYER](state) {
    return {
      ...state,
      layer: initialState.layer
    }
  },

  [actions.SET_LOADING](state, action) {
    return {
      ...state,
      loading: action.payload
    }
  },

  [actions.SET_REDIRECT](state, action) {
    return {
      ...state,
      redirect: action.payload
    }
  },

  [actions.SET_TOAST](state, action) {
    return {
      ...state,
      toast: action.payload
    }
  },

  [actions.RESET_TOAST](state) {
    return {
      ...state,
      toast: initialState.toast
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

