const actions = {
  SET_LAYER: 'SET_LAYER',
  RESET_LAYER: 'RESET_LAYER',
  SET_LOADING: 'SET_LOADING',
  SET_REDIRECT: 'SET_REDIRECT',
  SET_TOAST: 'SET_TOAST',
  RESET_TOAST: 'RESET_TOAST',
  SET_ACTIVE_NAV: 'SET_ACTIVE_NAV',

  setLayer(layer) {
    return {
      type: actions.SET_LAYER,
      payload: layer
    }
  },

  setActiveNav(navItem) {
    return {
      type: actions.SET_ACTIVE_NAV,
      payload: navItem
    }
  },

  resetLayer() {
    return {
      type: actions.RESET_LAYER
    }
  },

  setLoading(loading) {
    return {
      type: actions.SET_LOADING,
      payload: loading
    }
  },

  setRedirect(redirect) {
    return {
      type: actions.SET_REDIRECT,
      payload: redirect
    }
  },

  setToast(toast) {
    return {
      type: actions.SET_TOAST,
      payload: toast
    }
  },

  resetToast() {
    return {
      type: actions.RESET_TOAST
    }
  },

  redirect(path) {
    return () => {
      window.location = path
    }
  }
}

export default actions

