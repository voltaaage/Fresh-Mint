const actions = {
  SET_TITLE: 'SET_TITLE',

  setTitle(title) {
    return {
      type: actions.SET_TITLE,
      payload: title
    }
  }
}

export default actions

