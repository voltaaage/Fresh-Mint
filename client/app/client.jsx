import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

const appStyle = {
  maxWidth: '100%'
}

const client = (components) => {
  render(
    <div>
      <Provider store={store}>
        {components}
      </Provider>
    </div>,
    document.getElementById('client')
  )
}

export default client
