export const messages = []

export const dispatch = (message) => {
  if (typeof message === 'function') {
    return message(dispatch)
  }
  return messages.push(message)
}

export function createDispatch(messageQueue) {
  function fakeDispatch(arg) {
    if (arg) {
      if (typeof (arg) === 'function') {
        return arg(fakeDispatch)
      }

      if (messageQueue) {
        messageQueue.push(arg)
      }
    }

    return null
  }

  return fakeDispatch
}

export const createStore = (state, messageQueue) => ({
  dispatch: createDispatch(messageQueue),
  getState: () => state,
  subscribe: () => () => {}
})
